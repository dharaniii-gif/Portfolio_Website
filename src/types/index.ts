export interface Project {
  id: string;
  number: string;
  title: string;
  domain: string;
  concept: string;
  stack: string[];
  description: string;
  purpose: string;
  features: string[];
  contribution: string[];
  screenshots?: {
    url: string;
    caption: string;
  }[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    cardBg: string;
    border: string;
    tagBg: string;
    textAccent: string;
  };
  githubUrl: string;
  liveUrl?: string;
  prototypeUrl?: string;
  badge?: string;
  isPrototype?: boolean;
}

export interface SkillCategory {
  name: string;
  items: {
    name: string;
    icon?: string;
    description?: string;
  }[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  detail?: string;
  tag?: string;
  type: 'education' | 'experience' | 'achievement' | 'leadership';
}
