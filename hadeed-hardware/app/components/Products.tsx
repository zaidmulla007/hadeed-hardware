"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Drill,
  Wrench,
  HardHat,
  Flame,
  Gauge,
  FlaskConical,
} from "lucide-react";

const products = [
  {
    icon: Drill,
    title: "Power Tools",
    href: "/category/power-tools",
    description:
      "High-performance power tools for construction and industrial applications.",
    items: [
      "Drilling Machines",
      "Angle Grinders",
      "Impact Drivers",
      "Circular Saws",
      "Cutting Machines",
    ],
    image:
      "/products/DEWALT/Drills%20%26%20Drivers/Cordless%20Drills/PNG%20(1).jpg",
    color: "from-blue to-blue-dark",
  },
  {
    icon: Wrench,
    title: "Hand Tools",
    href: "/category/hand-tools",
    description:
      "Reliable hand tools designed for precision and durability in every job.",
    items: [
      "Screwdrivers",
      "Hammers",
      "Wrenches",
      "Pliers",
      "Measuring Tools",
    ],
    image:
      "/products/MAKITA/Drills%20%26%20Drivers/Cordless%20Drills/png%20(1).jpg",
    color: "from-grey-dark to-blue-dark",
  },
  {
    icon: HardHat,
    title: "Safety Equipment",
    href: "/category/safety-equipment",
    description:
      "Professional personal protective equipment for workplace safety.",
    items: [
      "Safety Helmets",
      "Safety Gloves",
      "Safety Shoes",
      "Reflective Jackets",
      "Protective Goggles",
    ],
    image:
      "/products/DELTAPLUS/Head%20Protection/Safety%20Helmets/PNG%20(1).jpg",
    color: "from-blue-accent to-blue",
  },
  {
    icon: Flame,
    title: "Welding & Cutting",
    href: "/category/welding-cutting",
    description:
      "Complete welding and gas cutting solutions for fabrication works.",
    items: [
      "Welding Electrodes",
      "Welding Machines",
      "Gas Regulators",
      "Cutting Torches",
    ],
    image:
      "/products/ESAB/Welding%20Machines/MIGMAG%20Welders/PNG%20(1).jpg",
    color: "from-blue-dark to-grey-dark",
  },
  {
    icon: Gauge,
    title: "Electrical & Measuring",
    href: "/category/electrical-measuring",
    description:
      "Accurate testing and measuring equipment for technicians and engineers.",
    items: [
      "Digital Multimeters",
      "Clamp Meters",
      "Voltage Testers",
      "Infrared Thermometers",
    ],
    image:
      "/products/FLUKE/Electrical%20Testing/Digital%20Multimeters/PNG%20(1).jpg",
    color: "from-blue to-blue-accent",
  },
  {
    icon: FlaskConical,
    title: "Industrial Chemicals",
    href: "/category/industrial-chemicals",
    description:
      "Essential products for cleaning, lubrication, and maintenance.",
    items: [
      "Contact Cleaners",
      "Lubricant Sprays",
      "Rust Protection",
      "Degreasers",
    ],
    image:
      "/products/CRC/Maintenance%20Sprays/Multi-Purpose%20Lubricants/PNG.jpg",
    color: "from-grey-dark to-blue",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-10 md:py-14 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-dark">
            Our Products
          </h2>
          <p className="mt-4 text-grey max-w-2xl mx-auto">
            We supply a complete range of professional hardware and industrial
            products for construction, engineering, fabrication, and facility
            management projects.
          </p>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link key={i} href={product.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue/10 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-grey-light flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-70`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-blue-dark mb-2 group-hover:text-blue transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-grey text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.items.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 bg-grey-light text-grey-dark rounded-full border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
