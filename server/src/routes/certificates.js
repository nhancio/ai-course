import express from 'express';
import { body, validationResult } from 'express-validator';
import certificateService from '../services/certificateService.js';
import { authMiddleware } from '../middleware/auth.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { Program } from '../models/index.js';
import fs from 'fs';

const router = express.Router();

// Validation middleware
const validateCertificateRequest = [
  body('studentName').trim().isLength({ min: 2, max: 100 }).withMessage('Student name must be between 2 and 100 characters'),
  body('studentEmail').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('studentPhone').optional().isMobilePhone().withMessage('Valid phone number is required'),
  body('programId').isUUID().withMessage('Valid program ID is required'),
  body('completionDate').optional().isISO8601().withMessage('Valid completion date is required')
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

// @route   POST /api/certificates/generate
// @desc    Generate a new certificate
// @access  Private
router.post('/generate', 
  authMiddleware.authenticateToken,
  validateCertificateRequest,
  checkValidationErrors,
  catchAsync(async (req, res) => {
    const {
      studentName,
      studentEmail,
      studentPhone,
      programId,
      completionDate = new Date()
    } = req.body;

    // Verify program exists
    const program = await Program.findByPk(programId);
    if (!program) {
      throw new AppError('Program not found', 404);
    }

    // Check if user is enrolled in this program (optional validation)
    // You might want to add this check based on your business logic

    // Generate certificate
    const result = await certificateService.createCertificate({
      user_id: req.user.id,
      program_id: programId,
      student_name: studentName,
      student_email: studentEmail,
      student_phone: studentPhone,
      program_name: program.title,
      completion_date: completionDate
    });

    res.status(201).json({
      message: 'Certificate generated successfully',
      certificate: result.certificate,
      certificateNumber: result.certificateNumber,
      downloadUrl: `/api/certificates/${result.certificate.id}/download`
    });
  })
);

// @route   GET /api/certificates/:id
// @desc    Get certificate details
// @access  Private
router.get('/:id', 
  authMiddleware.authenticateToken,
  catchAsync(async (req, res) => {
    const certificate = await certificateService.getCertificate(req.params.id);

    // Check if user owns this certificate or is admin
    if (certificate.user_id !== req.user.id && req.user.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    res.json({
      certificate
    });
  })
);

// @route   GET /api/certificates/:id/download
// @desc    Download certificate PDF
// @access  Private
router.get('/:id/download', 
  authMiddleware.authenticateToken,
  catchAsync(async (req, res) => {
    const certificate = await certificateService.getCertificate(req.params.id);

    // Check if user owns this certificate or is admin
    if (certificate.user_id !== req.user.id && req.user.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    const filePath = await certificateService.downloadCertificate(req.params.id);

    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${certificate.certificate_number}.pdf"`);
    res.setHeader('Cache-Control', 'no-cache');

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  })
);

// @route   GET /api/certificates
// @desc    Get user's certificates
// @access  Private
router.get('/', 
  authMiddleware.authenticateToken,
  catchAsync(async (req, res) => {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (page - 1) * limit;

    const whereClause = { user_id: req.user.id };
    if (status) {
      whereClause.status = status;
    }

    const certificates = await Certificate.findAndCountAll({
      where: whereClause,
      include: [
        { model: Program, as: 'program', attributes: ['title', 'slug'] }
      ],
      order: [['created_at', 'DESC']],
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
  })
);

// @route   POST /api/certificates/:id/verify
// @desc    Verify certificate authenticity (public endpoint)
// @access  Public
router.post('/verify', 
  catchAsync(async (req, res) => {
    const { certificateNumber } = req.body;

    if (!certificateNumber) {
      throw new AppError('Certificate number is required', 400);
    }

    const certificate = await Certificate.findOne({
      where: { certificate_number: certificateNumber },
      include: [
        { model: Program, as: 'program', attributes: ['title'] }
      ]
    });

    if (!certificate) {
      return res.status(404).json({
        valid: false,
        message: 'Certificate not found'
      });
    }

    res.json({
      valid: true,
      certificate: {
        certificateNumber: certificate.certificate_number,
        studentName: certificate.student_name,
        programName: certificate.program.title,
        completionDate: certificate.completion_date,
        issuedDate: certificate.issued_date,
        status: certificate.status
      }
    });
  })
);

// @route   DELETE /api/certificates/:id
// @desc    Delete certificate (admin only)
// @access  Admin
router.delete('/:id', 
  authMiddleware.requireAdmin,
  catchAsync(async (req, res) => {
    const certificate = await certificateService.getCertificate(req.params.id);

    // Delete file if it exists
    if (certificate.pdf_path && fs.existsSync(certificate.pdf_path)) {
      fs.unlinkSync(certificate.pdf_path);
    }

    await certificate.destroy();

    res.json({
      message: 'Certificate deleted successfully'
    });
  })
);

export default router;
