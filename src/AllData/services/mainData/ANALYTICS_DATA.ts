
import { ServicePageData } from "../types";

export const ANALYTICS_DATA: ServicePageData = {
  id: "data-analytics",

  preview: {
    title: "Data Analytics",
    tagline: "Actionable Insights",
    description: "Data analytics and business intelligence services: data warehousing, BI dashboards, advanced analytics, big data processing, data governance, self service analytics",
    image: "/assets/images/Service Images/Data Analytics.png",
    icon: "BarChart3",
    points: [
      "Modern Data Warehousing",
      "BI Dashboards & Reporting",
      "ETL/ELT Pipelines",
      "Predictive Analytics (AI/ML)"
    ],
    technologies: [
      { name: "Snowflake", logo: "/assets/images/Technology/Snowflake_Logo.svg" },
      { name: "Tableau", logo: "/assets/images/Technology/Tableau_Logo.png" },
      { name: "Power BI", logo: "/assets/images/Technology/New_Power_BI_Logo.svg" },
      { name: "Python", logo: "/assets/images/Technology/Python-logo-notext.svg" },
      { name: "Spark", logo: "/assets/images/Technology/Apache_Spark_logo.svg" }
    ]
  },

  hero: {
    badge: "Data Analytics & Business Intelligence Services",
    titlePrefix: "Transform Data into",
    titleHighlight: "Strategic Business Insights",
    description: "Transform Data into Strategic Business Insights",
    features: [
      "Real time dashboards for data driven decision making",
      "Scalable data warehouses processing billions of records",
      "Advanced analytics with AI/ML for predictive insights",
      "Self-service BI empowering business users"
    ],
    ctaPrimary: "Schedule Analytics Consultation",
    ctaSecondary: "View Analytics Portfolio"
  },

  overview: {
    badge: "Service Overview",
    heading: "From Data Silos to",
    highlight: "Unified Intelligence",
    content: [
      "Data is your organization's most valuable asset, but only if you can transform it into actionable insights. Most organizations are data-rich but insights-poor, with data scattered across systems, trapped in silos, and inaccessible to decision-makers.",
      "Business Intelligence and Analytics enable you to consolidate data from multiple sources, analyze it efficiently, and deliver insights through intuitive dashboards and reports that drive better business outcomes.",
      "The Analytics Challenge: Data Silos (Critical data locked in separate systems), Manual Reporting (Hours spent compiling reports), Limited Access (Business users dependent on IT), Scalability (Traditional databases struggle with growing data).",
      "Our Analytics Approach: Modern Data Architecture (Cloud-native warehouses like Snowflake, Redshift, BigQuery), Unified Data Platform (Consolidate data with ELT pipelines), Self-Service BI (Empower users), Advanced Analytics (Predictive and prescriptive AI/ML).",
      "We’ve implemented 200+ analytics solutions helping organizations achieve: 80% reduction in report generation time, 50% faster decision making, 30% improvement in forecast accuracy, ROI within 12-18 months."
    ],
    differentiators: [
      {
        title: "Modern Architecture",
        description: "Cloud-native warehouses (Snowflake, BigQuery) for massive scale",
        icon: "Database"
      },
      {
        title: "Unified Platform",
        description: "Consolidate all data sources with automated pipeline",
        icon: "Merge"
      },
      {
        title: "Self-Service BI",
        description: "Empower business users without IT dependency",
        icon: "UserCheck"
      },
      {
        title: "Advanced Analytics",
        description: "Predictive and Prescriptive Analytics using AI/ML",
        icon: "BrainCircuit"
      },
      {
        title: "Proven ROI",
        description: "Achieve ROI within 12-18 months with faster decisions",
        icon: "TrendingUp"
      }
    ]
  },

  coreServices: {
    badge: "Core Analytics Services",
    titleLine1: "End-to-End",
    titleHighlight: "Data Solutions",
    description: "From modern data warehousing to advanced predictive analytics, we cover the entire data lifecycle",
    cards: [
      {
        title: "Data Warehousing",
        desc: "Modern Cloud Data Warehouses designed for analytical queries and historical data retention, overcoming the limitations of operational databases.",
        icon: "Server",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "Data Warehouse Benefits",
            items: [
              { term: "Centralized Repository", description: "Consolidated view of all organizational data" },
              { term: "Optimized Performance", description: "Fast analytical queries unlike transactional databases" },
              { term: "Historical Retention", description: "Keep history often deleted from operational systems" },
              { term: "Consistent Definitions", description: "Single source of truth for metrics" }
            ]
          },
          {
            heading: "Cloud Data Warehouse Platforms",
            items: [
              { term: "Snowflake", description: "Modern cloud-native warehouse. Key advantages: Separate compute/storage, Instant elasticity, Zero management, Multi-cloud (AWS, Azure, GCP), Time travel. Pricing: Pay-per-second compute, Storage ~$23/TB/month." },
              { term: "Amazon Redshift", description: "AWS-native warehouse. Key features: Massively parallel processing (MPP), Columnar storage, Deep AWS integration, Spectrum (S3 query). Best for AWS-centric orgs and petabyte scale. Pricing: On-demand ~$0.25/hour/node." },
              { term: "Google BigQuery", description: "Serverless data warehouse. Key features: No infrastructure management, Built-in ML, Real-time analytics, Geospatial analysis. Best for Google Cloud users and ad-hoc analysis." }
            ]
          },
          {
            heading: "Data Warehouse Design",
            items: [
              { term: "Dimensional Modeling", description: "Star Schema with Fact tables (measurements) and Dimension tables (context). Optimizes for simple joins and fast queries." },
              { term: "Slowly Changing Dimensions (SCD)", description: "Handling history: Type 1 (Overwrite), Type 2 (Add new row for full history), Type 3 (Add column for limited history)." }
            ]
          }
        ]
      },
      {
        title: "BI Dashboard & Reporting",
        desc: "Interactive Dashboards for Business Users, enabling data exploration and visualization of key metrics.",
        icon: "LayoutDashboard",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Business Intelligence Tools",
            items: [
              { term: "Tableau", description: "Leading visualization platform. Strengths: Intuitive drag-and-drop, Beautiful visualizations, Strong community. Best for: Executive dashboards, Data exploration. Pricing: Creator ~$70/user/month." },
              { term: "Power BI", description: "Cloud-Native BI. Strengths: Excel/Azure integration, Low cost, AI-powered insights. Best for: Microsoft-centric orgs, Self-service BI. Pricing: Pro ~$10/user/month." },
              { term: "Looker (Google)", description: "Modern BI platform. Advantages: LookML modeling layer, Git integration, API-first. Best for: SaaS companies, Embedded analytics." }
            ]
          },
          {
            heading: "Dashboard Best Practices",
            items: [
              { term: "Know Your Audience", description: "Executive (High-level KPIs), Manager (Operational details), Analyst (Deep-dive)." },
              { term: "Visual Hierarchy", description: "Size indicates importance, Color highlights exceptions, White space for clarity." },
              { term: "Performance", description: "Fast load times (<3 seconds), Efficient queries, Aggregated data." }
            ]
          },
          {
            heading: "Common Dashboard Types",
            content: ["Executive Dashboard (Revenue, Profit), Sales Dashboard (Pipeline, Win rate), Marketing Dashboard (Campaign ROI), Operations Dashboard (Efficiency, Inventory), Financial Dashboard (P&L, Cash flow)"]
          }
        ]
      },
      {
        title: "ETL/ELT Data Pipelines",
        desc: "Extract, Transform, Load processes to move data from sources to warehouse, ensuring data quality and freshness.",
        icon: "Workflow",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "ETL vs ELT",
            items: [
              { term: "ETL (Traditional)", description: "Transform before loading. Best for structured data and complex transformations." },
              { term: "ELT (Modern)", description: "Load raw first, transform in warehouse. Best for cloud warehouses and big data." }
            ]
          },
          {
            heading: "Pipeline Tools",
            items: [
              { term: "Apache Airflow", description: "Workflow orchestration using Python-based DAGs. Best for complex pipelines and ML orchestration." },
              { term: "Fivetran", description: "Automated ELT with 150+ pre-built connectors. Fully managed, 5-minute setup. Pricing based on monthly active rows." },
              { term: "AWS Glue", description: "Serverless ETL with automated schema discovery and PySpark transformations." },
              { term: "dbt (Data Build Tool)", description: "SQL-based transformations in warehouse. Version control, testing, documentation. Modern stack standard." }
            ]
          },
          {
            heading: "Best Practices",
            content: ["Idempotent (Safe retries), Incremental (Process only changes), Monitored (Alert on failures), Documented (Data lineage tracking)"]
          }
        ]
      },
      {
        title: "Advanced Analytics",
        desc: "Predictive and Prescriptive Analytics using AI/ML to go beyond reporting what happened to predicting what will happen.",
        icon: "LineChart",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "Types of Analytics",
            items: [
              { term: "Descriptive", description: "What happened? (Reporting, Dashboards)" },
              { term: "Diagnostic", description: "Why did it happen? (Root cause analysis)" },
              { term: "Predictive", description: "What will happen? (Forecasting, Classification)" },
              { term: "Prescriptive", description: "What should we do? (Optimization, Recommendation)" }
            ]
          },
          {
            heading: "Predictive Use Cases",
            items: [
              { term: "Sales Forecasting", description: "Predict revenue, seasonal trends. Accuracy: 85-95%." },
              { term: "Customer Churn Prediction", description: "Identify at-risk customers, proactive retention. Accuracy: 75-85%." },
              { term: "Demand Forecasting", description: "Inventory optimization, supply chain efficiency." },
              { term: "Fraud Detection", description: "Real-time transaction scoring, anomaly detection." }
            ]
          },
          {
            heading: "Tools & Techniques",
            content: ["Statistical Analysis (Regression, A/B testing), Machine Learning (Supervised, Unsupervised, Time series), Tools (Python, R, BigQuery ML)"]
          }
        ]
      },
      {
        title: "Big Data Processing",
        desc: "Handle Massive Data Volumes (Terabytes to Petabytes) and Velocity (Real-time streaming) efficiently.",
        icon: "HardDrive",
        color: "text-teal-600",
        bg: "bg-teal-50",
        subSections: [
          {
            heading: "Technologies",
            items: [
              { term: "Apache Spark", description: "Unified analytics engine. In-memory processing (100x faster than Hadoop), Batch and streaming, SQL/ML/Graph support." },
              { term: "Apache Kafka", description: "Distributed streaming platform. High throughput, low latency, fault-tolerant. Used for real-time pipelines and event sourcing." },
              { term: "Data Lakes", description: "Store raw data at scale (S3, Azure Data Lake). Schema-on-read flexibility, cost-effective storage." }
            ]
          },
          {
            heading: "Big Data Characteristics (3 Vs)",
            content: ["Volume (TB to PB), Velocity (Real-time streaming), Variety (Structured/Unstructured)"]
          }
        ]
      },
      {
        title: "Data Governance",
        desc: "Ensure Data Quality and Compliance. Metadata management, security, and policies.",
        icon: "ShieldCheck",
        color: "text-red-600",
        bg: "bg-red-50",
        subSections: [
          {
            heading: "Components",
            items: [
              { term: "Data Quality", description: "Accuracy, completeness, validation rules." },
              { term: "Data Catalog", description: "Metadata repository, lineage tracking, business glossary." },
              { term: "Data Security", description: "Access control (RBAC), masking, encryption." },
              { term: "Compliance", description: "GDPR, HIPAA, CCPA, retention policies." }
            ]
          },
          {
            heading: "Governance Tools",
            content: ["Collibra (Enterprise governance), Alation (Data catalog), Apache Atlas (Open-source metadata)"]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Typical Setup",
        type: "highlight",
        content: "12-16 Weeks"
      },
      right: {
        title: "Key Deliverables",
        type: "tags",
        content: ["Data Warehouse", "Automated Pipelines", "BI Dashboards", "Data Strategy"]
      }
    }
  },

  process: {
    title: "Data Warehouse Implementation",
    description: "A structured approach to building a robust data platform, from requirements to deployment",
    phases: [
      {
        phase: "Phase 1",
        title: "Requirements",
        duration: "2-3 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Business requirements gathering",
          "Data source identification",
          "Reporting needs analysis",
          "Performance requirements"
        ],
        activities: [
          "Business requirements gathering",
          "Data source identification",
          "Reporting needs analysis",
          "Performance requirements"
        ],
        deliverables: [
          "Requirements document",
          "Reporting needs analysis",
          "Performance requirements"
        ]
      },
      {
        phase: "Phase 2",
        title: "Design",
        duration: "3-4 weeks",
        icon: "PenTool",
        color: "bg-indigo-600",
        objectives: [
          "Data model design (star/snowflake schema)",
          "ETL process design",
          "Security and access control",
          "Performance optimization strategy"
        ],
        activities: [
          "Data model design (star/snowflake schema)",
          "ETL process design",
          "Security and access control",
          "Performance optimization strategy"
        ],
        deliverables: [
          "Data model design",
          "ETL process design",
          "Security and access control",
          "Performance optimization strategy"
        ]
      },
      {
        phase: "Phase 3",
        title: "Build",
        duration: "6-12 weeks",
        icon: "Code",
        color: "bg-purple-600",
        objectives: [
          "Data warehouse provisioning",
          "ETL development",
          "Data validation",
          "Initial data load"
        ],
        activities: [
          "Data warehouse provisioning",
          "ETL development",
          "Data validation",
          "Initial data load"
        ],
        deliverables: [
          "Data warehouse provisioning",
          "ETL development",
          "Data validation",
          "Initial data load"
        ]
      },
      {
        phase: "Phase 4",
        title: "Deploy",
        duration: "2-3 weeks",
        icon: "Rocket",
        color: "bg-green-600",
        objectives: [
          "User acceptance testing",
          "Performance tuning",
          "Training",
          "Go-live"
        ],
        activities: [
          "User acceptance testing",
          "Performance tuning",
          "Training",
          "Go-live"
        ],
        deliverables: [
          "User acceptance testing",
          "Performance tuning",
          "Training",
          "Go-live"
        ]
      }
    ]
  },

  techStack: {
    heading: "Modern Data Stack & Tools",
    description: "Best-in-class tools for every layer of the data stack",
    frameworks: [
      { name: "dbt", desc: "SQL-based data transformation" },
      { name: "Airflow", desc: "Workflow orchestration" },
      { name: "Spark", desc: "Unified analytics engine" },
      { name: "Kafka", desc: "Distributed streaming platform" }
    ],
    llms: [
      { name: "Snowflake", desc: "Modern cloud-native data warehouse" },
      { name: "Redshift", desc: "AWS-native data warehouse" },
      { name: "BigQuery", desc: "Serverless data warehouse" }
    ],
    mlOps: ["Tableau", "Power BI", "Looker", "Collibra", "Alation"],
    cloudPlatforms: [
      {
        provider: "Data Warehouses",
        color: "text-blue-500",
        services: ["Snowflake", "Amazon Redshift", "Google BigQuery"]
      },
      {
        provider: "BI Tools",
        color: "text-purple-500",
        services: ["Tableau", "Power BI", "Looker"]
      },
      {
        provider: "Pipelines & Governance",
        color: "text-orange-500",
        services: ["Fivetran", "Apache Airflow", "dbt", "Collibra", "Alation"]
      }
    ]
  },

  industries: {
    heading: "Industry Applications",
    description: "Analytics solutions tailored for your business sector",
    items: [
      {
        id: "retail",
        label: "Retail",
        icon: "ShoppingBag",
        theme: "blue",
        description: "Unified commerce and inventory optimization",
        features: [
          {
            title: "Store Analytics",
            desc: "Real-time inventory and sales tracking.",
            icon: "Store",
            caseStudy: {
              title: "Retail Platform",
              result: "95% Faster Reports"
            }
          },
          {
            title: "Customer 360",
            desc: "Unified view of customer journey.",
            icon: "Users"
          }
        ]
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "Factory",
        theme: "green",
        description: "Predictive maintenance and operations",
        features: [
          {
            title: "Equipment Health",
            desc: "IoT sensor analysis for failure prediction.",
            icon: "Activity",
            caseStudy: {
              title: "Predictive Maint",
              result: "$6.8M Savings"
            }
          },
          {
            title: "Supply Chain",
            desc: "Demand forecasting and optimization.",
            icon: "Truck"
          }
        ]
      }
    ]
  },

  caseStudies: {
    heading: "CASE STUDIES",
    description: "Real-world examples of how data transformation drives measurable business value",
    items: [
      {
        id: 1,
        category: "Retail Analytics",
        client: "Multi-channel retailer, 200 stores, $500M revenue",
        title: "Retail Analytics Platform",
        icon: "ShoppingBag",
        color: "text-blue-600",
        challenge: "Sales data in POS system, Inventory in separate ERP, E-commerce on different platform, Marketing data in spreadsheets. No unified view, manual reporting (40 hours/week).",
        solution: "Data Warehouse: Snowflake, ETL: Fivetran for automated connectors, BI Tool: Tableau for dashboards, Implementation: 12 weeks.",
        implementation: [
          "Extract: POS, ERP, e-commerce, marketing platforms",
          "Load: Real time to Snowflake",
          "Transform: dbt models for business logic",
          "Visualize: Tableau dashboards"
        ],
        results: [
          { label: "Reporting Time", value: "40 hours/week -> 2 hours (95% reduction)" },
          { label: "Data Freshness", value: "Weekly -> Real time" },
          { label: "Inventory Optimization", value: "30% reduction in excess inventory" },
          { label: "Sales Insights", value: "Identified $5M revenue opportunity" },
          { label: "ROI", value: "14 months" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 2,
        category: "Predictive Maintenance",
        client: "Industrial equipment manufacturer",
        title: "Manufacturing Predictive Maintenance Analytics",
        icon: "Factory",
        color: "text-green-600",
        challenge: "Equipment failures causing downtime, No predictive capability, Reactive maintenance only, Losses: $10M annually.",
        solution: "Data Collection: IoT sensors on 500 machines, Big Data: Apache Spark for processing, ML Models: Failure prediction (2-week window), Dashboard: Real time equipment health.",
        implementation: [
          "Data Collection: IoT sensors on 500 machines",
          "Big Data: Apache Spark for processing",
          "ML Models: Failure prediction (2-week window)",
          "Dashboard: Real time equipment health"
        ],
        results: [
          { label: "Prediction Accuracy", value: "87%" },
          { label: "Downtime", value: "68% reduction" },
          { label: "Maintenance Costs", value: "32% reduction" },
          { label: "Annual Savings", value: "$6.8M" },
          { label: "ROI", value: "8 months" }
        ],
        quote: "",
        author: ""
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is the difference between Business Intelligence and Advanced Analytics?",
        answer: "Business Intelligence (BI) focuses on descriptive analysis ('what happened') using dashboards and reports to monitor KPIs. Advanced Analytics uses AI and Machine Learning for predictive ('what will happen') and prescriptive ('what should we do') insights to guide future strategy."
      },
      {
        question: "Which cloud data warehouses do you support?",
        answer: "We specialize in all major cloud-native data warehouses including Snowflake, Amazon Redshift, and Google BigQuery. We help you select the right platform based on your specific data volume, concurrency needs, and existing ecosystem."
      },
      {
        question: "How long does a typical data warehouse implementation take?",
        answer: "A clear-scope data warehouse implementation typically takes 12-16 weeks. This includes 2-3 weeks for requirements, 3-4 weeks for design, 6-12 weeks for build and validation, and a final deployment and training phase."
      },
      {
        question: "Can you integrate data from legacy on-premise ERP systems?",
        answer: "Yes, we build robust ETL/ELT pipelines using tools like Fivetran, Airflow, or Talend to securely extract data from on-premise legacy systems (like SAP, Oracle, or mainframes) and load it into a modern cloud data warehouse for unified analysis."
      },
      {
        question: "What kind of ROI can we expect from an analytics transformation?",
        answer: "Our clients typically achieve ROI within 12-18 months. Tangible benefits include a 95% reduction in manual reporting time, 30% reduction in excess inventory, and the ability to make data-driven decisions 50% faster."
      }
    ]
  },

  getStarted: {
    badge: "Get Started",
    titleLines: ["Ready to Become", "Data Driven?"],
    description: "We offer flexible engagement models tailored to your needs: Data Warehouse Setup, BI Dashboard Development, Managed Analytics Services. Contact us for detailed pricing based on your specific requirements.",
    cards: [
      {
        id: "workshop",
        title: "Free Data Strategy Workshop",
        description: "Receive complimentary analysis including:",
        icon: "Lightbulb",
        theme: "light",
        list: [
          "Current state assessment",
          "Data architecture review",
          "Roadmap development"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      },
      {
        id: "contact",
        title: "Contact Analytics Team",
        description: "Direct access to data architects",
        icon: "Mail",
        theme: "dark",
        list: [
          "Email: contact@webronic.com",
          "Phone: +91 72000 88500"
        ],
        cta: { text: "Contact Us", link: "#contact" }
      }
    ],
    contact: {
      title: "Contact Analytics Team",
      subtitle: "Direct access to data architects",
      methods: [
        { label: "Email Us", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  relatedResources: {
    services: [
      { title: "AI & Machine Learning", id: "ai-machine-learning", icon: "Brain", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "IoT Solutions", id: "iot-solutions", icon: "Wifi", color: "text-orange-500", bg: "bg-orange-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "BookOpen",
        items: [
          { label: "Modern Data Stack Guide", href: "#" },
          { label: "Data Governance Checklist", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "Warehouse Cost Estimator", href: "#" },
          { label: "BI Tool Comparison", href: "#" }
        ]
      }
    ]
  }
};