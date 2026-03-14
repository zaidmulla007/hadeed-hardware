"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getBrandBySlug } from "@/app/data/products";
import { getProductImage } from "@/app/data/productImages";

export default function BrandClient({ brandSlug }: { brandSlug: string }) {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return notFound();

  // Flatten all subcategories (products) from all categories
  const allProducts = brand.categories.flatMap((cat) =>
    cat.subcategories.map((sub) => ({
      ...sub,
      categoryName: cat.name,
      categorySlug: cat.slug,
    }))
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-dark via-blue to-blue-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{brand.name}</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg border border-white/20">
                {brand.abbr}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {brand.name}
                </h1>
                <p className="text-white/60 text-sm mt-1">
                  {allProducts.length} products &middot;{" "}
                  {brand.categories.length} categories &middot;{" "}
                  {brand.sectorLabel}
                </p>
              </div>
            </div>
            <p className="mt-4 text-white/70 max-w-2xl">{brand.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductSidebar activeBrand={brandSlug} />

            <div className="flex-1">
              {/* Category quick links */}
              <div className="flex flex-wrap gap-2 mb-8">
                {brand.categories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full text-grey-dark hover:border-blue-accent hover:text-blue hover:bg-blue/5 transition-all font-medium"
                  >
                    {cat.name} ({cat.subcategories.length})
                  </a>
                ))}
              </div>

              {/* Products by category */}
              {brand.categories.map((cat, ci) => (
                <div key={cat.slug} id={cat.slug} className="mb-12 last:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-5"
                  >
                    <h2 className="text-lg font-bold text-blue-dark">
                      {cat.name}
                    </h2>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-grey bg-white px-3 py-1 rounded-full border border-gray-200">
                      {cat.subcategories.length} products
                    </span>
                  </motion.div>

                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {cat.subcategories.map((sub, i) => {
                      const img = getProductImage(sub.slug, brand.sector);
                      return (
                        <motion.div
                          key={sub.slug}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.4 }}
                        >
                          <Link
                            href={`/products/${brand.slug}/${cat.slug}/${sub.slug}`}
                            className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-blue/5 hover:border-blue-accent/30 transition-all duration-300"
                          >
                            {/* Image */}
                            <div className="relative h-36 sm:h-44 overflow-hidden">
                              <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                style={{ backgroundImage: `url('${img}')` }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                              <div className="absolute top-3 left-3">
                                <span className="text-[10px] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-blue font-semibold rounded-full">
                                  {brand.name}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                              <h3 className="font-bold text-blue-dark group-hover:text-blue transition-colors text-sm mb-1">
                                {sub.name}
                              </h3>
                              <p className="text-xs text-grey mb-3">
                                {cat.name} — {brand.name}
                              </p>
                              <div className="flex items-center gap-1 text-xs font-semibold text-blue group-hover:gap-2 transition-all">
                                View Details
                                <ArrowRight size={14} />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
