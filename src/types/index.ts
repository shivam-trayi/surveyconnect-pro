export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating?: number;
}

export interface Logo {
  id: string;
  name: string;
  src: string;
  href?: string;
}

export interface Slide {
  id: string;
  type: 'logo' | 'screenshot';
  src: string;
  alt: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface FormErrors {
  [key: string]: string;
}

export interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignupForm {
  fullName: string;
  company: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  agreeToTerms: boolean;
}

export interface ResetPasswordForm {
  email: string;
}



export interface User {
  id: string;
  name: string;
  email: string;
}

export interface SignupData {
  name: string;
  email: string;
  password?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
}
