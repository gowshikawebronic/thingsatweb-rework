
import { ServicePageData } from "../types";

export const SOFTWARE_DATA: ServicePageData = {
  id: "software-development",

  preview: {
    title: "Custom Software Development",
    tagline: "Build Your Vision",
    description: "Custom software development for web, mobile, and desktop. Full stack development, API first integration, legacy modernization. Agile methodology, quality-focused delivery.",
    image: "./assets/images/Service Images/QA & Testing- Webronic Industires Private Limited.png",
    icon: "Code",
    points: [
      "Custom Web & Mobile Apps",
      "API First Development",
      "Legacy System Modernization",
      "Enterprise Grade Solutions"
    ],
    technologies: [
      { name: "React", logo: "./assets/images/Technology/react-logo-svgrepo-com.svg" },
      { name: "Node.js", logo: "./assets/images/Technology/Node.js_logo.svg" },
      { name: "Python", logo: "./assets/images/Technology/Python-logo-notext.svg" },
      { name: "Flutter", logo: "./assets/images/Technology/Google-flutter-logo.svg" },
      { name: "AWS", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" }
    ]
  },

  hero: {
    badge: "Custom Software Development Services",
    titlePrefix: "Build Enterprise-Grade Applications",
    titleHighlight: "Tailored to Your Unique Needs",
    description: "Build Enterprise-Grade Applications Tailored to Your Unique Business Needs",
    features: [
      "Full-stack development expertise (web, mobile, desktop)",
      "Agile methodology with 2-week sprint cycles",
      "98% on-time delivery across 1000+ projects",
      "Dedicated teams with domain expertise"
    ],
    ctaPrimary: "Discuss Your Project",
    ctaSecondary: "View Development Portfolio"
  },

  overview: {
    badge: "Service Overview",
    heading: "The Custom",
    highlight: "Advantage",
    content: [
      "Every business has unique requirements that off-the-shelf software cannot fully address. Custom software development allows you to build applications precisely matching your business processes, competitive differentiators, and strategic objectives.",
      "Webronic Industries specializes in developing enterprise-grade custom applications that solve complex business challenges. With 15+ years of experience and 1000+ successful projects delivered, we've built applications serving millions of users across industries."
    ],
    differentiators: [
      {
        title: "Perfect Fit",
        description: "Build exactly what you need. Solutions match your workflows and rules.",
        icon: "CheckSquare"
      },
      {
        title: "Competitive Advantage",
        description: "Proprietary software creates differentiation competitors cannot replicate.",
        icon: "Trophy"
      },
      {
        title: "Scalability",
        description: "Scale from 100 to 1 million users without rebuilding.",
        icon: "TrendingUp"
      },
      {
        title: "Integration",
        description: "Seamlessly connect with existing systems and third-party services.",
        icon: "Link"
      },
      {
        title: "Ownership",
        description: "Complete control. No per-user fees, no vendor lock-in.",
        icon: "Shield"
      }
    ]
  },

  coreServices: {
    badge: "Core Development Services",
    titleLine1: "Full Lifecycle",
    titleHighlight: "Development",
    description: "From concept to deployment, we build robust software solutions",
    cards: [
      {
        title: "Web Application Development",
        desc: "Modern, Scalable Web Apps. Build sophisticated applications serving internal teams or millions of users.",
        icon: "Globe",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "Frontend",
            items: [
              { term: "React.js", description: "Virtual DOM, Rich ecosystem (Next.js). Ideal for Complex UIs." },
              { term: "Angular", description: "Two-way binding, TypeScript. Ideal for Enterprise apps." },
              { term: "Vue.js", description: "Lightweight, Flexible. Ideal for Rapid dev." }
            ]
          },
          {
            heading: "Backend",
            items: [
              { term: "Node.js", description: "Non-blocking I/O. Ideal for Real-time apps." },
              { term: "Python", description: "Django/Flask. Ideal for Data/AI apps." },
              { term: "Java", description: "Spring Boot. Ideal for Financial/Enterprise systems." }
            ]
          },
          {
            heading: "Full-Stack",
            content: ["Auth (SSO, MFA, RBAC), API Dev (REST, GraphQL), DB Design, Integrations (Payment, CRM)."]
          }
        ]
      },
      {
        title: "Mobile App Development",
        desc: "Native & Cross-Platform. iOS and Android solutions for consumer and enterprise.",
        icon: "Smartphone",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "Cross-Platform",
            items: [
              { term: "Flutter", description: "Single codebase, Native performance. 30-40% faster dev." },
              { term: "React Native", description: "Leverage JS skills, Large ecosystem. Cost-effective." }
            ]
          },
          {
            heading: "Native",
            items: [
              { term: "iOS (Swift)", description: "Best performance, Full API access. For complex animations." },
              { term: "Android (Kotlin)", description: "Official Google choice, Null safety. Max performance." }
            ]
          },
          {
            heading: "Capabilities",
            content: ["Biometric Auth, Push Notifications, Offline Sync, GPS, Camera, AR/ML options."]
          }
        ]
      },
      {
        title: "Desktop App Development",
        desc: "Cross-Platform Solutions. Windows, macOS, and Linux apps with native performance.",
        icon: "Monitor",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Technologies",
            items: [
              { term: "Electron.js", description: "Web tech for desktop. Cross-platform, Auto-update." },
              { term: ".NET (WPF)", description: "Windows-native. High performance, Enterprise-ready." },
              { term: "Java (JavaFX)", description: "Write once, run anywhere. Deep enterprise adoption." }
            ]
          }
        ]
      },
      {
        title: "API First Development",
        desc: "Connect Systems. Build robust APIs that power apps and enable ecosystems.",
        icon: "Server",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "RESTful APIs",
            items: [
              { term: "Best Practices", description: "Resource-based URLs, HTTP Methods (GET, POST), Status Codes." },
              { term: "Features", description: "Pagination, Filtering, Rate limiting, Versioning." }
            ]
          },
          {
            heading: "GraphQL",
            items: [
              { term: "Advantages", description: "Single endpoint, Request exact data, Real-time subs." }
            ]
          },
          {
            heading: "Documentation",
            content: ["Swagger/OpenAPI interactive docs. Auto client SDK generation."]
          }
        ]
      },
      {
        title: "Database Design",
        desc: "Optimized Data Architecture. Integrity, performance, and scalability focus.",
        icon: "Database",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        subSections: [
          {
            heading: "Relational",
            items: [
              { term: "PostgreSQL", description: "Advanced Open-source. JSON support, PostGIS." },
              { term: "MySQL", description: "Read-heavy workloads. Web apps." },
              { term: "SQL Server", description: "Enterprise .NET integration." }
            ]
          },
          {
            heading: "NoSQL",
            items: [
              { term: "MongoDB", description: "Flexible schema, Horizontal scaling." },
              { term: "DynamoDB", description: "AWS Managed, Unlimited scale." },
              { term: "Redis", description: "In-memory caching, Sub-ms latency." }
            ]
          }
        ]
      },
      {
        title: "Legacy Modernization",
        desc: "Breathe New Life. Modernize applications while preserving business logic.",
        icon: "RefreshCw",
        color: "text-teal-600",
        bg: "bg-teal-50",
        subSections: [
          {
            heading: "Strategies",
            items: [
              { term: "API Wrapper", description: "Add API layer to expose legacy functionality. Quick, Low risk." },
              { term: "Replatform", description: "Migrate to cloud, Containerize. 40-60% cost reduction." },
              { term: "Rewrite", description: "Complete rebuild when tech is obsolete. Phased approach." }
            ]
          },
          {
            heading: "Process",
            content: ["Schema mapping, Data cleansing, Incremental migration, Parallel validation."]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Development Cycle",
        type: "highlight",
        content: "2-Week Sprints"
      },
      right: {
        title: "Core Tech",
        type: "tags",
        content: ["React", "Node.js", "Python", "Flutter", "AWS"]
      }
    }
  },

  process: {
    title: "Agile Development Process",
    description: "Iterative delivery for maximum value",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery",
        duration: "2-3 Weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Requirements gathering",
          "User persona development",
          "Technical architecture",
          "Project estimation"
        ],
        activities: [
          "Workshops",
          "Wireframing",
          "Tech selection"
        ],
        deliverables: [
          "SRS Document",
          "Prototypes",
          "Project Plan"
        ]
      },
      {
        phase: "Phase 2",
        title: "Development",
        duration: "Variable",
        icon: "Code",
        color: "bg-indigo-600",
        objectives: [
          "Sprint-based delivery",
          "Feature implementation",
          "Continuous integration",
          "Use feedback loops"
        ],
        activities: [
          "Daily Standups",
          "Coding & Testing",
          "Sprint Reviews"
        ],
        deliverables: [
          "Working Software",
          "Test Reports",
          "Sprint Demos"
        ]
      },
      {
        phase: "Phase 3",
        title: "Testing",
        duration: "Ongoing",
        icon: "ShieldCheck",
        color: "bg-purple-600",
        objectives: [
          "Ensure application quality",
          "Verify requirements",
          "Performance validation",
          "Security assurance"
        ],
        activities: [
          "Unit/Integration Tests",
          "UAT",
          "Security Scans"
        ],
        deliverables: [
          "Bug Reports",
          "Quality Metrics",
          "Sign-off"
        ]
      },
      {
        phase: "Phase 4",
        title: "Launch & Support",
        duration: "Ongoing",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "Production deployment",
          "User onboarding",
          "System stability",
          "Feature enhancements"
        ],
        activities: [
          "Deployment",
          "Monitoring",
          "Maintenance"
        ],
        deliverables: [
          "Live System",
          "Documentation",
          "SLA Reports"
        ]
      }
    ]
  },

  techStack: {
    heading: "TECHNOLOGY EXPERTISE",
    description: "Our diverse technology stack",
    frameworks: [
      { name: "React", desc: "Frontend" },
      { name: "Angular", desc: "Frontend" },
      { name: "Vue.js", desc: "Frontend" },
      { name: "Microservices", desc: "Architecture" },
      { name: "Serverless", desc: "Architecture" }
    ],
    llms: [
      { name: "Node.js", desc: "Backend" },
      { name: "Python", desc: "Backend" },
      { name: "Java", desc: "Backend" },
      { name: ".NET", desc: "Backend" }
    ],
    mlOps: ["Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform"],
    cloudPlatforms: [
      {
        provider: "Frontend & Mobile",
        color: "text-blue-500",
        services: ["React", "Angular", "Vue", "Flutter", "React Native", "Swift", "Kotlin"]
      },
      {
        provider: "Backend & DB",
        color: "text-purple-500",
        services: ["Node.js", "Python", "Java", ".NET", "PostgreSQL", "MongoDB", "Redis"]
      },
      {
        provider: "Cloud & DevOps",
        color: "text-orange-500",
        services: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"]
      }
    ]
  },

  industries: {
    heading: "Engagement Models",
    description: "Flexible options to suit your project needs",
    items: [
      {
        id: "fixed-price",
        label: "Fixed Price",
        icon: "DollarSign",
        theme: "blue",
        description: "Defined scope and budget",
        features: [
          {
            title: "Best For",
            desc: "Well-defined requirements, MVP, Simple apps.",
            icon: "Check"
          },
          {
            title: "Structure",
            desc: "Fixed quote, Milestone payments.",
            icon: "FileText"
          }
        ]
      },
      {
        id: "time-materials",
        label: "Time & Materials",
        icon: "Clock",
        theme: "green",
        description: "Flexible scope and evolution",
        features: [
          {
            title: "Best For",
            desc: "Evolving requirements, Long-term dev.",
            icon: "RefreshCw"
          },
          {
            title: "Structure",
            desc: "Monthly invoicing, Transparent tracking.",
            icon: "List"
          }
        ]
      },
      {
        id: "dedicated-team",
        label: "Dedicated Team",
        icon: "Users",
        theme: "blue",
        description: "Your extended development team",
        features: [
          {
            title: "Best For",
            desc: "Scaling internal teams, Long-term partnership.",
            icon: "UserPlus"
          },
          {
            title: "Structure",
            desc: "Monthly retainer, Exclusive resource.",
            icon: "Shield"
          }
        ]
      }
    ]
  },

  caseStudies: {
    heading: "Success Stories",
    description: "Transformative software solutions",
    items: [
      {
        id: 1,
        category: "E-commerce",
        client: "Fashion Retailer ($50M Revenue)",
        title: "Modern E-commerce Platform",
        icon: "ShoppingBag",
        color: "text-pink-600",
        challenge: "Legacy monolith, slow load times (5-7s), outages, poor mobile exp.",
        solution: "Modern Platform: React/Next.js frontend, Node.js microservices, AWS infrastructure.",
        implementation: [
          "React/Next.js Frontend",
          "Node.js Microservices",
          "PostgreSQL/Mongo/Redis",
          "AWS Auto-scaling",
          "Zero Downtime Migration"
        ],
        results: [
          { label: "Load Time", value: "0.8s (-87%)" },
          { label: "Conversion", value: "3.2% (+78%)" },
          { label: "Revenue", value: "+45%" },
          { label: "Mobile Rev", value: "+60%" },
          { label: "Velocity", value: "3x Faster" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 2,
        category: "Healthcare",
        client: "Medical Group (50 Physicians)",
        title: "Healthcare Patient Portal",
        icon: "Activity",
        color: "text-blue-600",
        challenge: "No self-service, High admin costs, Manual refills, Paper records.",
        solution: "Patient Portal: React web, Flutter mobile, Python/Django backend, HIPAA compliant.",
        implementation: [
          "React Web App",
          "Flutter Mobile Apps",
          "Python Django API",
          "EHR Integration (HL7)",
          "Secure Messaging"
        ],
        results: [
          { label: "Adoption", value: "65%" },
          { label: "Admin Calls", value: "-60%" },
          { label: "Savings", value: "$250K/Year" },
          { label: "NPS", value: "+28 pts" },
          { label: "Refills", value: "80% Digital" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 3,
        category: "Manufacturing",
        client: "Industrial Mfr ($100M Revenue)",
        title: "Manufacturing ERP Modernization",
        icon: "Factory",
        color: "text-orange-600",
        challenge: "25-year-old mainframe, Green screens, No mobile, High maint costs ($400K).",
        solution: "Phased Modernization: API wrapper, Web-based UI (Angular), Java Spring Boot, Cloud migration.",
        implementation: [
          "API Wrapper Strategy",
          "Angular Web UI",
          "Java Spring Boot Backend",
          "PostgreSQL Migration",
          "AWS Cloud Deployment"
        ],
        results: [
          { label: "Productivity", value: "+40%" },
          { label: "Maint Costs", value: "$180K (-55%)" },
          { label: "Inventory", value: "98% Accuracy" },
          { label: "Downtime", value: "-30%" },
          { label: "Mobile", value: "Enabled" }
        ],
        quote: "",
        author: ""
      }
    ]
  },

  faq: {
    heading: "Software Dev FAQs",
    items: [
      {
        question: "How long does custom software development take?",
        answer: "Timelines vary by complexity. We use Agile/Scrum (2-week sprints) to deliver working software continuously, not just at the end."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes. We offer bug fixes, performance monitoring, security updates, feature enhancements, and SLAs post-launch."
      },
      {
        question: "Will we own the source code?",
        answer: "Yes. Upon final payment, you own the complete source code, documentation, and IP with no licensing restrictions."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We use code reviews, automated testing (unit, integration, e2e), static analysis, and security scanning on every commit."
      }
    ]
  },

  getStarted: {
    badge: "Start Building",
    titleLines: ["Ready to Build", "Your Solution?"],
    description: "Lets discuss your unique requirements.",
    cards: [
      {
        id: "consultation",
        title: "Free Consultation",
        description: "1-hour technical session.",
        icon: "MessageSquare",
        theme: "light",
        list: [
          "Feasibility check",
          "Architecture advice",
          "Cost estimation"
        ],
        cta: { text: "Schedule Call", link: "#consult" }
      },
      {
        id: "proposal",
        title: "Request Proposal",
        description: "Detailed project plan.",
        icon: "FileText",
        theme: "dark",
        list: [
          "Scope & Specs",
          "Timeline & Milestones",
          "Team Composition"
        ],
        cta: { text: "Get Proposal", link: "#proposal" }
      }
    ],
    contact: {
      title: "Contact Dev Team",
      subtitle: "Direct access to engineers",
      methods: [
        { label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Phone", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  relatedResources: {
    services: [
      { title: "Mobile Apps", id: "mobile-development", icon: "Smartphone", color: "text-green-500", bg: "bg-green-50" },
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "DevOps", id: "devops", icon: "Infinity", color: "text-purple-500", bg: "bg-purple-50" }
    ],
    columns: [
      {
        title: "Guides",
        icon: "Book",
        items: [
          { label: "Build vs Buy Guide", href: "#" },
          { label: "Legacy Modernization", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Technology Radar", href: "#" },
          { label: "Cost Estimator", href: "#" }
        ]
      }
    ]
  }
};