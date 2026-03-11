import { 
  BarChart3, 
  Layers, 
  Store, 
  ChartLine, 
  Glasses, 

} from "lucide-react";

// --- TYPES ---
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  link: string;
}

// --- DATA ---
export const products: Product[] = [
  {
    id: "value-chart",
    name: "Value Chart",
    tagline: "Intelligence Platform",
    description: "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership",
    features: ["Real-time Analytics", "Custom Reporting", "Forecasting"],
    icon: <BarChart3 size={24} />,
    image: "/assets/images/valuechart.png",
    link: "https://www.valueflowsoft.com/",
  },
  {
    id: "tanlux",
    name: "Tanlux",
    tagline: "Industrial ERP",
    description: "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules",
    features: ["Supply Chain Sync", "IoT Integration", "Resource Tracking"],
    icon: <Layers size={24} />,
    image: "/assets/images/tanluxlogo.png",
    link: "https://tanlux.se/",
  },
  {
    id: "fpanalyxer",
    name: "Fp analyzer",
    tagline: "Financial Analytics",
    description: "Advanced financial planning and analysis tool designed to streamline budgeting, forecasting, and performance management",
    features: ["Budget Automation", "Variance Analysis", "Scenario Planning"],
    icon: <ChartLine size={24} />,
    image: "/assets/images/fpanalyzer.png",
    link: "https://www.fpanalyzer.se/",
  },
  {
    id: "storetech",
    name: "StoreTech",
    tagline: "Automated Retail",
    description: "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management across global storefronts",
    features: ["AI Checkout", "Inventory Cloud", "Loyalty Systems"],
    icon: <Store size={24} />,
    image: "/assets/images/storetech-logo1.png",
    link: "https://store-tech.se/",
  },
  {
    id: "virtualtour360",
    name: "VirtualTour360",
    tagline: "Immersive VR Platform",
    description: "Create professional virtual tours in WordPress instantly. Build immersive 360 degree experiences with Apple Vision Pro and Meta Quest support without writing a single line of code",
    features: ["Apple Vision Pro Ready", "Meta Quest Support", "No-Code Builder"],
    icon: <Glasses size={24} />,
    image: "/assets/images/liveTourimg.png",
    link: "https://virtualtour360.ai/",
  }
];