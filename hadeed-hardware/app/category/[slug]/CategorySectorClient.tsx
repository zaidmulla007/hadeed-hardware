"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import { getProductImage, getBrandLogo } from "@/app/data/productImages";
import Image from "next/image";

interface SubcategoryInfo {
  name: string;
  slug: string;
}

interface CategoryInfo {
  name: string;
  slug: string;
  subcategories: SubcategoryInfo[];
}

interface BrandInfo {
  name: string;
  slug: string;
  abbr: string;
  sector: string;
  categories: CategoryInfo[];
}

interface Props {
  slug: string;
  title: string;
  description: string;
  matchingBrands: BrandInfo[];
}

export default function CategorySectorClient({
  slug,
  title,
  description,
  matchingBrands,
}: Props) {
  const totalProducts = matchingBrands.reduce(
    (acc, b) =>
      acc +
      b.categories.reduce((a, c) => a + c.subcategories.length, 0),
    0
  );
  const totalCategories = matchingBrands.reduce(
    (acc, b) => acc + b.categories.length,
    0
  );

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
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-accent">
                  {matchingBrands.length}
                </div>
                <div className="text-xs text-white/50">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-accent">
                  {totalCategories}
                </div>
                <div className="text-xs text-white/50">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-accent">
                  {totalProducts}
                </div>
                <div className="text-xs text-white/50">Products</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products by Brand */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {matchingBrands.map((brand, bi) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 last:mb-0"
            >
              {/* Brand Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                  <Image
                    src={getBrandLogo(brand.slug)}
                    alt={brand.name}
                    width={36}
                    height={36}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <Link
                    href={`/products/${brand.slug}`}
                    className="text-xl font-bold text-blue-dark hover:text-blue transition-colors"
                  >
                    {brand.name}
                  </Link>
                  <p className="text-xs text-grey">
                    {brand.categories.length} categories &middot;{" "}
                    {brand.categories.reduce(
                      (a, c) => a + c.subcategories.length,
                      0
                    )}{" "}
                    products
                  </p>
                </div>
              </div>

              {/* Categories & Products */}
              {brand.categories.map((cat) => (
                <div key={cat.slug} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Link
                      href={`/products/${brand.slug}/${cat.slug}`}
                      className="text-sm font-semibold text-blue-accent uppercase tracking-wider hover:text-blue transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {cat.subcategories.map((sub) => {
                      const image = getProductImage(brand.slug, cat.slug, sub.slug);
                      return (
                        <Link
                          key={sub.slug}
                          href={`/products/${brand.slug}/${cat.slug}/${sub.slug}`}
                        >
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-accent/40 hover:shadow-lg hover:shadow-blue/5 transition-all group"
                          >
                            <div className="relative h-24 sm:h-28 overflow-hidden bg-grey-light flex items-center justify-center p-3">
                              <img
                                src={image}
                                alt={sub.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-3">
                              <h4 className="text-xs font-semibold text-blue-dark group-hover:text-blue transition-colors line-clamp-2">
                                {sub.name}
                              </h4>
                              <p className="text-[10px] text-grey mt-0.5">
                                {brand.name}
                              </p>
                            </div>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Divider between brands */}
              {bi < matchingBrands.length - 1 && (
                <div className="mt-10 border-b border-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 mb-10 bg-gradient-to-br from-blue-dark via-blue to-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need {title}?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Contact us for product inquiries, quotations, or bulk supply
              requirements. We are always ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Browse All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
