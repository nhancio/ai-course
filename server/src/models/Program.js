import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Program = sequelize.define('Program', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 200]
    }
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 100]
    }
  },
  short_description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  full_description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  features: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'USD'
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  banner_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  enrollment_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  max_enrollment: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  schedule: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  prerequisites: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  learning_outcomes: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  certificate_template_id: {
    type: DataTypes.UUID,
    allowNull: true
  }
}, {
  indexes: [
    {
      fields: ['slug']
    },
    {
      fields: ['is_active']
    },
    {
      fields: ['is_featured']
    }
  ]
});

export default Program;
