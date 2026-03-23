"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/banners/PNG%20(1).jpg",
    title: "Your Trusted Partner",
    subtitle: "For Hardware & Industrial Solutions",
    description:
      "Supplying hardware, building materials, machine tools, safety items, and welding equipment with competitive pricing since 2012.",
  },
  {
    image: "/banners/PNG%20(2).jpg",
    title: "Professional Tools",
    subtitle: "From World-Leading Brands",
    description:
      "Makita, DeWalt, Stanley, ESAB, Fluke, 3M — 20+ premium brands under one roof.",
  },
  {
    image: "/banners/PNG%20(3).jpg",
    title: "Safety First",
    subtitle: "Complete PPE & Safety Solutions",
    description:
      "Helmets, gloves, goggles, harnesses — everything to keep your workforce safe.",
  },
  {
    image: "/banners/PNG%20(4).jpg",
    title: "Welding & Cutting",
    subtitle: "Industrial-Grade Equipment",
    description:
      "ESAB, Victor, Haswel — complete welding machines, consumables, and gas cutting solutions.",
  },
  {
    image: "/banners/PNG%20(5).jpg",
    title: "Testing & Measuring",
    subtitle: "Precision Instruments You Can Trust",
    description:
      "Fluke, UNI-T, BW Technologies — multimeters, thermal cameras, and gas detectors for professionals.",
  },
  {
    image: "/banners/PNG%20(6).jpg",
    title: "Industrial Chemicals",
    subtitle: "Maintenance & Protection Products",
    description:
      "CRC, Ambersil, Weicon — lubricants, cleaners, adhesives, and sealants for every application.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[85vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/90 via-blue-dark/70 to-blue-dark/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl ml-0 sm:ml-8 md:ml-16 lg:ml-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-blue-accent/20 backdrop-blur-sm border border-blue-accent/40 rounded-full text-blue-accent font-semibold text-sm tracking-wider">
                  Hadeed Hardware & Tools Trading LLC
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              >
                {slides[current].title}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-accent mb-8"
              >
                {slides[current].subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <a
                  href="#products"
                  className="px-8 py-4 bg-blue-accent hover:bg-blue text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-accent/30 text-center"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Left & Right */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-blue-accent/20 hover:bg-blue-accent backdrop-blur-sm border border-blue-accent rounded-full items-center justify-center text-white hover:text-white transition-all duration-300 group"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-blue-accent/20 hover:bg-blue-accent backdrop-blur-sm border border-blue-accent rounded-full items-center justify-center text-white hover:text-white transition-all duration-300 group"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "w-10 bg-blue-accent"
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
