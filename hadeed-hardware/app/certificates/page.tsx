"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Download, ExternalLink, Award } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const certificates = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Hadeed Hardware & Tools Trading L.L.C is certified under ISO 9001:2015, demonstrating our commitment to consistent quality management and customer satisfaction across all operations.",
    file: "/certificates/iso-9001-2015.pdf",
  },
];

export default function CertificatesPage() {
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
              <span className="text-white">Certificates</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Certificates
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Quality certifications that reflect our commitment to excellence
              and international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                  {/* PDF Preview */}
                  <div className="bg-gray-100 p-6 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                    <iframe
                      src={`${cert.file}#toolbar=0&navpanes=0`}
                      className="w-full h-[380px] md:h-[480px] rounded-lg border border-gray-200 bg-white"
                      title={cert.title}
                    />
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
                        <Award className="text-blue" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-blue-dark">
                          {cert.title}
                        </h2>
                        <p className="text-sm text-grey">{cert.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-grey-dark leading-relaxed mb-8">
                      {cert.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors"
                      >
                        <ExternalLink size={18} />
                        View Full PDF
                      </a>
                      <a
                        href={cert.file}
                        download
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue text-blue font-semibold rounded-xl hover:bg-blue hover:text-white transition-colors"
                      >
                        <Download size={18} />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
