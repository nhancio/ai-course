import express from 'express';
import passport from 'passport';
import { body, validationResult } from 'express-validator';
import { User } from '../models/index.js';
import { generateToken, generateRefreshToken } from '../middleware/auth.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/emailService.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Validation middleware
const validateSignup = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number is required')
];

const validateLogin = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
];

const validatePasswordReset = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required')
];

const validateNewPassword = [
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('token').notEmpty().withMessage('Reset token is required')
];

// Helper function to check validation errors
const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation error',
      errors: errors.array()
    });
  }
  next();
};

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', validateSignup, checkValidationErrors, catchAsync(async (req, res) => {
  const { name, email, password, phone } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new AppError('User with this email already exists', 400);
  }

  // Create verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    phone,
    verification_token: verificationToken
  });

  // Send verification email
  try {
    await sendEmail({
      to: email,
      subject: 'Welcome to NhancioLearning - Verify Your Email',
      template: 'emailVerification',
      data: {
        name,
        verificationUrl: `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`
      }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }

  // Generate tokens
  const token = generateToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res.status(201).json({
    message: 'User registered successfully',
    user: user.toPublicJSON(),
    token,
    refreshToken
  });
}));

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', validateLogin, checkValidationErrors, catchAsync(async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  // Check password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', 401);
  }

  // Update last login
  await user.update({ last_login: new Date() });

  // Generate tokens
  const token = generateToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res.json({
    message: 'Login successful',
    user: user.toPublicJSON(),
    token,
    refreshToken
  });
}));

// @route   GET /api/auth/google
// @desc    Initiate Google OAuth
// @access  Public
router.get('/google', passport.authenticate('google', { 
  scope: ['profile', 'email'],
  session: false 
}));

// @route   GET /api/auth/google/callback
// @desc    Handle Google OAuth callback
// @access  Public
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=oauth_failed`,
    session: false 
  }),
  catchAsync(async (req, res) => {
    const user = req.user;
    
    // Generate tokens
    const token = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Redirect to frontend with tokens
    const redirectUrl = `${process.env.FRONTEND_URL}/auth/callback?token=${token}&refreshToken=${refreshToken}`;
    res.redirect(redirectUrl);
  })
);

// @route   POST /api/auth/forgot-password
// @desc    Request password reset
// @access  Public
router.post('/forgot-password', validatePasswordReset, checkValidationErrors, catchAsync(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    // Don't reveal if user exists or not
    return res.json({ message: 'If an account with that email exists, a password reset link has been sent.' });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  const resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await user.update({
    reset_password_token: resetPasswordToken,
    reset_password_expires: resetPasswordExpires
  });

  // Send reset email
  try {
    await sendEmail({
      to: email,
      subject: 'NhancioLearning - Password Reset Request',
      template: 'passwordReset',
      data: {
        name: user.name,
        resetUrl: `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`
      }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }

  res.json({ message: 'If an account with that email exists, a password reset link has been sent.' });
}));

// @route   POST /api/auth/reset-password
// @desc    Reset password with token
// @access  Public
router.post('/reset-password', validateNewPassword, checkValidationErrors, catchAsync(async (req, res) => {
  const { token, password } = req.body;

  // Hash the token
  const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

  // Find user with valid token
  const user = await User.findOne({
    where: {
      reset_password_token: resetPasswordToken,
      reset_password_expires: { [require('sequelize').Op.gt]: new Date() }
    }
  });

  if (!user) {
    throw new AppError('Invalid or expired reset token', 400);
  }

  // Update password and clear reset token
  await user.update({
    password,
    reset_password_token: null,
    reset_password_expires: null
  });

  res.json({ message: 'Password reset successful' });
}));

// @route   POST /api/auth/verify-email
// @desc    Verify email with token
// @access  Public
router.post('/verify-email', catchAsync(async (req, res) => {
  const { token } = req.body;

  const user = await User.findOne({
    where: { verification_token: token }
  });

  if (!user) {
    throw new AppError('Invalid verification token', 400);
  }

  await user.update({
    is_verified: true,
    verification_token: null
  });

  res.json({ message: 'Email verified successfully' });
}));

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', catchAsync(async (req, res) => {
  if (!req.user) {
    throw new AppError('Not authenticated', 401);
  }

  res.json({
    user: req.user.toPublicJSON()
  });
}));

// @route   POST /api/auth/refresh
// @desc    Refresh access token
// @access  Public
router.post('/refresh', catchAsync(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    throw new AppError('Refresh token required', 400);
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key');
    
    if (decoded.type !== 'refresh') {
      throw new AppError('Invalid token type', 400);
    }

    const user = await User.findByPk(decoded.userId);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    const newToken = generateToken(user.id);
    const newRefreshToken = generateRefreshToken(user.id);

    res.json({
      token: newToken,
      refreshToken: newRefreshToken
    });
  } catch (error) {
    throw new AppError('Invalid refresh token', 401);
  }
}));

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', catchAsync(async (req, res) => {
  // In a more complex setup, you might want to blacklist the token
  res.json({ message: 'Logged out successfully' });
}));

export default router;
