import { ServicePageData } from "../types";

export const QA_DATA: ServicePageData = {
  id: "qa-testing",
  preview: {
    title: "QA & Testing",
    tagline: "Quality Assurance",
    description: "Comprehensive QA services: Test automation, performance testing, security testing, and manual functional testing",
    image: "/assets/images/Icons/QA.svg",
    icon: "CheckCircle",
    points: ["Test Automation", "Performance & Load Testing", "Security Testing", "Mobile App Testing"],
    technologies: [
      { name: "Selenium", logo: "/tech/selenium.svg" },
      { name: "Appium", logo: "/tech/appium.svg" },
      { name: "JMeter", logo: "/tech/jmeter.svg" }
    ]
  },
  hero: {
    badge: "QA & Testing Services",
    titlePrefix: "Flawless",
    titleHighlight: "Software Quality",
    description: "Ensure your software is bug-free, secure, and performant. We offer manual and automated testing services integrated into your CI/CD pipeline",
    features: ["Test Automation (Selenium/Appium)", "Performance & Load Testing", "Security Vulnerability Assessment", "Mobile & API Testing"],
    ctaPrimary: "Get QA Assessment",
    ctaSecondary: "View Tools"
  },
  overview: {
    badge: "Service Overview",
    heading: "Ensuring Digital",
    highlight: "Excellence",
    content: [
      "Quality Assurance is critical for user satisfaction. Our comprehensive testing services cover functionality, performance, and security to ensure your software performs flawlessly in the real world",
      "We emphasize automation to speed up release cycles, reducing regression testing time from days to hours"
    ],
    differentiators: [
      { title: "Automation First", description: "Focus on CI/CD integration and rapid feedback", icon: "Zap" },
      { title: "Full Coverage", description: "Functional, Performance, Security, and Usability", icon: "Maximize" },
      { title: "Device Labs", description: "Testing on real mobile devices, not just emulators", icon: "Smartphone" }
    ]
  },
  coreServices: {
    badge: "Testing Services",
    titleLine1: "Quality",
    titleHighlight: "Assurance",
    description: "End-to-end testing capabilities",
    cards: [
      { title: "Functional Testing", desc: "Manual, regression, and UAT to ensure features work", icon: "CheckSquare", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Test Automation", desc: "Frameworks using Selenium, Cypress, Appium", icon: "Code", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "Performance Testing", desc: "Load, stress, and scalability testing with JMeter/K6", icon: "TrendingUp", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Security Testing", desc: "Vulnerability assessment and penetration testing", icon: "Shield", color: "text-red-600", bg: "bg-red-50" },
      { title: "Mobile App Testing", desc: "iOS/Android compatibility and usability", icon: "Smartphone", color: "text-green-600", bg: "bg-green-50" }
    ],
    footer: {
      left: { title: "Automation Impact", type: "highlight", content: "95% Reduction" },
      right: { title: "Tools", type: "tags", content: ["Selenium", "Appium", "JMeter", "Postman"] }
    }
  },
  process: {
    title: "QA Process",
    description: "Rigorous testing lifecycle",
    phases: [
      { phase: "Phase 1", title: "Plan", duration: "1-2 Weeks", icon: "FileText", color: "bg-blue-600", objectives: ["Test strategy", "Requirement analysis"], activities: ["Planning", "Case Design"], deliverables: ["Test Plan"] },
      { phase: "Phase 2", title: "Design", duration: "2-3 Weeks", icon: "Code", color: "bg-indigo-600", objectives: ["Script creation", "Data setup"], activities: ["Automation", "Env Setup"], deliverables: ["Test Scripts"] },
      { phase: "Phase 3", title: "Execute", duration: "Ongoing", icon: "Play", color: "bg-green-600", objectives: ["Run tests", "Report bugs"], activities: ["Execution", "Retesting"], deliverables: ["Bug Reports"] }
    ]
  },
  techStack: {
    heading: "QA Tools",
    description: "Best-in-class testing frameworks",
    frameworks: [
      { name: "Selenium", desc: "Web automation" },
      { name: "Cypress", desc: "Modern web testing" },
      { name: "Appium", desc: "Mobile automation" }
    ],
    llms: [], mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Industry QA",
    description: "Testing for critical sectors",
    items: [
      { id: "ecommerce", label: "E-Commerce", icon: "ShoppingCart", theme: "blue", description: "High-load performance testing", features: [{ title: "Automation", desc: "Reduced testing time 90%", icon: "Zap", caseStudy: { title: "E-comm Automation", result: "Zero Critical Bugs" } }] }
    ]
  },
  caseStudies: {
    heading: "QA Results",
    description: "Measurable quality improvements",
    items: [
      { id: 1, category: "Automation", client: "E-commerce Platform", title: "Test Automation Suite", icon: "Code", color: "text-blue-600", challenge: "Long regression cycles (5 days)", solution: "Implemented full automation suite", implementation: ["Selenium", "CI/CD Integration"], results: [{ label: "Time", value: "4 Hours" }, { label: "Coverage", value: "95%" }], quote: "We release faster with more confidence", author: "QA Lead" }
    ]
  },
  faq: {
    heading: "QA FAQs",
    items: [
      { question: "Do you do manual testing?", answer: "Yes, manual testing is essential for exploratory and usability testing, often preceding automation" },
      { question: "What tools do you use for load testing?", answer: "We primarily use JMeter, Gatling, and K6" }
    ]
  },
  getStarted: {
    badge: "Improve Quality",
    titleLines: ["Achieve Flawless", "Software"],
    description: "Get a free QA audit of your application",
    cards: [
      { id: "audit", title: "QA Audit", description: "Review your testing process", icon: "CheckCircle", theme: "light", list: ["Process review", "Automation potential"], cta: { text: "Start Audit", link: "#" } }
    ],
    contact: { title: "Contact QA Team", subtitle: "Test Engineers", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};