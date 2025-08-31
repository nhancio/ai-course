import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const CommunityMember = sequelize.define('CommunityMember', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 100]
    }
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 100]
    }
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [2, 100]
    }
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  linkedin_url: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  twitter_url: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  github_url: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  website_url: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  skills: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  programs_completed: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  display_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  joined_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  achievements: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  }
}, {
  indexes: [
    {
      fields: ['is_active']
    },
    {
      fields: ['is_featured']
    },
    {
      fields: ['display_order']
    },
    {
      fields: ['role']
    }
  ]
});

export default CommunityMember;
