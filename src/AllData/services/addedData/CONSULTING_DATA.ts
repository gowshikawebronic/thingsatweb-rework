import { ServicePageData } from "../types";

export const CONSULTING_DATA: ServicePageData = {
  id: "consulting",
  preview: {
    title: "IT Consulting",
    tagline: "Strategic Advisory",
    description: "Align IT investments with business objectives through C-level advisory, digital strategy, and technology roadmaps",
    image: "./assets/images/Icons/IT Consulting.svg",
    icon: "Compass",
    points: ["IT Strategy & Planning", "Enterprise Architecture", "M&A Tech Due Diligence", "Fractional CIO Services"],
    technologies: [
      { name: "TOGAF", logo: "/tech/togaf.svg" },
      { name: "ITIL", logo: "/tech/itil.svg" },
      { name: "Zachman", logo: "/tech/zachman.svg" }
    ]
  },
  hero: {
    badge: "Consulting & Strategy",
    titlePrefix: "Strategic IT",
    titleHighlight: "Transformation",
    description: "We provide C-level advisory, digital strategy, technology roadmaps, and transformation leadership to align your IT investments with core business objectives",
    features: ["Strategic Roadmap Development", "Enterprise Architecture Design", "M&A Technology Due Diligence", "Fractional CIO/CTO Services"],
    ctaPrimary: "Book Strategy Session",
    ctaSecondary: "View Case Studies"
  },
  overview: {
    badge: "Service Overview",
    heading: "Aligning Technology with",
    highlight: "Business Goals",
    content: [
      "Strategic technology consulting helps organizations navigate complex digital landscapes. We ensure your IT investments deliver measurable business value through rigorous planning and expert leadership",
      "From enterprise architecture rationalization to M&A due diligence, our consultants bring decades of experience to solve your most critical technology challenges"
    ],
    differentiators: [
      { title: "C-Level Expertise", description: "Advisors with CIO/CTO backgrounds", icon: "Briefcase" },
      { title: "Business Focus", description: "Technology strategies driven by ROI", icon: "Target" },
      { title: "Holistic Approach", description: "Covering people, process, and technology", icon: "Users" }
    ]
  },
  coreServices: {
    badge: "Core Services",
    titleLine1: "Strategic",
    titleHighlight: "Advisory Services",
    description: "Comprehensive consulting to guide your digital evolution",
    cards: [
      { title: "IT Strategy & Planning", desc: "Roadmap development, budget optimization, and cloud strategy alignment", icon: "Map", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Enterprise Architecture", desc: "Application portfolio rationalization and security architecture design", icon: "Layout", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "Tech Due Diligence", desc: "M&A assessment, technical debt analysis, and risk evaluation", icon: "Search", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "CIO/CTO Advisory", desc: "Fractional leadership, governance frameworks, and team building", icon: "UserCheck", color: "text-green-600", bg: "bg-green-50" },
      { title: "Process Consulting", desc: "Workflow optimization and system selection for operational efficiency", icon: "Settings", color: "text-teal-600", bg: "bg-teal-50" }
    ],
    footer: {
      left: { title: "Typical Engagement", type: "highlight", content: "3-6 Months" },
      right: { title: "Deliverables", type: "tags", content: ["Strategy Roadmap", "Architecture Blueprint", "Risk Assessment"] }
    }
  },
  process: {
    title: "Consulting Methodology",
    description: "A structured approach to strategic transformation",
    phases: [
      { phase: "Phase 1", title: "Discovery", duration: "2-4 Weeks", icon: "Search", color: "bg-blue-600", objectives: ["Stakeholder interviews", "Current state analysis", "Goal definition"], activities: ["Workshops", "Data collection"], deliverables: ["Assessment Report"] },
      { phase: "Phase 2", title: "Strategy", duration: "4-6 Weeks", icon: "Map", color: "bg-indigo-600", objectives: ["Gap analysis", "Future state design", "Roadmap creation"], activities: ["Solution design", "Financial modeling"], deliverables: ["Strategic Roadmap", "Budget Plan"] },
      { phase: "Phase 3", title: "Execution", duration: "Ongoing", icon: "PlayCircle", color: "bg-green-600", objectives: ["Implementation oversight", "Change management", "Value realization"], activities: ["Program management", "Vendor coordination"], deliverables: ["Implementation", "KPI Reporting"] }
    ]
  },
  techStack: {
    heading: "Frameworks & Standards",
    description: "We utilize industry-standard frameworks to ensure consistent and high-quality outcomes",
    frameworks: [
      { name: "TOGAF", desc: "Enterprise Architecture framework" },
      { name: "ITIL", desc: "IT Service Management best practices" },
      { name: "COBIT", desc: "Governance and management framework" }
    ],
    llms: [], mlOps: [], cloudPlatforms: [] // Not applicable for pure consulting
  },
  industries: {
    heading: "Industry Expertise",
    description: "Strategic guidance tailored to sector-specific challenges",
    items: [
      { id: "manufacturing", label: "Manufacturing", icon: "Factory", theme: "blue", description: "M&A technology integration", features: [{ title: "M&A Success", desc: "Identified $3M hidden costs", icon: "DollarSign", caseStudy: { title: "Mfg Merger", result: "Successful Integration" } }] }
    ]
  },
  caseStudies: {
    heading: "Consulting Impact",
    description: "Delivering measurable value through strategic advice",
    items: [
      { id: 1, category: "M&A", client: "Manufacturing Co", title: "Technology Due Diligence", icon: "Search", color: "text-blue-600", challenge: "Complex merger with potential hidden tech debt", solution: "Comprehensive due diligence identifying integration risks", implementation: ["Risk Assessment", "Integration Planning"], results: [{ label: "Savings", value: "$3M" }, { label: "Timeline", value: "6 Months" }], quote: "Their insights saved us millions during negotiation", author: "CFO" }
    ]
  },
  faq: {
    heading: "Consulting FAQs",
    items: [
      { question: "What is a fractional CIO?", answer: "Experienced IT leadership on a part-time or retainer basis to guide strategy without the cost of a full-time executive" },
      { question: "How long are consulting engagements?", answer: "They range from short 2-week assessments to multi-year transformation programs" }
    ]
  },
  getStarted: {
    badge: "Strategic Advice",
    titleLines: ["Ready to Align", "IT with Business?"],
    description: "Schedule a strategy workshop to identify opportunities",
    cards: [
      { id: "workshop", title: "Strategy Workshop", description: "Define your technology roadmap", icon: "Map", theme: "light", list: ["Current state review", "Goal setting"], cta: { text: "Book Workshop", link: "#" } }
    ],
    contact: { title: "Contact Consultants", subtitle: "Expert Advisors", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] } // Add as needed
};