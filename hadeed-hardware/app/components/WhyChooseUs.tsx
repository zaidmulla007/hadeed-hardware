"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  ShieldCheck,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Desire",
    desc: "Desire drives us to surpass expectations, innovate relentlessly, and deliver excellence in every aspect of our business, ensuring that our clients' needs are not just met but exceeded.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    desc: "Responsibility anchors us, guiding every decision and action as we ensure the ethical and sustainable delivery of our products and services, while contributing to the well-being of our communities.",
  },
  {
    icon: Users,
    title: "Relations",
    desc: "Relationships are the cornerstone of our success, as we prioritize understanding, trust, and collaboration with our clients, suppliers, and stakeholders, fostering enduring partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    desc: "Creativity fuels our journey, inspiring innovative solutions and pushing boundaries in everything we do — the spark that ignites new ideas and drives continuous improvement.",
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
            With over 32 years of market experience, we are driven by core
            values that set us apart in the hardware and industrial supply
            industry.
          </p>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Grid — 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
