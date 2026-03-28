"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
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
            <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] max-w-[400px] mx-auto">
              <img
                src="/about.jpeg"
                alt="About Hadeed Hardware"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-blue-dark/20" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-blue">32+</div>
                <div className="text-sm text-grey">Years of Market Experience</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-dark mb-4">
              Trusted Supplier of Hardware & Building Materials
            </h3>
            <p className="text-grey leading-relaxed mb-4 text-justify">
              Established in 2012 in the Emirate of Dubai, Hadeed Hardware &
              Tools Trading LLC was founded by seasoned professionals with over
              32 years of market experience. We specialize in supplying
              hardware, building materials, machine tools, power tools, hand
              tools, safety items, and welding equipment for the construction,
              oilfield services, and manufacturing industries.
            </p>
            <p className="text-grey leading-relaxed mb-6 text-justify">
              Driven by a passion for excellence and a commitment to customer
              satisfaction, we have forged strong partnerships with clients
              across the region, ensuring efficient delivery and competitive
              pricing while prioritizing long-term client relationships.
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
