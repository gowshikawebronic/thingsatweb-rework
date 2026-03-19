import { ServicePageData } from "@/AllData/services/types";

// Re-export specific parts of ServicePageData for reuse
export type HeroData = ServicePageData['hero'];
export type OverviewData = ServicePageData['overview'];
export type TechStackData = ServicePageData['techStack'];
export type ProcessData = ServicePageData['process'];
export type GetStartedData = ServicePageData['getStarted'];
export type RelatedResourcesData = ServicePageData['relatedResources'];


// --- EXCLUSIVE PRODUCT INTERFACES ---

// 1. Product Features (Replaces CoreServices)
// Designed for hardware specs, technical details, and capabilities
export interface ProductFeaturesData {
    badge: string;
    heading: string;
    description: string;
    features: ProductFeature[];
}

export interface ProductFeature {
    id: string;
    title: string;
    desc: string;
    icon: string; // DynamicIcon name
    color: string; // Tailwind color class
    bg: string;    // Tailwind bg class

    // Detailed Content
    fullDescription: string[];

    // Tabbed Technical Sections
    tabs?: {
        id: string;
        label: string;
        content: FeatureTabContent;
    }[];
}

export interface FeatureTabContent {
    type: "list" | "specs" | "steps";

    // For 'list' type
    items?: {
        term: string;
        description: string;
    }[];

    // For 'specs' type (Hardware/Software Specs)
    specs?: {
        label: string;
        value: string;
    }[];

    // For 'steps' type (User Journey)
    steps?: {
        step: number;
        title: string;
        description: string;
    }[];
}

// 2. Use Cases (Replaces Industries)
// Designed for deployment scenarios and real-world applications
export interface UseCasesData {
    badge: string;
    heading: string;
    description: string;
    cases: UseCaseItem[];
}

export interface UseCaseItem {
    title: string;
    description: string;
    icon: string;
    image?: string; // Optional illustrative image

    // Deployment Details
    deploymentStats?: {
        label: string;
        value: string;
    }[];

    // Benefits List
    benefits: string[];

    // ROI / Economics (Optional)
    economics?: {
        title: string;
        items: {
            label: string;
            value: string;
        }[];
    };
}

// 3. Business Model (NEW)
// Designed for SaaS pricing, licensing, and revenue models
export interface BusinessModelData {
    badge: string;
    heading: string;
    description: string;

    // Revenue Streams / Pricing Tiers
    streams: {
        title: string;
        description: string;
        icon: string;
        pricing: {
            plan: string;
            price: string;
            features: string[];
        }[];
    }[];

    // Profitability Example (Optional)
    profitability?: {
        title: string;
        metrics: {
            label: string;
            value: string;
            subtext?: string;
        }[];
    };
}

// 4. Success Metrics (NEW)
// Designed for uptime, reliability, and performance stats
export interface SuccessMetricsData {
    badge: string;
    heading: string;
    description: string;
    media?: {
        type: "image" | "video";
        src: string;
        alt: string;
    };
    metrics: {
        value: string;
        label: string;
        description: string;
        icon: string;
    }[];
}

// --- MAIN PRODUCT PAGE INTERFACE ---
export interface ProductPageData {
    id: string;

    // Universal Sections (Shared with Services)
    hero: HeroData;
    overview: OverviewData;
    techStack: TechStackData;
    process: ProcessData;     // Renamed to "Implementation Process" in data
    getStarted: GetStartedData;
    relatedResources?: RelatedResourcesData;

    // Exclusive Product Sections
    productFeatures: ProductFeaturesData;
    useCases: UseCasesData;
    businessModel: BusinessModelData;
    successMetrics: SuccessMetricsData;
}
