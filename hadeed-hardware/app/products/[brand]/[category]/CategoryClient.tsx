"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getCategoryBySlug } from "@/app/data/products";
import { getProductImage } from "@/app/data/productImages";

export default function CategoryClient({
  brandSlug,
  categorySlug,
}: {
  brandSlug: string;
  categorySlug: string;
}) {
  const result = getCategoryBySlug(brandSlug, categorySlug);
  if (!result) return notFound();

  const { brand, category } = result;

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
              <Link
                href={`/products/${brand.slug}`}
                className="hover:text-white transition-colors"
              >
                {brand.name}
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{category.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {category.name}
            </h1>
            <p className="mt-2 text-white/60 text-sm">
              by {brand.name} &middot; {category.subcategories.length} products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductSidebar
              activeBrand={brandSlug}
              activeCategory={categorySlug}
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-dark mb-6">
                {category.name} — {brand.name}
              </h2>

              {/* Product Cards */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {category.subcategories.map((sub, i) => {
                  const img = getProductImage(sub.slug, brand.sector);
                  return (
                    <motion.div
                      key={sub.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                    >
                      <Link
                        href={`/products/${brand.slug}/${category.slug}/${sub.slug}`}
                        className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-blue/5 hover:border-blue-accent/30 transition-all duration-300"
                      >
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
                        <div className="p-4">
                          <h3 className="font-bold text-blue-dark group-hover:text-blue transition-colors text-sm mb-1">
                            {sub.name}
                          </h3>
                          <p className="text-xs text-grey mb-3">
                            {category.name} — {brand.name}
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

              {/* More from brand */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-blue-dark mb-4">
                  More from {brand.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brand.categories
                    .filter((c) => c.slug !== categorySlug)
                    .map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${brand.slug}/${cat.slug}`}
                        className="text-xs px-4 py-2 bg-white border border-gray-200 rounded-full text-grey-dark hover:border-blue-accent hover:text-blue transition-all"
                      >
                        {cat.name}
                      </Link>
                    ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-blue-dark to-blue rounded-2xl p-5 sm:p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-2">
                  Need a Specific Product?
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Contact us for quotations, bulk orders, or to find the exact
                  product you need.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+97142590552"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue font-semibold text-sm rounded-xl hover:bg-grey-light transition-colors"
                  >
                    <Phone size={16} />
                    Call Us
                  </a>
                  <a
                    href="mailto:info@hadeeddubai.ae"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Mail size={16} />
                    Email Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
