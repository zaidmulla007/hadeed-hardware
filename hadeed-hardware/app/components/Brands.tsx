"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getBrandLogo } from "@/app/data/productImages";

const allBrands = [
  { brand: "TOTAL Tools", slug: "total-tools", sector: "Power Tools" },
  { brand: "Makita", slug: "makita", sector: "Power Tools" },
  { brand: "DeWalt", slug: "dewalt", sector: "Power Tools" },
  { brand: "Stanley", slug: "stanley", sector: "Hand Tools" },
  { brand: "3M", slug: "3m", sector: "Abrasives" },
  { brand: "Norton", slug: "norton", sector: "Abrasives" },
  { brand: "ESAB", slug: "esab", sector: "Welding" },
  { brand: "Fluke", slug: "fluke", sector: "Testing" },
  { brand: "DeltaPlus", slug: "deltaplus", sector: "Safety & PPE" },
  { brand: "Honeywell", slug: "honeywell", sector: "Safety & PPE" },
  { brand: "Victor", slug: "victor", sector: "Welding" },
  { brand: "Weicon", slug: "weicon", sector: "Chemicals" },
  { brand: "CRC", slug: "crc", sector: "Chemicals" },
  { brand: "JSP", slug: "jsp", sector: "Safety & PPE" },
  { brand: "UNI-T", slug: "uni-t", sector: "Testing" },
  { brand: "Rothenberger", slug: "rothenberger", sector: "Pipe Tools" },
  { brand: "BW Technologies", slug: "bw-technologies", sector: "Gas Detection" },
  { brand: "Kiswel Electrode", slug: "haswel-electrode", sector: "Welding" },
  { brand: "Ambersil", slug: "ambersil", sector: "Chemicals" },
  { brand: "Hadeed Safety Wear", slug: "hadeed-safety-wear", sector: "Safety & PPE" },
];

// Split brands into two rows for visual variety
const row1 = allBrands.slice(0, 10);
const row2 = allBrands.slice(10, 20);

function BrandItem({ brand }: { brand: (typeof allBrands)[0] }) {
  return (
    <Link
      href={`/products/${brand.slug}`}
      className="flex-shrink-0 group"
    >
      <div className="w-36 sm:w-44 bg-white rounded-2xl p-4 border border-gray-200 hover:border-blue-accent/40 hover:shadow-lg hover:shadow-blue/5 transition-all text-center mx-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-grey-light rounded-xl flex items-center justify-center overflow-hidden p-2">
          <Image
            src={getBrandLogo(brand.slug)}
            alt={brand.brand}
            width={72}
            height={72}
            className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="font-bold text-blue-dark text-xs sm:text-sm truncate">
          {brand.brand}
        </div>
        <div className="text-[10px] text-grey mt-0.5">{brand.sector}</div>
      </div>
    </Link>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28 bg-white overflow-hidden">
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
      </div>

      {/* Infinite Scroll Row 1 - scrolls left */}
      <div className="relative mb-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {/* Render brands twice for seamless loop */}
          {[...row1, ...row1].map((brand, i) => (
            <BrandItem key={`r1-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Infinite Scroll Row 2 - scrolls right */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-right hover:[animation-play-state:paused]">
          {/* Render brands twice for seamless loop */}
          {[...row2, ...row2].map((brand, i) => (
            <BrandItem key={`r2-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors group"
          >
            View All Products
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
