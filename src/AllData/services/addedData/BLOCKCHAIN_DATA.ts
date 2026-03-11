import { ServicePageData } from "../types";

export const BLOCKCHAIN_DATA: ServicePageData = {
  id: "blockchain",
  preview: {
    title: "Blockchain Dev",
    tagline: "Decentralized Solutions",
    description: "Enterprise blockchain, smart contracts, dApps, and NFT marketplaces. Expertise in Ethereum, Hyperledger, and Solana",
    image: "/assets/images/Icons/Blockchain Developer.svg",
    icon: "Link",
    points: ["Smart Contract Development", "dApp Development", "Enterprise Blockchain", "NFT & DeFi Solutions"],
    technologies: [
      { name: "Ethereum", logo: "/tech/ethereum.svg" },
      { name: "Solidity", logo: "/tech/solidity.svg" },
      { name: "Hyperledger", logo: "/tech/hyperledger.svg" }
    ]
  },
  hero: {
    badge: "Blockchain Services",
    titlePrefix: "Decentralized",
    titleHighlight: "Innovation",
    description: "We build secure, scalable blockchain solutions for enterprise and Web3. From smart contracts to private consortium networks and DeFi protocols",
    features: ["Smart Contract Development & Auditing", "dApp (Decentralized App) Creation", "Enterprise Private Blockchain (Hyperledger)", "NFT & Token Development"],
    ctaPrimary: "Discuss Project",
    ctaSecondary: "View Solutions"
  },
  overview: {
    badge: "Service Overview",
    heading: "Building the",
    highlight: "Web3 Future",
    content: [
      "Blockchain is transforming trust and value exchange. We help organizations leverage distributed ledger technology for transparency, security, and efficiency",
      "Our team covers the full spectrum: public chains like Ethereum/Solana for consumer apps, and private chains like Hyperledger Fabric for enterprise supply chains"
    ],
    differentiators: [
      { title: "Security First", description: "Rigorous smart contract auditing", icon: "Shield" },
      { title: "Protocol Agnostic", description: "Expertise in ETH, Solana, Polygon, etc", icon: "Layers" },
      { title: "Enterprise Ready", description: "Scalable private blockchain solutions", icon: "Briefcase" }
    ]
  },
  coreServices: {
    badge: "Blockchain Capabilities",
    titleLine1: "Decentralized",
    titleHighlight: "Services",
    description: "End-to-end blockchain engineering",
    cards: [
      { title: "Consulting", desc: "Use case evaluation, architecture design, and regulatory guidance", icon: "MessageSquare", color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Smart Contracts", desc: "Secure Solidity development, testing, and gas optimization", icon: "FileCode", color: "text-purple-600", bg: "bg-purple-50" },
      { title: "dApp Development", desc: "Web3 integration, wallet connection, and frontend interfaces", icon: "Layout", color: "text-orange-600", bg: "bg-orange-50" },
      { title: "Private Blockchain", desc: "Hyperledger Fabric for permissioned enterprise networks", icon: "Lock", color: "text-green-600", bg: "bg-green-50" },
      { title: "NFT & DeFi", desc: "Marketplaces, staking, yield farming, and token creation", icon: "Coins", color: "text-yellow-600", bg: "bg-yellow-50" }
    ],
    footer: {
      left: { title: "Smart Contract Audit", type: "highlight", content: "1-2 Weeks" },
      right: { title: "Protocols", type: "tags", content: ["Ethereum", "Polygon", "Solana", "Hyperledger"] }
    }
  },
  process: {
    title: "Blockchain Lifecycle",
    description: "Secure development process",
    phases: [
      { phase: "Phase 1", title: "Design", duration: "2-4 Weeks", icon: "PenTool", color: "bg-blue-600", objectives: ["Architecture", "Tokenomics"], activities: ["Whitepaper", "Technical Spec"], deliverables: ["Architecture Doc"] },
      { phase: "Phase 2", title: "Develop", duration: "4-12 Weeks", icon: "Code", color: "bg-indigo-600", objectives: ["Smart Contracts", "Frontend"], activities: ["Coding", "Integration"], deliverables: ["MVP"] },
      { phase: "Phase 3", title: "Audit", duration: "2-3 Weeks", icon: "ShieldCheck", color: "bg-green-600", objectives: ["Security", "Optimization"], activities: ["Code Audit", "Testing"], deliverables: ["Audit Report"] }
    ]
  },
  techStack: {
    heading: "Web3 Stack",
    description: "Leading blockchain technologies",
    frameworks: [
      { name: "Solidity", desc: "Smart contract language" },
      { name: "Truffle/Hardhat", desc: "Development frameworks" },
      { name: "Web3.js", desc: "Blockchain interaction" }
    ],
    llms: [], mlOps: [], cloudPlatforms: []
  },
  industries: {
    heading: "Blockchain Uses",
    description: "Transforming industries",
    items: [
      { id: "supplychain", label: "Supply Chain", icon: "Truck", theme: "blue", description: "Traceability and provenance", features: [{ title: "Transparency", desc: "Full audit trail", icon: "Search", caseStudy: { title: "Pharma Tracking", result: "$500M Tracked" } }] }
    ]
  },
  caseStudies: {
    heading: "Blockchain Success",
    description: "Real-world decentralized solutions",
    items: [
      { id: 1, category: "Supply Chain", client: "Pharma Co", title: "Drug Traceability", icon: "Truck", color: "text-blue-600", challenge: "Counterfeit drugs and lack of visibility", solution: "Hyperledger Fabric blockchain for tracking", implementation: ["Hyperledger", "IoT Integration"], results: [{ label: "Inventory", value: "$500M" }, { label: "Compliance", value: "100%" }], quote: "We now have complete visibility from factory to pharmacy", author: "Supply Chain Director" }
    ]
  },
  faq: {
    heading: "Blockchain FAQs",
    items: [
      { question: "Which blockchain should we use?", answer: "It depends on your use case. Ethereum/Polygon for public access, Hyperledger for private enterprise data" },
      { question: "Are smart contracts secure?", answer: "They are immutable once deployed, so rigorous auditing and testing are essential before launch" }
    ]
  },
  getStarted: {
    badge: "Build Web3",
    titleLines: ["Enter the", "Decentralized World"],
    description: "Validate your blockchain use case",
    cards: [
      { id: "consult", title: "Blockchain Consult", description: "Evaluate feasibility", icon: "MessageSquare", theme: "light", list: ["Tech selection", "Architecture"], cta: { text: "Book Consult", link: "#" } }
    ],
    contact: { title: "Contact Blockchain Team", subtitle: "Web3 Developers", methods: [{ label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" }] }
  },
  relatedResources: { services: [], columns: [] }
};