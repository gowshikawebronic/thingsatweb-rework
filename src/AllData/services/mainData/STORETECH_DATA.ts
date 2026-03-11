import { ServicePageData } from "../types";

export const STORETECH_DATA: ServicePageData = {
  id: "storetech",

  // --- PREVIEW SECTION ---
  preview: {
    title: "StoreTech",
    tagline: "Autonomous Retail",
    description: "Cloud-native autonomous retail infrastructure powering unmanned stores, smart self-checkout, and IoT vending across 150+ locations",
    image: "/assets/platforms/storetech-preview.png", // Ensure path exists
    icon: "ShoppingCart",
    points: [
      "Unmanned Store Infrastructure",
      "AI Computer Vision Checkout",
      "IoT Smart Vending",
      "BankID & App Integration"
    ],
    technologies: [
      { name: "PAX Terminals", logo: "/tech/pax.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "AWS IoT", logo: "/tech/aws-iot.svg" },
      { name: "Flutter", logo: "/tech/flutter.svg" },
      { name: "MQTT", logo: "/tech/mqtt.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "Automated Retail Ecosystem",
    titlePrefix: "Cloud-Native",
    titleHighlight: "Autonomous Retail",
    description: "Consolidate traditional multi-vendor retail technology stacks into a single platform. Reduce deployment time from weeks to 10 days while cutting operational costs by 60%",
    features: [
      "150+ active locations processed 50M+ transactions",
      "99.7% transaction success rate",
      "Single platform: POS, Payment, Inventory, IoT",
      "Zero downtime over 5 years of operation"
    ],
    ctaPrimary: "Request Demo",
    ctaSecondary: "View Live Installations"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Platform Overview",
    heading: "The Next Generation of",
    highlight: "Retail Automation",
    content: [
      "StoreTech is a comprehensive, cloud-native platform powering unmanned convenience stores, smart self-checkouts, and intelligent vending machines across Europe and India. Unlike complex multi-vendor stacks, StoreTech consolidates everything into a unified system built on PAX IM30 Android terminals. ",
      "With over 50 million transactions processed, our platform proves that autonomous retail is superior to staffed operations in efficiency and consistency. We offer a 10-day deployment timeline with a single point of contact for hardware, software, and payments"
    ],
    differentiators: [
      {
        title: "Unified Platform",
        description: "Replaces POS, Payment Gateway, Inventory, and Access Control with one system",
        icon: "Layers"
      },
      {
        title: "Deployment Speed",
        description: "Deploy fully autonomous stores in 10 days vs typical 4-6 weeks",
        icon: "Zap"
      },
      {
        title: "Reliability",
        description: "99.7% success rate with zero critical downtime in 5 years",
        icon: "ShieldCheck"
      },
      {
        title: "Hardware Agnostic",
        description: "Built on robust PAX IM30 Android terminals and standard IoT sensors",
        icon: "Smartphone"
      },
      {
        title: "Global Compliance",
        description: "GDPR compliant with specific integrations like BankID for Sweden",
        icon: "Globe"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Features",
    titleLine1: "Intelligent",
    titleHighlight: "Retail Modules",
    description: "Modular components that can be deployed individually or as a complete autonomous store ecosystem",
    cards: [
      {
        title: "AI Checkout System",
        desc: "PAX IM30-based self-checkout with barcode scanning, computer vision product recognition, and automated fraud detection algorithms",
        icon: "Scan",
        color: "text-blue-600",
        bg: "bg-blue-50"
      },
      {
        title: "Inventory Cloud",
        desc: "Real-time synchronization across smart fridges, vending machines, and warehouses using MQTT. Predictive reordering based on demand",
        icon: "Cloud",
        color: "text-purple-600",
        bg: "bg-purple-50"
      },
      {
        title: "IoT Smart Vending",
        desc: "Centralized management for vending networks with cashless payments, remote monitoring, and dynamic pricing capabilities",
        icon: "Box",
        color: "text-orange-600",
        bg: "bg-orange-50"
      },
      {
        title: "Smart Fridges",
        desc: "Temperature-controlled autonomous sales units. Unlock with app/card, grab items, and auto-pay upon door close",
        icon: "Thermometer",
        color: "text-teal-600",
        bg: "bg-teal-50"
      },
      {
        title: "Loyalty & App",
        desc: "Native mobile app with digital wallet, tiered rewards, personalized AI promotions, and subscription plans",
        icon: "Smartphone",
        color: "text-pink-600",
        bg: "bg-pink-50"
      },
      {
        title: "Access Control",
        desc: "Secure entry systems integrating BankID, QR codes, and RFID for 24/7 unmanned store security",
        icon: "Key",
        color: "text-green-600",
        bg: "bg-green-50"
      }
    ],
    footer: {
      left: {
        title: "Platform Stats",
        type: "highlight",
        content: "50M+ Transactions"
      },
      right: {
        title: "Supported Regions",
        type: "tags",
        content: ["Sweden", "Norway", "India", "Europe"]
      }
    }
  },

  // 4. PROCESS SECTION (Implementation)
  process: {
    title: "Implementation Process",
    description: "From site assessment to go-live in as little as 3-4 weeks",
    phases: [
      {
        phase: "Phase 1",
        title: "Assessment & Planning",
        duration: "Week 1-2",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Site evaluation & connectivity check",
          "Customer flow analysis",
          "Hardware requirements",
          "Integration planning"
        ],
        activities: [
          "Site visit",
          "Network assessment",
          "Product assortment planning",
          "Regulatory review"
        ],
        deliverables: [
          "Site assessment report",
          "Layout diagram",
          "Project plan",
          "Fixed-price quote"
        ]
      },
      {
        phase: "Phase 2",
        title: "Installation",
        duration: "Week 2-3",
        icon: "Wrench",
        color: "bg-indigo-600",
        objectives: [
          "Hardware installation",
          "Network setup",
          "Security system mounting",
          "Access control setup"
        ],
        activities: [
          "Mounting PAX terminals",
          "Installing cameras & sensors",
          "Smart fridge placement",
          "Backup power setup"
        ],
        deliverables: [
          "Hardware installation",
          "Network connectivity",
          "Security verification",
          "Device calibration"
        ]
      },
      {
        phase: "Phase 3",
        title: "Configuration",
        duration: "Week 3",
        icon: "Settings",
        color: "bg-purple-600",
        objectives: [
          "Cloud account setup",
          "Product catalog import",
          "Payment gateway integration",
          "Mobile app config"
        ],
        activities: [
          "Pricing rules setup",
          "Inventory threshold config",
          "User permission setup",
          "End-to-end testing"
        ],
        deliverables: [
          "Configured platform",
          "Live product catalog",
          "Integrated payments",
          "Mobile app build"
        ]
      },
      {
        phase: "Phase 4",
        title: "Training & Soft Launch",
        duration: "Week 4",
        icon: "Users",
        color: "bg-orange-600",
        objectives: [
          "Staff training",
          "Admin portal walkthrough",
          "Soft launch to limited group",
          "Performance monitoring"
        ],
        activities: [
          "Operational training sessions",
          "Customer onboarding creation",
          "Beta testing",
          "Issue resolution"
        ],
        deliverables: [
          "Trained staff",
          "User manuals",
          "Video tutorials",
          "System readiness sign-off"
        ]
      },
      {
        phase: "Phase 5",
        title: "Go-Live & Support",
        duration: "Day 1+",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "Public launch",
          "Marketing activation",
          "24/7 monitoring",
          "Continuous optimization"
        ],
        activities: [
          "Grand opening support",
          "Real-time monitoring",
          "Weekly performance reports",
          "Quarterly updates"
        ],
        deliverables: [
          "Live store",
          "Support portal access",
          "Analytics dashboards",
          "Growth recommendations"
        ]
      }
    ]
  },

  // 5. TECH STACK SECTION
  techStack: {
    heading: "StoreTech Ecosystem",
    description: "A robust, cloud-native stack designed for reliability, security, and scalability in retail environments",
    frameworks: [
      { name: "Flutter", desc: "Cross-platform mobile apps for iOS/Android" },
      { name: "Node.js", desc: "Microservices backend architecture" },
      { name: "MQTT", desc: "Lightweight IoT device communication" },
      { name: "React", desc: "Admin dashboard and analytics interface" },
      { name: "TensorFlow", desc: "Computer vision for fraud detection" }
    ],
    // Using 'llms' key for Hardware
    llms: [
      { name: "PAX IM30", desc: "Android-based unattended payment terminal" },
      { name: "Smart Sensors", desc: "Temperature, motion, and door sensors" },
      { name: "Cameras", desc: "AI-enabled security monitoring" },
      { name: "BankID", desc: "Digital ID hardware integration" }
    ],
    // Using 'mlOps' key for Cloud & Infra
    mlOps: ["AWS IoT Core", "DynamoDB", "Redis", "Docker", "AWS Lambda"],
    cloudPlatforms: [
      {
        provider: "Core Infrastructure",
        color: "text-orange-500",
        services: ["AWS", "VPC", "CloudFront", "S3"]
      },
      {
        provider: "Data & Storage",
        color: "text-blue-500",
        services: ["PostgreSQL", "DynamoDB", "ElastiCache"]
      },
      {
        provider: "Security",
        color: "text-red-500",
        services: ["TLS 1.3", "PCI DSS", "AWS KMS", "WAF"]
      }
    ]
  },

  // 6. INDUSTRIES / USE CASES
  industries: {
    heading: "Deployment Models",
    description: "Versatile configurations for different retail environments",
    items: [
      {
        id: "unmanned",
        label: "Unmanned Stores",
        icon: "Store",
        theme: "blue",
        description: "Fully automated 24/7 stores with no staff required. ",
        features: [
          {
            title: "Cost Reduction",
            desc: "60% lower operational costs vs staffed stores",
            icon: "TrendingDown",
            caseStudy: {
              title: "Swedish Suburbs",
              result: "15 Active Locations"
            }
          },
          {
            title: "Access",
            desc: "Secure entry via BankID or App QR",
            icon: "Key"
          }
        ]
      },
      {
        id: "corporate",
        label: "Corporate & Campus",
        icon: "Building",
        theme: "green",
        description: "Smart vending and fridge networks for employees. ",
        features: [
          {
            title: "Convenience",
            desc: "24/7 access to fresh food and drinks",
            icon: "Clock",
            caseStudy: {
              title: "Indian Tech Parks",
              result: "25 Locations"
            }
          },
          {
            title: "Wallet",
            desc: "Integrated employee expense wallets",
            icon: "CreditCard"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES (Synthesized from "Use Cases & Deployments" section)
  caseStudies: {
    heading: "Success Stories",
    description: "Real-world impact of the StoreTech platform",
    items: [
      {
        id: 1,
        category: "Unmanned Retail",
        client: "Swedish Residential Chain",
        title: "24/7 Suburban Stores",
        icon: "MapPin",
        color: "text-blue-600",
        challenge: "Providing retail access to suburban communities was unprofitable with staffed hours",
        solution: "Deployed 15 unmanned convenience stores using StoreTech platform with BankID access",
        implementation: [
          "BankID Integration",
          "PAX Self-Checkout",
          "Remote Monitoring",
          "Auto-Restocking"
        ],
        results: [
          { label: "Op Costs", value: "-60%" },
          { label: "Hours", value: "24/7" },
          { label: "Payback", value: "18 Months" }
        ],
        quote: "We serve 10,000 residents who previously had to drive 20 minutes for milk. The stores are profitable and secure",
        author: "Operations Director"
      },
      {
        id: 2,
        category: "Corporate",
        client: "Tech Park India",
        title: "Campus Smart Vending",
        icon: "Building",
        color: "text-green-600",
        challenge: "Providing quality food options for 24-hour shift workers without running a full cafeteria",
        solution: "Installed network of 25 smart fridges and vending units managed by one dashboard",
        implementation: [
          "Smart Fridges",
          "Employee App Wallet",
          "Central Kitchen Sync",
          "Freshness Tracking"
        ],
        results: [
          { label: "Labor", value: "-50%" },
          { label: "Spoilage", value: "-25%" },
          { label: "Satisfaction", value: "4.8/5" }
        ],
        quote: "Our employees love the fresh food access at 3 AM. The app wallet makes payment seamless",
        author: "Facility Manager"
      }
    ]
  },

  // 8. FAQ SECTION (Synthesized from content)
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How do you handle age verification for restricted items?",
        answer: "We integrate with digital ID systems like BankID (in Sweden) or use AI-based document scanning with remote staff override for edge cases, ensuring full regulatory compliance"
      },
      {
        question: "What happens if the internet goes down?",
        answer: "The PAX terminals and mobile apps have offline capabilities. Transactions are stored locally and synced to the cloud immediately once connectivity is restored"
      },
      {
        question: "How does the system prevent theft?",
        answer: "We use a multi-layered approach: secure access control (know who is inside), AI camera monitoring, and smart inventory tracking. Theft rates are typically 45% lower than staffed stores"
      },
      {
        question: "Can I use my existing suppliers?",
        answer: "Yes. Our Inventory Cloud supports API integrations and EDI to connect with your existing suppliers for automated reordering"
      },
      {
        question: "What is the cost model?",
        answer: "We operate on a SaaS model with a monthly platform fee per location, plus a small transaction processing fee. Hardware can be purchased upfront or leased"
      }
    ]
  },

  // 9. GET STARTED SECTION
  getStarted: {
    badge: "Launch Your Store",
    titleLines: ["Ready to Automate", "Your Retail?"],
    description: "Schedule a demo or visit one of our live locations to see the future of retail",
    cards: [
      {
        id: "demo",
        title: "Request Demo",
        description: "30-minute virtual walkthrough of the platform and admin dashboard",
        icon: "Monitor",
        theme: "light",
        list: [
          "Platform walkthrough",
          "Hardware review",
          "Q&A session",
          "Pricing discussion"
        ],
        cta: { text: "Schedule Demo", link: "#demo" }
      },
      {
        id: "pilot",
        title: "Start Pilot",
        description: "Deploy a single test location with full support to validate ROI",
        icon: "Rocket",
        theme: "dark",
        list: [
          "Single site deployment",
          "Full feature access",
          "Onboarding support",
          "Performance analysis"
        ],
        cta: { text: "Discuss Pilot", link: "#pilot" }
      }
    ],
    contact: {
      title: "Contact Sales",
      subtitle: "Global sales team",
      methods: [
        { label: "Email Us", value: "sales@store-tech.se", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "IoT Solutions", id: "iot-solutions", icon: "Wifi", color: "text-orange-500", bg: "bg-orange-50" },
      { title: "Software Dev", id: "software-development", icon: "Code", color: "text-blue-500", bg: "bg-blue-50" },
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" }
    ],
    columns: [
      {
        title: "Resources",
        icon: "Download",
        items: [
          { label: "Product Brochure", href: "#" },
          { label: "ROI Calculator", href: "#" }
        ]
      },
      {
        title: "Company",
        icon: "Globe",
        items: [
          { label: "StoreTech Website", href: "https://www.store-tech.se" },
          { label: "Case Studies", href: "#" }
        ]
      }
    ]
  }
};