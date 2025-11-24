
import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export interface ProjectCardProps {
  title: string;
  tech: string[];
  description: string;
  link?: string;
}

export interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  tech?: string[];
  points: string[];
}
