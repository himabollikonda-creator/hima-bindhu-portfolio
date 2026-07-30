export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  institution: string;
  degree: string;
  specialization: string;
  year: string;
  timeline: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface HackathonItem {
  id: string;
  event: string;
  organizer: string;
  roleOrTeam?: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface StrengthsAndLanguagesData {
  strengths: { name: string; description: string; icon: string }[];
  languages: { name: string; level: string; proficiency: number }[];
}
