import express from 'express';
import { body, validationResult } from 'express-validator';
import { Program, Enrollment, User } from '../models/index.js';
import { authMiddleware } from '../middleware/auth.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { Op } from 'sequelize';

const router = express.Router();

// Validation middleware
const validateProgram = [
  body('title').trim().isLength({ min: 3, max: 200 }).withMessage('Title must be between 3 and 200 characters'),
  body('slug').trim().isLength({ min: 3, max: 100 }).withMessage('Slug must be between 3 and 100 characters'),
  body('short_description').trim().isLength({ min: 10, max: 500 }).withMessage('Short description must be between 10 and 500 characters'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number')
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

// @route   GET /api/programs
// @desc    Get all programs
// @access  Public
router.get('/', catchAsync(async (req, res) => {
  const { 
    page = 1, 
    limit = 10, 
    featured, 
    category, 
    search,
    sort = 'created_at',
    order = 'DESC'
  } = req.query;

  const offset = (page - 1) * limit;
  const whereClause = { is_active: true };

  // Filter by featured
  if (featured === 'true') {
    whereClause.is_featured = true;
  }

  // Search functionality
  if (search) {
    whereClause[Op.or] = [
      { title: { [Op.iLike]: `%${search}%` } },
      { short_description: { [Op.iLike]: `%${search}%` } },
      { full_description: { [Op.iLike]: `%${search}%` } }
    ];
  }

  const programs = await Program.findAndCountAll({
    where: whereClause,
    order: [[sort, order]],
    limit: parseInt(limit),
    offset: parseInt(offset),
    attributes: { exclude: ['created_at', 'updated_at'] }
  });

  res.json({
    programs: programs.rows,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(programs.count / limit),
      totalItems: programs.count,
      itemsPerPage: parseInt(limit)
    }
  });
}));

// @route   GET /api/programs/featured
// @desc    Get featured programs
// @access  Public
router.get('/featured', catchAsync(async (req, res) => {
  const programs = await Program.findAll({
    where: { 
      is_active: true,
      is_featured: true 
    },
    order: [['display_order', 'ASC'], ['created_at', 'DESC']],
    limit: 6
  });

  res.json({ programs });
}));

// @route   GET /api/programs/:slug
// @desc    Get program by slug
// @access  Public
router.get('/:slug', catchAsync(async (req, res) => {
  const program = await Program.findOne({
    where: { 
      slug: req.params.slug,
      is_active: true 
    }
  });

  if (!program) {
    throw new AppError('Program not found', 404);
  }

  // Get enrollment count
  const enrollmentCount = await Enrollment.count({
    where: { program_id: program.id }
  });

  res.json({
    program: {
      ...program.toJSON(),
      enrollment_count: enrollmentCount
    }
  });
}));

// @route   POST /api/programs/:id/enroll
// @desc    Enroll user in program
// @access  Private
router.post('/:id/enroll', 
  authMiddleware.authenticateToken,
  catchAsync(async (req, res) => {
    const programId = req.params.id;
    const userId = req.user.id;

    // Check if program exists
    const program = await Program.findByPk(programId);
    if (!program || !program.is_active) {
      throw new AppError('Program not found or inactive', 404);
    }

    // Check if user is already enrolled
    const existingEnrollment = await Enrollment.findOne({
      where: { user_id: userId, program_id: programId }
    });

    if (existingEnrollment) {
      throw new AppError('Already enrolled in this program', 400);
    }

    // Check enrollment limits
    if (program.max_enrollment) {
      const currentEnrollments = await Enrollment.count({
        where: { program_id: programId }
      });

      if (currentEnrollments >= program.max_enrollment) {
        throw new AppError('Program is full', 400);
      }
    }

    // Create enrollment
    const enrollment = await Enrollment.create({
      user_id: userId,
      program_id: programId,
      status: 'enrolled'
    });

    // Update program enrollment count
    await program.increment('enrollment_count');

    res.status(201).json({
      message: 'Successfully enrolled in program',
      enrollment
    });
  })
);

// @route   GET /api/programs/:id/enrollments
// @desc    Get program enrollments (admin only)
// @access  Admin
router.get('/:id/enrollments',
  authMiddleware.requireAdmin,
  catchAsync(async (req, res) => {
    const enrollments = await Enrollment.findAll({
      where: { program_id: req.params.id },
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email'] }
      ],
      order: [['enrolled_at', 'DESC']]
    });

    res.json({ enrollments });
  })
);

// @route   POST /api/programs
// @desc    Create new program (admin only)
// @access  Admin
router.post('/',
  authMiddleware.requireAdmin,
  validateProgram,
  checkValidationErrors,
  catchAsync(async (req, res) => {
    const program = await Program.create(req.body);

    res.status(201).json({
      message: 'Program created successfully',
      program
    });
  })
);

// @route   PUT /api/programs/:id
// @desc    Update program (admin only)
// @access  Admin
router.put('/:id',
  authMiddleware.requireAdmin,
  validateProgram,
  checkValidationErrors,
  catchAsync(async (req, res) => {
    const program = await Program.findByPk(req.params.id);

    if (!program) {
      throw new AppError('Program not found', 404);
    }

    await program.update(req.body);

    res.json({
      message: 'Program updated successfully',
      program
    });
  })
);

// @route   DELETE /api/programs/:id
// @desc    Delete program (admin only)
// @access  Admin
router.delete('/:id',
  authMiddleware.requireAdmin,
  catchAsync(async (req, res) => {
    const program = await Program.findByPk(req.params.id);

    if (!program) {
      throw new AppError('Program not found', 404);
    }

    await program.destroy();

    res.json({
      message: 'Program deleted successfully'
    });
  })
);

export default router;
