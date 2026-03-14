"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  PackageCheck,
  Globe,
  BadgeDollarSign,
  Zap,
  BrainCircuit,
  CheckCircle2,
  Truck,
  Headphones,
  ShieldCheck,
  Users,
  Award,
  Target,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const reasons = [
  {
    icon: PackageCheck,
    title: "Wide Range of Products",
    desc: "From power tools to safety gear, welding equipment to industrial chemicals — everything under one roof.",
    detail: "We maintain an extensive inventory covering 6 major sectors: power tools, safety equipment, welding supplies, industrial chemicals, testing instruments, and abrasives. This means fewer suppliers and simplified procurement for your projects.",
  },
  {
    icon: Globe,
    title: "Trusted International Brands",
    desc: "We partner with 20+ globally recognized brands including Makita, DeWalt, 3M, Fluke, ESAB & more.",
    detail: "Our brand portfolio spans TOTAL Tools, Makita, DeWalt, Stanley, 3M, Norton, DeltaPlus, Fluke, UNI-T, ESAB, Victor, Honeywell, and many more — ensuring you get genuine, certified products every time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Prices",
    desc: "Get the best value with our competitive pricing without compromising on product quality.",
    detail: "As authorized distributors for multiple brands, we offer direct-from-manufacturer pricing. Our bulk supply capabilities and long-standing supplier relationships allow us to pass on significant savings to our customers.",
  },
  {
    icon: Zap,
    title: "Fast Availability",
    desc: "Extensive inventory management ensures fast availability and reliable supply for urgent requirements.",
    detail: "Our warehouse in Deira, Dubai is stocked with thousands of products ready for immediate dispatch. We understand the urgency of construction and industrial projects, so we prioritize rapid fulfillment.",
  },
  {
    icon: BrainCircuit,
    title: "Industry Expertise",
    desc: "Years of experience in hardware and building materials industry to guide you to the right solutions.",
    detail: "With 15+ years serving contractors, engineers, and maintenance teams across the UAE, our team has deep product knowledge to recommend the right tools and materials for your specific applications.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Every product we supply meets international quality standards for performance and durability.",
    detail: "We only stock products that meet international standards including ISO, CE, ANSI, and EN certifications. Every item is sourced through authorized channels to guarantee authenticity and warranty coverage.",
  },
];

const achievements = [
  { num: "15+", label: "Years of Experience" },
  { num: "20+", label: "Global Brands" },
  { num: "1000+", label: "Products Available" },
  { num: "500+", label: "Satisfied Clients" },
];

const commitments = [
  {
    icon: Award,
    title: "Genuine Products",
    desc: "100% authentic products sourced directly from manufacturers and authorized distributors.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "Well-managed logistics ensuring consistent product availability and timely deliveries.",
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Support",
    desc: "Comprehensive warranty support and product replacement for all brands we carry.",
  },
  {
    icon: Users,
    title: "Dedicated Account Teams",
    desc: "Assigned account managers for corporate clients to handle recurring orders efficiently.",
  },
  {
    icon: Headphones,
    title: "Technical Consultation",
    desc: "Expert guidance to help you select the right products for your specific project requirements.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    desc: "Ability to source specialized products and create custom supply packages for large projects.",
  },
];

export default function WhyUsPage() {
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
              <span className="text-white">Why Choose Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Why Choose Hadeed Hardware
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Discover what makes us the preferred hardware and industrial
              supply partner for businesses across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 sm:gap-12 flex-wrap"
          >
            {achievements.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-accent">
                  {s.num}
                </div>
                <div className="text-sm text-grey mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Advantages — Detailed */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Our Advantages
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-dark">
              What Sets Us Apart
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-blue/5 transition-all h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-dark mb-2">
                    {r.title}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed mb-3">
                    {r.desc}
                  </p>
                  <p className="text-grey text-xs leading-relaxed mt-auto">
                    {r.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-dark via-blue to-blue-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Our Promise
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Our Commitments to You
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-accent/30 transition-colors">
                    <Icon size={28} className="text-blue-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Who We Serve
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark">
              Industries We Support
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Construction Companies",
              "Engineering Firms",
              "Fabrication Workshops",
              "Maintenance Teams",
              "Oil & Gas Industry",
              "Government Projects",
              "Facility Management",
              "Retail Hardware Stores",
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-grey-light rounded-xl px-5 py-4 border border-gray-100"
              >
                <CheckCircle2 size={18} className="text-blue-accent shrink-0" />
                <span className="text-sm text-grey-dark font-medium">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 mb-7 bg-gradient-to-br from-blue-dark via-blue to-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Experience the Hadeed Hardware difference. Contact us today for
              product inquiries, quotations, or bulk supply requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Browse Products
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
