"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getCategoryBySlug } from "@/app/data/products";
import { getProductImages, getProductImage } from "@/app/data/productImages";

export default function ProductClient({
  brandSlug,
  categorySlug,
  productSlug,
}: {
  brandSlug: string;
  categorySlug: string;
  productSlug: string;
}) {
  const result = getCategoryBySlug(brandSlug, categorySlug);
  if (!result) return notFound();

  const { brand, category } = result;
  const product = category.subcategories.find((s) => s.slug === productSlug);
  if (!product) return notFound();

  const images = getProductImages(product.slug, brand.sector);
  const [activeImage, setActiveImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Related products from same category
  const related = category.subcategories.filter(
    (s) => s.slug !== productSlug
  );

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    const { default: Swal } = await import("sweetalert2");
    Swal.fire({
      title: "Enquiry Sent!",
      text: `Thank you for your interest in ${product.name}. Our team will contact you shortly.`,
      icon: "success",
      confirmButtonColor: "#1B3A6B",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-dark via-blue to-blue-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm flex-wrap">
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
            <Link
              href={`/products/${brand.slug}/${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.name}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{product.name}</span>
          </div>
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
              {/* Product Detail */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Gallery */}
                  <div className="p-4 sm:p-6">
                    {/* Main Image */}
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-4 bg-grey-light"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${images[activeImage]}')`,
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-blue font-semibold rounded-full">
                          {brand.name}
                        </span>
                      </div>
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="flex gap-2">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            activeImage === i
                              ? "border-blue-accent"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${img}')` }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-6 md:border-l border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] px-2.5 py-1 bg-blue/10 text-blue font-semibold rounded-full">
                        {brand.name}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 bg-grey-light text-grey-dark font-semibold rounded-full">
                        {category.name}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 bg-grey-light text-grey-dark font-semibold rounded-full">
                        {brand.sectorLabel}
                      </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
                      {product.name}
                    </h1>

                    <p className="text-grey leading-relaxed mb-4">
                      High-quality {product.name.toLowerCase()} from{" "}
                      {brand.name}, designed for professional use in
                      construction, industrial, and maintenance applications.
                      Built to deliver reliable performance, durability, and
                      precision for demanding work environments.
                    </p>

                    <div className="bg-grey-light rounded-xl p-4 mb-6">
                      <h4 className="text-sm font-bold text-blue-dark mb-2">
                        Product Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-grey">Brand:</span>{" "}
                          <span className="font-semibold text-blue-dark">
                            {brand.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-grey">Category:</span>{" "}
                          <span className="font-semibold text-blue-dark">
                            {category.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-grey">Sector:</span>{" "}
                          <span className="font-semibold text-blue-dark">
                            {brand.sectorLabel}
                          </span>
                        </div>
                        <div>
                          <span className="text-grey">Origin:</span>{" "}
                          <span className="font-semibold text-blue-dark">
                            International
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-grey text-sm leading-relaxed mb-6">
                      Available for immediate supply across the UAE. Contact us
                      for pricing, bulk orders, and technical specifications.
                      Our team of experts can help you select the right product
                      for your project requirements.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/971555548152?text=Hi, I'm interested in ${product.name} from ${brand.name}. Please share details and pricing.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-600 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Enquiry
                      </a>
                      <a
                        href="tel:+97142590552"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue text-white font-semibold text-sm rounded-xl hover:bg-blue-dark transition-colors"
                      >
                        <Phone size={18} />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-10"
              >
                <h3 className="text-xl font-bold text-blue-dark mb-2">
                  Enquire About {product.name}
                </h3>
                <p className="text-grey text-sm mb-6">
                  Fill the form below and our team will get back to you with
                  pricing and availability.
                </p>

                <form onSubmit={handleEnquiry} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    value={`${product.name} — ${brand.name}`}
                    readOnly
                    className="w-full px-4 py-3 bg-blue/5 border border-blue/20 rounded-xl text-sm text-blue font-medium"
                  />
                  <textarea
                    placeholder="Your requirements (quantity, specifications, etc.)"
                    rows={4}
                    className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors resize-none"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Enquiry
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Related Products */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-blue-dark mb-5">
                    More in {category.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {related.slice(0, 6).map((sub, i) => {
                      const img = getProductImage(sub.slug, brand.sector);
                      return (
                        <motion.div
                          key={sub.slug}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                        >
                          <Link
                            href={`/products/${brand.slug}/${category.slug}/${sub.slug}`}
                            className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-blue/5 hover:border-blue-accent/30 transition-all duration-300"
                          >
                            <div className="relative h-36 overflow-hidden">
                              <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                style={{
                                  backgroundImage: `url('${img}')`,
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-blue-dark group-hover:text-blue transition-colors text-sm mb-1">
                                {sub.name}
                              </h4>
                              <div className="flex items-center gap-1 text-xs font-semibold text-blue group-hover:gap-2 transition-all">
                                View Details
                                <ArrowRight size={12} />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
