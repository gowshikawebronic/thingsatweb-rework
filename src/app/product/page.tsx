import { Suspense } from "react";
import ProductClient from "./ProductClient"; // Based on your import
import UniversalHeroSkeleton from "@/components/UI/UniversalHeroSkeleton";

export default function ProductPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white"><UniversalHeroSkeleton /></main>}>
      <ProductClient />
    </Suspense>
  );
}