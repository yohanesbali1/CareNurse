export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  features: string[];
  price: string;
  duration: string;
}

export type ServiceCategory = 'luka' | 'tindakan' | 'pendampingan' | 'all';

export interface Package {
  id: string;
  name: string;
  description: string;
  type: 'visit' | 'shift' | 'livein';
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaAction: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  content: string;
  author: string;
  location: string;
  service: string;
  initials: string;
  bgColor: string;
  textColor: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface CalculatorOption {
  value: string;
  label: string;
  price: number;
  name: string;
}

export interface CalculatorState {
  serviceId: string;
  days: number;
  includeKit: boolean;
  includeUrgent: boolean;
}

export interface ToastNotification {
  id: string;
  patientName: string;
  service: string;
  location: string;
  timeAgo: string;
  status: 'confirmed' | 'pending';
}

export interface WhatsAppConfig {
  phoneNumber: string;
  displayNumber: string;
}

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}