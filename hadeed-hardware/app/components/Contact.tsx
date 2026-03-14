"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  MessageSquare,
} from "lucide-react";

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

export default function Contact() {
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

    // Simulate submission
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
    <section id="contact" className="py-20 md:py-28 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-dark">
            Contact Us
          </h2>
          <p className="mt-4 text-grey max-w-2xl mx-auto">
            For product inquiries, quotations, or bulk supply requirements,
            please contact our team. We are always ready to assist you.
          </p>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        {/* Form + Info Cards — One Row, Two Columns */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full">
              <h3 className="text-xl font-bold text-blue-dark mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 bg-grey-light border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors resize-none"
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

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-center"
                  >
                    <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center mb-3">
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
          </motion.div>
        </div>

        {/* Google Map — Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d55.312404!3d25.2740527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433e571998dd%3A0x28c2424f1bc4e945!2sHadeed%20Hardware%20%26%20Tools%20Trdg%20LLC!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
              width="100%"
              height="250"
              className="w-full sm:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hadeed Hardware Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
