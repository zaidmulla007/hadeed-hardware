"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const capabilities = [
  {
    icon: Award,
    title: "Desire",
    desc: "Desire drives us to surpass expectations, innovate relentlessly, and deliver excellence in every aspect of our business, ensuring that our clients' needs are not just met but exceeded.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    desc: "Responsibility anchors us, guiding every decision and action as we ensure the ethical and sustainable delivery of our products and services, while actively contributing to the well-being of our communities and the environment.",
  },
  {
    icon: Users,
    title: "Relations",
    desc: "Relationships are the cornerstone of our success, as we prioritize understanding, trust, and collaboration with our clients, suppliers, and stakeholders, fostering enduring partnerships built on transparency, integrity, and mutual respect.",
  },
  {
    icon: Building2,
    title: "Creative",
    desc: "Creativity fuels our journey, inspiring innovative solutions and pushing boundaries in everything we do. It's the spark that ignites new ideas, drives continuous improvement, and keeps us at the forefront of our industry.",
  },
];

const productPortfolio = [
  "Power tools & accessories (DeWalt, Stanley, Hikoki)",
  "Abrasives — cutting, grinding & flap wheels (3M, Rasta, Tyrolit)",
  "Hand tools — measuring tapes, pliers, files, cutting tools (Stanley, Mitutoyo, Nicholson, Starett)",
  "Welding equipment — torches, rods, MIG wire (Victor, Kiswel, ESAB)",
  "Safety items — helmets, harnesses, gloves, goggles (3M, Delta Plus, Ansell, Focus-Holland)",
  "Measuring units — multimeters, clamp meters, distance meters (Uni-T, Fluke)",
  "Aerosol & industrial chemicals (Weicon, Ambersil, 3M)",
  "Fasteners — bolts, nuts, screws, rivets (Fischer)",
  "Packaging materials — stretch film, tarpaulin, bubble wrap",
  "Plumbing & HVAC tools (Rothenberger)",
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
              Established in 2012 with over 32 years of market experience,
              supplying hardware, building materials, and industrial tools in
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
                  className="absolute inset-0 bg-grey-light"
                />
                <div className="absolute inset-0 bg-blue-dark/20" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue">32+</div>
                  <div className="text-xs sm:text-sm text-grey">Years of Market Experience</div>
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
                A Brief Story About The Company
              </h2>
              <p className="text-grey leading-relaxed mb-4 text-justify">
                In 2012, amidst the bustling metropolis of the Emirate of Dubai,
                a group of seasoned professionals with over 32 years of market
                experience embarked on a journey to establish a company unlike
                any other. Their vision was simple yet ambitious: to become the
                leading supplier of hardware, building materials, machine tools,
                structural steel, pipe fittings, sanitary, electrical, and
                consumables for the construction, oilfield services, and
                manufacturing industries.
              </p>
              <p className="text-grey leading-relaxed mb-4 text-justify">
                Driven by a passion for excellence and a commitment to customer
                satisfaction, the company quickly gained traction, forging strong
                partnerships with clients across the region. With each passing
                year, their reputation for reliability, efficiency, and
                competitive pricing grew, propelling them towards greater heights
                of success.
              </p>
              <p className="text-grey leading-relaxed mb-4 text-justify">
                Today, that once-small venture stands as a towering testament to
                the power of dedication, perseverance, and a steadfast commitment
                to quality. With a vast and esteemed client base, the company
                continues to thrive, its story a shining example of what can be
                achieved when passion meets purpose.
              </p>
              <p className="text-grey leading-relaxed text-justify">
                Under the leadership of{" "}
                <strong className="text-blue-dark">Aliasgher Abid</strong>,
                Managing Director &amp; CEO, the company continues to expand its
                product range and strengthen relationships with suppliers and
                customers throughout the region.
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
              className="text-grey leading-relaxed text-justify mb-10"
            >
              Step into a world of boundless possibilities with our extensive
              array of products, meticulously curated to cater to every facet
              of your project needs. Our knowledgeable team stands ready to
              assist you, offering expert guidance to help you navigate through
              our offerings and find the perfect tools for your projects.
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
                <p className="text-white/80 leading-relaxed text-justify">
                  To build the future, one material at a time, by delivering
                  excellence in hardware, building materials, and more for
                  construction, oilfield services, and manufacturing. We&apos;re
                  dedicated to surpassing expectations, forging lasting
                  partnerships, and making progress with every supply we provide.
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
                <p className="text-white/85 leading-relaxed text-justify">
                  To be the top supplier of quality materials for construction,
                  oilfield services, and manufacturing, surpassing expectations
                  through innovation and customer-centric solutions while
                  fostering sustainable growth and community impact.
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
              Key Factors
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark">
              What Drives Us
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
                  <p className="text-grey text-sm leading-relaxed text-justify">
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
                Aliasgher Abid
              </h4>
              <p className="text-blue-accent text-sm font-medium mb-3">
                Managing Director &amp; CEO
              </p>
              <p className="text-grey text-sm leading-relaxed text-justify">
                Under the leadership of Aliasgher Abid, Hadeed Hardware &
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
