import jwt from 'jsonwebtoken';
import passport from 'passport';
import { User } from '../models/index.js';

export const authMiddleware = {
  // Verify JWT token
  authenticateToken: async (req, res, next) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Access token required' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      const user = await User.findByPk(decoded.userId);
      
      if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(500).json({ message: 'Authentication error' });
    }
  },

  // Require admin role
  requireAdmin: async (req, res, next) => {
    try {
      await authMiddleware.authenticateToken(req, res, () => {
        if (req.user.role !== 'admin') {
          return res.status(403).json({ message: 'Admin access required' });
        }
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: 'Authorization error' });
    }
  },

  // Optional authentication (doesn't fail if no token)
  optionalAuth: async (req, res, next) => {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return next();
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      const user = await User.findByPk(decoded.userId);
      
      if (user) {
        req.user = user;
      }
      
      next();
    } catch (error) {
      // Continue without authentication if token is invalid
      next();
    }
  },

  // Passport authentication middleware
  passportAuth: {
    local: passport.authenticate('local', { session: false }),
    google: passport.authenticate('google', { 
      scope: ['profile', 'email'],
      session: false 
    }),
    googleCallback: passport.authenticate('google', { 
      failureRedirect: '/login',
      session: false 
    }),
    jwt: passport.authenticate('jwt', { session: false })
  }
};

// Generate JWT token
export const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );
};

// Generate refresh token
export const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId, type: 'refresh' },
    process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key',
    { expiresIn: '30d' }
  );
};
