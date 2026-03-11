// src/app/service/data/types.ts

export interface RichItem {
  term?: string;
  description?: string;
  subItems?: string[];
}

export interface RichSection {
  heading?: string;
  content?: string[];
  items?: RichItem[];
  listType?: 'unordered' | 'ordered';
}

export interface ServicePageData {
  id: string;

  preview: {
    title: string;
    tagline: string;
    description: string;
    image: string;
    icon: string;
    localIcon?: string;
    points: string[];
    technologies: { name: string; logo: string }[];
  };

  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    features: string[];
    ctaPrimary: string;
    ctaSecondary?: string;
  };

  overview: {
    badge: string;
    heading: string;
    highlight: string;
    content: string[];
    description?: string;
    differentiators: {
      title: string;
      description: string;
      icon: string;
    }[];
  };

  coreServices: {
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
      span?: string;

      // New fields for rich content fidelity
      fullDescription?: string[];
      subSections?: RichSection[];
    }[];
    footer: {
      left: { title: string; type: string; content: any };
      right?: { title: string; type: string; content: any };
    };
  };

  process: {
    title: string;
    description: string;
    phases: {
      phase: string;
      title: string;
      duration: string;
      icon: string;
      color: string;
      objectives: string[];
      activities: string[];
      deliverables: string[];
    }[];
  };

  techStack: {
    heading: string;
    description: string;
    badge?: string;
    frameworks?: { name: string; desc: string }[];
    llms?: { name: string; desc: string }[];
    mlOps?: (string | { name: string; desc: string })[];
    cloudPlatforms?: {
      provider: string;
      color: string;
      services: (string | { name: string; desc: string })[];
    }[];
  };

  industries: {
    heading: string;
    description: string;
    items: {
      id: string;
      label: string;
      icon: string;
      theme: "blue" | "green" | "orange" | "purple" | "teal" | "indigo";
      description: string;
      features: {
        title: string;
        desc: string;
        icon: string;
        caseStudy?: { title: string; result: string };
      }[];
    }[];
  };

  caseStudies: {
    heading: string;
    description: string;
    items: {
      id: number;
      category: string;
      client: string;
      title: string;
      icon: string;
      color: string;
      challenge: string;
      solution: string;
      fullDescription?: string[]; // For narrative content
      implementation: string[];
      results: { label: string; value: string }[];
      quote: string;
      author: string;
    }[];
  };

  faq: {
    heading: string;
    items: {
      question: string;
      answer: string;
      list?: string[];
      answerFooter?: string;
    }[];
  };

  getStarted: {
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
      }[];
    };
  };

  relatedResources: {
    services: { title: string; id?: string; href?: string; icon: string; color: string; bg: string }[];
    columns: { title: string; icon: string; items: { label: string; href: string }[] }[];
  };
}
