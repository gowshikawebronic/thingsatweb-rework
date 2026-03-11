
import { ServicePageData } from "../types";

export const DEVOPS_DATA: ServicePageData = {
  id: "devops",

  preview: {
    title: "DevOps & SRE",
    tagline: "Accelerate Delivery",
    description: "DevOps consulting and implementation: CI/CD pipelines, infrastructure as code, Kubernetes, Docker, automated testing, monitoring. Accelerate deployment, improve reliability",
    image: "/assets/images/Service Images/DevOps.png",
    icon: "Infinity",
    localIcon: "/assets/images/Icons/DevOps & SRE.svg",
    points: [
      "Automated CI/CD Pipelines",
      "Infrastructure as Code",
      "Kubernetes & Docker",
      "Site Reliability Engineering"
    ],
    technologies: [
      { name: "Jenkins", logo: "/assets/images/Technology/Jenkins_logo_with_title.svg" },
      { name: "Kubernetes", logo: "/assets/images/Technology/Kubernetes_logo_without_workmark.svg" },
      { name: "Terraform", logo: "/assets/images/Technology/Terraform_Logo.svg" },
      { name: "Docker", logo: "/assets/images/Technology/Docker_Logo.svg" },
      { name: "AWS", logo: "/assets/images/Technology/Amazon_Web_Services_Logo.svg" }
    ]
  },

  hero: {
    badge: "DevOps & Site Reliability Engineering Services",
    titlePrefix: "Accelerate Software Delivery",
    titleHighlight: "While Improving Reliability",
    description: "Accelerate Software Delivery While Improving Reliability",
    features: [
      "Deploy 10x more frequently with 60x faster recovery",
      "Automated CI/CD pipelines reducing deployment time by 90%",
      "Infrastructure as Code for consistent, reproducible environments",
      "99.9%+ uptime through SRE best practices"
    ],
    ctaPrimary: "Schedule DevOps Assessment",
    ctaSecondary: "View Case Studies"
  },

  overview: {
    badge: "Service Overview",
    heading: "The DevOps",
    highlight: "Imperative",
    content: [
      "DevOps represents a fundamental shift in how organizations develop, deploy, and operate software. By breaking down silos between development and operations teams, automating manual processes, and implementing continuous delivery practices, DevOps enables organizations to ship software faster while maintaining high reliability.",
      "Traditional software delivery is too slow for modern business. Organizations deploying monthly or quarterly cannot compete with those deploying daily or hourly. Manual processes create bottlenecks, human errors cause outages, and lack of automation makes scaling impossible.",
      "Site Reliability Engineering (SRE) applies software engineering practices to infrastructure and operations, ensuring systems are reliable, scalable, and maintainable while supporting rapid innovation.",
      "We’ve implemented DevOps transformations for 100+ organizations, helping them achieve: Deployment Frequency (Monthly to daily/hourly), Lead Time (90% reduction), Change Failure Rate (60-80% reduction), Mean Time to Recovery (95% faster)."
    ],
    differentiators: [
      {
        title: "Deployment Speed",
        description: "From monthly to daily/hourly deployments",
        icon: "Zap"
      },
      {
        title: "Reliability (SRE)",
        description: "99.9%+ uptime via best practices",
        icon: "ShieldCheck"
      },
      {
        title: "Infrastructure as Code",
        description: "Consistent, reproducible environments",
        icon: "Code2"
      },
      {
        title: "Fast Recovery",
        description: "95% faster incident recovery",
        icon: "RefreshCcw"
      },
      {
        title: "Culture Transformation",
        description: "Breaking silos and building collaboration",
        icon: "Users"
      }
    ]
  },

  coreServices: {
    badge: "Core DevOps Services",
    titleLine1: "Comprehensive",
    titleHighlight: "DevOps Capabilities",
    description: "From CI/CD pipeline implementation to SRE cultural transformation",
    cards: [
      {
        title: "CI/CD Pipeline Implementation",
        desc: "Automate Build, Test, and Deployment. Implement continuous integration and continuous delivery pipelines that automate software delivery from code commit to production.",
        icon: "GitMerge",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "Continuous Integration (CI)",
            items: [
              { term: "Automated Build Process", description: "Every code commit triggers an automated build. Stages: Source Control Trigger, Build Stage (Compile, Resolve dependencies), Unit Testing (>80% coverage), Static Code Analysis (SonarQube), Artifact Storage." },
              { term: "CI Tools", description: "Jenkins (Flexible), GitLab CI (Integrated), GitHub Actions (Native), CircleCI (Cloud native), Azure DevOps (Microsoft stack), AWS CodePipeline (AWS-native)." }
            ]
          },
          {
            heading: "Continuous Delivery (CD)",
            items: [
              { term: "Deployment Stages", description: "Integration Testing, Security Scanning, Performance Testing, Staging Deployment, Production Deployment (Manual approval gate or automated)." },
              { term: "Deployment Strategies", description: "Blue-Green (Zero downtime, instant rollback), Canary (Deploy to subset, reduce blast radius), Rolling (Gradual rollout), Feature Flags (Decouple deployment from release)." }
            ]
          },
          {
            heading: "Pipeline Best Practices",
            content: ["Fast Feedback (<30 mins total), Automated Everything, Pipeline as Code (Version controlled), Monitoring and Metrics"]
          }
        ]
      },
      {
        title: "Infrastructure as Code (IaC)",
        desc: "Define Infrastructure Through Code. Manage infrastructure using version control, enabling consistent, repeatable, and automated provisioning.",
        icon: "Server",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        subSections: [
          {
            heading: "IaC Benefits",
            items: [
              { term: "Consistency", description: "Eliminate configuration drift, Identical environments." },
              { term: "Speed", description: "Provision infrastructure in minutes, Automated scaling." },
              { term: "Version Control", description: "Infrastructure changes tracked in Git, Rollback capability." }
            ]
          },
          {
            heading: "Tools",
            items: [
              { term: "Terraform", description: "Multi-Cloud Infrastructure. Cloud-agnostic, Declarative syntax, State management." },
              { term: "AWS CloudFormation", description: "AWS-Native IaC. Deep integration, Stack management, Drift detection." },
              { term: "Ansible", description: "Configuration Management. Agentless, Simple YAML syntax, Idempotent operations." },
              { term: "Kubernetes Manifests", description: "container  Infrastructure as YAML (Deployments, Services, ConfigMaps)." }
            ]
          }
        ]
      },
      {
        title: "Container Orchestration",
        desc: "Manage Containerized Applications. Docker containerization and Kubernetes orchestration for production workloads.",
        icon: "Box",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Docker Containerization",
            items: [
              { term: "Benefits", description: "Application isolation, Consistent environments, Lightweight, Portable." },
              { term: "Best Practices", description: "Multi-stage builds, Minimal base images, Layer caching optimization." }
            ]
          },
          {
            heading: "Kubernetes (K8s)",
            items: [
              { term: "Features", description: "Automated scheduling, Self-healing, Auto-scaling, Load balancing, Rolling updates." },
              { term: "Architecture", description: "Control Plane (API Server, etcd, Scheduler), Worker Nodes (Kubelet, container  runtime)." },
              { term: "Managed Kubernetes", description: "Amazon EKS, Azure AKS, Google GKE. Managed control plane, Automated updates." }
            ]
          },
          {
            heading: "Best Practices",
            content: ["Resource Management (Requests/Limits), Security (RBAC, Network Policies), Monitoring (Prometheus/Grafana)"]
          }
        ]
      },
      {
        title: "Monitoring & Observability",
        desc: "Gain Deep Insights into System Behavior using the Three Pillars: Metrics, Logs, and Traces.",
        icon: "Activity",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "The Three Pillars",
            items: [
              { term: "Metrics", description: "Time-series data (CPU, memory, app performance). Tools: Prometheus, Grafana, CloudWatch." },
              { term: "Logs", description: "Centralized logging (ELK Stack, Loki). Structured logging, Correlation IDs." },
              { term: "Traces", description: "Distributed tracing (Jaeger, AWS X-Ray). Track requests across microservices." }
            ]
          },
          {
            heading: "Alerting Strategy",
            items: [
              { term: "Design", description: "Alert on symptoms not causes, Actionable alerts only." },
              { term: "Fatigue Prevention", description: "Tune thresholds, Aggregate alerts." },
              { term: "On-Call", description: "Rotation schedules, Blameless culture." }
            ]
          }
        ]
      },
      {
        title: "Site Reliability Engineering (SRE)",
        desc: "Apply Software Engineering to Operations. Ensure systems are reliable, scalable, and maintainable.",
        icon: "TrendingUp",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "SRE Principles",
            items: [
              { term: "SLOs (Service Level Objectives)", description: "Define reliability targets. SLI (Metric), SLO (Target), SLA (Commitment)." },
              { term: "Error Budgets", description: "Balance reliability and innovation. Stop deploys when budget exhausted." },
              { term: "Toil Reduction", description: "Automate manual, repetitive work. Goal: <50% time on toil." }
            ]
          },
          {
            heading: "Incident Management",
            items: [
              { term: "Lifecycle", description: "Detection, Response, Mitigation, Resolution, Post-Mortem." },
              { term: "Blameless Post-Mortems", description: "Focus on process improvement, not blame." }
            ]
          },
          {
            heading: "Capacity Planning",
            content: ["Proactive Scaling, Forecast growth, Cost optimization"]
          }
        ]
      },
      {
        title: "DevOps Culture Transformation",
        desc: "Break Down Silos, Build Collaboration. Shift from conflicting goals to shared responsibility.",
        icon: "Users",
        color: "text-pink-600",
        bg: "bg-pink-50",
        subSections: [
          {
            heading: "Cultural Shift",
            items: [
              { term: "Traditional Silos", description: "Dev wants speed, Ops wants stability (Conflict)." },
              { term: "DevOps Culture", description: "Shared responsibility, Blameless culture, Continuous learning, Automation mindset." }
            ]
          },
          {
            heading: "Team Structure",
            items: [
              { term: "Platform Team", description: "Build internal developer platforms, Self-service tools." },
              { term: "Embedded SREs", description: "Work with product teams, Reliability consulting." }
            ]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Typical Transformation",
        type: "highlight",
        content: "6-12 Months"
      },
      right: {
        title: "Key Metrics",
        type: "tags",
        content: ["Deployment Frequency", "Lead Time", "Change Failure Rate", "MTTR"]
      }
    }
  },

  process: {
    title: "Implementation Phases",
    description: "A structured approach to DevOps transformation",
    phases: [
      {
        phase: "Phase 1",
        title: "Assessment",
        duration: "2-4 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Current state maturity",
          "Pain points identification",
          "Team structure analysis",
          "Tool inventory"
        ],
        activities: [
          "Current state maturity",
          "Pain points identification",
          "Team structure analysis",
          "Tool inventory"
        ],
        deliverables: [
          "Maturity report",
          "Gap analysis"
        ]
      },
      {
        phase: "Phase 2",
        title: "Strategy",
        duration: "4-6 weeks",
        icon: "Map",
        color: "bg-indigo-600",
        objectives: [
          "Target state definition",
          "Roadmap development",
          "Tool selection",
          "Metrics definition"
        ],
        activities: [
          "Target state definition",
          "Roadmap development",
          "Tool selection",
          "Metrics definition"
        ],
        deliverables: [
          "Strategy document",
          "Roadmap",
          "Tool selection report"
        ]
      },
      {
        phase: "Phase 3",
        title: "Pilot",
        duration: "2-3 months",
        icon: "PlayCircle",
        color: "bg-purple-600",
        objectives: [
          "Select pilot team/application",
          "Implement CI/CD",
          "Train team",
          "Measure improvements"
        ],
        activities: [
          "Select pilot team/application",
          "Implement CI/CD",
          "Train team",
          "Measure improvements"
        ],
        deliverables: [
          "Pilot implementation",
          "Training materials",
          "Initial metrics"
        ]
      },
      {
        phase: "Phase 4",
        title: "Scale",
        duration: "6-12 months",
        icon: "TrendingUp",
        color: "bg-green-600",
        objectives: [
          "Roll out to more teams",
          "Refine processes",
          "Spread best practices",
          "Continuous improvement"
        ],
        activities: [
          "Roll out to more teams",
          "Refine processes",
          "Spread best practices",
          "Continuous improvement"
        ],
        deliverables: [
          "Enterprise rollout",
          "Refined runbooks",
          "Center of Excellence"
        ]
      }
    ]
  },

  techStack: {
    heading: "DEVOPS TOOLS & TECHNOLOGIES",
    description: "Best-in-class tools for building robust pipelines",
    frameworks: [
      { name: "Jenkins", desc: "CI/CD" },
      { name: "GitLab CI", desc: "CI/CD" },
      { name: "GitHub Actions", desc: "CI/CD" },
      { name: "Terraform", desc: "IaC" },
      { name: "Ansible", desc: "IaC" }
    ],
    llms: [
      { name: "Docker", desc: "Containers" },
      { name: "Kubernetes", desc: "Containers" },
      { name: "Prometheus", desc: "Monitoring" },
      { name: "Grafana", desc: "Monitoring" }
    ],
    mlOps: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "ELK Stack"],
    cloudPlatforms: [
      {
        provider: "CI/CD",
        color: "text-blue-500",
        services: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "Azure DevOps"]
      },
      {
        provider: "IaC & Containers",
        color: "text-purple-500",
        services: ["Terraform", "CloudFormation", "Ansible", "Docker", "Kubernetes"]
      },
      {
        provider: "Monitoring & Cloud",
        color: "text-orange-500",
        services: ["Prometheus", "Grafana", "ELK Stack", "AWS", "Azure", "GCP"]
      }
    ]
  },

  industries: {
    heading: "Industry Applications",
    description: "Accelerating delivery across sectors",
    items: [
      {
        id: "ecommerce",
        label: "E-commerce",
        icon: "ShoppingBag",
        theme: "blue",
        description: "Rapid deployment and high availability",
        features: [
          {
            title: "CI/CD",
            desc: "Multiple deployments per day.",
            icon: "GitMerge",
            caseStudy: {
              title: "Retail DevOps",
              result: "99% Faster"
            }
          },
          {
            title: "Scalability",
            desc: "Auto-scaling for flash sales.",
            icon: "TrendingUp"
          }
        ]
      },
      {
        id: "finance",
        label: "Financial Services",
        icon: "Landmark",
        theme: "green",
        description: "Reliability and compliance automation",
        features: [
          {
            title: "SRE Implementation",
            desc: "99.99% availability with error budgets.",
            icon: "ShieldCheck",
            caseStudy: {
              title: "Banking SRE",
              result: "85% Less Incidents"
            }
          },
          {
            title: "Compliance",
            desc: "Automated audit trails and security.",
            icon: "FileCheck"
          }
        ]
      }
    ]
  },

  caseStudies: {
    heading: "CASE STUDIES",
    description: "Real-world examples of DevOps transformation",
    items: [
      {
        id: 1,
        category: "E-commerce",
        client: "Online retailer, $100M revenue, monolithic application",
        title: "E-commerce DevOps Transformation",
        icon: "ShoppingBag",
        color: "text-blue-600",
        challenge: "Deployments every 2 weeks (manual, 4-hour process), Frequent deployment failures (30% rollback rate), Mean time to recovery: 4+ hours, Cannot scale during peak traffic, Dev and ops teams adversarial.",
        solution: "CI/CD: Jenkins pipeline, automated testing, Containerization: Dockerized microservices, Orchestration: Kubernetes on AWS EKS, IaC: Terraform for infrastructure.",
        implementation: [
          "CI/CD: Jenkins pipeline",
          "Containerization: Dockerized microservices",
          "Orchestration: Kubernetes on AWS EKS",
          "IaC: Terraform for infrastructure",
          "Monitoring: Prometheus, Grafana, ELK"
        ],
        results: [
          { label: "Deployment Frequency", value: "2 weeks -> multiple times daily" },
          { label: "Lead Time", value: "2 weeks -> 2 hours (99% reduction)" },
          { label: "Change Failure Rate", value: "30% -> 5%" },
          { label: "MTTR", value: "4 hours -> 15 minutes (96% faster)" },
          { label: "Uptime", value: "99.5% -> 99.95%" }
        ],
        quote: "",
        author: ""
      },
      {
        id: 2,
        category: "Financial Services",
        client: "Banking platform, 2M customers",
        title: "Financial Services SRE Implementation",
        icon: "Landmark",
        color: "text-green-600",
        challenge: "Frequent outages impacting customers, No SLOs or error budgets, Manual incident response, 24/7 on-call burnout, Compliance requirements.",
        solution: "SLOs: Defined for all critical services, Error Budgets: Implemented, Monitoring: Full observability stack, Auto-remediation: Common issues self-heal.",
        implementation: [
          "SLOs: Defined for all critical services",
          "Error Budgets: Implemented",
          "Monitoring: Full observability stack",
          "Auto-remediation: Common issues self-heal",
          "Runbooks: Automated playbooks"
        ],
        results: [
          { label: "Availability", value: "99.5% -> 99.95% (90% reduction in downtime)" },
          { label: "Incidents", value: "20/month -> 3/month (85% reduction)" },
          { label: "MTTR", value: "90 minutes -> 12 minutes" },
          { label: "On-call Pages", value: "80/month -> 15/month" },
          { label: "Compliance", value: "Achieved SOC 2 certification" }
        ],
        quote: "",
        author: ""
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: []
  },

  getStarted: {
    badge: "Get Started",
    titleLines: ["Ready to Accelerate", "Delivery?"],
    description: "Start your DevOps journey today",
    cards: [
      {
        id: "assessment",
        title: "Free DevOps Maturity Assessment",
        description: "Receive complimentary analysis:",
        icon: "BarChart",
        theme: "light",
        list: [
          "Current state evaluation",
          "Bottleneck identification",
          "Improvement recommendations"
        ],
        cta: { text: "Schedule Assessment", link: "#assessment" }
      },
      {
        id: "contact",
        title: "Contact DevOps Team",
        description: "Direct access to engineers",
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
      title: "Contact DevOps Team",
      subtitle: "Direct access to engineers",
      methods: [
        { label: "Email Us", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  relatedResources: {
    services: [
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Application Services", id: "application-services", icon: "Code", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "Infrastructure", id: "infrastructure", icon: "Shield", color: "text-red-500", bg: "bg-red-50" }
    ],
    columns: [
      {
        title: "Insights",
        icon: "Lightbulb",
        items: [
          { label: "Guide to CI/CD", href: "#" },
          { label: "SRE Best Practices", href: "#" }
        ]
      },
      {
        title: "Tools",
        icon: "Tool",
        items: [
          { label: "DORA Metrics Tracker", href: "#" },
          { label: "Kubernetes Cost Calc", href: "#" }
        ]
      }
    ]
  }
};