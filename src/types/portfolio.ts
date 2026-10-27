export interface Profile {
  name: string;
  headline: string;
  role: string;
  shortBio: string;
  fullAbout: string[];
  email: string;
  phone?: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  avatarUrl: string;
  availability: string;
  yearsExperience: string;
  completedProjects: string;
  satisfiedRate: string;
}

export type SkillCategory = 'all' | 'frontend' | 'responsive' | 'tools' | 'design';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  proficiency: 'Advanced' | 'Proficient' | 'Skilled' | 'Intermediate';
  icon: string;
  description: string;
  tags: string[];
}

export type ProjectCategory = 'all' | 'web' | 'responsive' | 'design';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  accentColor: string;
  mockupType: 'browser' | 'mobile' | 'code' | 'dashboard';
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gradeOrHonor?: string;
  description: string;
  keyLearnings: string[];
  credentialUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  credentialId?: string;
}
