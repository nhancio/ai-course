import express from 'express';
import { User, Program, Enrollment, Certificate, CommunityMember } from '../models/index.js';
import { authMiddleware } from '../middleware/auth.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { Op } from 'sequelize';

const router = express.Router();

// @route   GET /api/admin/dashboard
// @desc    Get admin dashboard stats
// @access  Admin
router.get('/dashboard', catchAsync(async (req, res) => {
  // Get total counts
  const totalUsers = await User.count();
  const totalPrograms = await Program.count();
  const totalEnrollments = await Enrollment.count();
  const totalCertificates = await Certificate.count();
  const totalCommunityMembers = await CommunityMember.count();

  // Get recent enrollments
  const recentEnrollments = await Enrollment.findAll({
    include: [
      { model: User, as: 'user', attributes: ['name', 'email'] },
      { model: Program, as: 'program', attributes: ['title'] }
    ],
    order: [['enrolled_at', 'DESC']],
    limit: 10
  });

  // Get recent certificates
  const recentCertificates = await Certificate.findAll({
    include: [
      { model: User, as: 'user', attributes: ['name', 'email'] },
      { model: Program, as: 'program', attributes: ['title'] }
    ],
    order: [['issued_date', 'DESC']],
    limit: 10
  });

  // Get enrollment stats by program
  const programStats = await Program.findAll({
    include: [
      {
        model: Enrollment,
        as: 'enrollments',
        attributes: []
      }
    ],
    attributes: [
      'id',
      'title',
      'enrollment_count',
      [Op.fn('COUNT', Op.col('enrollments.id')), 'total_enrollments']
    ],
    group: ['Program.id'],
    order: [[Op.fn('COUNT', Op.col('enrollments.id')), 'DESC']],
    limit: 5
  });

  res.json({
    stats: {
      totalUsers,
      totalPrograms,
      totalEnrollments,
      totalCertificates,
      totalCommunityMembers
    },
    recentEnrollments,
    recentCertificates,
    programStats
  });
}));

// @route   GET /api/admin/users
// @desc    Get all users (admin only)
// @access  Admin
router.get('/users', catchAsync(async (req, res) => {
  const { page = 1, limit = 20, search, role } = req.query;
  const offset = (page - 1) * limit;
  const whereClause = {};

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.iLike]: `%${search}%` } },
      { email: { [Op.iLike]: `%${search}%` } }
    ];
  }

  if (role) {
    whereClause.role = role;
  }

  const users = await User.findAndCountAll({
    where: whereClause,
    attributes: { exclude: ['password', 'verification_token', 'reset_password_token'] },
    order: [['created_at', 'DESC']],
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    users: users.rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(users.count / limit),
      totalItems: users.count,
      itemsPerPage: parseInt(limit)
    }
  });
}));

// @route   PUT /api/admin/users/:id/role
// @desc    Update user role (admin only)
// @access  Admin
router.put('/users/:id/role', catchAsync(async (req, res) => {
  const { role } = req.body;
  const user = await User.findByPk(req.params.id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  if (!['user', 'admin'].includes(role)) {
    throw new AppError('Invalid role', 400);
  }

  await user.update({ role });

  res.json({
    message: 'User role updated successfully',
    user: user.toPublicJSON()
  });
}));

// @route   GET /api/admin/enrollments
// @desc    Get all enrollments (admin only)
// @access  Admin
router.get('/enrollments', catchAsync(async (req, res) => {
  const { page = 1, limit = 20, status, programId } = req.query;
  const offset = (page - 1) * limit;
  const whereClause = {};

  if (status) {
    whereClause.status = status;
  }

  if (programId) {
    whereClause.program_id = programId;
  }

  const enrollments = await Enrollment.findAndCountAll({
    where: whereClause,
    include: [
      { model: User, as: 'user', attributes: ['name', 'email'] },
      { model: Program, as: 'program', attributes: ['title', 'slug'] }
    ],
    order: [['enrolled_at', 'DESC']],
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    enrollments: enrollments.rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(enrollments.count / limit),
      totalItems: enrollments.count,
      itemsPerPage: parseInt(limit)
    }
  });
}));

// @route   GET /api/admin/certificates
// @desc    Get all certificates (admin only)
// @access  Admin
router.get('/certificates', catchAsync(async (req, res) => {
  const { page = 1, limit = 20, status, programId } = req.query;
  const offset = (page - 1) * limit;
  const whereClause = {};

  if (status) {
    whereClause.status = status;
  }

  if (programId) {
    whereClause.program_id = programId;
  }

  const certificates = await Certificate.findAndCountAll({
    where: whereClause,
    include: [
      { model: User, as: 'user', attributes: ['name', 'email'] },
      { model: Program, as: 'program', attributes: ['title', 'slug'] }
    ],
    order: [['issued_date', 'DESC']],
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    certificates: certificates.rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(certificates.count / limit),
      totalItems: certificates.count,
      itemsPerPage: parseInt(limit)
    }
  });
}));

// @route   GET /api/admin/analytics
// @desc    Get analytics data (admin only)
// @access  Admin
router.get('/analytics', catchAsync(async (req, res) => {
  const { period = '30' } = req.query; // days
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - parseInt(period));

  // User registrations over time
  const userRegistrations = await User.findAll({
    where: {
      created_at: {
        [Op.gte]: startDate
      }
    },
    attributes: [
      [Op.fn('DATE', Op.col('created_at')), 'date'],
      [Op.fn('COUNT', Op.col('id')), 'count']
    ],
    group: [Op.fn('DATE', Op.col('created_at'))],
    order: [[Op.fn('DATE', Op.col('created_at')), 'ASC']]
  });

  // Enrollments over time
  const enrollments = await Enrollment.findAll({
    where: {
      enrolled_at: {
        [Op.gte]: startDate
      }
    },
    attributes: [
      [Op.fn('DATE', Op.col('enrolled_at')), 'date'],
      [Op.fn('COUNT', Op.col('id')), 'count']
    ],
    group: [Op.fn('DATE', Op.col('enrolled_at'))],
    order: [[Op.fn('DATE', Op.col('enrolled_at')), 'ASC']]
  });

  // Certificates generated over time
  const certificates = await Certificate.findAll({
    where: {
      issued_date: {
        [Op.gte]: startDate
      }
    },
    attributes: [
      [Op.fn('DATE', Op.col('issued_date')), 'date'],
      [Op.fn('COUNT', Op.col('id')), 'count']
    ],
    group: [Op.fn('DATE', Op.col('issued_date'))],
    order: [[Op.fn('DATE', Op.col('issued_date')), 'ASC']]
  });

  // Top programs by enrollment
  const topPrograms = await Program.findAll({
    include: [
      {
        model: Enrollment,
        as: 'enrollments',
        attributes: []
      }
    ],
    attributes: [
      'id',
      'title',
      [Op.fn('COUNT', Op.col('enrollments.id')), 'enrollment_count']
    ],
    group: ['Program.id'],
    order: [[Op.fn('COUNT', Op.col('enrollments.id')), 'DESC']],
    limit: 10
  });

  res.json({
    userRegistrations,
    enrollments,
    certificates,
    topPrograms
  });
}));

export default router;
