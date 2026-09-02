export type PageId = 'home' | 'about' | 'projects' | 'experience' | 'writing' | 'contact' | 'statement';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Design Systems' | 'Web Apps' | 'Audits & Tooling' | 'Open Source';
  role: string;
  year: string;
  date: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  wcagLevel: 'WCAG 2.2 AAA' | 'WCAG 2.2 AA';
  lighthouseScore: {
    accessibility: number;
    performance: number;
    seo: number;
    bestPractices: number;
  };
  technologies: string[];
  keyFeatures: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageAlt: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  isoDate: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    standard?: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: 'audit' | 'consulting' | 'speaking' | 'collaboration' | 'general';
  urgency: 'normal' | 'high' | 'urgent';
  message: string;
  needWcagAudit: boolean;
  consent: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
  consent?: string;
}

export interface A11ySettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  dyslexicFont: boolean;
  reducedMotion: boolean;
  showSemantics: boolean;
  screenReaderLogs: boolean;
}
