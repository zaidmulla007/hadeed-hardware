"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1920&q=80",
    title: "Your Trusted Partner",
    subtitle: "For Hardware & Industrial Solutions",
    description:
      "Quality tools, safety equipment, and building materials from globally recognized brands.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1920&q=80",
    title: "Professional Tools",
    subtitle: "From World-Leading Brands",
    description:
      "Makita, DeWalt, Stanley, ESAB, Fluke, 3M — 20+ premium brands under one roof.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    title: "Safety First",
    subtitle: "Complete PPE & Safety Solutions",
    description:
      "Helmets, gloves, goggles, harnesses — everything to keep your workforce safe.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-accent/20 border border-blue-accent/40 rounded-full mb-4 sm:mb-6"
              >
                <div className="w-2 h-2 bg-blue-accent rounded-full animate-pulse" />
                <span className="text-blue-accent text-sm font-medium">
                  Hadeed Hardware & Tools Trading LLC
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                {slides[current].title}
                <span className="block text-blue-accent">
                  {slides[current].subtitle}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-lg"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-blue transition-colors group text-sm sm:text-base"
                >
                  Explore Products
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-blue-accent"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </section>
  );
}
