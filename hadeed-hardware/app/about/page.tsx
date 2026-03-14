"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Target,
  Eye,
  Award,
  Truck,
  ShieldCheck,
  Users,
  Headphones,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const capabilities = [
  {
    icon: Award,
    title: "Quality Products",
    desc: "We supply products from globally recognized brands ensuring top-notch quality for every project.",
  },
  {
    icon: Truck,
    title: "Fast Availability",
    desc: "With extensive inventory management, we ensure fast availability and reliable supply chains.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brands",
    desc: "20+ international brands including Makita, DeWalt, 3M, Fluke, ESAB, Stanley and more.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced professionals who understand the hardware and industrial supply industry inside out.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "We provide technical support to help you choose the right products for your specific needs.",
  },
  {
    icon: Building2,
    title: "Complete Solutions",
    desc: "From power tools to safety equipment — we deliver complete hardware solutions under one roof.",
  },
];

const productPortfolio = [
  "Power tools, hand tools, and tool sets",
  "Abrasives, grinding wheels, and cutting discs",
  "Welding machines, electrodes, and consumables",
  "Safety helmets, gloves, goggles, and harnesses",
  "Electrical testing and measuring instruments",
  "Industrial chemicals, lubricants, and degreasers",
  "Gas detection and calibration equipment",
  "Pipe tools, press fitting, and drain cleaning",
];

export default function AboutPage() {
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
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              About Hadeed Hardware
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Your trusted partner for hardware, tools & building materials in
              Dubai, United Arab Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[350px] md:h-[450px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebb6355?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-blue-dark/20" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue">15+</div>
                  <div className="text-xs sm:text-sm text-grey">Years of Experience</div>
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue">20+</div>
                  <div className="text-xs sm:text-sm text-grey">Global Brands</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark mb-6">
                Trusted Supplier of Hardware & Building Materials
              </h2>
              <p className="text-grey leading-relaxed mb-4">
                Hadeed Hardware & Tools Trading LLC is a trusted supplier of
                hardware, industrial tools, safety equipment, and building
                materials based in Dubai, United Arab Emirates. Strategically
                located on Nakheel Road in Deira, the company serves
                contractors, construction companies, maintenance teams, and
                industrial clients across the UAE.
              </p>
              <p className="text-grey leading-relaxed mb-4">
                With years of experience in the hardware and building materials
                industry, Hadeed Hardware & Tools Trading LLC has built a strong
                reputation for quality products, competitive pricing, and
                reliable customer service. The company supplies a wide range of
                professional tools, safety gear, welding equipment, electrical
                instruments, and industrial consumables from globally recognized
                brands.
              </p>
              <p className="text-grey leading-relaxed mb-4">
                At Hadeed Hardware, we are committed to providing complete
                hardware solutions by ensuring product quality, fast
                availability, and technical support for our customers. Our goal
                is to become a reliable partner for businesses looking for
                durable tools and dependable industrial supplies.
              </p>
              <p className="text-grey leading-relaxed">
                Under the leadership of{" "}
                <strong className="text-blue-dark">Ali Asgher Abid</strong>,
                Managing Director, the company continues to expand its product
                range and strengthen relationships with suppliers and customers
                throughout the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              What We Supply
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark">
              Our Product Portfolio
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-grey leading-relaxed text-center mb-10"
            >
              Our product portfolio includes power tools, hand tools, abrasives,
              welding materials, safety wear, electrical testing equipment,
              industrial chemicals, and maintenance supplies used in
              construction, engineering, fabrication, and facility management
              projects.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3">
              {productPortfolio.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
                >
                  <CheckCircle2 size={18} className="text-blue-accent shrink-0" />
                  <span className="text-sm text-grey-dark">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-dark to-blue rounded-3xl p-8 md:p-10 text-white h-full">
                <Target size={40} className="mb-5 text-blue-accent" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To deliver high-quality hardware, tools, and safety products
                  while maintaining strong customer relationships through
                  reliable service and competitive pricing. We aim to be a
                  reliable partner for businesses looking for durable tools and
                  dependable industrial supplies.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue to-blue-accent rounded-3xl p-8 md:p-10 text-white h-full">
                <Eye size={40} className="mb-5 text-white" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/85 leading-relaxed">
                  To become one of the leading hardware and industrial supply
                  companies in the UAE by providing trusted brands and complete
                  hardware solutions. We aspire to set the benchmark for
                  quality, reliability, and customer satisfaction in the
                  hardware and building materials industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Our Strengths
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark">
              Why Businesses Trust Us
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-blue/5 transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue" />
                  </div>
                  <h4 className="font-bold text-blue-dark mb-2">{cap.title}</h4>
                  <p className="text-grey text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark mb-6">
              Our Management
            </h2>
            <div className="bg-grey-light rounded-2xl p-6 border border-gray-100">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">AA</span>
              </div>
              <h4 className="text-lg font-bold text-blue-dark">
                Ali Asgher Abid
              </h4>
              <p className="text-blue-accent text-sm font-medium mb-3">
                Managing Director
              </p>
              <p className="text-grey text-sm leading-relaxed">
                Under the leadership of Ali Asgher Abid, Hadeed Hardware &
                Tools Trading LLC continues to expand its product range and
                strengthen relationships with suppliers and customers
                throughout the region. His vision and industry expertise drive
                the company&apos;s commitment to quality and customer
                satisfaction.
              </p>
            </div>
          </motion.div>
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
              Contact us today for product inquiries, quotations, or bulk supply
              requirements. We are always ready to assist you.
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
