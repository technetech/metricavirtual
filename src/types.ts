export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface IndustrySector {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  imageSeed: string;
  iconName: string;
}

export interface DemoTour {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  image: string;
  highlights: string[];
  features: string[];
  hotspotsCount: number;
  expectedDate?: string;
  link?: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tecnico' | 'tiempos';
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  estimatedArea: string;
  message: string;
}
