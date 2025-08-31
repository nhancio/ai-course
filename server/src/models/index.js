import User from './User.js';
import Program from './Program.js';
import Enrollment from './Enrollment.js';
import Certificate from './Certificate.js';
import CommunityMember from './CommunityMember.js';

// User - Program relationships (through Enrollment)
User.belongsToMany(Program, { 
  through: Enrollment, 
  foreignKey: 'user_id',
  as: 'enrolledPrograms'
});

Program.belongsToMany(User, { 
  through: Enrollment, 
  foreignKey: 'program_id',
  as: 'enrolledUsers'
});

// User - Certificate relationships
User.hasMany(Certificate, { 
  foreignKey: 'user_id',
  as: 'certificates'
});

Certificate.belongsTo(User, { 
  foreignKey: 'user_id',
  as: 'user'
});

// Program - Certificate relationships
Program.hasMany(Certificate, { 
  foreignKey: 'program_id',
  as: 'certificates'
});

Certificate.belongsTo(Program, { 
  foreignKey: 'program_id',
  as: 'program'
});

// Enrollment - Certificate relationships
Enrollment.hasOne(Certificate, { 
  foreignKey: 'enrollment_id',
  as: 'certificate'
});

Certificate.belongsTo(Enrollment, { 
  foreignKey: 'enrollment_id',
  as: 'enrollment'
});

// User - Enrollment relationships
User.hasMany(Enrollment, { 
  foreignKey: 'user_id',
  as: 'enrollments'
});

Enrollment.belongsTo(User, { 
  foreignKey: 'user_id',
  as: 'user'
});

// Program - Enrollment relationships
Program.hasMany(Enrollment, { 
  foreignKey: 'program_id',
  as: 'enrollments'
});

Enrollment.belongsTo(Program, { 
  foreignKey: 'program_id',
  as: 'program'
});

export {
  User,
  Program,
  Enrollment,
  Certificate,
  CommunityMember
};
