
import { ServicePageData } from "../types";

export const IOT_DATA: ServicePageData = {
  id: "iot-solutions",

  preview: {
    title: "IoT Solutions",
    tagline: "Connect & Optimize",
    description: "Enterprise IoT solutions for manufacturing, retail, healthcare. Industrial IoT, smart buildings, asset tracking, predictive maintenance.",
    image: "./assets/images/Service Images/IoT - Webronic Industires Private Limited.png",
    icon: "Wifi",
    points: [
      "Industrial IoT & Industry 4.0",
      "Smart Building Automation",
      "Asset Tracking & Management",
      "Predictive Analytics"
    ],
    technologies: [
      { name: "AWS IoT", logo: "./assets/images/Technology/Amazon_Web_Services_Logo.svg" },
      { name: "Azure IoT", logo: "./assets/images/Technology/Microsoft_Azure.svg" },
      { name: "Google Cloud IoT", logo: "./assets/images/Technology/Google_Cloud_logo.svg" },
      { name: "MQTT", logo: "./assets/images/Technology/Mqtt-hor.svg" },
      { name: "Docker", logo: "./assets/images/Technology/Docker_Logo.svg" }
    ]
  },

  hero: {
    badge: "IoT Solutions & Services",
    titlePrefix: "Connect, Monitor, and Optimize",
    titleHighlight: "with Intelligent IoT Ecosystems",
    description: "Connect, Monitor, and Optimize with Intelligent IoT Ecosystems",
    features: [
      "End-to-end IoT implementation from sensors to cloud",
      "Industrial IoT expertise across manufacturing, retail, healthcare",
      "Real time monitoring and predictive analytics",
      "Proven platforms: AWS IoT, Azure IoT Hub, Google Cloud IoT"
    ],
    ctaPrimary: "Schedule IoT Consultation",
    ctaSecondary: "View IoT Case Studies"
  },

  overview: {
    badge: "Service Overview",
    heading: "The IoT",
    highlight: "Opportunity",
    content: [
      "The Internet of Things (IoT) is transforming industries by connecting physical devices to digital systems, enabling real-time monitoring, automation, and data-driven decision-making. From manufacturing equipment and retail infrastructure to healthcare devices and smart buildings, IoT creates unprecedented visibility and control.",
      "Webronic Industries specializes in designing and implementing enterprise-grade IoT solutions that deliver measurable business value. With our StoreTech and FP Analyzer platforms already processing data from thousands of connected devices globally, we bring proven IoT expertise to every engagement."
    ],
    differentiators: [
      {
        title: "Real-Time Visibility",
        description: "Monitor equipment, assets, environments, and processes in real time.",
        icon: "Eye"
      },
      {
        title: "Predictive Intelligence",
        description: "Move from reactive to proactive operations. Predict failures before they occur.",
        icon: "BrainCircuit"
      },
      {
        title: "Automation & Efficiency",
        description: "Automate manual processes, reduce waste, and optimize resource usage.",
        icon: "Settings"
      },
      {
        title: "Full-Stack Capability",
        description: "We handle every layer: Device, Edge, Network, Cloud, Application.",
        icon: "Layers"
      },
      {
        title: "Proven Platforms",
        description: "Managing thousands of devices with StoreTech and FP Analyzer.",
        icon: "CheckCircle"
      }
    ]
  },

  coreServices: {
    badge: "Core IoT Services",
    titleLine1: "Comprehensive",
    titleHighlight: "IoT Solutions",
    description: "From Industrial IoT to Smart Buildings, we deliver end-to-end connectivity",
    cards: [
      {
        title: "Industrial IoT (IIoT)",
        desc: "Transform Manufacturing with Industry 4.0. Connect equipment, enable predictive maintenance, and optimize operations.",
        icon: "Factory",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "Equipment Monitoring",
            items: [
              { term: "Connectivity", description: "Connect Legacy (Retrofit sensors) & Modern (OPC-UA/PLC) equipment." },
              { term: "Sensors", description: "Vibration, Temperature, Current, Flow, Pressure." },
              { term: "Data Collection", description: "Direct PLC, OPC-UA, Modbus, Industrial Ethernet." }
            ]
          },
          {
            heading: "Predictive Maintenance",
            items: [
              { term: "Condition Monitoring", description: "Vibration analysis (bearings), Temperature tracking, Oil analysis." },
              { term: "ML Models", description: "Predict failures, RUL (Remaining Useful Life), Anomaly detection." },
              { term: "Benefits", description: "30-50% less downtime, 20-30% lower maintenance costs." }
            ]
          },
          {
            heading: "Production & Quality",
            content: ["Real-Time OEE Tracking, Digital Twin Simulation, Automated Quality Inspection (Computer Vision)."]
          }
        ]
      },
      {
        title: "Smart Building Automation",
        desc: "Optimize Operations & Comfort. Intelligent BMS for energy efficiency, security, and occupant wellbeing.",
        icon: "Building",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "HVAC Optimization",
            items: [
              { term: "Control", description: "Zone-based control, Occupancy-based operation, CO2 demand ventilation." },
              { term: "Savings", description: "20-30% HVAC energy reduction, Improved comfort." }
            ]
          },
          {
            heading: "Lighting & Security",
            items: [
              { term: "Smart Lighting", description: "Occupancy sensors, Daylight harvesting. 40-60% energy reduction." },
              { term: "Integrated Security", description: "Access control, Video analytics, Emergency systems." }
            ]
          },
          {
            heading: "Space & Environment",
            content: ["Occupancy Sensing (Desk/Room usage), Environmental Monitoring (Air quality, Temp, Humidity)."]
          }
        ]
      },
      {
        title: "Asset Tracking",
        desc: "Real-Time Asset Visibility. Track location, condition, and utilization across facilities and fleets.",
        icon: "MapPin",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "Indoor Tracking",
            items: [
              { term: "Tech", description: "BLE Beacons, WiFi Triangulation, UWB, RFID." },
              { term: "Use Cases", description: "Hospital equipment, Manufacturing tools, Warehouse inventory." }
            ]
          },
          {
            heading: "Fleet Management",
            items: [
              { term: "GPS Tracking", description: "Real-time location, Route optimization, Geofencing." },
              { term: "Benefits", description: "15-20% fuel savings, Improved delivery times." }
            ]
          },
          {
            heading: "Condition Monitoring",
            content: ["Track Temperature (Cold chain), Shock/Vibration (Fragile goods), Utilization Analytics."]
          }
        ]
      },
      {
        title: "Environmental Monitoring",
        desc: "Monitor Air, Water, Soil. Sensor networks for compliance, safety, and sustainability.",
        icon: "Thermometer",
        color: "text-teal-600",
        bg: "bg-teal-50",
        subSections: [
          {
            heading: "Air Quality",
            items: [
              { term: "Pollutants", description: "PM2.5, PM10, CO, CO2, NO2, VOCs." },
              { term: "Applications", description: "Industrial emissions, Urban air quality, Safety compliance." }
            ]
          },
          {
            heading: "Water & Soil",
            items: [
              { term: "Water Quality", description: "pH, Dissolved oxygen, Turbidity, Conductivity." },
              { term: "Precision Ag", description: "Soil moisture, Temperature, Nutrient levels, Weather stations." }
            ]
          }
        ]
      },
      {
        title: "Predictive Analytics",
        desc: "Actionable IoT Insights. Apply ML and AI to data streams for prediction and optimization.",
        icon: "Activity",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Capabilities",
            items: [
              { term: "Forecasting", description: "Time series (ARIMA, LSTM) for demand and performance." },
              { term: "Anomaly Detection", description: "Identify abnormal behavior using statistical methods and ML." },
              { term: "Optimization", description: "Energy and process optimization using reinforcement learning." }
            ]
          }
        ]
      },
      {
        title: "IoT Platform Development",
        desc: "Custom IoT Platforms. Scalable architecture when commercial solutions don't fit.",
        icon: "Server",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        subSections: [
          {
            heading: "Platform Components",
            items: [
              { term: "Device Management", description: "Provisioning, FOTA updates, Auth, Lifecycle." },
              { term: "Data Pipeline", description: "Ingestion (MQTT/HTTP), Storage (Time-series), Analytics." },
              { term: "Application", description: "Real-time dashboards, APIs, Mobile apps." }
            ]
          },
          {
            heading: "Examples",
            content: ["StoreTech (Retail automation, 150+ locations), FP Analyzer (Production monitoring, 500+ machines)."]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Implementation Time",
        type: "highlight",
        content: "3-6 Months"
      },
      right: {
        title: "Key Technologies",
        type: "tags",
        content: ["MQTT", "AWS IoT", "Azure IoT", "Edge Computing", "LoRaWAN"]
      }
    }
  },

  process: {
    title: "Implementation Process",
    description: "From assessment to optimized operations",
    phases: [
      {
        phase: "Phase 1",
        title: "Assessment",
        duration: "3-4 Weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Business objectives definition",
          "Use case identification",
          "Infrastructure assessment",
          "Security requirements"
        ],
        activities: [
          "Discovery workshops",
          "Site surveys",
          "Technical design"
        ],
        deliverables: [
          "Solution architecture",
          "Bill of materials",
          "Implementation plan"
        ]
      },
      {
        phase: "Phase 2",
        title: "Pilot",
        duration: "4-8 Weeks",
        icon: "PlayCircle",
        color: "bg-indigo-600",
        objectives: [
          "Proof of value",
          "Data validation",
          "System tuning",
          "User feedback"
        ],
        activities: [
          "Sensor installation",
          "Edge configuration",
          "Dashboard setup"
        ],
        deliverables: [
          "Pilot system",
          "Performance report",
          "Refined design"
        ]
      },
      {
        phase: "Phase 3",
        title: "Deployment",
        duration: "2-6 Months",
        icon: "Server",
        color: "bg-purple-600",
        objectives: [
          "Full scale rollout",
          "System integration",
          "Reliability testing",
          "User training"
        ],
        activities: [
          "Mass deployment",
          "Integration",
          "Testing"
        ],
        deliverables: [
          "Production system",
          "Training",
          "Documentation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Optimization",
        duration: "Ongoing",
        icon: "TrendingUp",
        color: "bg-green-600",
        objectives: [
          "Continuous improvement",
          "Model refinement",
          "Use case expansion",
          "ROI maximization"
        ],
        activities: [
          "Performance monitoring",
          "Data analysis",
          "Model retraining"
        ],
        deliverables: [
          "Optimization reports",
          "Enhanced models",
          "New features"
        ]
      }
    ]
  },

  techStack: {
    heading: "IOT TECHNOLOGY STACK",
    description: "Robust ecosystem for connected solutions",
    frameworks: [
      { name: "MQTT", desc: "Lightweight Messaging" },
      { name: "CoAP", desc: "Constrained Protocol" },
      { name: "HTTP/S", desc: "Web Protocol" },
      { name: "LoRaWAN", desc: "Long Range Network" },
      { name: "NB-IoT", desc: "Cellular IoT" }
    ],
    llms: [
      { name: "Greengrass", desc: "AWS Edge" },
      { name: "Azure Edge", desc: "Microsoft Edge" },
      { name: "Edge TPU", desc: "Google ML Edge" }
    ],
    mlOps: ["Raspberry Pi", "ESP32", "Arduino", "STM32", "PLCs"],
    cloudPlatforms: [
      {
        provider: "Cloud IoT",
        color: "text-blue-500",
        services: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT"]
      },
      {
        provider: "Data & Analytics",
        color: "text-purple-500",
        services: ["InfluxDB", "TimescaleDB", "Grafana", "Tableau"]
      },
      {
        provider: "Integrations",
        color: "text-orange-500",
        services: ["REST APIs", "WebSockets", "Zapier", "IFTTT"]
      }
    ]
  },

  industries: {
    heading: "Industry Applications",
    description: "IoT solutions tailored for your sector",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "Factory",
        theme: "orange",
        description: "Industry 4.0 and Smart Factory",
        features: [
          {
            title: "Predictive Maint",
            desc: "Vibration/Temp monitoring to prevent downtime.",
            icon: "Activity",
            caseStudy: {
              title: "Auto Supplier",
              result: "$5.4M Savings"
            }
          },
          {
            title: "OEE Tracking",
            desc: "Real-time production visibility.",
            icon: "BarChart"
          }
        ]
      },
      {
        id: "smart-building",
        label: "Smart Buildings",
        icon: "Building",
        theme: "blue",
        description: "Operations and Tenant Experience",
        features: [
          {
            title: "Energy Mgmt",
            desc: "Automated HVAC and Lighting control.",
            icon: "Zap",
            caseStudy: {
              title: "Corp HQ",
              result: "34% Energy Cut"
            }
          },
          {
            title: "Occupancy",
            desc: "Space utilization and comfort.",
            icon: "Users"
          }
        ]
      },
      {
        id: "logistics",
        label: "Logistics",
        icon: "Truck",
        theme: "green",
        description: "Fleet and Asset Management",
        features: [
          {
            title: "Fleet Tracking",
            desc: "Real-time location and route optimization.",
            icon: "MapPin",
            caseStudy: {
              title: "Logistics Co",
              result: "22% Fuel Save"
            }
          }
        ]
      }
    ]
  },

  caseStudies: {
    heading: "IoT Success Stories",
    description: "Proven results from real-world implementations",
    items: [
      {
        id: 1,
        category: "Manufacturing",
        client: "Automotive parts mfr (200 machines)",
        title: "Manufacturing Predictive Maintenance",
        icon: "Factory",
        color: "text-orange-600",
        challenge: "Frequent unplanned downtime (5 hrs/week), Reactive maintenance cost $8M/year.",
        solution: "IIoT System: Vibration/Temp sensors, Edge PCs, AWS IoT Core, ML prediction models.",
        implementation: [
          "Sensors on 200 machines",
          "Edge Data Processing",
          "AWS IoT Core Platform",
          "ML Failure Prediction",
          "SAP Integration"
        ],
        results: [
          { label: "Downtime", value: "-68%" },
          { label: "Maint Costs", value: "-32%" },
          { label: "Accuracy", value: "87%" },
          { label: "Savings", value: "$5.4M/Year" },
          { label: "ROI", value: "8 Months" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 2,
        category: "Smart Building",
        client: "Corp HQ (15 stories, 2000 employees)",
        title: "Smart Building Energy Management",
        icon: "Building",
        color: "text-blue-600",
        challenge: "High energy costs ($850K), Manual HVAC, Comfort complaints, No occupancy data.",
        solution: "IoT System: 1350+ sensors (Temp, Occupancy, CO2), Smart Lighting, Azure IoT Hub, BMS Integration.",
        implementation: [
          "Environmental Sensors",
          "Occupancy Tracking",
          "Smart Lighting",
          "Automated Controls",
          "Real-time Dashboard"
        ],
        results: [
          { label: "Energy Cost", value: "-34%" },
          { label: "Lighting", value: "-52%" },
          { label: "Comfort", value: "+22 pts" },
          { label: "Savings", value: "$289K/Year" },
          { label: "ROI", value: "2.3 Years" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 3,
        category: "Logistics",
        client: "Logistics Co (500 vehicles)",
        title: "Fleet Asset Tracking",
        icon: "Truck",
        color: "text-green-600",
        challenge: "No visibility, Inefficient routing, High fuel costs, Unauthorized use.",
        solution: "Telematics: GPS trackers, OBD-II, 4G LTE, Custom fleet platform, Route optimization.",
        implementation: [
          "GPS/OBD-II Trackers",
          "Fleet Management Platform",
          "Route Optimization",
          "Driver Mobile App",
          "Geofencing Alerts"
        ],
        results: [
          { label: "Fuel Cost", value: "-22%" },
          { label: "Delivery Time", value: "-27%" },
          { label: "Accidents", value: "-35%" },
          { label: "Savings", value: "$425K/Year" },
          { label: "ROI", value: "11 Months" }
        ],
        quote: "",
        author: ""
      }
    ]
  },

  faq: {
    heading: "IoT Frequently Asked Questions",
    items: [
      {
        question: "What is the typical ROI for IoT projects?",
        answer: "Most projects achieve positive ROI within 2 years.",
        answerFooter: "Typical Payback: Varies based on implementation scale and asset criticality."
      },
      {
        question: "How secure is IoT?",
        answer: "Security is critical. We implement:",
        list: [
          "Device authentication and encryption",
          "Secure communication protocols (TLS/SSL)",
          "Network segmentation",
          "Regular security updates",
          "Compliance with standards (IEC 62443 for industrial)"
        ]
      },
      {
        question: "What happens if connectivity is lost?",
        answer: "Our solutions handle connectivity loss:",
        list: [
          "Edge devices store data locally",
          "Automatic retry and sync when reconnected",
          "Critical alerts via multiple channels",
          "Offline operation for time-critical functions"
        ]
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes. We integrate with:",
        list: [
          "ERP systems (SAP, Oracle, Microsoft)",
          "SCADA and MES systems",
          "BMS (Building Management Systems)",
          "Existing databases and applications",
          "Third-party APIs"
        ]
      },
      {
        question: "What’s the lifespan of IoT sensors?",
        answer: "Depends on sensor type:",
        list: [
          "Battery-powered: 2-10 years (depending on reporting frequency)",
          "Wired sensors: 10-20 years",
          "Industrial sensors: 15-25 years"
        ],
        answerFooter: "We design for long-term deployments with minimal maintenance."
      },
      {
        question: "How much data will IoT generate?",
        answer: "Data volumes vary:",
        list: [
          "Simple sensors: KB per day",
          "Video cameras: GB per day",
          "Full factory: TB per month"
        ],
        answerFooter: "We optimize data collection and use edge processing to manage volumes and costs."
      },
      {
        question: "Can the system scale?",
        answer: "Yes. cloud based platforms scale from:",
        list: [
          "10 devices to 1 million+",
          "Auto-scaling handles load spikes",
          "Pay-as-you-grow pricing"
        ]
      },
      {
        question: "Do we need IT staff to manage IoT?",
        answer: "Not necessarily. We offer:",
        list: [
          "Fully managed services",
          "Automated monitoring and alerts",
          "Remote troubleshooting",
          "Managed updates and maintenance"
        ],
        answerFooter: "Or we can train your team for self-management."
      },
      {
        question: "What’s required to get started?",
        answer: "Initial requirements:",
        list: [
          "Define business objectives",
          "Identify pilot scope (location, assets)",
          "Network connectivity (WiFi, cellular, ethernet)",
          "Budget allocation",
          "Internal champion/stakeholder"
        ],
        answerFooter: "We can guide you through the rest."
      },
      {
        question: "How long does implementation take?",
        answer: "Timeline depends on scope:",
        list: [
          "Pilot: 6-12 weeks",
          "Single facility: 3-6 months",
          "Enterprise rollout: 6-18 months"
        ],
        answerFooter: "Phased approach delivers value throughout."
      }
    ]
  },

  getStarted: {
    badge: "Start Now",
    titleLines: ["Connect Your", "Enterprise"],
    description: "Unlock the value of your data.",
    cards: [
      {
        id: "consultation",
        title: "IoT Consultation",
        description: "Discuss your IoT usage.",
        icon: "MessageSquare",
        theme: "light",
        list: [
          "Use case review",
          "Feasibility check",
          "Tech stack advice"
        ],
        cta: { text: "Book Call", link: "#consult" }
      },
      {
        id: "demo",
        title: "Platform Demo",
        description: "See our platforms in action.",
        icon: "Monitor",
        theme: "dark",
        list: [
          "StoreTech Retail",
          "FP Analyzer IIoT",
          "Custom Dashboards"
        ],
        cta: { text: "Request Demo", link: "#demo" }
      }
    ],
    contact: {
      title: "Contact IoT Team",
      subtitle: "Talk to our experts",
      methods: [
        { label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Phone", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  relatedResources: {
    services: [
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Data Analytics", id: "data-analytics", icon: "BarChart", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "AI & ML", id: "ai-machine-learning", icon: "BrainCircuit", color: "text-indigo-500", bg: "bg-indigo-50" }
    ],
    columns: [
      {
        title: "Resources",
        icon: "Book",
        items: [
          { label: "IoT Security Guide", href: "#" },
          { label: "Protocol Comparison", href: "#" }
        ]
      },
      {
        title: "Calculators",
        icon: "Calculator",
        items: [
          { label: "ROI Calculator", href: "#" },
          { label: "Bandwidth Estimator", href: "#" }
        ]
      }
    ]
  }
};