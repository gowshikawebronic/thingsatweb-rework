import { ServicePageData } from "../types";

export const MOBILE_DATA: ServicePageData = {
  id: "mobile-development",
  preview: {
    title: "Mobile Development",
    tagline: "iOS & Android Apps",
    description: "Native and cross-platform mobile app development. iOS, Android, Flutter, and React Native solutions for consumer and enterprise",
    image: "/assets/images/Icons/mobile development.svg",
    icon: "Smartphone",
    points: ["Native iOS & Android", "Cross-Platform (Flutter)", "Enterprise Mobility", "Progressive Web Apps"],
    technologies: [
      { name: "Swift", logo: "/tech/swift.svg" },
      { name: "Kotlin", logo: "/tech/kotlin.svg" },
      { name: "Flutter", logo: "/tech/flutter.svg" }
    ]
  },
  hero: {
    badge: "Mobile App Development",
    titlePrefix: "High-Performance",
    titleHighlight: "Mobile Experiences",
    description: "We build beautiful, feature-rich mobile applications for iOS and Android. Choose from native performance or cross-platform efficiency with Flutter and React Native",
    features: ["Native iOS (Swift) & Android (Kotlin)", "Cross-Platform (Flutter/React Native)", "Enterprise Mobile Solutions", "App Store Optimization & Launch"],
    ctaPrimary: "Build Your App",
    ctaSecondary: "View Portfolio"
  },
  overview: {
    badge: "Service Overview",
    heading: "Mobile First",
    highlight: "Innovation",
    description: "Mobile is the primary touchpoint for modern users. We design and develop mobile solutions that engage users and drive business value, from consumer apps to enterprise workforce tools",
    content: ["We offer the full spectrum: native apps for maximum performance, cross-platform apps for speed-to-market, and PWAs for reach", "Our team handles the entire lifecycle, including design, development, testing, and App Store submission"],
    differentiators: [
      { title: "Cross-Platform Experts", description: "Save 30-40% with Flutter", icon: "Smartphone" },
      { title: "Enterprise Ready", description: "MDM and secure offline capabilities", icon: "Briefcase" },
      { title: "End-to-End", description: "Design to App Store launch", icon: "Rocket" }
    ]
  },
  coreServices: {
    badge: "Mobile Services",
    titleLine1: "App Development",
    titleHighlight: "Capabilities",
    description: "Solutions for every mobile strategy",
    cards: [
      { title: "iOS Development", desc: "Native Swift/SwiftUI apps for iPhone, iPad, and Watch", icon: "Apple", color: "text-gray-800", bg: "bg-gray-100" },
      { title: "Android Development", desc: "Native Kotlin apps with Material Design", icon: "Smartphone", color: "text-green-600", bg: "bg-green-50" },
      { title: "Cross-Platform", desc: "Flutter and React Native for single codebase efficiency", icon: "Code", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "PWA", desc: "Progressive Web Apps with offline capabilities", icon: "Globe", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Enterprise Apps", desc: "Field service, sales enablement, and employee portals", icon: "Briefcase", color: "text-purple-600", bg: "bg-purple-50" }
    ],
    footer: {
      left: { title: "Time to Market", type: "highlight", content: "3-6 Months" },
      right: { title: "Tech", type: "tags", content: ["Swift", "Kotlin", "Flutter", "React Native"] }
    }
  },
  process: {
    title: "App Lifecycle",
    description: "From concept to app store",
    phases: [
      { phase: "Phase 1", title: "Design", duration: "3-4 Weeks", icon: "PenTool", color: "bg-blue-600", objectives: ["UI/UX", "Wireframing"], activities: ["Prototyping"], deliverables: ["App Designs"] },
      { phase: "Phase 2", title: "Develop", duration: "8-16 Weeks", icon: "Code", color: "bg-indigo-600", objectives: ["Coding", "API Integration"], activities: ["Sprints"], deliverables: ["Beta App"] },
      { phase: "Phase 3", title: "Launch", duration: "1-2 Weeks", icon: "Rocket", color: "bg-green-600", objectives: ["Store Submission"], activities: ["Review", "ASO"], deliverables: ["Live App"] }
    ]
  },
  techStack: {
    heading: "Mobile Tech",
    description: "Native and cross-platform tools",
    frameworks: [
      { name: "Flutter", desc: "Google's UI toolkit" },
      { name: "React Native", desc: "JS mobile framework" },
      { name: "SwiftUI", desc: "Modern iOS UI" }
    ],
    llms: [], mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Mobile Sectors",
    description: "Apps for key industries",
    items: [
      { id: "food", label: "Food & Bev", icon: "Coffee", theme: "green", description: "Delivery and ordering apps", features: [{ title: "Growth", desc: "100K downloads", icon: "Download", caseStudy: { title: "Delivery App", result: "4.6 Stars" } }] }
    ]
  },
  caseStudies: {
    heading: "App Success",
    description: "Featured mobile projects",
    items: [
      { id: 1, category: "Consumer App", client: "Food Delivery Startup", title: "Cross-Platform Delivery App", icon: "Smartphone", color: "text-orange-600", challenge: "Need iOS and Android apps on limited budget", solution: "Flutter development for single codebase", implementation: ["Flutter", "Real-time Tracking"], results: [{ label: "Downloads", value: "100K" }, { label: "Cost Saving", value: "35%" }], quote: "Native performance at a fraction of the cost", author: "Founder" }
    ]
  },
  faq: {
    heading: "Mobile FAQs",
    items: [
      { question: "Should I build Native or Cross-Platform?", answer: "Native offers best performance for complex apps. Cross-platform (Flutter) is faster and cheaper for most business apps" },
      { question: "How long does it take to get on the App Store?", answer: "Apple review takes 24-48 hours. We handle the entire submission process" }
    ]
  },
  getStarted: {
    badge: "Go Mobile",
    titleLines: ["Build Your", "Mobile App"],
    description: "Get a quote for your app idea",
    cards: [
      { id: "quote", title: "App Estimate", description: "Discuss features and cost", icon: "Calculator", theme: "light", list: ["Feature breakdown", "Cost range"], cta: { text: "Get Quote", link: "#" } }
    ],
    contact: { title: "Contact App Team", subtitle: "Mobile Developers", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};