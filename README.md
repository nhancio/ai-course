# 🚀 NhancioLearning Platform

A modern, full-stack AI learning platform inspired by Outskill, built with React, Node.js, and PostgreSQL.

![NhancioLearning](https://img.shields.io/badge/NhancioLearning-AI%20Learning%20Platform-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)

## ✨ Features

### 🎯 Core Features
- **Modern UI/UX**: Beautiful, responsive design with blue gradients inspired by Outskill
- **Authentication**: Email/password login, Google SSO, password reset
- **Program Management**: Create, manage, and enroll in AI courses and bootcamps
- **Certificate Generation**: Generate professional PDF certificates
- **Community**: Alumni and community member showcase
- **Admin Dashboard**: Complete admin interface for platform management

### 🛠️ Technical Features
- **Full-Stack**: React frontend + Node.js/Express backend
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT tokens with refresh mechanism
- **File Storage**: Local + AWS S3 integration
- **Email Service**: SMTP integration for notifications
- **PDF Generation**: Professional certificate generation
- **Security**: Rate limiting, input validation, CORS protection

### 🎨 Design Features
- **Responsive Design**: Mobile-first approach
- **Blue Gradient Theme**: Modern, professional aesthetic
- **Smooth Animations**: Framer Motion animations
- **Dark Mode**: Elegant dark theme throughout
- **Accessibility**: WCAG compliant components

## 🏗️ Architecture

```
nhancio-learning/
├── src/                    # Frontend React app
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   ├── services/          # API services
│   ├── types/             # TypeScript types
│   └── hooks/             # Custom hooks
├── server/                # Backend Node.js app
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── services/      # Business logic
│   │   └── config/        # Configuration
│   └── uploads/           # File uploads
└── certificates/          # Generated certificates
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v12+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aicourse
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install
   
   # Backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Set up database**
   ```bash
   # Create PostgreSQL database
   psql -U postgres
   CREATE DATABASE nhancio_learning;
   \q
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```

Visit [http://localhost:5173](http://localhost:5173) to see the application!

## 📚 Available Scripts

### Frontend
```bash
npm run dev:frontend    # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Run ESLint
```

### Backend
```bash
cd server
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run test           # Run tests
```

### Full Stack
```bash
npm run dev            # Start both frontend and backend
npm run build          # Build both applications
npm run start          # Start production servers
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/google` - Google OAuth
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset

### Programs
- `GET /api/programs` - List all programs
- `GET /api/programs/:slug` - Get program details
- `POST /api/programs/:id/enroll` - Enroll in program
- `GET /api/programs/featured` - Get featured programs

### Certificates
- `POST /api/certificates/generate` - Generate certificate
- `GET /api/certificates/:id/download` - Download certificate
- `POST /api/certificates/verify` - Verify certificate

### Community
- `GET /api/community` - List community members
- `GET /api/community/featured` - Get featured members

### Admin (Protected)
- `GET /api/admin/dashboard` - Admin dashboard stats
- `GET /api/admin/users` - Manage users
- `GET /api/admin/programs` - Manage programs
- `GET /api/admin/analytics` - Platform analytics

## 🎨 Design System

### Colors
- **Primary**: Blue gradients (`from-blue-400 to-blue-600`)
- **Background**: Dark slate (`slate-900`)
- **Text**: White and gray variations
- **Accents**: Blue highlights and borders

### Typography
- **Headings**: Bold, large fonts with gradient text effects
- **Body**: Clean, readable sans-serif fonts
- **Code**: Monospace for technical content

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Dark backgrounds with blue borders
- **Forms**: Clean, accessible form elements
- **Navigation**: Sticky header with smooth transitions

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Rate Limiting**: API rate limiting to prevent abuse
- **Input Validation**: Comprehensive input validation
- **CORS Protection**: Proper CORS configuration
- **SQL Injection Protection**: Sequelize ORM protection
- **XSS Protection**: Input sanitization

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd server
npm run build
# Deploy with environment variables
```

### Database (Railway/Heroku Postgres)
- Set up PostgreSQL database
- Configure connection string
- Run migrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Outskill**: Design inspiration and concept
- **React Team**: Amazing frontend framework
- **Node.js Community**: Robust backend ecosystem
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations

## 📞 Support

For support and questions:
- 📧 Email: support@nhanciolearning.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 📖 Documentation: See `run.txt` for detailed setup instructions

---

**Built with ❤️ for the AI learning community**

*Empowering future leaders in AI & Technology*
