"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { brands } from "@/app/data/products";

const navLinks = [
  { name: "Home", href: "/", match: "/" },
  { name: "About", href: "/about", match: "/about" },
  { name: "Products", href: "/products", hasDropdown: true, match: "/products" },
  { name: "Brands", href: "/brands", match: "/brands" },
  { name: "Why Us", href: "/why-us", match: "/why-us" },
  { name: "Certificates", href: "/certificates", match: "/certificates" },
  { name: "Gallery", href: "/gallery", match: "/gallery" },
  { name: "Blog", href: "/blog", match: "/blog" },
  { name: "Contact", href: "/contact", match: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-blue-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Phone size={14} className="shrink-0" />
            <a href="tel:+97155548152" className="hover:text-blue-accent transition-colors">+971 55 548 152</a>
            <span className="text-white/30">|</span>
            <a href="tel:+971521396242" className="hover:text-blue-accent transition-colors">+971 52 139 6242</a>
            <span className="text-white/30">|</span>
            <a href="tel:+97142590552" className="hover:text-blue-accent transition-colors">+971 4 259 0552</a>
            <span className="text-white/30 ml-2">|</span>
            <Mail size={14} className="shrink-0 ml-2" />
            <a href="mailto:sales@hadeeddubai.ae" className="hover:text-blue-accent transition-colors">sales@hadeeddubai.ae</a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@hadeeddubai.ae" className="hover:text-blue-accent transition-colors">info@hadeeddubai.ae</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-colors">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-colors">
              <FaYoutube size={16} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-colors">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-colors">
              <FaXTwitter size={16} />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-colors">
              <FaTiktok size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg shadow-black/5"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/hadeed-logo.jpg"
                alt="Hadeed Hardware Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
              <div>
                <span className="text-blue text-md md:text-2xl font-bold leading-tight block" dir="rtl">
                  حديد لتجارة عددو أدوات البناء ش.ذ.م.م
                </span>
                <span className="text-blue leading-tight block tracking-wide">
                  <span className="font-extrabold text-sm md:text-base">HADEED HARDWARE & TOOLS </span>
                  <span className="font-semibold text-[10px] md:text-xs">TRDG LLC</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.match === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.match!);
              return link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors group ${
                      isActive ? "text-blue" : "text-grey-dark hover:text-blue"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} />
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-accent rounded-full transition-all duration-300 ${
                      isActive ? "w-6" : "w-0 group-hover:w-6"
                    }`} />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-96 overflow-y-auto"
                      >
                        <Link
                          href="/products"
                          className="block px-4 py-2 text-sm font-semibold text-blue hover:bg-grey-light transition-colors"
                        >
                          All Products
                        </Link>
                        <div className="h-px bg-gray-100 my-1" />
                        {brands.map((brand) => (
                          <div key={brand.slug} className="group/item relative">
                            <Link
                              href={`/products/${brand.slug}`}
                              className="flex items-center justify-between px-4 py-2 text-sm text-grey-dark hover:text-blue hover:bg-grey-light transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 bg-blue/10 rounded text-[9px] font-bold text-blue flex items-center justify-center">
                                  {brand.abbr}
                                </span>
                                {brand.name}
                              </div>
                              <ChevronRight size={12} className="text-grey" />
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    isActive ? "text-blue" : "text-grey-dark hover:text-blue"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-accent rounded-full transition-all duration-300 ${
                    isActive ? "w-6" : "w-0 group-hover:w-6"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-blue"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => {
                  const isMobileActive =
                    link.match === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.match!);
                  return link.hasDropdown ? (
                    <div key={link.name}>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className={`flex items-center justify-between w-full px-4 py-3 hover:bg-grey-light rounded-lg transition-colors font-medium ${
                          isMobileActive ? "text-blue bg-grey-light" : "text-grey-dark hover:text-blue"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 space-y-0.5 py-1">
                              <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm text-blue font-semibold rounded-md"
                              >
                                All Products
                              </Link>
                              {brands.map((brand) => (
                                <Link
                                  key={brand.slug}
                                  href={`/products/${brand.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-grey hover:text-blue hover:bg-grey-light rounded-md transition-colors"
                                >
                                  <span className="w-5 h-5 bg-blue/10 rounded text-[8px] font-bold text-blue flex items-center justify-center">
                                    {brand.abbr}
                                  </span>
                                  {brand.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 hover:bg-grey-light rounded-lg transition-colors font-medium ${
                          isMobileActive ? "text-blue bg-grey-light" : "text-grey-dark hover:text-blue"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="px-4 pt-4 pb-2 space-y-2 text-sm text-grey border-t border-gray-100 mt-2">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="shrink-0 text-blue" />
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a href="tel:+97155548152" className="hover:text-blue transition-colors">+971 55 548 152</a>
                      <a href="tel:+971521396242" className="hover:text-blue transition-colors">+971 52 139 6242</a>
                      <a href="tel:+97142590552" className="hover:text-blue transition-colors">+971 4 259 0552</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="shrink-0 text-blue" />
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a href="mailto:sales@hadeeddubai.ae" className="hover:text-blue transition-colors">sales@hadeeddubai.ae</a>
                      <a href="mailto:info@hadeeddubai.ae" className="hover:text-blue transition-colors">info@hadeeddubai.ae</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-blue transition-colors"><FaFacebookF size={16} /></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-blue transition-colors"><FaYoutube size={16} /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-blue transition-colors"><FaLinkedinIn size={16} /></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-blue transition-colors"><FaXTwitter size={16} /></a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-blue transition-colors"><FaTiktok size={14} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
