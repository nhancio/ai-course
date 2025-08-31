import express from 'express';
import { body, validationResult } from 'express-validator';
import { CommunityMember } from '../models/index.js';
import { authMiddleware } from '../middleware/auth.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { Op } from 'sequelize';

const router = express.Router();

// Validation middleware
const validateCommunityMember = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('role').trim().isLength({ min: 2, max: 100 }).withMessage('Role must be between 2 and 100 characters'),
  body('company').optional().trim().isLength({ min: 2, max: 100 }).withMessage('Company must be between 2 and 100 characters'),
  body('bio').optional().trim().isLength({ max: 1000 }).withMessage('Bio must be less than 1000 characters'),
  body('linkedin_url').optional().isURL().withMessage('Valid LinkedIn URL is required'),
  body('twitter_url').optional().isURL().withMessage('Valid Twitter URL is required'),
  body('github_url').optional().isURL().withMessage('Valid GitHub URL is required'),
  body('website_url').optional().isURL().withMessage('Valid website URL is required')
];

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

// @route   GET /api/community
// @desc    Get all community members
// @access  Public
router.get('/', catchAsync(async (req, res) => {
  const { 
    page = 1, 
    limit = 12, 
    featured, 
    role,
    search,
    sort = 'display_order',
    order = 'ASC'
  } = req.query;

  const offset = (page - 1) * limit;
  const whereClause = { is_active: true };

  // Filter by featured
  if (featured === 'true') {
    whereClause.is_featured = true;
  }

  // Filter by role
  if (role) {
    whereClause.role = { [Op.iLike]: `%${role}%` };
  }

  // Search functionality
  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.iLike]: `%${search}%` } },
      { role: { [Op.iLike]: `%${search}%` } },
      { company: { [Op.iLike]: `%${search}%` } },
      { bio: { [Op.iLike]: `%${search}%` } }
    ];
  }

  const members = await CommunityMember.findAndCountAll({
    where: whereClause,
    order: [[sort, order]],
    limit: parseInt(limit),
    offset: parseInt(offset)
  });

  res.json({
    members: members.rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(members.count / limit),
      totalItems: members.count,
      itemsPerPage: parseInt(limit)
    }
  });
}));

// @route   GET /api/community/featured
// @desc    Get featured community members
// @access  Public
router.get('/featured', catchAsync(async (req, res) => {
  const members = await CommunityMember.findAll({
    where: { 
      is_active: true,
      is_featured: true 
    },
    order: [['display_order', 'ASC'], ['joined_date', 'DESC']],
    limit: 8
  });

  res.json({ members });
}));

// @route   GET /api/community/roles
// @desc    Get unique roles for filtering
// @access  Public
router.get('/roles', catchAsync(async (req, res) => {
  const roles = await CommunityMember.findAll({
    where: { is_active: true },
    attributes: [[Op.fn('DISTINCT', Op.col('role')), 'role']],
    raw: true
  });

  const uniqueRoles = roles.map(item => item.role).filter(Boolean);
  res.json({ roles: uniqueRoles });
}));

// @route   GET /api/community/:id
// @desc    Get community member by ID
// @access  Public
router.get('/:id', catchAsync(async (req, res) => {
  const member = await CommunityMember.findOne({
    where: { 
      id: req.params.id,
      is_active: true 
    }
  });

  if (!member) {
    throw new AppError('Community member not found', 404);
  }

  res.json({ member });
}));

// @route   POST /api/community
// @desc    Create new community member (admin only)
// @access  Admin
router.post('/',
  authMiddleware.requireAdmin,
  validateCommunityMember,
  checkValidationErrors,
  catchAsync(async (req, res) => {
    const member = await CommunityMember.create({
      ...req.body,
      joined_date: req.body.joined_date || new Date()
    });

    res.status(201).json({
      message: 'Community member created successfully',
      member
    });
  })
);

// @route   PUT /api/community/:id
// @desc    Update community member (admin only)
// @access  Admin
router.put('/:id',
  authMiddleware.requireAdmin,
  validateCommunityMember,
  checkValidationErrors,
  catchAsync(async (req, res) => {
    const member = await CommunityMember.findByPk(req.params.id);

    if (!member) {
      throw new AppError('Community member not found', 404);
    }

    await member.update(req.body);

    res.json({
      message: 'Community member updated successfully',
      member
    });
  })
);

// @route   DELETE /api/community/:id
// @desc    Delete community member (admin only)
// @access  Admin
router.delete('/:id',
  authMiddleware.requireAdmin,
  catchAsync(async (req, res) => {
    const member = await CommunityMember.findByPk(req.params.id);

    if (!member) {
      throw new AppError('Community member not found', 404);
    }

    await member.destroy();

    res.json({
      message: 'Community member deleted successfully'
    });
  })
);

// @route   PUT /api/community/:id/feature
// @desc    Toggle featured status (admin only)
// @access  Admin
router.put('/:id/feature',
  authMiddleware.requireAdmin,
  catchAsync(async (req, res) => {
    const member = await CommunityMember.findByPk(req.params.id);

    if (!member) {
      throw new AppError('Community member not found', 404);
    }

    await member.update({ is_featured: !member.is_featured });

    res.json({
      message: `Community member ${member.is_featured ? 'featured' : 'unfeatured'} successfully`,
      member
    });
  })
);

export default router;
