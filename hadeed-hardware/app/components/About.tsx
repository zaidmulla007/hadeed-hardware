"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-dark">
            About Hadeed Hardware
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="relative rounded-2xl overflow-hidden h-[250px] sm:h-[320px] md:h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebb6355?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-blue-dark/20" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-blue">15+</div>
                <div className="text-sm text-grey">Years of Experience</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-dark mb-4">
              Trusted Supplier of Hardware & Building Materials
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Hadeed Hardware & Tools Trading LLC is a trusted supplier of
              hardware, industrial tools, safety equipment, and building
              materials based in Dubai, United Arab Emirates. Strategically
              located on Nakheel Road in Deira, we serve contractors,
              construction companies, maintenance teams, and industrial clients
              across the UAE.
            </p>
            <p className="text-grey leading-relaxed mb-6">
              With years of experience, we have built a strong reputation for
              quality products, competitive pricing, and reliable customer
              service from 20+ globally recognized brands.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors group"
            >
              Explore More
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
