import { Suspense } from "react";
import ServicesClient from "./ServicesClient";
import UniversalHeroSkeleton from "@/components/UI/UniversalHeroSkeleton";

export default function ServicesPage() {
  return (
    <Suspense fallback={<main className="min-h-screen"><UniversalHeroSkeleton /></main>}>
      <ServicesClient />
    </Suspense>
  );
}