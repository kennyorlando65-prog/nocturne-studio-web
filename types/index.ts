// ============================================
// FORM & SUBMISSION TYPES
// ============================================

export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  createdAt?: Date;
  status?: 'new' | 'contacted' | 'closed';
  notes?: string;
}

// ============================================
// PROJECT & CASE STUDY TYPES
// ============================================

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tier: string;
  link: string;
  image: string;
  heroImage?: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Metric[];
  technologies: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images?: string[];
  createdAt?: Date;
}

export interface Portfolio {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  image: string;
  tier: string;
  metrics: Record<string, string>;
}

// ============================================
// BLOG TYPES
// ============================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: Date;
  readTime: number;
  image?: string;
  tags?: string[];
  published: boolean;
}

export interface BlogMetadata {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: number;
  date: string;
}

// ============================================
// SERVICE TYPES
// ============================================

export interface Service {
  id: string;
  name: string;
  description: string;
  includes: string[];
  timeline: string;
  startingPrice: string;
  icon?: string;
}

// ============================================
// TESTIMONIAL TYPES
// ============================================

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

// ============================================
// ADMIN TYPES
// ============================================

export interface AdminSession {
  id: string;
  token: string;
  createdAt: Date;
  expiresAt: Date;
}

export interface AdminDashboardStats {
  totalSubmissions: number;
  thisMonth: number;
  responded: number;
  pending: number;
  byProjectType: Record<string, number>;
  byBudget: Record<string, number>;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

// ============================================
// UI COMPONENT TYPES
// ============================================

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  cta?: {
    label: string;
    onClick: () => void;
  };
}

// ============================================
// VALIDATION TYPES
// ============================================

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormValidationResult {
  valid: boolean;
  errors?: ValidationError[];
}
