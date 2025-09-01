import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Certificate, Program, User } from '../models/index.js';
import { AppError } from '../middleware/errorHandler.js';
import { uploadToS3 } from './storageService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class CertificateService {
  constructor() {
    this.certificatesDir = path.join(__dirname, '../../certificates');
    this.ensureCertificatesDir();
  }

  ensureCertificatesDir() {
    if (!fs.existsSync(this.certificatesDir)) {
      fs.mkdirSync(this.certificatesDir, { recursive: true });
    }
  }

  generateCertificateNumber() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `NLC-${timestamp}-${random}`.toUpperCase();
  }

  async generateCertificate(certificateData) {
    const {
      studentName,
      studentEmail,
      studentPhone,
      programName,
      completionDate,
      certificateNumber
    } = certificateData;

    const doc = new PDFDocument({
      size: 'A4',
      layout: 'landscape',
      margins: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
      }
    });

    const filename = `certificate-${certificateNumber}-${Date.now()}.pdf`;
    const filePath = path.join(this.certificatesDir, filename);
    const writeStream = fs.createWriteStream(filePath);

    doc.pipe(writeStream);

    // Add background
    this.addBackground(doc);

    // Add header
    this.addHeader(doc);

    // Add main content
    this.addMainContent(doc, {
      studentName,
      programName,
      completionDate,
      certificateNumber
    });

    // Add footer
    this.addFooter(doc);

    // Add QR code placeholder
    this.addQRCodePlaceholder(doc, certificateNumber);

    doc.end();

    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        resolve({ filePath, filename });
      });
      writeStream.on('error', reject);
    });
  }

  addBackground(doc) {
    // Add a subtle gradient background
    const gradient = doc.linearGradient(0, 0, doc.page.width, doc.page.height);
    gradient.stop(0, '#f8fafc');
    gradient.stop(1, '#e2e8f0');
    
    doc.rect(0, 0, doc.page.width, doc.page.height).fill(gradient);
    
    // Add decorative border
    doc.strokeColor('#3b82f6');
    doc.lineWidth(3);
    doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke();
    
    // Add inner border
    doc.strokeColor('#64748b');
    doc.lineWidth(1);
    doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60).stroke();
  }

  addHeader(doc) {
    // Logo placeholder
    doc.fontSize(24)
       .font('Helvetica-Bold')
       .fillColor('#1e293b')
       .text('NHANCIO LEARNING', doc.page.width / 2, 80, {
         align: 'center'
       });

    doc.fontSize(12)
       .font('Helvetica')
       .fillColor('#64748b')
       .text('Empowering Future Leaders in AI & Technology', doc.page.width / 2, 110, {
         align: 'center'
       });

    // Decorative line
    doc.strokeColor('#3b82f6')
       .lineWidth(2)
       .moveTo(doc.page.width / 2 - 100, 130)
       .lineTo(doc.page.width / 2 + 100, 130)
       .stroke();
  }

  addMainContent(doc, { studentName, programName, completionDate, certificateNumber }) {
    const centerY = doc.page.height / 2;

    // Certificate of Completion text
    doc.fontSize(18)
       .font('Helvetica-Bold')
       .fillColor('#1e293b')
       .text('CERTIFICATE OF COMPLETION', doc.page.width / 2, centerY - 80, {
         align: 'center'
       });

    // This is to certify that
    doc.fontSize(14)
       .font('Helvetica')
       .fillColor('#475569')
       .text('This is to certify that', doc.page.width / 2, centerY - 40, {
         align: 'center'
       });

    // Student name
    doc.fontSize(24)
       .font('Helvetica-Bold')
       .fillColor('#1e293b')
       .text(studentName, doc.page.width / 2, centerY, {
         align: 'center'
       });

    // Has successfully completed
    doc.fontSize(14)
       .font('Helvetica')
       .fillColor('#475569')
       .text('has successfully completed the', doc.page.width / 2, centerY + 40, {
         align: 'center'
       });

    // Program name
    doc.fontSize(20)
       .font('Helvetica-Bold')
       .fillColor('#3b82f6')
       .text(programName, doc.page.width / 2, centerY + 70, {
         align: 'center'
       });

    // Completion date
    doc.fontSize(12)
       .font('Helvetica')
       .fillColor('#64748b')
       .text(`Completed on ${new Date(completionDate).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
       })}`, doc.page.width / 2, centerY + 110, {
         align: 'center'
       });

    // Certificate number
    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#94a3b8')
       .text(`Certificate ID: ${certificateNumber}`, doc.page.width / 2, centerY + 140, {
         align: 'center'
       });
  }

  addFooter(doc) {
    const footerY = doc.page.height - 100;

    // Signature line
    doc.strokeColor('#64748b')
       .lineWidth(1)
       .moveTo(doc.page.width / 2 - 150, footerY)
       .lineTo(doc.page.width / 2 + 150, footerY)
       .stroke();

    // Director signature
    doc.fontSize(12)
       .font('Helvetica-Bold')
       .fillColor('#1e293b')
       .text('Chaitanya', doc.page.width / 2 - 150, footerY + 10, {
         align: 'center'
       });

    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#64748b')
       .text('Director of Education', doc.page.width / 2 - 150, footerY + 25, {
         align: 'center'
       });

    // CEO signature
    doc.fontSize(12)
       .font('Helvetica-Bold')
       .fillColor('#1e293b')
       .text('Michael Chen', doc.page.width / 2 + 150, footerY + 10, {
         align: 'center'
       });

    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#64748b')
       .text('Chief Executive Officer', doc.page.width / 2 + 150, footerY + 25, {
         align: 'center'
       });

    // Company info
    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#94a3b8')
       .text('NhancioLearning.com | info@nhanciolearning.com', doc.page.width / 2, doc.page.height - 40, {
         align: 'center'
       });
  }

  addQRCodePlaceholder(doc, certificateNumber) {
    // Placeholder for QR code (in a real implementation, you'd generate an actual QR code)
    const qrSize = 60;
    const qrX = doc.page.width - 80;
    const qrY = doc.page.height - 80;

    doc.strokeColor('#e2e8f0')
       .lineWidth(1)
       .rect(qrX, qrY, qrSize, qrSize)
       .stroke();

    doc.fontSize(8)
       .font('Helvetica')
       .fillColor('#94a3b8')
       .text('QR Code', qrX + qrSize / 2, qrY + qrSize / 2, {
         align: 'center'
       });
  }

  async createCertificate(certificateData) {
    try {
      // Generate certificate number
      const certificateNumber = this.generateCertificateNumber();

      // Generate PDF
      const { filePath, filename } = await this.generateCertificate({
        ...certificateData,
        certificateNumber
      });

      // Upload to S3 (if configured)
      let pdfUrl = null;
      if (process.env.AWS_S3_BUCKET) {
        try {
          pdfUrl = await uploadToS3(filePath, `certificates/${filename}`);
        } catch (error) {
          console.error('S3 upload failed:', error);
        }
      }

      // Create certificate record
      const certificate = await Certificate.create({
        ...certificateData,
        certificate_number: certificateNumber,
        pdf_path: filePath,
        pdf_url: pdfUrl,
        status: 'generated'
      });

      return {
        certificate,
        filePath,
        filename,
        certificateNumber
      };
    } catch (error) {
      throw new AppError('Failed to generate certificate', 500);
    }
  }

  async getCertificate(certificateId) {
    const certificate = await Certificate.findByPk(certificateId, {
      include: [
        { model: User, as: 'user', attributes: ['name', 'email'] },
        { model: Program, as: 'program', attributes: ['title'] }
      ]
    });

    if (!certificate) {
      throw new AppError('Certificate not found', 404);
    }

    return certificate;
  }

  async downloadCertificate(certificateId) {
    const certificate = await this.getCertificate(certificateId);

    if (!certificate.pdf_path || !fs.existsSync(certificate.pdf_path)) {
      throw new AppError('Certificate file not found', 404);
    }

    // Update download count
    await certificate.update({
      download_count: certificate.download_count + 1,
      last_downloaded: new Date()
    });

    return certificate.pdf_path;
  }
}

export default new CertificateService();
