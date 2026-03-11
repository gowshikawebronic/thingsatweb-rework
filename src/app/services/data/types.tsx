// src/app/service/data/types.ts

// --- 1. HERO SECTION ---
export interface HeroSection {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  features: string[];
  ctaPrimary: string;
  ctaSecondary?: string;
}

// --- 2. OVERVIEW SECTION ---
export interface OverviewSection {
  badge: string;
  heading: string;
  highlight: string;
  content: string[]; // Array of paragraphs
  differentiators: {
    title: string;
    description: string;
    icon: string; // String name for DynamicIcon (e.g. "Brain")
  }[];
}

// --- 3. CORE SERVICES SECTION ---
export interface CoreServicesSection {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  cards: {
    title: string;
    desc: string;
    icon: string;
    color?: string;
    bg?: string;
    list?: string[];
    tags?: string[];
    span?: string; // Layout helper like "md:col-span-2"
  }[];
  footer: {
    left: { title: string; type: string; content: any };
    right: { title: string; type: string; content: any };
  };
}

// --- 4. PROCESS SECTION ---
export interface ProcessSection {
  title: string;
  description: string;
  phases: {
    phase: string;
    title: string;
    duration: string;
    icon: string;
    color: string;
    objectives: string[];
    activities?: string[];
    deliverables?: string[];
  }[];
}

// --- 5. TECH STACK SECTION ---
export interface TechStackSection {
  heading: string;
  description: string;
  frameworks: { name: string; desc: string }[];
  llms: { name: string; desc: string }[];
  mlOps: string[];
  cloudPlatforms: {
    provider: string;
    color: string;
    services: string[];
  }[];
}

// --- 6. INDUSTRIES SECTION ---
export interface IndustriesSection {
  heading: string;
  description: string;
  items: {
    id: string;
    label: string;
    icon: string;
    theme: "blue" | "green";
    description: string;
    features: {
      title: string;
      desc: string;
      icon: string;
      caseStudy?: { title: string; result: string };
    }[];
  }[];
}

// --- 7. CASE STUDIES SECTION ---
export interface CaseStudiesSection {
  heading: string;
  description: string;
  items: {
    id: number | string;
    category: string;
    client: string;
    title: string;
    icon: string;
    color: string;
    challenge: string;
    solution: string;
    implementation: string[];
    results: { label: string; value: string }[];
    quote: string;
    author: string;
  }[];
}

// --- 8. FAQ SECTION ---
export interface FAQSection {
  heading: string;
  items: { question: string; answer: string }[];
}

// --- 9. GET STARTED SECTION ---
export interface GetStartedSection {
  badge: string;
  titleLines: string[];
  description: string;
  cards: {
    id: string;
    title: string;
    description: string;
    icon: string;
    theme: "light" | "dark";
    list: string[];
    cta: { text: string; link: string };
  }[];
  contact: {
    title: string;
    subtitle: string;
    methods: {
      label: string;
      value: string;
      icon: string;
      iconColor: string;
      link?: string;
      hoverColor?: string;
    }[];
  };
}

// --- 10. RELATED RESOURCES SECTION ---
export interface RelatedResourcesSection {
  services: { title: string; href: string; icon: string; color: string; bg: string }[];
  columns: { title: string; icon: string; items: { label: string; href: string }[] }[];
}

// --- MASTER INTERFACE (THE ROOT) ---
export interface ServicePageData {
  id: string; // URL Slug (e.g. "ai-machine-learning")

  // Data for the Card on the "All Services" page
  preview: {
    title: string;
    tagline: string;
    description: string;
    image: string;
    icon: string;
    points: string[];
    technologies: { name: string; logo: string }[];
  };

  // Data for the individual sections on the dynamic page
  hero: HeroSection;
  overview: OverviewSection;
  coreServices: CoreServicesSection;
  techStack: TechStackSection;
  process: ProcessSection;
  industries: IndustriesSection;
  caseStudies: CaseStudiesSection;
  faq: FAQSection;
  getStarted: GetStartedSection;
  relatedResources: RelatedResourcesSection;
}