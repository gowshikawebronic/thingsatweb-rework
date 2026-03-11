import { ServicePageData } from "../types";

export const DESIGN_DATA: ServicePageData = {
  id: "design",
  preview: {
    title: "UI/UX Design",
    tagline: "User-Centered Design",
    description: "Research-driven interface design, prototyping, and user experience strategy for web and mobile applications",
    image: "./assets/images/Icons/UI-UX.svg",
    icon: "PenTool",
    points: ["UX Research & Strategy", "UI Visual Design", "Interactive Prototyping", "Design Systems"],
    technologies: [
      { name: "Figma", logo: "/tech/figma.svg" },
      { name: "Sketch", logo: "/tech/sketch.svg" },
      { name: "Adobe XD", logo: "/tech/adobe-xd.svg" }
    ]
  },
  hero: {
    badge: "UI/UX Design Services",
    titlePrefix: "Crafting Intuitive",
    titleHighlight: "Digital Experiences",
    description: "We create user-centered designs that are beautiful, functional, and aligned with your business goals. From research to high-fidelity prototypes",
    features: ["User Research & Personas", "Wireframing & Prototyping", "Visual UI Design", "Design Systems & Accessibility"],
    ctaPrimary: "Start Design Project",
    ctaSecondary: "View Portfolio"
  },
  overview: {
    badge: "Service Overview",
    heading: "Design That",
    highlight: "Delivers Results",
    content: [
      "Great design is more than aesthetics; it's about solving problems. Our research-driven process ensures we understand your users before we draw a single pixel",
      "We deliver complete design systems, ensuring consistency and scalability for your product as it grows"
    ],
    differentiators: [
      { title: "Research Driven", description: "Decisions based on data, not guesses", icon: "Search" },
      { title: "Design Systems", description: "Scalable component libraries", icon: "Grid" },
      { title: "Accessibility", description: "WCAG 2.1 AA compliance", icon: "Eye" }
    ]
  },
  coreServices: {
    badge: "Design Services",
    titleLine1: "Creative",
    titleHighlight: "Capabilities",
    description: "End-to-end design from concept to code-ready",
    cards: [
      { title: "UX Research", desc: "User interviews, personas, and competitive analysis", icon: "Users", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Information Architecture", desc: "Site mapping and user flows", icon: "Map", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "Wireframing", desc: "Low-fidelity structure and layout planning", icon: "Layout", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Visual Design", desc: "High-fidelity UI, branding, and iconography", icon: "Palette", color: "text-pink-600", bg: "bg-pink-50" },
      { title: "Prototyping", desc: "Interactive click-throughs for testing", icon: "PlayCircle", color: "text-green-600", bg: "bg-green-50" }
    ],
    footer: {
      left: { title: "Design Sprint", type: "highlight", content: "1-2 Weeks" },
      right: { title: "Tools", type: "tags", content: ["Figma", "Sketch", "Adobe XD", "Miro"] }
    }
  },
  process: {
    title: "Design Process",
    description: "Double Diamond methodology",
    phases: [
      { phase: "Phase 1", title: "Discover", duration: "1-2 Weeks", icon: "Search", color: "bg-blue-600", objectives: ["Research", "Requirements"], activities: ["Interviews", "Audits"], deliverables: ["Research Report"] },
      { phase: "Phase 2", title: "Define", duration: "1 Week", icon: "Target", color: "bg-indigo-600", objectives: ["Strategy", "Structure"], activities: ["Personas", "User Flows"], deliverables: ["Sitemap"] },
      { phase: "Phase 3", title: "Design", duration: "2-4 Weeks", icon: "PenTool", color: "bg-pink-600", objectives: ["Visuals", "Interaction"], activities: ["Wireframing", "UI Design"], deliverables: ["Mockups"] },
      { phase: "Phase 4", title: "Test", duration: "1-2 Weeks", icon: "CheckCircle", color: "bg-green-600", objectives: ["Validation", "Refinement"], activities: ["Usability Testing"], deliverables: ["Final Designs"] }
    ]
  },
  techStack: {
    heading: "Design Toolkit",
    description: "Industry standard tools",
    frameworks: [
      { name: "Figma", desc: "Collaborative design" },
      { name: "Sketch", desc: "Vector graphics" },
      { name: "Miro", desc: "Whiteboarding" }
    ],
    llms: [], mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Design by Sector",
    description: "Tailored experiences",
    items: [
      { id: "healthcare", label: "Healthcare", icon: "Activity", theme: "blue", description: "Patient-centric design", features: [{ title: "Conversion", desc: "40% increase in bookings", icon: "TrendingUp", caseStudy: { title: "Patient Portal", result: "NPS +25" } }] }
    ]
  },
  caseStudies: {
    heading: "Design Impact",
    description: "Results driven by UX",
    items: [
      { id: 1, category: "UX Design", client: "Healthcare Provider", title: "Patient Portal Redesign", icon: "Activity", color: "text-blue-600", challenge: "Low engagement and high support calls", solution: "User-centered redesign focused on usability", implementation: ["User Research", "Prototyping"], results: [{ label: "Bookings", value: "+40%" }, { label: "Support", value: "-30%" }], quote: "Patients find it so much easier to use now", author: "Product Manager" }
    ]
  },
  faq: {
    heading: "Design FAQs",
    items: [
      { question: "What is the difference between UI and UX?", answer: "UX focuses on how it works and feels; UI focuses on how it looks" },
      { question: "Do you provide design systems?", answer: "Yes, we create comprehensive design systems with components and style guides" }
    ]
  },
  getStarted: {
    badge: "Start Designing",
    titleLines: ["Create Products", "Users Love"],
    description: "Get a UX audit of your current product",
    cards: [
      { id: "audit", title: "UX Audit", description: "Expert review of your interface", icon: "Search", theme: "light", list: ["Heuristic eval", "Improvement plan"], cta: { text: "Book Audit", link: "#" } }
    ],
    contact: { title: "Contact Design Team", subtitle: "Creative Studio", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};