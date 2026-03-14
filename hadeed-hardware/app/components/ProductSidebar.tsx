"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { brands } from "@/app/data/products";

interface Props {
  activeBrand?: string;
  activeCategory?: string;
}

export default function ProductSidebar({ activeBrand, activeCategory }: Props) {
  const [search, setSearch] = useState("");
  const [expandedBrands, setExpandedBrands] = useState<string[]>(
    activeBrand ? [activeBrand] : []
  );

  const toggleBrand = (slug: string) => {
    setExpandedBrands((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const filtered = brands.filter((b) => {
    if (!search) return true;
    const q = search.toLowerCase();
    if (b.name.toLowerCase().includes(q)) return true;
    return b.categories.some(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.subcategories.some((s) => s.name.toLowerCase().includes(q))
    );
  });

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden lg:sticky lg:top-24">
        {/* Header */}
        <div className="bg-blue p-4">
          <h3 className="text-white font-bold text-sm">Browse by Brand</h3>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-gray-100">
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-grey"
            />
            <input
              type="text"
              placeholder="Search brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-grey-light border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-accent"
            />
          </div>
        </div>

        {/* Brand List */}
        <div className="max-h-[40vh] lg:max-h-[60vh] overflow-y-auto">
          {filtered.map((brand) => {
            const isExpanded = expandedBrands.includes(brand.slug);
            const isActive = activeBrand === brand.slug;

            return (
              <div key={brand.slug} className="border-b border-gray-50 last:border-0">
                <div
                  className={`flex items-center justify-between px-4 py-2.5 hover:bg-grey-light transition-colors ${
                    isActive ? "bg-blue/5" : ""
                  }`}
                >
                  <Link
                    href={`/products/${brand.slug}`}
                    className="flex items-center gap-2 flex-1 min-w-0"
                  >
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive
                          ? "bg-blue text-white"
                          : "bg-grey-light text-blue"
                      }`}
                    >
                      {brand.abbr}
                    </span>
                    <span
                      className={`text-xs font-semibold truncate ${
                        isActive ? "text-blue" : "text-grey-dark"
                      }`}
                    >
                      {brand.name}
                    </span>
                  </Link>
                  <button
                    onClick={() => toggleBrand(brand.slug)}
                    className="p-1 shrink-0"
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} className="text-grey" />
                    </motion.div>
                  </button>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pr-3 pb-2 space-y-0.5">
                        {brand.categories.map((cat) => {
                          const isCatActive =
                            activeBrand === brand.slug &&
                            activeCategory === cat.slug;
                          return (
                            <Link
                              key={cat.slug}
                              href={`/products/${brand.slug}/${cat.slug}`}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors ${
                                isCatActive
                                  ? "bg-blue text-white font-semibold"
                                  : "text-grey hover:bg-grey-light hover:text-blue"
                              }`}
                            >
                              <ChevronRight size={12} />
                              {cat.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
