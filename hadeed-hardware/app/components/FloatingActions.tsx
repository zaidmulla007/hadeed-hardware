"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, X } from "lucide-react";

export default function FloatingActions() {
  const [showConsultation, setShowConsultation] = useState(false);

  // Make openConsultationModal available globally
  if (typeof window !== "undefined") {
    (window as unknown as Record<string, () => void>).openConsultationModal = () =>
      setShowConsultation(true);
  }

  return (
    <>
      {/* Free Consultation Vertical Banner - Desktop */}
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowConsultation(true)}
        className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-gradient-to-b from-blue to-blue-dark text-white py-4 px-1.5 rounded-l-lg shadow-lg cursor-pointer items-center"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="text-[10px] font-semibold tracking-wider">
          FREE CONSULTATION
        </span>
      </motion.button>

      {/* Mobile Consultation Banner */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setShowConsultation(true)}
        className="md:hidden fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-gradient-to-b from-blue to-blue-dark text-white py-4 px-2 rounded-l-lg shadow-lg"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="text-xs font-semibold tracking-wider">
          CONSULTATION
        </span>
      </motion.button>

      {/* Bottom Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3">
        {/* Call Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+97142590552"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-blue rounded-full flex items-center justify-center shadow-lg shadow-blue/30 hover:bg-blue-dark transition-colors"
          title="Call Us"
        >
          <Phone size={22} className="text-white" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/971555548152?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
          title="WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            width="26"
            height="26"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>

      {/* Consultation Modal */}
      {showConsultation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowConsultation(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowConsultation(false)}
              className="absolute top-4 right-4 p-1 text-grey hover:text-blue-dark transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Phone size={24} className="text-blue" />
              </div>
              <h3 className="text-xl font-bold text-blue-dark">
                Free Consultation
              </h3>
              <p className="text-grey text-sm mt-1">
                Tell us about your project and we&apos;ll help you find the right
                products.
              </p>
            </div>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setShowConsultation(false);
                import("sweetalert2").then(({ default: Swal }) => {
                  Swal.fire({
                    title: "Request Received!",
                    text: "Our team will contact you shortly for your free consultation.",
                    icon: "success",
                    confirmButtonColor: "#1B3A6B",
                  });
                });
              }}
            >
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent"
              />
              <select className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent">
                <option>Power Tools</option>
                <option>Hand Tools</option>
                <option>Safety Equipment</option>
                <option>Welding & Cutting</option>
                <option>Electrical & Measuring</option>
                <option>Industrial Chemicals</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your requirements..."
                rows={3}
                className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors"
              >
                Request Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
