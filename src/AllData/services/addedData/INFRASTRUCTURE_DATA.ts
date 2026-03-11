import { ServicePageData } from "../types";

export const INFRASTRUCTURE_DATA: ServicePageData = {
  id: "infrastructure",
  preview: {
    title: "IT Infrastructure",
    tagline: "Robust Foundation",
    description: "Design, deploy, and manage on-premise, cloud, and hybrid infrastructure. Networking, servers, storage, and disaster recovery",
    image: "/assets/images/Icons/IT Infrasctructure.svg",
    icon: "Server",
    points: ["Network Design (LAN/WAN)", "Hybrid Cloud Setup", "Disaster Recovery", "24/7 Managed Services"],
    technologies: [
      { name: "Cisco", logo: "/tech/cisco.svg" },
      { name: "VMware", logo: "/tech/vmware.svg" },
      { name: "AWS", logo: "/tech/aws.svg" }
    ]
  },
  hero: {
    badge: "Infrastructure Services",
    titlePrefix: "Resilient IT",
    titleHighlight: "Foundation",
    description: "We design, deploy, and manage the robust IT infrastructure that powers your business. From data centers to hybrid cloud and secure networking",
    features: ["Network & Data Center Architecture", "Server Virtualization & Storage", "Backup & Disaster Recovery", "24/7 Monitoring & Maintenance"],
    ctaPrimary: "Assess Infrastructure",
    ctaSecondary: "View Solutions"
  },
  overview: {
    badge: "Service Overview",
    heading: "Building Your",
    highlight: "Digital Backbone",
    content: [
      "A reliable IT infrastructure is essential for operations. We provide end-to-end services for on-premise, cloud, and hybrid environments, ensuring high availability and performance",
      "Our managed services team monitors your systems 24/7, proactively handling maintenance, patches, and incidents to minimize downtime"
    ],
    differentiators: [
      { title: "Hybrid Expertise", description: "Seamless integration of on-prem and cloud", icon: "Cloud" },
      { title: "Proactive Support", description: "24/7 monitoring prevents issues before they impact you", icon: "Shield" },
      { title: "Security First", description: "Secure by design architecture", icon: "Lock" }
    ]
  },
  coreServices: {
    badge: "Core Capabilities",
    titleLine1: "Infrastructure",
    titleHighlight: "Solutions",
    description: "Hardware, networking, and management services",
    cards: [
      { title: "Design & Architecture", desc: "LAN/WAN, Data Center, and HA design", icon: "PenTool", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Server & Storage", desc: "Physical/Virtual servers (VMware), SAN/NAS storage", icon: "HardDrive", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "Network Infra", desc: "Cisco/Aruba networking, Firewalls, VPNs", icon: "Network", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Backup & DR", desc: "Business continuity planning, replication, and failover", icon: "Save", color: "text-red-600", bg: "bg-red-50" },
      { title: "Managed Services", desc: "24/7 monitoring, patching, and incident response", icon: "Activity", color: "text-green-600", bg: "bg-green-50" }
    ],
    footer: {
      left: { title: "Typical DR RTO", type: "highlight", content: "< 4 Hours" },
    }
  },
  process: {
    title: "Deployment Process",
    description: "Standardized approach to infrastructure rollout",
    phases: [
      { phase: "Phase 1", title: "Assess", duration: "2 Weeks", icon: "Search", color: "bg-blue-600", objectives: ["Inventory audit", "Performance baseline"], activities: ["Site survey", "Analysis"], deliverables: ["Assessment Report"] },
      { phase: "Phase 2", title: "Design", duration: "3-4 Weeks", icon: "PenTool", color: "bg-indigo-600", objectives: ["Architecture design", "Capacity planning"], activities: ["Blueprinting", "Selection"], deliverables: ["Network Diagram"] },
      { phase: "Phase 3", title: "Deploy", duration: "4-12 Weeks", icon: "Settings", color: "bg-green-600", objectives: ["Installation", "Configuration"], activities: ["Hardware setup", "Testing"], deliverables: ["Live Infrastructure"] }
    ]
  },
  techStack: {
    heading: "Infrastructure Tech",
    description: "Leading hardware and software solutions",
    frameworks: [],
    llms: [
      { name: "Cisco", desc: "Networking & Security" },
      { name: "VMware", desc: "Virtualization" },
      { name: "Palo Alto", desc: "Firewalls" }
    ],
    mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Sector Solutions",
    description: "Infrastructure for demanding industries",
    items: [
      { id: "finance", label: "Finance", icon: "Landmark", theme: "blue", description: "High-availability financial systems", features: [{ title: "Uptime", desc: "99.99% availability", icon: "CheckCircle", caseStudy: { title: "Bank Migration", result: "Zero Downtime" } }] }
    ]
  },
  caseStudies: {
    heading: "Infrastructure Success",
    description: "Building reliable foundations",
    items: [
      { id: 1, category: "Migration", client: "Financial Services", title: "AWS Migration & DR", icon: "Cloud", color: "text-blue-600", challenge: "Aging on-prem hardware and poor DR", solution: "Migrated 200 servers to AWS with 4hr RTO DR", implementation: ["Cloud Migration", "DR Setup"], results: [{ label: "Uptime", value: "99.99%" }, { label: "Cost", value: "-45%" }], quote: "Our systems are now resilient and cost-effective", author: "CTO" }
    ]
  },
  faq: {
    heading: "Infra FAQs",
    items: [
      { question: "Do you support on-premise hardware?", answer: "Yes, we design and manage physical data centers and server rooms" },
      { question: "What is your typical response time?", answer: "Our SLAs offer response times as low as 15 minutes for critical incidents" }
    ]
  },
  getStarted: {
    badge: "Secure Infra",
    titleLines: ["Build a Solid", "IT Foundation"],
    description: "Get a free infrastructure assessment",
    cards: [
      { id: "assess", title: "Free Assessment", description: "Audit your network and servers", icon: "Activity", theme: "light", list: ["Security check", "Performance review"], cta: { text: "Start Assessment", link: "#" } }
    ],
    contact: { title: "Contact Infra Team", subtitle: "Network Engineers", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};