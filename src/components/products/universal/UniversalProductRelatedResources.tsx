"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { products } from "@/AllData/products/PRODUCT_DATA";

// Convert products to an array format for easy mapping
const allProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    href: product.id === "storetech"
        ? "/product?category=storetech"
        : `/products#${product.id}`,
    icon: product.icon,
    desc: product.description,
}));

export default function UniversalProductRelatedResources({ data }: { data: ServicePageData['relatedResources'] & { id?: string } }) {
    const hasCustomServices = data?.services && data.services.length > 0;

    return (
        <section className=" py-24 font-sora relative overflow-hidden">
            <div className=" mx-auto px-6 max-w-7xl relative z-10">

                {/* --- SECTION 1: RELATED PRODUCTS --- */}
                <div className="mb-12">
                    <SectionHeader
                        badge="Ecosystem"
                        title="Explore More Products"
                        description="Discover our other specialized products to complete your digital strategy."
                        centered={true}
                        className="max-w-3xl mx-auto mb-16"
                        size="default"
                    />

                    {/* DATA-DRIVEN PRODUCTS (from relatedResources.services[]) */}
                    {hasCustomServices ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.services.map((service, index) => {
                                // Find matching product from allProducts to use its exact base href if available
                                const matchedProduct = allProducts.find(item => item.id === service.id);

                                const finalHref = matchedProduct ? matchedProduct.href : `/products#${service.id}`;

                                return (
                                    <Link
                                        key={index}
                                        href={finalHref}
                                        className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-foreground/10 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col items-start h-full"
                                    >
                                        <div className={`h-12 w-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color} mb-5 group-hover:scale-110 transition-transform`}>
                                            <DynamicIcon name={service.icon} size={24} />
                                        </div>

                                        <h4 className="text-h6 font-bold text-foreground group-hover:text-primary mb-2 transition-colors">
                                            {service.title}
                                        </h4>

                                        <div className="flex items-center gap-2 text-body-small font-bold text-foreground/40 group-hover:text-primary transition-colors mt-auto uppercase tracking-wider">
                                            View Details <ArrowRight size={16} />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        /* FALLBACK: ALL PRODUCTS FROM REGISTRY (for product pages) */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {allProducts.map((product, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={product.href}
                                        className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-foreground/10 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col items-start h-full"
                                    >
                                        <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                                            {product.icon}
                                        </div>

                                        <h4 className="text-h6 font-bold text-foreground group-hover:text-primary mb-2 transition-colors">
                                            {product.name}
                                        </h4>

                                        <p className="text-body-small text-foreground/60 leading-relaxed mb-6 flex-1">
                                            {product.desc}
                                        </p>

                                        <div className="flex items-center gap-2 text-body-small font-bold text-foreground/40 group-hover:text-primary transition-colors mt-auto uppercase tracking-wider">
                                            View Product <ArrowRight size={16} />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
