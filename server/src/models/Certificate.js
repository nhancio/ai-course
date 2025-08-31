import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Certificate = sequelize.define('Certificate', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  program_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'programs',
      key: 'id'
    }
  },
  enrollment_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'enrollments',
      key: 'id'
    }
  },
  certificate_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  student_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  student_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  student_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  program_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completion_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  issued_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  pdf_path: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pdf_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  template_used: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'generated', 'sent', 'downloaded'),
    defaultValue: 'pending'
  },
  metadata: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {}
  },
  download_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  last_downloaded: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  indexes: [
    {
      fields: ['certificate_number']
    },
    {
      fields: ['user_id']
    },
    {
      fields: ['program_id']
    },
    {
      fields: ['status']
    },
    {
      fields: ['issued_date']
    }
  ]
});

export default Certificate;
