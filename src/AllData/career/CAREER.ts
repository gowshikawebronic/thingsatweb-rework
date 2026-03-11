import {
  Users,
  Globe,
  Briefcase,
  Star,
  Search,
  ArrowRight,
  Sparkles,
  Cpu,
  TrendingUp,
  Zap,
  GitMerge,
  HeartHandshake,
  Heart,
  Rocket,
  Award,
  ShieldCheck,
  Scale,
  MessageCircle,
  Eye,
  Globe2,
  Smile,
  Monitor,
  Coffee,
  Wallet,
  GraduationCap,
  Clock,
  Umbrella,
  FileText,
  Phone,
  Code2,
  UserCheck,
  Gift,
  MessageSquare,
  Ghost,
  CheckCircle,
  Brain,
  Cloud,
  Quote,
  Layout,
  Shield,
  Terminal,
} from "lucide-react";

// --- TYPES ---
export interface Job {
  id: string;
  category: string;
  title: string;
  location: string;
  experience: string;
  salary?: string;
  skills: string[];
  description: string;
  details: {
    whatYouWillDo: string[];
    niceToHave?: string[];
    certifications?: string;
    projects?: string;
    conversion?: string;
  };
}

export interface CareersPageData {
  hero: {
    badge: string;
    titleLines: string[];
    subHeadline: string;
    ctas: { label: string; href: string; primary: boolean }[];
    stats: { value: string; label: string; icon: any }[];
  };
  whyWebronic: {
    header: {
      badge: string;
      title: string;
      highlight: string;
      description: string;
    };
    features: {
      id: number;
      title: string;
      description: string;
      icon: any;
      color: "blue" | "green";
      details: string[];
    }[];
  };
  culture: {
    header: {
      badge: string;
      title: string;
      highlight: string;
      description: string;
    };
    coreValues: {
      title: string;
      description: string;
      icon: any;
      color: "blue" | "green";
      fullWidth?: boolean;
    }[];
    environment: {
      title: string;
      items: { title: string; desc: string; icon: any }[];
    };
  };
  benefits: {
    header: {
      badge: string;
      title: string;
      highlight: string;
      description: string;
    };
    categories: {
      id: string;
      title: string;
      icon: any;
      color: "blue" | "green";
      subsections: { title: string; items: string[] }[];
    }[];
  };
  openPositions: {
    header: { badge: string; title: string; description: string };
    categories: string[];
    jobs: Job[];
  };
  hiringProcess: {
    header: { badge: string; title: string; description: string };
    totalTimeline: string;
    steps: {
      step: string;
      title: string;
      duration: string;
      icon: any;
      description: string;
      details?: string[];
      subSections?: { heading: string; items: string[] }[];
    }[];
    commitments: { title: string; desc: string; icon: any }[];
  };
  lifeAtWebronic: {
    header: { badge: string; title: string; description: string };
    stories: {
      name: string;
      role: string;
      tenure: string;
      icon: any;
      color: "blue" | "green";
      content: string;
      love: string;
    }[];
    testimonials: { text: string; author: string; role: string; icon: any }[];
  };
}

