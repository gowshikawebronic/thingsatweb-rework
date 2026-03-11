import { ServicePageData } from "@/AllData/services/types";

// --- EXISTING MAIN DATA ---
import { AI_DATA } from "@/AllData/services/mainData/AI_DATA";
import { WEB_DATA } from "@/AllData/services/mainData/WEB_DATA";
import { CLOUD_DATA } from "@/AllData/services/mainData/CLOUD_DATA";
import { DIGITAL_TRANSFORMATION_DATA } from "@/AllData/services/mainData/DIGITAL_TRANSFORMATION_DATA";
import { DEVOPS_DATA } from "@/AllData/services/mainData/DEVOPS_DATA";
import { IOT_DATA } from "@/AllData/services/mainData/IOT_DATA";
import { ANALYTICS_DATA } from "@/AllData/services/mainData/ANALYTICS_DATA";

// --- NEW ADDITIONAL DATA ---
// Ensure these paths match exactly where you saved the files
import { CONSULTING_DATA } from "@/AllData/services/addedData/CONSULTING_DATA";
import { APP_SERVICES_DATA } from "@/AllData/services/addedData/APP_SERVICES_DATA";
import { INFRASTRUCTURE_DATA } from "@/AllData/services/addedData/INFRASTRUCTURE_DATA";
import { ENGINEERING_DATA } from "@/AllData/services/addedData/ENGINEERING_DATA";
import { QA_DATA } from "@/AllData/services/addedData/QA_DATA";
import { DESIGN_DATA } from "@/AllData/services/addedData/DESIGN_DATA";
import { BLOCKCHAIN_DATA } from "@/AllData/services/addedData/BLOCKCHAIN_DATA";
import { MOBILE_DATA } from "@/AllData/services/addedData/MOBILE_DATA";
import { SOFTWARE_DATA } from "@/AllData/services/mainData/SOFTWARE_DATA";

export const servicesRegistry: Record<string, ServicePageData> = {
  // Main Services
  "web-development": WEB_DATA,
  "ai-machine-learning": AI_DATA,
  "cloud-services": CLOUD_DATA,
  "digital-transformation": DIGITAL_TRANSFORMATION_DATA,
  "devops": DEVOPS_DATA,
  "iot-solutions": IOT_DATA,
  "data-analytics": ANALYTICS_DATA,
  "software-development": SOFTWARE_DATA,

  // Additional Services
  "consulting": CONSULTING_DATA,
  "application-services": APP_SERVICES_DATA,
  "infrastructure": INFRASTRUCTURE_DATA,
  "engineering": ENGINEERING_DATA,
  "qa-testing": QA_DATA,
  "design": DESIGN_DATA,
  "blockchain": BLOCKCHAIN_DATA,
  "mobile-development": MOBILE_DATA,
};

export const getServiceData = (category: string | undefined): ServicePageData | null => {
  if (!category) return null;
  return servicesRegistry[category] || null;
};