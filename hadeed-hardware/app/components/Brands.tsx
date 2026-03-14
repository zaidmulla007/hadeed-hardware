"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const topBrands = [
  { brand: "TOTAL Tools", abbr: "TT", sector: "Power Tools" },
  { brand: "Makita", abbr: "MK", sector: "Power Tools" },
  { brand: "DeWalt", abbr: "DW", sector: "Power Tools" },
  { brand: "Stanley", abbr: "ST", sector: "Power Tools" },
  { brand: "3M", abbr: "3M", sector: "Abrasives" },
  { brand: "Norton", abbr: "NR", sector: "Abrasives" },
  { brand: "ESAB", abbr: "ES", sector: "Welding" },
  { brand: "Fluke", abbr: "FL", sector: "Testing" },
  { brand: "DeltaPlus", abbr: "DP", sector: "Safety & PPE" },
  { brand: "Honeywell", abbr: "HW", sector: "Safety & PPE" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            Our Brand Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-dark">
            20 Trusted Global Brands
          </h2>
          <p className="mt-4 text-grey max-w-2xl mx-auto">
            We partner with globally recognized brands to bring you the best
            hardware, tools, safety equipment, and industrial products.
          </p>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topBrands.map((brand, i) => (
            <motion.div
              key={brand.abbr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-grey-light rounded-2xl p-5 border border-gray-200 hover:border-blue-accent/40 hover:shadow-lg hover:shadow-blue/5 transition-all text-center"
            >
              <div className="w-12 h-12 bg-blue rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                {brand.abbr}
              </div>
              <div className="font-bold text-blue-dark text-sm">
                {brand.brand}
              </div>
              <div className="text-[10px] text-grey mt-1">{brand.sector}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-grey text-sm mb-4">
            + 10 more brands including Victor, Weicon, CRC, JSP, UNI-T,
            Rothenberger & more
          </p>
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors group"
          >
            View All Brands
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