// --- DATA ---
export const CAREERS_DATA: CareersPageData = {
  hero: {
    badge: "Build Your Career",
    titleLines: ["Shape the Future of", "Technology"],
    subHeadline:
      "Join a team of 200+ innovators delivering cutting-edge solutions to 500+ clients across 50+ countries. Work on real-world problems using AI, Cloud, IoT, and emerging technologies",
    ctas: [
      { label: "View Open Positions", href: "#open-positions", primary: true },
      {
        label: "General Application",
        href: "/careers/general-application",
        primary: false,
      },
    ],
    stats: [
      { value: "200+", label: "Team Members", icon: Users },
      { value: "15+", label: "Years Innovation", icon: Briefcase },
      { value: "3+", label: "Countries", icon: Globe },
      { value: "4.8/5", label: "Glassdoor", icon: Star },
    ],
  },
  whyWebronic: {
    header: {
      badge: "Why Webronic?",
      title: "More Than Just a Job",
      highlight: "A Career Journey",
      description:
        "At Webronic Industries, we don't just build software. We solve real-world problems that impact millions of lives. From autonomous retail stores serving customers 24/7 in Sweden to manufacturing plants optimizing production in real-time, our solutions make a tangible difference.",
    },

    features: [
      {
        id: 1,
        title: "Work on Cutting-Edge Technology",
        description:
          "We don't maintain legacy systems. We build the future with the latest frameworks and tools like TensorFlow, PyTorch, React, Node.js, Kubernetes, and Cloud Platforms.",
        icon: Cpu,
        color: "blue",
        details: [
          "AI & Machine Learning: Deep learning, computer vision, NLP, predictive analytics",
          "Cloud-Native: Kubernetes orchestration, serverless architectures, multi-cloud deployments",
          "IoT & Edge Computing: Industrial IoT with MQTT, edge analytics, smart sensors monitoring 500+ machines globally",
          "Blockchain & Web3: Smart contracts, DeFi, decentralized applications",
          "Proprietary Platforms: StoreTech, FP Analyzer, Tanlux, Value Charts",
        ],
      },

      {
        id: 2,
        title: "Real Impact, Real Results",
        description:
          "Your work directly impacts businesses and people. We measure success in quantifiable outcomes like 68% downtime reduction and 99.2% quality inspection accuracy.",
        icon: TrendingUp,
        color: "green",
        details: [
          "Power manufacturing plants producing 10,000 units daily",
          "Predict equipment failures saving $5M annually",
          "Mobile apps serving 100,000+ daily users",
          "IoT solutions monitoring critical infrastructure 24/7",
          "$8.5M average client savings across projects",
        ],
      },

      {
        id: 3,
        title: "Global Reach with Local Culture",
        description:
          "Headquartered in Chennai with offices in Madurai and Salem (India), and partnerships in Sweden, we serve clients across Europe, North America, Asia, and the Middle East while enjoying the vibrant culture and cost of living advantages of India.",
        icon: Globe2,
        color: "blue",
        details: [
          "Clients across Europe, North America, Asia, Middle East",
          "Collaborate with global teams",
          "Gain exposure to diverse international markets",
          "Offices in Chennai, Madurai, Salem (India) & Sweden",
        ],
      },

      {
        id: 4,
        title: "Innovation-Driven Environment",
        description:
          "We encourage experimentation and learning. We sponsor relevant tech conferences and provide financial support for AWS, Azure, and GCP certifications.",
        icon: Zap,
        color: "green",
        details: [
          "20% Innovation Time: One day/week for learning, experimentation, or personal projects",
          "Hackathons & Innovation Days: Quarterly events",
          "Tech Talks: Weekly internal knowledge sharing",
          "Conference Attendance & Certification Support",
        ],
      },

      {
        id: 5,
        title: "Career Growth & Development",
        description:
          "Clear career progression paths promoting from within. Many of our senior leaders started as developers and engineers.",
        icon: GitMerge,
        color: "blue",
        details: [
          "Technical Track: Junior Developer → Senior Developer → Tech Lead → Principal Engineer → Chief Architect",
          "Management Track: Team Lead → Engineering Manager → Director → VP Engineering",
          "Specialist Track: Become a subject matter expert (AI/ML, Cloud, Security)",
          "Internal promotion culture",
        ],
      },

      {
        id: 6,
        title: "Work-Life Balance",
        description:
          "Technology is demanding, but burnout helps no one. We offer a supportive environment where emergencies are rare.",
        icon: HeartHandshake,
        color: "green",
        details: [
          "Hybrid work model (2-3 days office, rest remote depending on role)",
          "24 annual leave days + 12 public holidays",
          "Generous sick leave (no questions asked for short-term illness)",
          "Sabbatical program after 5 years (1-month paid)",
          "No weekend work expectations (emergencies are rare and compensated)",
        ],
      },
    ],
  },

  culture: {
  header: {
    badge: "Our Culture & Values",
    title: "Built on Trust, Innovation,",
    highlight: "and Excellence",
    description:
      "We don't just deliver projects. We deliver outcomes. Our culture is the foundation of every solution we build",
  },

  coreValues: [
    {
      title: "1. Customer Obsession",
      description:
        "We measure our success by our clients' success. A 30% cost reduction for a client is our achievement. A system running at 99.99% uptime makes us proud. We don't just deliver projects. We deliver outcomes.",
      icon: Heart,
      color: "blue",
    },
    {
      title: "2. Innovation Without Boundaries",
      description:
        "We question the status quo. 'That’s how it’s always been done' isn’t an acceptable answer. We experiment, fail fast, learn, and iterate. Our best solutions came from trying unconventional approaches.",
      icon: Rocket,
      color: "green",
    },
    {
      title: "3. Excellence as Standard",
      description:
        "Good enough isn't good enough. We write clean, maintainable code. We document thoroughly. We test rigorously. We review carefully. We refactor continuously. Quality isn't a phase. It's a mindset.",
      icon: Award,
      color: "blue",
    },
    {
      title: "4. Collaboration Over Competition",
      description:
        "We succeed together. Knowledge hoarding is discouraged. Helping teammates is celebrated. Code reviews are learning opportunities, not fault-finding sessions. We share credit generously.",
      icon: Users,
      color: "green",
    },
    {
      title: "5. Ownership & Accountability",
      description:
        "Take ownership of your work. If you write it, you own it. If it breaks, you fix it. If it succeeds, you celebrate it. We trust our team to make decisions and take calculated risks.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      title: "6. Continuous Learning",
      description:
        "Technology evolves rapidly. Yesterday’s expert becomes today’s student. We embrace learning as a career-long commitment. Questions are encouraged. Mistakes (when learned from) are valuable.",
      icon: Zap,
      color: "green",
    },
    {
      title: "7. Integrity Above All",
      description:
        "We do the right thing even when no one’s watching. We’re honest with clients about timelines and capabilities. We respect confidentiality. We honor commitments. Our reputation is built on trust.",
      icon: Scale,
      color: "blue",
      fullWidth: true,
    },
  ],

  environment: {
    title: "Our Work Environment",
    items: [
      {
        title: "Open Communication",
        desc: "Flat hierarchy, accessible leadership, no bureaucracy",
        icon: MessageCircle,
      },
      {
        title: "Transparent Decision-Making",
        desc: "Understand the 'why' behind decisions",
        icon: Eye,
      },
      {
        title: "Diverse & Inclusive",
        desc: "30% women in tech roles, team members from 8+ states, all backgrounds welcome",
        icon: Globe2,
      },
      {
        title: "Fun & Engaging",
        desc: "Team outings, birthday celebrations, Diwali parties, sports tournaments, game rooms",
        icon: Smile,
      },
      {
        title: "Modern Workspace",
        desc: "Air-conditioned offices, ergonomic furniture, high-speed internet, dual monitors, latest development machines",
        icon: Monitor,
      },
      {
        title: "Healthy Environment",
        desc: "Subsidized cafeteria (healthy meals), recreational areas, fitness partnerships",
        icon: Coffee,
      },
    ],
  },
},

benefits: {
  header: {
    badge: "Benefits & Perks",
    title: "Comprehensive Package",
    highlight: "Supporting Your Life Goals",
    description:
      "We invest in our people. From financial security to physical well-being and professional growth, our benefits are designed to support you at every stage of life",
  },

  categories: [
    {
      id: "financial",
      title: "Financial Benefits",
      icon: Wallet,
      color: "blue",
      subsections: [
        {
          title: "Competitive Compensation",
          items: [
            "Industry-leading salaries (benchmarked against top tech companies)",
            "Annual performance bonuses (10-25% of base salary based on performance)",
            "Stock options for senior roles to share in company growth",
            "Retention bonuses for long-term commitment",
            "Referral bonuses (₹50,000 - ₹200,000 depending on role)",
          ],
        },
        {
          title: "Additional Allowances",
          items: [
            "Housing/Rent Allowance",
            "Transportation Allowance",
            "Mobile & Internet Reimbursement (₹3,000/month for roles requiring 24/7 availability)",
            "Work-from-home setup allowance (₹50,000 one-time for home office equipment)",
          ],
        },
      ],
    },

    {
      id: "health",
      title: "Health & Wellness",
      icon: Heart,
      color: "green",
      subsections: [
        {
          title: "Comprehensive Health Insurance",
          items: [
            "Medical insurance for employee + spouse + 2 children + parents (₹10 lakh coverage)",
            "Dental coverage",
            "Vision coverage",
            "Mental health support (counseling sessions covered)",
            "Annual health checkups (preventive care)",
            "Critical illness coverage (₹25 lakh)",
          ],
        },
        {
          title: "Wellness Programs",
          items: [
            "Gym membership reimbursement (₹2,000/month)",
            "Yoga and meditation classes (weekly, on-site)",
            "Ergonomic assessments and equipment",
            "Eye care support (blue-light glasses reimbursed)",
          ],
        },
      ],
    },

    {
      id: "growth",
      title: "Professional Development",
      icon: GraduationCap,
      color: "blue",
      subsections: [
        {
          title: "Learning & Growth",
          items: [
            "Certification sponsorship (AWS, Azure, GCP, PMP, Scrum, etc.) with 100% cost covered upon passing",
            "Online course subscriptions (Udemy, Coursera, Pluralsight)",
            "Conference attendance (2 conferences/year for relevant roles)",
            "Technical books budget (₹10,000/year)",
            "Mentorship program (paired with senior engineers)",
          ],
        },
        {
          title: "Career Advancement",
          items: [
            "Quarterly performance reviews with clear feedback",
            "Individual development plans (IDP)",
            "Internal job postings (priority for internal candidates)",
            "Leadership training programs",
          ],
        },
      ],
    },

    {
      id: "timeoff",
      title: "Time Off & Flexibility",
      icon: Clock,
      color: "green",
      subsections: [
        {
          title: "Paid Time Off",
          items: [
            "24 annual leave days (increases to 30 after 5 years)",
            "12 public holidays (India + optional floating holidays)",
            "12 sick leave days (no doctor’s note required for 1-2 days)",
            "Bereavement leave (7 days)",
            "Maternity leave: 26 weeks paid (as per Indian law)",
            "Paternity leave: 4 weeks paid",
            "Adoption leave: 26 weeks paid",
          ],
        },
        {
          title: "Work Flexibility",
          items: [
            "Hybrid work model (2-3 days office minimum for collaborative roles)",
            "Flexible hours (core hours 11 AM - 4 PM, flexible start/end)",
            "Work from anywhere (up to 2 weeks/year from anywhere in India)",
            "Sabbatical after 5 years (1 month paid, 3 months unpaid option)",
          ],
        },
      ],
    },

    {
      id: "lifestyle",
      title: "Lifestyle & Campus",
      icon: Coffee,
      color: "blue",
      subsections: [
        {
          title: "Team & Culture",
          items: [
            "Monthly team outings (bowling, dinners, escape rooms)",
            "Annual company offsite (3-day resort trip, team building)",
            "Festival celebrations (Diwali, Pongal, Christmas bonuses/gifts)",
            "Birthday celebrations (half-day off on your birthday)",
          ],
        },
        {
          title: "Office Amenities",
          items: [
            "Subsidized cafeteria (breakfast ₹20, lunch ₹40, snacks ₹15)",
            "Unlimited coffee, tea, snacks",
            "Game room (foosball, table tennis, PlayStation, board games)",
            "Nap pods (for power naps during long days)",
            "Bike parking and EV charging stations",
            "Shuttle service from major transit hubs",
          ],
        },
      ],
    },

    {
      id: "future",
      title: "Future & Family Support",
      icon: Umbrella,
      color: "green",
      subsections: [
        {
          title: "Family Support",
          items: [
            "Childcare support (₹5,000/month allowance)",
            "Education assistance (employee’s children scholarship program)",
            "Relocation assistance (for candidates moving to Chennai/Madurai/Salem)",
          ],
        },
        {
          title: "Financial Planning",
          items: [
            "Provident Fund (EPF) contributions",
            "Gratuity (as per Indian law)",
            "National Pension Scheme (NPS) options",
            "Group life insurance (₹50 lakh coverage)",
          ],
        },
      ],
    },
  ],
},


 openPositions: {
  header: {
    badge: "Current Opportunities",
    title: "Join Our Growing Team",
    description:
      "We’re actively hiring across multiple roles and experience levels. All positions are based in Chennai, Madurai, or Salem with hybrid work options",
  },

  categories: [
    "All",
    "Software Development",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Project Management",
    "IoT & Hardware",
    "Quality Assurance",
    "UI/UX Design",
    "Freshers & Interns",
  ],

  jobs: [
    {
      id: "soft-1",
      category: "Software Development",
      title: "Full Stack Developer (Node.js + React)",
      location: "Chennai, Hybrid",
      experience: "2-5 years",
      skills: [
        "Node.js",
        "Express",
        "React",
        "MongoDB/PostgreSQL",
        "REST APIs",
        "Git",
        "AWS/Azure",
      ],
      description:
        "Build scalable web applications for enterprise clients. Collaborate with UX designers and product managers to deliver high-quality software",
      details: {
        whatYouWillDo: [
          "Build scalable web applications for enterprise clients",
          "Design and implement RESTful APIs",
          "Collaborate with UX designers and product managers",
          "Participate in code reviews and architectural decisions",
          "Mentor junior developers",
        ],
        niceToHave: [
          "TypeScript",
          "GraphQL",
          "Docker",
          "Kubernetes",
          "CI/CD",
        ],
        projects: "E-commerce platforms, SaaS applications, customer portals",
      },
    },

    {
      id: "soft-2",
      category: "Software Development",
      title: "Mobile Developer (Flutter / React Native)",
      location: "Chennai/Madurai, Hybrid",
      experience: "2-4 years",
      skills: [
        "Flutter",
        "React Native",
        "Dart",
        "JavaScript",
        "REST APIs",
        "State management (Provider, Redux)",
        "Firebase",
      ],
      description:
        "Develop cross-platform mobile applications with offline capabilities and optimized performance",
      details: {
        whatYouWillDo: [
          "Develop cross-platform mobile applications",
          "Integrate with backend APIs and cloud services",
          "Implement push notifications and offline capabilities",
          "Optimize app performance and user experience",
          "Publish apps to App Store and Play Store",
        ],
        niceToHave: [
          "Native iOS (Swift)",
          "Android (Kotlin)",
          "CI/CD for mobile (Fastlane, Codemagic)",
          "App Store / Play Store publishing",
        ],
        projects:
          "StoreTech customer app, Tanlux booking app, enterprise mobile solutions",
      },
    },

    {
      id: "soft-3",
      category: "Software Development",
      title: "Backend Developer (Python / Django)",
      location: "Chennai, Hybrid",
      experience: "3-6 years",
      skills: [
        "Python",
        "Django",
        "Flask",
        "FastAPI",
        "PostgreSQL/MySQL",
        "REST APIs",
        "Celery (async tasks)",
        "Redis",
      ],
      description:
        "Design and develop high-performance backend systems and data processing pipelines",
      details: {
        whatYouWillDo: [
          "Design and develop high-performance backend systems",
          "Build data processing pipelines",
          "Integrate ML models into production applications",
          "Optimize database queries and API performance",
          "Implement caching and background job processing",
        ],
        niceToHave: [
          "scikit-learn",
          "TensorFlow",
          "AWS (Lambda, RDS, S3)",
          "Docker",
          "Microservices",
        ],
        projects: "AI/ML platforms, data analytics systems, automation tools",
      },
    },

    {
      id: "ai-1",
      category: "AI & Machine Learning",
      title: "Machine Learning Engineer",
      location: "Chennai, Hybrid",
      experience: "3-7 years",
      salary: "₹12-25 LPA",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "pandas",
        "numpy",
        "ML algorithms (regression, classification, clustering, deep learning)",
      ],
      description:
        "Develop ML models for predictive analytics, computer vision, and NLP",
      details: {
        whatYouWillDo: [
          "Develop ML models for predictive analytics, computer vision, NLP",
          "Train and optimize deep learning models",
          "Deploy models to production (REST APIs, real-time inference)",
          "Implement MLOps pipelines (training, versioning, monitoring)",
          "Collaborate with data engineers and domain experts",
        ],
        niceToHave: [
          "Computer vision (OpenCV, YOLO, ResNet)",
          "NLP (Transformers, BERT, GPT)",
          "MLOps (MLflow, Kubeflow)",
          "Cloud ML services",
        ],
        projects:
          "Manufacturing quality inspection, predictive maintenance, demand forecasting, fraud detection",
      },
    },

    {
      id: "ai-2",
      category: "AI & Machine Learning",
      title: "Data Scientist",
      location: "Chennai/Salem, Hybrid",
      experience: "2-5 years",
      skills: [
        "Python",
        "R",
        "SQL",
        "Statistics",
        "Tableau",
        "Power BI",
        "matplotlib",
        "ML modeling",
        "A/B testing",
      ],
      description:
        "Analyze complex datasets to extract business insights and build statistical models",
      details: {
        whatYouWillDo: [
          "Analyze complex datasets to extract business insights",
          "Build statistical models and ML solutions",
          "Create dashboards and visualizations for stakeholders",
          "Conduct A/B testing and experimentation",
          "Present findings to non-technical audiences",
        ],
        niceToHave: [
          "Big data (Spark, Hadoop)",
          "Snowflake",
          "BigQuery",
          "Causal inference",
          "Time-series forecasting",
        ],
        projects:
          "Business intelligence for retail, supply chain optimization, customer analytics",
      },
    },

    {
      id: "cloud-1",
      category: "Cloud & DevOps",
      title: "DevOps Engineer",
      location: "Chennai, Hybrid",
      experience: "3-6 years",
      skills: [
        "Linux",
        "Docker",
        "Kubernetes",
        "CI/CD (Jenkins, GitLab CI, GitHub Actions)",
        "Terraform",
        "CloudFormation",
        "AWS/Azure/GCP",
        "Prometheus",
        "Grafana",
        "ELK",
      ],
      description:
        "Design and maintain CI/CD pipelines and manage Kubernetes infrastructure",
      details: {
        whatYouWillDo: [
          "Design and maintain CI/CD pipelines",
          "Manage Kubernetes clusters (EKS, AKS, GKE)",
          "Infrastructure as Code (Terraform, Ansible)",
          "Implement monitoring, logging, alerting",
          "Optimize cloud costs and performance",
          "Participate in on-call rotation (compensated)",
        ],
        niceToHave: [
          "Service mesh (Istio)",
          "GitOps (ArgoCD, Flux)",
          "Security scanning (SAST/DAST)",
          "Multi-cloud",
        ],
        projects:
          "Microservices platforms, auto-scaling infrastructure, disaster recovery setups",
      },
    },

    {
      id: "cloud-2",
      category: "Cloud & DevOps",
      title: "Cloud Architect",
      location: "Chennai, Hybrid (some travel required)",
      experience: "7-12 years",
      salary: "₹25-40 LPA",
      skills: [
        "AWS",
        "Azure",
        "GCP",
        "Multi-cloud architecture",
        "Microservices",
        "Serverless",
        "Event-driven systems",
        "High availability",
        "Disaster recovery",
        "Cost optimization",
        "Security & compliance",
      ],
      description:
        "Design enterprise cloud architectures and lead migration projects",
      details: {
        whatYouWillDo: [
          "Design enterprise cloud architectures",
          "Lead cloud migration projects",
          "Provide technical leadership to development teams",
          "Conduct architecture reviews and audits",
          "Engage with clients as trusted technical advisor",
        ],
        certifications:
          "AWS Solutions Architect Professional, Azure Solutions Architect Expert, or Google Cloud Professional Architect",
        projects:
          "Cloud transformation for Fortune 500 clients, multi-cloud strategies, large-scale migrations",
      },
    },

    {
      id: "sec-1",
      category: "Cybersecurity",
      title: "Security Engineer",
      location: "Chennai, Hybrid",
      experience: "4-8 years",
      skills: [
        "Penetration testing",
        "Vulnerability assessment",
        "SIEM (Splunk, QRadar)",
        "Network security",
        "Application security (OWASP Top 10)",
        "ISO 27001",
        "SOC 2",
        "GDPR",
      ],
      description:
        "Conduct security assessments and implement controls to protect enterprise assets",
      details: {
        whatYouWillDo: [
          "Conduct security assessments and penetration tests",
          "Monitor security events and respond to incidents",
          "Implement security controls and policies",
          "Perform code reviews for security vulnerabilities",
          "Manage vulnerability management programs",
        ],
        certifications: "CEH, OSCP, CISSP, or equivalent",
        projects:
          "Secure cloud deployments, compliance programs, security operations center (SOC)",
      },
    },

    {
      id: "pm-1",
      category: "Project Management",
      title: "Technical Project Manager",
      location: "Chennai, Madurai (client travel required)",
      experience: "5-10 years",
      skills: [
        "Agile/Scrum",
        "Jira",
        "Asana",
        "MS Project",
        "Stakeholder management",
        "Budget & resource management",
        "Technical background (former developer/engineer)",
      ],
      description:
        "Lead end-to-end project delivery and manage cross-functional teams",
      details: {
        whatYouWillDo: [
          "Lead end-to-end project delivery (planning, execution, closure)",
          "Manage cross-functional teams (developers, designers, QA)",
          "Client communication and expectation management",
          "Risk management and mitigation",
          "Budget tracking and resource allocation",
        ],
        certifications: "PMP, Scrum Master (CSM/PSM), SAFe",
        projects:
          "Large enterprise software implementations, digital transformation programs",
      },
    },

    {
      id: "iot-1",
      category: "IoT & Hardware",
      title: "IoT Engineer",
      location: "Salem, Hybrid",
      experience: "3-6 years",
      skills: [
        "Embedded C/C++",
        "Rust",
        "MQTT",
        "CoAP",
        "Modbus",
        "ESP32",
        "Arduino",
        "Raspberry Pi",
        "Sensors & actuators",
        "AWS IoT",
        "Azure IoT",
      ],
      description:
        "Design and develop IoT solutions integrating hardware with cloud platforms",
      details: {
        whatYouWillDo: [
          "Design and develop IoT solutions",
          "Integrate sensors and devices with cloud platforms",
          "Develop firmware for embedded devices",
          "Implement edge analytics and processing",
          "Troubleshoot hardware and connectivity issues",
        ],
        niceToHave: [
          "Industrial protocols (OPC-UA, PROFINET)",
          "Edge computing",
          "LoRaWAN",
          "Zigbee",
          "BLE",
        ],
        projects:
          "Industrial IoT (manufacturing sensors), smart building automation, asset tracking",
      },
    },

    {
      id: "qa-1",
      category: "Quality Assurance",
      title: "QA Automation Engineer",
      location: "Chennai, Hybrid",
      experience: "3-5 years",
      skills: [
        "Selenium",
        "Cypress",
        "Appium",
        "Java",
        "Python",
        "JavaScript",
        "Postman",
        "RestAssured",
        "JMeter",
        "Gatling",
        "CI/CD integration",
      ],
      description:
        "Design automated test frameworks and write test scripts",
      details: {
        whatYouWillDo: [
          "Design and implement automated test frameworks",
          "Write test scripts for web, mobile, and API",
          "Integrate tests into CI/CD pipelines",
          "Perform load and performance testing",
          "Collaborate with developers on testability",
        ],
        projects:
          "Enterprise application testing, mobile app testing, API test automation",
      },
    },

    {
      id: "ui-1",
      category: "UI/UX Design",
      title: "UI/UX Designer",
      location: "Chennai, Hybrid",
      experience: "2-5 years",
      skills: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "User research",
        "Wireframing & prototyping",
        "Visual design",
        "Responsive design",
        "Accessibility (WCAG)",
      ],
      description:
        "Design intuitive user interfaces and conduct user research",
      details: {
        whatYouWillDo: [
          "Conduct user research and usability testing",
          "Create wireframes, prototypes, mockups",
          "Design intuitive user interfaces",
          "Collaborate with developers for implementation",
          "Maintain design systems and style guides",
        ],
        niceToHave: [
          "Motion design (After Effects)",
          "Design systems",
          "HTML/CSS basics",
          "User testing",
        ],
        projects:
          "Web applications, mobile apps, SaaS platforms, customer portals",
      },
    },

    {
      id: "intern-1",
      category: "Freshers & Interns",
      title: "Software Development Intern",
      location: "Chennai/Madurai/Salem (Office-based)",
      experience:
        "Final year students or recent graduates (BE/BTech Computer Science, IT, or related)",
      salary: "₹15,000 - ₹25,000/month",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "Data structures & algorithms",
        "OOP concepts",
        "SQL",
        "Git",
      ],
      description:
        "6-month internship with potential for full-time conversion",
      details: {
        whatYouWillDo: [
          "Professional software development practices",
          "Work on real client projects (with mentorship)",
          "Agile methodologies",
          "Code review process",
          "Industry-standard tools and technologies",
        ],
        conversion:
          "High-performing interns receive full-time offers (₹4-6 LPA starting)",
      },
    },

    {
      id: "intern-2",
      category: "Freshers & Interns",
      title: "Data Analytics Intern",
      location: "Chennai/Madurai/Salem",
      experience:
        "Final year students (BE/BTech, MSc Statistics, Mathematics, Economics)",
      salary: "₹15,000 - ₹20,000/month",
      skills: [
        "Python/R",
        "SQL",
        "Statistics basics",
        "Excel",
        "Data visualization basics",
      ],
      description:
        "6-month internship focusing on data analysis and BI tools",
      details: {
        whatYouWillDo: [
          "Data analysis and reporting",
          "SQL querying and database concepts",
          "BI tools (Tableau, Power BI)",
          "Basic ML concepts",
          "Business problem-solving with data",
        ],
      },
    },
  ],
},


  hiringProcess: {
  header: {
    badge: "Hiring Process",
    title: "Transparent, Efficient, Respectful",
    description:
      "We value your time and aim for a smooth, efficient hiring process. Here’s what to expect:",
  },

  totalTimeline: "2-3 weeks from application to offer",

  steps: [
    {
      step: "Step 1",
      title: "Application Review",
      duration: "1-3 days",
      icon: FileText,
      description: "Submit resume/CV via our careers portal",
      details: [
        "Submit resume/CV via our careers portal",
        "Our talent team reviews all applications",
        "Relevant applications move forward within 3 business days",
        "Everyone receives a response (yes or no)",
      ],
    },

    {
      step: "Step 2",
      title: "Initial Screening",
      duration: "30 minutes",
      icon: Phone,
      description:
        "Phone or video call with HR/Recruiter to discuss your background, interests, and salary expectations",
      details: [
        "Phone or video call with HR/Recruiter",
        "Discuss your background, interests, and salary expectations",
        "Overview of role and company",
        "Answer your initial questions",
        "Timeline: Scheduled within 5 days of application approval",
      ],
    },

    {
      step: "Step 3",
      title: "Technical Assessment",
      duration: "1-2 hours",
      icon: Code2,
      description: "Practical evaluation of skills relevant to the role",
      subSections: [
        {
          heading: "For Engineering Roles:",
          items: [
            "Coding assessment (HackerRank, CodeSignal, or take-home project)",
            "Practical problem-solving (real-world scenarios)",
            "Focus on problem-solving approach, code quality, communication",
            "Not whiteboard algorithm puzzles",
          ],
        },
        {
          heading: "For Other Roles:",
          items: [
            "Case study or practical assignment relevant to role",
            "Design challenge (for designers)",
            "Strategy presentation (for PM/architect roles)",
          ],
        },
      ],
    },

    {
      step: "Step 4",
      title: "Technical Interview",
      duration: "1-2 rounds, 1 hour each",
      icon: Users,
      description:
        "Video call with senior engineers/team leads to deep-dive into technical skills",
      details: [
        "Video call with senior engineers/team leads",
        "Deep-dive into technical skills",
        "Discuss past projects and experiences",
        "Pair programming or system design (for senior roles)",
        "Evaluation: technical depth, problem-solving, collaboration, communication",
      ],
    },

    {
      step: "Step 5",
      title: "Cultural Fit Interview",
      duration: "45 minutes",
      icon: HeartHandshake,
      description:
        "Meet with hiring manager or department head to assess alignment with company values",
      details: [
        "Meet with hiring manager or department head",
        "Assess alignment with company values",
        "Discuss career goals and aspirations",
        "Your questions about team, projects, culture",
        "Evaluation: teamwork, ownership, learning mindset, culture add",
      ],
    },

    {
      step: "Step 6",
      title: "Final Discussion",
      duration: "30 minutes (Optional)",
      icon: UserCheck,
      description: "Final alignment meeting",
      details: [
        "For senior/leadership roles: meet with Head of Technology and Project Operations",
        "For all roles: opportunity to meet potential teammates",
        "Ask any remaining questions",
      ],
    },

    {
      step: "Step 7",
      title: "Offer",
      duration: "1-2 days after final interview",
      icon: Gift,
      description: "We extend a formal offer to join the team",
      details: [
        "Verbal offer call (salary, benefits discussion)",
        "Written offer letter (24-48 hours)",
        "Negotiation welcome (we’re reasonable and fair)",
        "Decision timeline: 1 week (extendable if needed)",
      ],
    },

    {
      step: "Step 8",
      title: "Onboarding",
      duration: "Start Date",
      icon: Rocket,
      description: "Welcome to Webronic!",
      details: [
        "Background verification (standard process)",
        "Pre-joining paperwork (digital, easy)",
        "Welcome kit sent to your address",
        "First day: orientation, team introduction, laptop setup",
      ],
    },
  ],

  commitments: [
    {
      title: "Respectful Communication",
      desc: "Timely responses, clear expectations",
      icon: MessageSquare,
    },
    {
      title: "No Ghosting",
      desc: "Everyone gets closure",
      icon: Ghost,
    },
    {
      title: "Feedback Provided",
      desc: "If requested, we share interview feedback",
      icon: CheckCircle,
    },
    {
      title: "Transparent Process",
      desc: "No surprises, no hidden steps",
      icon: Eye,
    },
  ],
},



  lifeAtWebronic: {
  header: {
    badge: "Life at Webronic",
    title: "A Day in the Life",
    description:
      "Don't just take our word for it. Hear directly from the people building the future of technology",
  },

  stories: [
    {
      name: "Vasanth",
      role: "Senior Full Stack Developer",
      tenure: "3 years at Webronic",
      icon: Code2,
      color: "blue",
      content:
        "I start around 10 AM (flexible hours are great). Morning standup at 10:30 with my team for a quick sync on what everyone's working on. Then I dive into coding, currently building a new feature for our e-commerce platform. Our code review culture is fantastic; I learn something new from every review. Lunch at our subsidized cafeteria (₹40 for a full meal). Sometimes we play table tennis after lunch, which is a great way to recharge. Afternoons are for focused work or pair programming sessions. We have 'no meeting Wednesdays' which I love for deep work. Thursdays we have tech talks. Last week someone presented on GraphQL, super interesting. I usually wrap up by 6:30 PM. No pressure to stay late unless there's a genuine deadline (rare). Fridays we sometimes do team outings. We recently went to an escape room.",
      love:
        "Working on real problems (our code impacts actual businesses), learning constantly (I’ve picked up Kubernetes and AWS here), and the people (smart, collaborative, no egos).",
    },

    {
      name: "Babu",
      role: "Machine Learning Engineer",
      tenure: "1.5 years at Webronic",
      icon: Brain,
      color: "green",
      content:
        "I came from a research background and was nervous about industry. Webronic made the transition smooth. I work on manufacturing quality inspection using computer vision models to detect defects. Seeing my model deployed in a factory, running 24/7, inspecting thousands of parts... that's incredibly satisfying. The team is supportive. When I struggled with production deployment, senior engineers patiently helped me learn Docker, Kubernetes, CI/CD. There’s zero judgment for asking questions. I'm currently pursuing my AWS ML certification, and the company is sponsoring it. The 20% innovation time is real; I'm experimenting with transformer models for a side project.",
      love:
        "Work-life balance is solid. I work from home 3 days a week. No weekend work. I have time for my hobbies (I dance on weekends).",
    },
  ],

  testimonials: [
    // {
    //   text:
    //     "Webronic gave me the opportunity to work on cutting-edge AI projects right out of college. The mentorship and learning culture here are exceptional.",
    //   author: "Divya S.",
    //   role: "ML Engineer (2 years)",
    //   icon: Zap,
    // },
    {
      text:
        "The work-life balance is real. I’ve worked at startups with 12-hour days. Here, I deliver quality work in 8-9 hours and have time for my family.",
      author: "Jayakumar",
      role: "Backend Developer (3 years)",
      icon: Clock,
    },
    {
      text:
        "Transparent management, clear career paths, and genuinely smart colleagues. This is the best place I’ve worked.",
      author: "Arun",
      role: "Project Manager (5 years)",
      icon: Smile,
    },
  ],
},

};
