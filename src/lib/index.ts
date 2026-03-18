export const ROUTE_PATHS = {
  HOME: '/',
  FEATURES: '/funzionalita',
  SOLUTIONS: '/soluzioni',
  ABOUT: '/chi-siamo',
  CONTACT: '/contatti',
} as const;

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
  impact: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar?: string;
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
