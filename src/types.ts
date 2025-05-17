export interface TechSkill {
  id: string;
  name: string;
  icon: string;
  category: TechCategory;
}

export type TechCategory = 
  | 'web' 
  | 'framework' 
  | 'language' 
  | 'gamedev' 
  | 'version-control' 
  | 'os' 
  | 'tool';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  technologies: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ThemeOption {
  id: string;
  name: string;
  primaryClass: string;
  secondaryClass: string;
  gradientClass: string;
}