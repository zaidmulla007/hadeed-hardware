"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PackageCheck,
  Globe,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: PackageCheck,
    title: "Wide Range of Products",
    desc: "From power tools to safety gear, welding equipment to industrial chemicals — everything under one roof.",
  },
  {
    icon: Globe,
    title: "Trusted International Brands",
    desc: "We partner with 20+ globally recognized brands including Makita, DeWalt, 3M, Fluke, ESAB & more.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Prices",
    desc: "Get the best value with our competitive pricing without compromising on product quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-gradient-to-br from-blue-dark via-blue to-blue-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            Our Advantages
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why Choose Hadeed Hardware
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            At Hadeed Hardware & Tools Trading LLC, we focus on delivering
            quality products and dependable service to support your projects.
          </p>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Grid — 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-accent/30 transition-colors">
                  <Icon size={28} className="text-blue-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all duration-300 group"
          >
            Learn More
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
