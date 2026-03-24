"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "#0F2647" }}
        >
          {/* Radial glow behind center */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden
          >
            <div
              className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(74,144,217,0.18) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] md:w-[440px] md:h-[440px] rounded-full"
              style={{ border: "1px solid rgba(74,144,217,0.3)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[580px] md:h-[580px] rounded-full"
              style={{ border: "1px solid rgba(74,144,217,0.15)" }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] md:w-[720px] md:h-[720px] rounded-full"
              style={{ border: "1px solid rgba(74,144,217,0.07)" }}
            />
          </div>

          {/* Floating particles */}
          {Array.from({ length: 22 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? 3 : 2,
                height: i % 3 === 0 ? 3 : 2,
                background: "#4A90D9",
              }}
              initial={{
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                opacity: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="mb-7 w-[72px] h-[72px] md:w-20 md:h-20 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "#4A90D9",
                borderRightColor: "#4A90D9",
              }}
            />

            {/* Hadeed logo image */}
            <motion.img
              src="/hadeed-logo.jpg"
              alt="Hadeed Logo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-14 md:h-16 w-auto object-contain mb-4"
              style={{ filter: "brightness(1.1)" }}
            />

            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-3 flex items-center justify-center gap-3"
            >
              {/* Diamond icon */}
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <polygon
                  points="18,2 34,18 18,34 2,18"
                  fill="none"
                  stroke="#4A90D9"
                  strokeWidth="2.5"
                />
                <polygon
                  points="18,8 28,18 18,28 8,18"
                  fill="rgba(74,144,217,0.2)"
                  stroke="#4A90D9"
                  strokeWidth="1.5"
                />
              </svg>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold tracking-widest"
                style={{ color: "#4A90D9" }}
              >
                HADEED
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs md:text-sm tracking-[0.25em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Hardware &amp; Tools Trading LLC
            </motion.p>

            {/* Progress bar */}
            <div
              className="w-44 md:w-60 h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #1B3A6B, #4A90D9, #2E5090)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
