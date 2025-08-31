export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  phone?: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description?: string;
  features: string[];
  duration: string;
  price?: number;
  currency: string;
  image_url?: string;
  banner_url?: string;
  is_active: boolean;
  is_featured: boolean;
  enrollment_count: number;
  max_enrollment?: number;
  start_date?: string;
  end_date?: string;
  schedule?: any;
  prerequisites: string[];
  learning_outcomes: string[];
  certificate_template_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  program_id: string;
  status: 'enrolled' | 'in_progress' | 'completed' | 'dropped';
  enrolled_at: string;
  completed_at?: string;
  progress_percentage: number;
  certificate_issued: boolean;
  certificate_id?: string;
  notes?: string;
  user?: User;
  program?: Program;
}

export interface Certificate {
  id: string;
  user_id: string;
  program_id: string;
  enrollment_id?: string;
  certificate_number: string;
  student_name: string;
  student_email: string;
  student_phone?: string;
  program_name: string;
  completion_date: string;
  issued_date: string;
  pdf_path?: string;
  pdf_url?: string;
  template_used?: string;
  status: 'pending' | 'generated' | 'sent' | 'downloaded';
  metadata?: any;
  download_count: number;
  last_downloaded?: string;
  user?: User;
  program?: Program;
}

export interface CommunityMember {
  id: string;
  name: string;
  role: string;
  company?: string;
  bio?: string;
  photo_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  github_url?: string;
  website_url?: string;
  location?: string;
  skills: string[];
  programs_completed: string[];
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  joined_date?: string;
  achievements: string[];
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface CertificateRequest {
  studentName: string;
  studentEmail: string;
  studentPhone?: string;
  programId: string;
  completionDate?: string;
}
