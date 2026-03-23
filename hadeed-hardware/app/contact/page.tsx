"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+971 4 2590552", "+971 4 2590553"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    lines: ["055-5548152", "052-1396242"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@hadeeddubai.ae", "sales@hadeeddubai.ae"],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["P.O.Box: 172290, Nakheel Road", "Deira, Dubai - U.A.E."],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Sat\u2013Thu: 8:00 AM \u2013 7:00 PM", "Friday: Closed"],
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["hadeedhardware.com"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    const { default: Swal } = await import("sweetalert2");
    Swal.fire({
      title: "Thank You!",
      text: "We have received your inquiry. Our team will get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#1B3A6B",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
    setIsSubmitting(false);
  };

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
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              For product inquiries, quotations, or bulk supply requirements,
              please contact our team. We are always ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-grey-light rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Icon size={20} className="text-blue" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-dark mb-1">
                    {info.title}
                  </h4>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-xs text-grey leading-relaxed">
                      {line}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-bold text-blue-dark mb-2">
                  Send Us a Message
                </h3>
                <p className="text-grey text-sm mb-6">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    />
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Product Quotation</option>
                      <option>Bulk Supply</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Your Message *"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors resize-none flex-1 min-h-[120px]"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map + Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Quick Contact Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-dark mb-4">
                  Quick Contact
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+97142590552"
                    className="flex items-center gap-3 px-4 py-3 bg-blue/5 rounded-xl hover:bg-blue/10 transition-colors"
                  >
                    <Phone size={18} className="text-blue" />
                    <div>
                      <div className="text-xs text-grey">Call Us</div>
                      <div className="text-sm font-semibold text-blue-dark">
                        +971 4 2590552
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/9710555548152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-green-500/5 rounded-xl hover:bg-green-500/10 transition-colors"
                  >
                    <MessageSquare size={18} className="text-green-600" />
                    <div>
                      <div className="text-xs text-grey">WhatsApp</div>
                      <div className="text-sm font-semibold text-blue-dark">
                        055-5548152
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@hadeeddubai.ae"
                    className="flex items-center gap-3 px-4 py-3 bg-blue/5 rounded-xl hover:bg-blue/10 transition-colors"
                  >
                    <Mail size={18} className="text-blue" />
                    <div>
                      <div className="text-xs text-grey">Email</div>
                      <div className="text-sm font-semibold text-blue-dark">
                        info@hadeeddubai.ae
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 px-4 py-3 bg-blue/5 rounded-xl">
                    <Clock size={18} className="text-blue" />
                    <div>
                      <div className="text-xs text-grey">Working Hours</div>
                      <div className="text-sm font-semibold text-blue-dark">
                        Sat-Thu: 8AM-7PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-1">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-blue-dark">
                    Our Location
                  </h3>
                  <p className="text-grey text-sm">
                    P.O.Box: 172290, Nakheel Road, Deira, Dubai - U.A.E.
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d55.312404!3d25.2740527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433e571998dd%3A0x28c2424f1bc4e945!2sHadeed%20Hardware%20%26%20Tools%20Trdg%20LLC!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hadeed Hardware Location"
                  className="w-full sm:h-[300px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
