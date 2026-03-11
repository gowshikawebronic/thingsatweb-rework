import { ServicePageData } from "../types";

export const APP_SERVICES_DATA: ServicePageData = {
  id: "application-services",
  preview: {
    title: "Application Services",
    tagline: "Lifecycle Management",
    description: "Comprehensive application lifecycle management: ERP/CRM implementation, integration, modernization, and 24/7 support",
    image: "/assets/images/Icons/Application Services.svg",
    icon: "Grid",
    points: ["ERP & CRM Implementation", "Application Integration (iPaaS)", "Legacy Modernization", "24/7 Application Support"],
    technologies: [
      { name: "SAP", logo: "/tech/sap.svg" },
      { name: "Salesforce", logo: "/tech/salesforce.svg" },
      { name: "Dynamics 365", logo: "/tech/dynamics.svg" }
    ]
  },
  hero: {
    badge: "Enterprise Applications",
    titlePrefix: "End-to-End",
    titleHighlight: "Application Services",
    description: "From selection to support, we manage your critical business applications. Expertise in SAP, Salesforce, Microsoft Dynamics, and custom integration solutions",
    features: ["ERP & CRM Implementation", "Legacy Modernization", "API & iPaaS Integration", "24/7 Managed Support"],
    ctaPrimary: "Discuss Implementation",
    ctaSecondary: "View Case Studies"
  },
  overview: {
    badge: "Service Overview",
    heading: "Optimizing Your",
    highlight: "App Landscape",
    content: [
      "We provide comprehensive lifecycle management for enterprise applications. Whether implementing a new ERP, integrating siloed systems, or modernizing legacy apps, we ensure your software drives efficiency",
      "Our team handles everything from requirements gathering and configuration to data migration, testing, and ongoing L1-L3 support"
    ],
    differentiators: [
      { title: "Platform Agnostic", description: "Expertise across SAP, Oracle, Microsoft, and Odoo", icon: "Layers" },
      { title: "Integration First", description: "Seamless data flow via iPaaS and APIs", icon: "Link" },
      { title: "24/7 Support", description: "Round-the-clock maintenance and issue resolution", icon: "Clock" }
    ]
  },
  coreServices: {
    badge: "Core Services",
    titleLine1: "Application",
    titleHighlight: "Capabilities",
    description: "Full-spectrum services for your software ecosystem",
    cards: [
      { title: "ERP Implementation", desc: "SAP S/4HANA, NetSuite, Dynamics 365. Config, migration, and training", icon: "Database", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "CRM Implementation", desc: "Salesforce, HubSpot, Zoho. Optimize sales and service workflows", icon: "Users", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "App Integration", desc: "Connect systems using MuleSoft, Boomi, or custom APIs", icon: "GitMerge", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Modernization", desc: "Re-platform legacy apps, microservices migration, and cloud moves", icon: "RefreshCw", color: "text-green-600", bg: "bg-green-50" },
      { title: "Maintenance & Support", desc: "L1-L3 support, bug fixes, patching, and performance tuning", icon: "LifeBuoy", color: "text-red-600", bg: "bg-red-50" }
    ],
    footer: {
      left: { title: "Typical ERP Project", type: "highlight", content: "6-9 Months" },
      right: { title: "Platforms", type: "tags", content: ["SAP", "Salesforce", "Microsoft", "Oracle"] }
    }
  },
  process: {
    title: "Implementation Methodology",
    description: "Proven phases for successful software rollout",
    phases: [
      { phase: "Phase 1", title: "Requirements", duration: "4-6 Weeks", icon: "FileText", color: "bg-blue-600", objectives: ["Process mapping", "Gap analysis"], activities: ["Workshops", "Documentation"], deliverables: ["Blueprint"] },
      { phase: "Phase 2", title: "Configuration", duration: "8-12 Weeks", icon: "Settings", color: "bg-indigo-600", objectives: ["System setup", "Customization"], activities: ["Development", "Integration"], deliverables: ["Configured System"] },
      { phase: "Phase 3", title: "Go-Live", duration: "4-6 Weeks", icon: "Rocket", color: "bg-green-600", objectives: ["Data migration", "Training", "Cutover"], activities: ["UAT", "User Training"], deliverables: ["Live System"] }
    ]
  },
  techStack: {
    heading: "Enterprise Platforms",
    description: "Expertise in leading business software ecosystems",
    frameworks: [],
    llms: [
      { name: "SAP S/4HANA", desc: "Enterprise Resource Planning" },
      { name: "Salesforce", desc: "Customer Relationship Management" },
      { name: "MuleSoft", desc: "Integration Platform" }
    ],
    mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Industry Solutions",
    description: " tailored implementations for key sectors",
    items: [
      { id: "manufacturing", label: "Manufacturing", icon: "Factory", theme: "blue", description: "ERP for production efficiency", features: [{ title: "Efficiency", desc: "40% improvement with SAP", icon: "TrendingUp", caseStudy: { title: "SAP Rollout", result: "$2M Savings" } }] }
    ]
  },
  caseStudies: {
    heading: "Implementation Success",
    description: "Real-world results from application projects",
    items: [
      { id: 1, category: "ERP", client: "Manufacturer ($200M)", title: "SAP S/4HANA Implementation", icon: "Database", color: "text-blue-600", challenge: "Inefficient legacy processes", solution: "Full cycle SAP implementation", implementation: ["Configuration", "Migration", "Training"], results: [{ label: "Efficiency", value: "+40%" }, { label: "Savings", value: "$2M/yr" }], quote: "Delivered on time and transformed our operations", author: "COO" }
    ]
  },
  faq: {
    heading: "App Services FAQs",
    items: [
      { question: "How long does an ERP implementation take?", answer: "Typically 6-12 months depending on complexity and scope" },
      { question: "Do you offer post-go-live support?", answer: "Yes, we offer 24/7 managed support services (L1-L3)" }
    ]
  },
  getStarted: {
    badge: "Optimize Apps",
    titleLines: ["Modernize Your", "Business Software"],
    description: "Discuss your implementation or support needs",
    cards: [
      { id: "consult", title: "Application Audit", description: "Review your current landscape", icon: "Search", theme: "light", list: ["Health check", "Optimization plan"], cta: { text: "Book Audit", link: "#" } }
    ],
    contact: { title: "Contact App Team", subtitle: "Software Experts", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};