"use client";

import { useSearchParams } from "next/navigation";
import { getProductData, isProductData } from "./productRegistry";

// Universal Service Components
import UniversalHero from "@/components/services/universal/UniversalHero";
import UniversalOverview from "@/components/services/universal/UniversalOverview";
import UniversalProcess from "@/components/services/universal/UniversalProcess";

// New Product Components
import UniversalProductFeatures from "@/components/products/universal/UniversalProductFeatures";
import UniversalUseCases from "@/components/products/universal/UniversalUseCases";
import UniversalBusinessModel from "@/components/products/universal/UniversalBusinessModel";
import UniversalSuccessMetrics from "@/components/products/universal/UniversalSuccessMetrics";
import UniversalProductRelatedResources from "@/components/products/universal/UniversalProductRelatedResources";
import UniversalProductTechStack from "@/components/products/universal/UniversalProductTechStack";
import UniversalGetStarted from "@/components/products/universal/UniversalGetStarted";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const data = getProductData(category);

  // Fallback removed - gracefully return null if no data is found
  if (!data) return null;

  // Common Components (Shared)
  const commonComponents = (
    <>
      <UniversalHero data={data.hero} />
      <UniversalOverview data={data.overview} />
    </>
  );

  // PRODUCT PAGE RENDER
  if (isProductData(data)) {
    return (
      <>
        <main className="min-h-screen  selection:bg-[#2776ea] selection:text-white">
          {commonComponents}

          {/* Exclusive Product Components */}
          <UniversalSuccessMetrics data={data.successMetrics} />
          <UniversalProductFeatures data={data.productFeatures} />
          <UniversalProductTechStack  data={data.techStack} />
          <UniversalUseCases data={data.useCases} />
          <UniversalBusinessModel data={data.businessModel} />
          <UniversalProcess data={data.process} />

          <UniversalGetStarted data={data.getStarted} />
          {data.relatedResources && <UniversalProductRelatedResources data={data.relatedResources} />}
        </main>
      </>
    );
  }


}