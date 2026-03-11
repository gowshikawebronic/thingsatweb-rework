
import { ServicePageData } from "../types";

export const DIGITAL_TRANSFORMATION_DATA: ServicePageData = {
  id: "digital-transformation",

  preview: {
    title: "Digital Transformation",
    tagline: "Evolve & Innovate",
    description: "End-to-end digital transformation services. Strategy consulting, process automation, customer experience redesign, cloud migration, and change management for enterprise digital evolution.",
    image: "./assets/images/Service Images/Digital Transforamtion - Webronic Industires Private Limited.png",
    icon: "Cpu",
    points: [
      "Digital Strategy & Consulting",
      "Business Process Automation",
      "Customer Experience Redesign",
      "Technology Modernization"
    ],
    technologies: [
      { name: "AWS", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" },
      { name: "Azure", logo: "./assets/images/Technology/Microsoft_Azure.svg" },
      { name: "Salesforce", logo: "./assets/images/Technology/Salesforce.com_logo.svg.png" },
      { name: "SAP", logo: "./assets/images/Technology/SAP-Logo.svg.png" },
      { name: "UiPath", logo: "./assets/images/Technology/brand-uipath-svgrepo-com.svg" }
    ]
  },

  hero: {
    badge: "Digital Transformation Services",
    titlePrefix: "Transform Your Business",
    titleHighlight: "for the Digital Age",
    description: "Transform Your Business for the Digital Age",
    features: [
      "Comprehensive transformation strategy and execution",
      "Proven methodology across 200+ transformations",
      "Technology-agnostic approach focused on business outcomes",
      "Change management ensuring sustainable adoption"
    ],
    ctaPrimary: "Start Your Transformation Journey",
    ctaSecondary: "Download Transformation Framework"
  },

  overview: {
    badge: "Service Overview",
    heading: "The Transformation",
    highlight: "Challenge",
    content: [
      "Digital transformation is a fundamental business imperative for modern organizations. Organizations that successfully transform achieve faster growth, higher profitability, greater customer satisfaction, and improved employee engagement compared to their less-digital competitors.",
      "However, digital transformation is complex. It's not just about implementing new technology. It requires reimagining business processes, transforming customer experiences, evolving operating models, and fundamentally changing how organizations create and deliver value.",
      "Most digital transformations fail. Research shows that 70% of transformation initiatives don't achieve their objectives due to lack of clear vision, technology-first approaches, insufficient change management, and poor execution.",
      "Our digital transformation methodology is built on 15+ years of experience guiding organizations through successful transformations. We've learned what works and what doesn't across industries, company sizes, and transformation types."
    ],
    differentiators: [
      {
        title: "Business Outcomes First",
        description: "We start with business objectives and work backward to technology solutions.",
        icon: "Target"
      },
      {
        title: "Proven Methodology",
        description: "Battle-tested framework guiding 200+ successful transformations.",
        icon: "CheckCircle"
      },
      {
        title: "Industry Expertise",
        description: "Deep expertise in key industries to deliver specific solutions.",
        icon: "Briefcase"
      },
      {
        title: "Technology Agnostic",
        description: "We recommend the best solutions, not just what we resell.",
        icon: "Code"
      },
      {
        title: "Change Management",
        description: "Embedded change management ensuring sustainable adoption.",
        icon: "Users"
      }
    ]
  },

  coreServices: {
    badge: "Core Services",
    titleLine1: "End-to-End",
    titleHighlight: "Transformation",
    description: "From strategy to execution, we cover every aspect of your digital evolution",
    cards: [
      {
        title: "Digital Strategy & Consulting",
        desc: "Define Your Digital Future. We help you articulate your digital vision, identify transformation priorities, and create actionable roadmaps.",
        icon: "Compass",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "Digital Maturity Assessment",
            items: [
              { term: "Technology Maturity", description: "Legacy landscape, Cloud adoption, Data capabilities, Cybersecurity posture." },
              { term: "Process Maturity", description: "Automation level, Workflow efficiency, Bottleneck identification." },
              { term: "Customer Experience", description: "Touchpoint analysis, Omnichannel capability, Personalization." },
              { term: "Organizational Maturity", description: "Digital skills, Agile adoption, Innovation culture." }
            ]
          },
          {
            heading: "transformation Roadmap",
            items: [
              { term: "Phase 1: Identification", description: "Catalog potential initiatives (Automation, CX, Data)." },
              { term: "Phase 2: Prioritization", description: "Evaluate on Business Value, Strategic Alignment, Complexity, Risk." },
              { term: "Phase 3: Sequencing", description: "Wave 1 (Quick wins), Wave 2 (Core), Wave 3 (Advanced)." },
              { term: "Phase 4: Resource Planning", description: "Budget, Team, Technology, Change Management." }
            ]
          },
          {
            heading: "Strategy Workshop",
            content: ["5-Day intensive engagement: Assessment, Opportunity Exploration, Prioritization, Roadmap Development, Final Presentation."]
          }
        ]
      },
      {
        title: "Business Process Transformation",
        desc: "Reimagine How Work Gets Done. Redesign processes to be faster, more efficient, customer-centric, and automated.",
        icon: "Settings",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "Process Redesign",
            items: [
              { term: "Principles", description: "Customer-Centric, Lean & Efficient, Automated, Data-Driven, Agile." },
              { term: "Approach", description: "Brainstorm future state, Apply automation (RPA/AI), Simplify, Validate." }
            ]
          },
          {
            heading: "Process Automation",
            items: [
              { term: "RPA", description: "Automate repetitive tasks (Data entry, Reports). Benefits: 50-70% cost reduction, 99.9% accuracy." },
              { term: "Workflow Automation", description: "Orchestrate multi-step processes (Approvals, Onboarding). Tools: ServiceNow, Pega, Power Automate." },
              { term: "Intelligent Automation", description: "Combine RPA with AI (Document understanding, Chatbots, Fraud detection)." }
            ]
          },
          {
            heading: "Implementation",
            content: ["Phased Rollout: Phase 1 Pilot (4-6 weeks), Phase 2 Expand (2-3 months), Phase 3 Full Deployment (3-6 months)."]
          }
        ]
      },
      {
        title: "Customer Experience Redesign",
        desc: "Put Customers at the Center. Transform experiences across all touchpoints to create seamless, personalized journeys.",
        icon: "Heart",
        color: "text-pink-600",
        bg: "bg-pink-50",
        subSections: [
          {
            heading: "Journey Mapping",
            items: [
              { term: "Process", description: "Define Personas, Map Current Journey, Identify Opportunities, Design Future Journey." },
              { term: "Omnichannel", description: "Consistent experience across Web, Mobile, Physical, Call Center, Email, Social." }
            ]
          },
          {
            heading: "Personalization",
            items: [
              { term: "Capabilities", description: "Content personalization, Experience customization, Predictive next-best action." },
              { term: "Technologies", description: "CDPs, Recommendation engines, A/B testing, Marketing automation." }
            ]
          },
          {
            heading: "Touchpoint Enhancement",
            content: ["Website Optimization (UX, SEO), Mobile App (Native, PWA), Self-Service Portals, Chatbots & Virtual Assistants."]
          }
        ]
      },
      {
        title: "Digital Operating Model",
        desc: "Transform How You Work. Evolve structures and culture to support digital excellence and innovation.",
        icon: "Users",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "Agile & DevOps",
            items: [
              { term: "Agile Transformation", description: "Scrum/Kanban/SAFe. Benefits: Faster time to market, Higher quality." },
              { term: "DevOps Adoption", description: "CI/CD, IaC, Automated testing. Outcomes: Daily deployments, Faster recovery." }
            ]
          },
          {
            heading: "Org Design",
            items: [
              { term: "Structures", description: "Product-Centric Teams, Digital Centers of Excellence, Innovation Labs." },
              { term: "Culture", description: "Innovation-Driven, Customer-Obsessed, Data-Driven, Collaborative, Continuous Learning." }
            ]
          }
        ]
      },
      {
        title: "Change Management",
        desc: "Ensure Transformation Sticks. Address the people side of change to ensure adoption and sustainability.",
        icon: "RefreshCw",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Stakeholder Engagement",
            items: [
              { term: "Engagement", description: "Stakeholder mapping, Targeted communication plan (Executive, Manager, Employee)." },
              { term: "Training", description: "Role-based training, Various formats (Workshops, Online, Video), Enablement support." }
            ]
          },
          {
            heading: "Adoption",
            items: [
              { term: "Resistance Management", description: "Address fear/lack of skills. Early involvement, Transparent communication." },
              { term: "Metrics", description: "Usage, Proficiency, Satisfaction, Business outcomes." }
            ]
          }
        ]
      },
      {
        title: "Technology Modernization",
        desc: "Modernize Your Foundation. Transform legacy landscapes into cloud-native, API-driven architectures.",
        icon: "Server",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        subSections: [
          {
            heading: "Modernization Strategy",
            items: [
              { term: "Assessment", description: "Evaluate legacy systems, technical debt, and risk." },
              { term: "Strategies (5 Rs)", description: "Rehost (Lift-and-Shift), Replatform (Optimize), Refactor (Cloud-native), Rebuild (Rewrite), Replace (SaaS)." }
            ]
          },
          {
            heading: "Architecture",
            items: [
              { term: "Cloud Migration", description: "Multi-cloud strategy, Zero data loss migration." },
              { term: "API & Integration", description: "API-first design, Integration Platforms (iPaaS), Event-driven architecture." }
            ]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Typical Timeline",
        type: "highlight",
        content: "6-18 Months"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Strategy Roadmap", "Modern Architecture", "Optimized Processes", "Agile Culture"]
      }
    }
  },

  process: {
    title: "Transformation Methodology",
    description: "Our proven 6-phase framework for digital evolution",
    phases: [
      {
        phase: "Phase 1",
        title: "Envision",
        duration: "Weeks 1-4",
        icon: "Eye",
        color: "bg-blue-600",
        objectives: [
          "Digital maturity assessment",
          "Vision development",
          "Stakeholder alignment",
          "Success metrics definition"
        ],
        activities: [
          "Maturity assessment",
          "Workshops",
          "Alignment sessions"
        ],
        deliverables: [
          "Maturity report",
          "Vision statement",
          "High-level goals"
        ]
      },
      {
        phase: "Phase 2",
        title: "Strategy",
        duration: "Weeks 5-10",
        icon: "Map",
        color: "bg-indigo-600",
        objectives: [
          "Initiative identification",
          "Business case development",
          "Prioritization",
          "Governance design"
        ],
        activities: [
          "Roadmapping",
          "Business case modeling",
          "Governance setup"
        ],
        deliverables: [
          "Transformation roadmap",
          "Business cases",
          "Governance charter"
        ]
      },
      {
        phase: "Phase 3",
        title: "Design",
        duration: "Months 3-5",
        icon: "PenTool",
        color: "bg-purple-600",
        objectives: [
          "Process redesign",
          "Technology architecture",
          "CX design",
          "Org design"
        ],
        activities: [
          "Design workshops",
          "Prototyping",
          "Architecture planning"
        ],
        deliverables: [
          "Process docs",
          "Blueprints",
          "Prototypes",
          "Operating model"
        ]
      },
      {
        phase: "Phase 4",
        title: "Build",
        duration: "Months 6-12",
        icon: "Hammer",
        color: "bg-orange-600",
        objectives: [
          "Technology implementation",
          "Automation development",
          "Integration",
          "Training dev"
        ],
        activities: [
          "Development",
          "Testing",
          "Content creation"
        ],
        deliverables: [
          "Working systems",
          "Automated processes",
          "Training materials"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deploy",
        duration: "Months 13-18",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "Pilot deployments",
          "Change execution",
          "Training delivery",
          "Full rollout"
        ],
        activities: [
          "Go-live support",
          "Training sessions",
          "Communication"
        ],
        deliverables: [
          "Production systems",
          "Trained users",
          "Adoption metrics"
        ]
      },
      {
        phase: "Phase 6",
        title: "Optimize",
        duration: "Ongoing",
        icon: "TrendingUp",
        color: "bg-teal-600",
        objectives: [
          "Performance monitoring",
          "Continuous improvement",
          "Innovation pipeline"
        ],
        activities: [
          "Monitoring",
          "Feedback loops",
          "Enhancement planning"
        ],
        deliverables: [
          "Optimization report",
          "Enhancement releases",
          "Innovation roadmap"
        ]
      }
    ]
  },

  techStack: {
    heading: "Transformation Enablers",
    description: "Technologies that drive digital change",
    frameworks: [
      { name: "SaaS", desc: "Software as a Service" },
      { name: "PaaS", desc: "Platform as a Service" },
      { name: "IaaS", desc: "Infrastructure as a Service" }
    ],
    llms: [
      { name: "AI/ML", desc: "Artificial Intelligence" },
      { name: "RPA", desc: "Robotic Process Automation" },
      { name: "IoT", desc: "Internet of Things" }
    ],
    mlOps: ["Agile", "DevOps", "Design Thinking", "Lean Six Sigma"],
    cloudPlatforms: [
      {
        provider: "Cloud",
        color: "text-blue-500",
        services: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"]
      },
      {
        provider: "Automation",
        color: "text-orange-500",
        services: ["UiPath", "Power Automate", "Blue Prism", "Anywhere"]
      },
      {
        provider: "Enterprise",
        color: "text-purple-500",
        services: ["SAP", "Salesforce", "ServiceNow", "Oracle"]
      }
    ]
  },

  industries: {
    heading: "Industry Transformation",
    description: "Tailored digital strategies for key sectors",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing 4.0",
        icon: "Factory",
        theme: "blue",
        description: "Smart factories and digital supply chains",
        features: [
          {
            title: "Smart Factory",
            desc: "IoT sensors, Predictive maintenance, Digital twins.",
            icon: "Cpu",
            caseStudy: {
              title: "Auto Parts Mfr",
              result: "$12M Savings"
            }
          },
          {
            title: "Outcomes",
            desc: "20-30% productivity improvement, 50%+ reduction in downtime.",
            icon: "TrendingUp"
          }
        ]
      },
      {
        id: "retail",
        label: "Omnichannel Retail",
        icon: "ShoppingBag",
        theme: "green",
        description: "Unified commerce and customer experience",
        features: [
          {
            title: "Omnichannel",
            desc: "E-commerce, Mobile commerce, In-store digital.",
            icon: "Smartphone",
            caseStudy: {
              title: "Regional Chain",
              result: "35% Online Rev"
            }
          },
          {
            title: "Outcomes",
            desc: "40-60% online growth, 25% retention improvement.",
            icon: "Users"
          }
        ]
      },
      {
        id: "finance",
        label: "Digital Banking",
        icon: "Landmark",
        theme: "blue",
        description: "Modern banking and fintech experiences",
        features: [
          {
            title: "Digital Banking",
            desc: "Mobile apps, Digital onboarding, AI service.",
            icon: "CreditCard",
            caseStudy: {
              title: "Regional Bank",
              result: "-52% Cost to Serve"
            }
          },
          {
            title: "Outcomes",
            desc: "60-70% digital adoption, 3 mins account opening.",
            icon: "Zap"
          }
        ]
      },
      {
        id: "healthcare",
        label: "Connected Health",
        icon: "Activity",
        theme: "green",
        description: "Digital patient care and operations",
        features: [
          {
            title: "Telemedicine",
            desc: "Remote monitoring, Patient portals, AI imaging.",
            icon: "Video"
          },
          {
            title: "Outcomes",
            desc: "40% increase in access, 30% cost reduction.",
            icon: "Heart"
          }
        ]
      }
    ]
  },

  caseStudies: {
    heading: "Transformation Success Stories",
    description: "Real results from our digital partnership",
    items: [
      {
        id: 1,
        category: "Manufacturing",
        client: "Global automotive parts manufacturer ($800M)",
        title: "Manufacturing Digital Transformation",
        icon: "Factory",
        color: "text-blue-600",
        challenge: "High defect rates (4.5%), limited supply chain visibility, siloed operations.",
        solution: "3-year program: SAP S/4HANA ERP, IoT on 200+ machines, AI quality inspection, Supplier portal, Agile operating model.",
        implementation: [
          "Cloud-based ERP (SAP S/4HANA)",
          "IoT Sensors (200+ machines)",
          "AI Quality Inspection",
          "Real-time Dashboard"
        ],
        results: [
          { label: "OEE", value: "+28%" },
          { label: "Defects", value: "4.5% -> 0.8%" },
          { label: "Inventory", value: "-35%" },
          { label: "Savings", value: "$12M/Year" },
          { label: "ROI", value: "2.1 Years" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 2,
        category: "Retail",
        client: "Regional retail chain (45 stores, $200M)",
        title: "Retail Omnichannel Transformation",
        icon: "ShoppingBag",
        color: "text-green-600",
        challenge: "Declining foot traffic, No e-commerce, Fragmented data, Inventory per store, Competitive pressure.",
        solution: "18-month transformation: Shopify Plus e-commerce, Mobile app, Unified inventory, CDP, Personalization, BOPIS.",
        implementation: [
          "Shopify Plus Platform",
          "Mobile App Development",
          "Unified Inventory System",
          "Customer Data Platform",
          "BOPIS Implementation"
        ],
        results: [
          { label: "Online Rev", value: "35% of total" },
          { label: "Same-Store", value: "+12%" },
          { label: "Retention", value: "+18%" },
          { label: "Inventory Turns", value: "+40%" },
          { label: "ROI", value: "16 Months" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 3,
        category: "Financial Services",
        client: "Regional bank ($2B assets)",
        title: "Financial Services Digital Banking",
        icon: "Landmark",
        color: "text-purple-600",
        challenge: "78% branch transactions (high cost), Losing customers, 30-min account opening, Manual loans.",
        solution: "2-year transformation: Mobile banking app, Digital account opening (3 mins), AI chatbot, Automated loan origination, Cloud migration.",
        implementation: [
          "Mobile Banking App",
          "Digital Account Opening",
          "AI Chatbot",
          "Loan Automation",
          "Cloud Infrastructure"
        ],
        results: [
          { label: "Digital Txn", value: "68%" },
          { label: "Cost-to-Serve", value: "-52%" },
          { label: "Acquisition", value: "+40%" },
          { label: "Opening Time", value: "3 mins" },
          { label: "Fraud Losses", value: "-75%" }
        ],
        quote: "",
        author: ""
      }
    ]
  },

  faq: {
    heading: "Transformation FAQs",
    items: [
      {
        question: "How long does digital transformation take?",
        answer: "Timelines vary, but we use phased approaches to deliver value early. Typically: Strategy (1-2 months), Pilot (3-6 months), Scale (12-24 months)."
      },
      {
        question: "What does digital transformation cost?",
        answer: "Investment depends on organization size and scope. We provide detailed cost estimates after the initial assessment."
      },
      {
        question: "Do we need to replace all our systems?",
        answer: "Not necessarily. We assess utilizing 'Rehost, Replatform, Refactor, Rebuild, Replace' strategies to maximize value from existing investments where possible."
      }
    ]
  },

  getStarted: {
    badge: "Start Your Journey",
    titleLines: ["Ready to", "Transform?"],
    description: "Begin with a clear strategy and a trusted partner.",
    cards: [
      {
        id: "assessment",
        title: "Digital Maturity Assessment",
        description: "Understand your current state.",
        icon: "BarChart",
        theme: "light",
        list: [
          "Technology review",
          "Process analysis",
          "Culture check"
        ],
        cta: { text: "Schedule Assessment", link: "#assessment" }
      },
      {
        id: "workshop",
        title: "Strategy Workshop",
        description: "Define your vision and roadmap.",
        icon: "Map",
        theme: "dark",
        list: [
          "Vision setting",
          "Opportunity mapping",
          "Initiative planning"
        ],
        cta: { text: "Book Workshop", link: "#workshop" }
      }
    ],
    contact: {
      title: "Contact Transformation Team",
      subtitle: "Direct access to strategists",
      methods: [
        { label: "Email Us", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  relatedResources: {
    services: [
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Data Analytics", id: "data-analytics", icon: "BarChart", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Software Development", id: "software-development", icon: "Code", color: "text-orange-500", bg: "bg-orange-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Transformation Guide", href: "#" },
          { label: "Change Management", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Maturity Calculator", href: "#" },
          { label: "ROI Estimator", href: "#" }
        ]
      }
    ]
  }
};