import { ServicePageData } from "@/AllData/services/types";
import { ProductPageData } from "@/app/product/types";

// --- PRODUCT DATA ---
import { STORETECH_DATA } from "@/AllData/products/STORETECH_DATA";

// Union type for the registry
type PageData = ServicePageData | ProductPageData;

export const productRegistry: Record<string, PageData> = {
  "storetech": STORETECH_DATA,
};

// Type guard to check if data is ProductPageData
export function isProductData(data: PageData): data is ProductPageData {
  return (data as ProductPageData).productFeatures !== undefined;
}

export const getProductData = (category: string | undefined): PageData | null => {
  if (!category) return null;
  return productRegistry[category] || null;
};
