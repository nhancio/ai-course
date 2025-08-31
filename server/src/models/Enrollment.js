import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Enrollment = sequelize.define('Enrollment', {
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
  status: {
    type: DataTypes.ENUM('enrolled', 'in_progress', 'completed', 'dropped'),
    defaultValue: 'enrolled'
  },
  enrolled_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  completed_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  progress_percentage: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100
    }
  },
  certificate_issued: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  certificate_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'program_id']
    },
    {
      fields: ['status']
    },
    {
      fields: ['enrolled_at']
    }
  ]
});

export default Enrollment;
