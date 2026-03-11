"use client";

import { useSearchParams } from "next/navigation";
import { getServiceData } from "@/app/services/data/servicesRegistry";

import UniversalHero from "@/components/services/universal/UniversalHero";
import UniversalOverview from "@/components/services/universal/UniversalOverview";
import UniversalCoreServices from "@/components/services/universal/UniversalCoreServices";
import UniversalTechStack from "@/components/services/universal/UniversalTechStack";
import UniversalProcess from "@/components/services/universal/UniversalProcess";
import UniversalIndustries from "@/components/services/universal/UniversalIndustries";
import UniversalCaseStudies from "@/components/services/universal/UniversalCaseStudies";
import UniversalFAQ from "@/components/services/universal/UniversalFAQ";
import UniversalGetStarted from "@/components/services/universal/UniversalGetStarted";
import UniversalRelatedResources from "@/components/services/universal/UniversalRelatedResources";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const serviceData = getServiceData(category);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center  font-sora p-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          We couldn't find the service category:
          <span className="ml-2 font-mono text-red-500 bg-red-50 px-2 py-1 rounded">
            {category || "Empty"}
          </span>
        </p>
        <a href="/" className="px-6 py-3 bg-[#2776ea] text-white rounded-xl font-bold">
          Return Home
        </a>
      </div>
    );
  }

  return (
    <main className="min-h-screen  selection:bg-[#2776ea] selection:text-white">
      <UniversalHero data={serviceData.hero} />
      <UniversalOverview data={serviceData.overview} />

      <UniversalCoreServices data={serviceData.coreServices} />
      
      <UniversalTechStack id={serviceData.id} data={serviceData.techStack} />

      <UniversalProcess data={serviceData.process} />

      <UniversalIndustries data={serviceData.industries} />
      
      <UniversalFAQ data={serviceData.faq} />
      <UniversalGetStarted data={serviceData.getStarted} />
      <UniversalRelatedResources data={serviceData.relatedResources} />

    </main>
  );
}
