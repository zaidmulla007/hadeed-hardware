"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import ProductSidebar from "@/app/components/ProductSidebar";
import { brands, getTotalSubcategories } from "@/app/data/products";

const sectorColors: Record<string, string> = {
  tools: "bg-blue/10 text-blue",
  safety: "bg-green-500/10 text-green-700",
  welding: "bg-orange-500/10 text-orange-700",
  chemicals: "bg-teal-500/10 text-teal-700",
  testing: "bg-purple-500/10 text-purple-700",
  abrasives: "bg-amber-500/10 text-amber-700",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-dark via-blue to-blue-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Products
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Browse our complete range of hardware, tools, safety equipment, and
              industrial supplies from 20+ trusted global brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductSidebar />

            {/* Main Content - All Brands */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {brands.map((brand, i) => {
                  const totalSubs = getTotalSubcategories(brand);
                  return (
                    <motion.div
                      key={brand.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                    >
                      <Link
                        href={`/products/${brand.slug}`}
                        className="group block bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:shadow-blue/5 hover:border-blue-accent/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-11 h-11 bg-blue rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">
                            {brand.abbr}
                          </div>
                          <div>
                            <h3 className="font-bold text-blue-dark group-hover:text-blue transition-colors text-sm">
                              {brand.name}
                            </h3>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                                sectorColors[brand.sector]
                              }`}
                            >
                              {brand.sectorLabel}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-grey mb-3">
                          <span className="bg-grey-light px-2 py-0.5 rounded">
                            {brand.categories.length} categories
                          </span>
                          <span className="bg-grey-light px-2 py-0.5 rounded">
                            {totalSubs} products
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {brand.categories.slice(0, 3).map((cat) => (
                            <span
                              key={cat.slug}
                              className="text-[10px] px-2 py-1 bg-grey-light text-grey-dark rounded-full"
                            >
                              {cat.name}
                            </span>
                          ))}
                          {brand.categories.length > 3 && (
                            <span className="text-[10px] px-2 py-1 bg-grey-light text-grey-dark rounded-full">
                              +{brand.categories.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue group-hover:gap-2 transition-all">
                          View Products
                          <ArrowRight size={14} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
