export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export interface NavItem {
  id: string;
  labelAr: string;
  labelEn: string;
  href: string;
}

export interface MetricItem {
  id: string;
  labelAr: string;
  labelEn: string;
  value: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  contextAr: string;
  contextEn: string;
  category: 'usage' | 'speed' | 'financial' | 'reach';
  verifiedSource?: string;
}

export interface ArchitectureNode {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  category: 'client' | 'hosting' | 'backend' | 'ai' | 'output';
  techStack: string;
  roleAr: string;
  roleEn: string;
  detailsAr: string[];
  detailsEn: string[];
  badge?: string;
}

export interface RequestFlowStep {
  step: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  fromNode: string;
  toNode: string;
  protocol?: string;
  speedHighlight?: string;
}

export interface TimelineMilestone {
  phase: string;
  titleAr: string;
  titleEn: string;
  dateOrStageAr: string;
  dateOrStageEn: string;
  descriptionAr: string;
  descriptionEn: string;
  highlightsAr: string[];
  highlightsEn: string[];
  status: 'completed' | 'current' | 'future';
}

export interface TestimonialSlot {
  id: number;
  imageSrc?: string;
  captionAr?: string;
  captionEn?: string;
  aspectRatio: string;
}

export interface ProductRoute {
  path: string;
  nameAr: string;
  nameEn: string;
  purposeAr: string;
  purposeEn: string;
  statusAr: string;
  statusEn: string;
}

