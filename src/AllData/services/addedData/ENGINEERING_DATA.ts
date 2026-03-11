import { ServicePageData } from "../types";

export const ENGINEERING_DATA: ServicePageData = {
  id: "engineering",
  preview: {
    title: "Engineering Services",
    tagline: "Product Innovation",
    description: "Product engineering, embedded systems, and hardware design. From PCB layout to firmware and prototyping",
    image: "/assets/images/Icons/Engineering Services.svg",
    icon: "Cpu",
    points: ["Product Engineering & MVP", "Embedded Systems (Firmware)", "Hardware Design (PCB)", "R&D and Prototyping"],
    technologies: [
      { name: "C++", logo: "/tech/cpp.svg" },
      { name: "Rust", logo: "/tech/rust.svg" },
      { name: "Altium", logo: "/tech/altium.svg" }
    ]
  },
  hero: {
    badge: "Engineering Services",
    titlePrefix: "Technical",
    titleHighlight: "Innovation",
    description: "We provide end-to-end engineering for technology products, encompassing embedded systems, hardware design, and full-lifecycle product development",
    features: ["Embedded Firmware (C/C++, Rust)", "PCB Design & Prototyping", "IoT Device Development", "Quality Engineering & Testing"],
    ctaPrimary: "Start Project",
    ctaSecondary: "View Capabilities"
  },
  overview: {
    badge: "Service Overview",
    heading: "Building the",
    highlight: "Future of Hardware",
    content: [
      "Our engineering team bridges the gap between hardware and software. We specialize in embedded systems, ensuring your IoT devices and hardware products are reliable, efficient, and market-ready",
      "From initial PCB design and prototyping to firmware development and mass manufacturing support, we handle the technical complexities of product creation"
    ],
    differentiators: [
      { title: "Full Stack Hardware", description: "Capabilities from PCB to Firmware to Cloud", icon: "Layers" },
      { title: "R&D Focus", description: "Innovation labs for proof of concepts", icon: "Beaker" },
      { title: "Compliance Ready", description: "Design for certification (FCC, CE, UL)", icon: "CheckSquare" }
    ]
  },
  coreServices: {
    badge: "Core Engineering",
    titleLine1: "Product",
    titleHighlight: "Development",
    description: "Engineering services for hardware and software products",
    cards: [
      { title: "Product Engineering", desc: "Ideation, MVP development, and roadmap planning", icon: "Lightbulb", color: "text-yellow-600", bg: "bg-yellow-50" },
      { title: "Embedded Systems", desc: "Firmware (C/C++, Rust), RTOS, and Microcontrollers", icon: "Cpu", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Hardware Design", desc: "PCB layout, circuit design, and prototyping", icon: "Grid", color: "text-green-600", bg: "bg-green-50" },
      { title: "Quality Engineering", desc: "Reliability testing, compliance, and automated testing", icon: "CheckCircle", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "R&D", desc: "Feasibility studies, PoCs, and innovation labs", icon: "Beaker", color: "text-red-600", bg: "bg-red-50" }
    ],
    footer: {
      left: { title: "Typical Prototype", type: "highlight", content: "8-12 Weeks" },
      right: { title: "Tech", type: "tags", content: ["ARM", "ESP32", "Altium", "Rust"] }
    }
  },
  process: {
    title: "Engineering Lifecycle",
    description: "From concept to manufacturing",
    phases: [
      { phase: "Phase 1", title: "Concept", duration: "2-4 Weeks", icon: "Lightbulb", color: "bg-yellow-600", objectives: ["Feasibility", "Requirements"], activities: ["Research", "Spec definition"], deliverables: ["Product Spec"] },
      { phase: "Phase 2", title: "Design", duration: "4-8 Weeks", icon: "PenTool", color: "bg-blue-600", objectives: ["Schematics", "Layout"], activities: ["PCB Design", "Firmware Arch"], deliverables: ["Design Files"] },
      { phase: "Phase 3", title: "Prototype", duration: "4-6 Weeks", icon: "Cpu", color: "bg-green-600", objectives: ["Fabrication", "Assembly"], activities: ["Prototyping", "Board Bring-up"], deliverables: ["Working Prototype"] }
    ]
  },
  techStack: {
    heading: "Engineering Tools",
    description: "Standard tools for hardware and firmware",
    frameworks: [
      { name: "Altium Designer", desc: "PCB Design" },
      { name: "KiCAD", desc: "Open source PCB" },
      { name: "FreeRTOS", desc: "Real-time OS" }
    ],
    llms: [], mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Industry Applications",
    description: "Hardware for specialized sectors",
    items: [
      { id: "iot", label: "IoT", icon: "Wifi", theme: "blue", description: "Smart devices and sensors", features: [{ title: "Smart Meter", desc: "10-year battery life", icon: "Battery", caseStudy: { title: "IoT Meter", result: "100k Units" } }] }
    ]
  },
  caseStudies: {
    heading: "Engineering Success",
    description: "Bringing products to life",
    items: [
      { id: 1, category: "IoT", client: "Utility Co", title: "Smart Meter Development", icon: "Wifi", color: "text-blue-600", challenge: "Need for long-life, certified smart meter", solution: "Custom hardware/firmware design", implementation: ["PCB Design", "Firmware", "Certification"], results: [{ label: "Deployed", value: "100k Units" }, { label: "Battery", value: "10 Years" }], quote: "Reliable hardware that meets all regulations", author: "Product Director" }
    ]
  },
  faq: {
    heading: "Engineering FAQs",
    items: [
      { question: "Do you handle manufacturing?", answer: "We support the manufacturing process (DFM) and coordinate with contract manufacturers" },
      { question: "What microcontrollers do you support?", answer: "We work with ARM Cortex, ESP32, AVR, PIC, and RISC-V architectures" }
    ]
  },
  getStarted: {
    badge: "Build Hardware",
    titleLines: ["Engineer Your", "Next Product"],
    description: "Discuss your product idea with our engineers",
    cards: [
      { id: "poc", title: "Proof of Concept", description: "Validate your idea", icon: "Lightbulb", theme: "light", list: ["Feasibility study", "Rough prototype"], cta: { text: "Start PoC", link: "#" } }
    ],
    contact: { title: "Contact Engineers", subtitle: "Product Team", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};