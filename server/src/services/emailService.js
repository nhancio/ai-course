import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class EmailService {
  constructor() {
    this.transporter = this.createTransporter();
    this.templatesDir = path.join(__dirname, '../templates/emails');
    this.loadTemplates();
  }

  createTransporter() {
    // Use environment variables for email configuration
    const config = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    };

    // For development, use ethereal email if no SMTP config
    if (!process.env.SMTP_USER) {
      return nodemailer.createTransporter({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'test@ethereal.email',
          pass: 'test123'
        }
      });
    }

    return nodemailer.createTransporter(config);
  }

  loadTemplates() {
    this.templates = {};
    const templateFiles = [
      'emailVerification',
      'passwordReset',
      'welcomeEmail',
      'certificateGenerated',
      'enrollmentConfirmation'
    ];

    templateFiles.forEach(templateName => {
      const templatePath = path.join(this.templatesDir, `${templateName}.hbs`);
      if (fs.existsSync(templatePath)) {
        const templateContent = fs.readFileSync(templatePath, 'utf8');
        this.templates[templateName] = handlebars.compile(templateContent);
      }
    });
  }

  async sendEmail({ to, subject, template, data, html, text }) {
    try {
      let emailHtml = html;
      let emailText = text;

      // Use template if provided
      if (template && this.templates[template]) {
        emailHtml = this.templates[template](data);
        emailText = this.stripHtml(emailHtml);
      }

      const mailOptions = {
        from: process.env.FROM_EMAIL || 'noreply@nhanciolearning.com',
        to,
        subject,
        html: emailHtml,
        text: emailText
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }

  stripHtml(html) {
    return html.replace(/<[^>]*>/g, '');
  }

  // Predefined email methods
  async sendVerificationEmail(email, name, verificationUrl) {
    return this.sendEmail({
      to: email,
      subject: 'Welcome to NhancioLearning - Verify Your Email',
      template: 'emailVerification',
      data: { name, verificationUrl }
    });
  }

  async sendPasswordResetEmail(email, name, resetUrl) {
    return this.sendEmail({
      to: email,
      subject: 'NhancioLearning - Password Reset Request',
      template: 'passwordReset',
      data: { name, resetUrl }
    });
  }

  async sendWelcomeEmail(email, name) {
    return this.sendEmail({
      to: email,
      subject: 'Welcome to NhancioLearning!',
      template: 'welcomeEmail',
      data: { name }
    });
  }

  async sendCertificateEmail(email, name, certificateUrl, programName) {
    return this.sendEmail({
      to: email,
      subject: 'Your NhancioLearning Certificate is Ready!',
      template: 'certificateGenerated',
      data: { name, certificateUrl, programName }
    });
  }

  async sendEnrollmentConfirmation(email, name, programName, startDate) {
    return this.sendEmail({
      to: email,
      subject: 'Enrollment Confirmed - NhancioLearning',
      template: 'enrollmentConfirmation',
      data: { name, programName, startDate }
    });
  }
}

export default new EmailService();
