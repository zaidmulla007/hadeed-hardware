"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaXTwitter, FaTiktok } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Why Choose Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "Power Tools", href: "/category/power-tools" },
  { name: "Hand Tools", href: "/category/hand-tools" },
  { name: "Safety Equipment", href: "/category/safety-equipment" },
  { name: "Welding & Cutting", href: "/category/welding-cutting" },
  { name: "Electrical & Measuring", href: "/category/electrical-measuring" },
  { name: "Industrial Chemicals", href: "/category/industrial-chemicals" },
];

const brandHighlights = [
  "TOTAL Tools",
  "DeWalt",
  "Stanley",
  "3M",
  "ESAB",
  "Fluke",
  "Honeywell",
  "Norton",
];

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white relative overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-accent via-blue to-blue-accent" />

      {/* Decorative blurs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/hadeed-logo.jpg"
                alt="Hadeed Hardware Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
              <div>
                <span className="text-white/50 text-[8px] md:text-[9px] leading-tight block">
                  حديد للأدوات والمعدات التجارية ذ.م.م
                </span>
                <span className="font-extrabold text-3xl block leading-tight">
                  HADEED
                </span>
                <span className="text-white/50 text-[7px] md:text-[8px] leading-tight block">
                  HARDWARE & TOOLS TRDG LLC
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Established in 2012, we specialize in supplying hardware, building
              materials, machine tools, safety items, and welding equipment for
              construction, oilfield services, and manufacturing industries.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+97142590552"
                className="flex items-center gap-2 text-white/70 hover:text-blue-accent transition-colors"
              >
                <Phone size={14} /> +971 4 2590552
              </a>
              <a
                href="mailto:info@hadeeddubai.ae"
                className="flex items-center gap-2 text-white/70 hover:text-blue-accent transition-colors"
              >
                <Mail size={14} /> info@hadeeddubai.ae
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>
                  P.O.Box: 172290, Nakheel Road
                  <br />
                  Deira, Dubai - U.A.E.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-blue-accent hover:text-white transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-blue-accent hover:text-white transition-all">
                <FaYoutube size={14} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-blue-accent hover:text-white transition-all">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-blue-accent hover:text-white transition-all">
                <FaXTwitter size={14} />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-blue-accent hover:text-white transition-all">
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/60 hover:text-blue-accent transition-colors text-sm"
                >
                  <span className="w-0 h-0.5 bg-blue-accent group-hover:w-3 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <div className="space-y-2">
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/60 hover:text-blue-accent transition-colors text-sm"
                >
                  <span className="w-0 h-0.5 bg-blue-accent group-hover:w-3 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-lg mb-4">Top Brands</h4>
            <div className="flex flex-wrap gap-2">
              {brandHighlights.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 hover:border-blue-accent/50 hover:text-blue-accent transition-all cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-2 text-white/80">
                Managing Director &amp; CEO
              </h5>
              <p className="text-white/50 text-sm">Aliasgher Abid</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Hadeed Hardware & Tools Trading
            LLC. All rights reserved. Powered by{" "}
            <a
              href="https://zetacoding.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent hover:text-white transition-colors"
            >
              ZetaCoding
            </a>
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
