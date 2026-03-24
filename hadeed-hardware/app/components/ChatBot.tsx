"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight, ArrowLeft, Send } from "lucide-react";
import { brands } from "@/app/data/products";

const faqs = [
  { q: "What are your working hours?", a: "We are open Saturday to Thursday, 8:00 AM – 6:00 PM. Closed on Fridays." },
  { q: "Where are you located?", a: "We are located in Deira, Dubai, UAE. Visit us at our showroom for a full product experience." },
  { q: "Do you deliver across UAE?", a: "Yes! We deliver to all emirates in the UAE. Delivery timelines vary by location." },
  { q: "How can I get a quote?", a: "You can request a quote via WhatsApp, call us, or use the 'Browse & Order' feature in this chat." },
  { q: "What brands do you carry?", a: "We carry 20+ premium brands including Makita, DeWalt, Stanley, ESAB, Fluke, 3M, Norton, and more." },
  { q: "Do you offer bulk discounts?", a: "Yes, we offer competitive pricing for bulk and wholesale orders. Contact us for a custom quote." },
  { q: "What payment methods do you accept?", a: "We accept cash, bank transfer, and cheque payments. Contact us for more details." },
  { q: "How long does delivery take?", a: "Standard delivery within Dubai takes 1–2 business days. Other emirates may take 2–4 business days." },
  { q: "Do products come with warranty?", a: "Yes, all products come with the manufacturer's warranty. Duration varies by brand and product type." },
  { q: "Can I visit your showroom?", a: "Absolutely! Visit us at our Deira, Dubai showroom Sat–Thu, 8 AM–6 PM. We'd love to assist you in person." },
  { q: "Do you export outside UAE?", a: "Yes, we do international shipping. Please contact us directly for export inquiries and pricing." },
  { q: "What is your return policy?", a: "We accept returns within 7 days for unused products in original packaging. Contact us to initiate a return." },
  { q: "Do you offer installation services?", a: "We provide guidance and can recommend certified technicians for installation of equipment." },
  { q: "How can I track my order?", a: "Once your order is dispatched, our team will send you tracking details via WhatsApp or phone." },
  { q: "Do you have safety equipment for construction?", a: "Yes! We stock a full range of PPE including helmets, gloves, harnesses, safety shoes, and more." },
  { q: "Can I get a product catalog?", a: "Yes, we can share our product catalog via WhatsApp. Send us a message and we'll get it to you." },
  { q: "Do you supply to contractors?", a: "Absolutely. We are a trusted supplier for contractors, companies, and industrial clients across the UAE." },
  { q: "What welding brands do you carry?", a: "We carry ESAB, Victor, Haswel, and other premium welding brands for machines, consumables, and cutting tools." },
  { q: "Do you offer credit facilities?", a: "Credit facilities are available for registered business accounts. Please visit us or call to apply." },
  { q: "How do I contact customer support?", a: "Call us at +971 4 2590552, WhatsApp +971 55 554 8152, or email info@hadeeddubai.ae." },
];

type Message = { from: "bot" | "user"; text: string };
type Step = "home" | "faq-list" | "faq-answer" | "brands" | "categories" | "products" | "quantity" | "done";

const WHATSAPP = "971555548152";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! 👋 Welcome to Hadeed Hardware. How can I help you today?" },
  ]);
  const [step, setStep] = useState<Step>("home");
  const [selectedBrand, setSelectedBrand] = useState<(typeof brands)[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);

  const addMessages = (msgs: Message[]) => {
    setMessages((prev) => [...prev, ...msgs]);
  };

  const reset = () => {
    setMessages([{ from: "bot", text: "Hi! 👋 Welcome to Hadeed Hardware. How can I help you today?" }]);
    setStep("home");
    setSelectedBrand(null);
    setSelectedCategory("");
    setSelectedProduct("");
    setQuantity("");
    setFaqAnswer("");
  };

  const handleFaqSelect = (faq: (typeof faqs)[0]) => {
    addMessages([
      { from: "user", text: faq.q },
      { from: "bot", text: faq.a },
    ]);
    setFaqAnswer(faq.a);
    setStep("faq-answer");
  };

  const handleBrandSelect = (brand: (typeof brands)[0]) => {
    setSelectedBrand(brand);
    addMessages([
      { from: "user", text: brand.name },
      { from: "bot", text: `Great choice! Here are the categories available for ${brand.name}:` },
    ]);
    setStep("categories");
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const brand = selectedBrand!;
    const catObj = brand.categories.find((c) => c.name === cat);
    const products = catObj?.subcategories.map((s) => s.name) ?? [];
    addMessages([
      { from: "user", text: cat },
      { from: "bot", text: `Here are the products under ${cat}:` },
    ]);
    setStep("products");
  };

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
    addMessages([
      { from: "user", text: product },
      { from: "bot", text: `How many units of "${product}" do you need? Please enter the quantity below.` },
    ]);
    setStep("quantity");
  };

  const handleQuantitySubmit = () => {
    if (!quantity.trim()) return;
    const msg = `Hello Hadeed Hardware,\n\nI would like to enquire about the following product:\n\nBrand: ${selectedBrand?.name}\nCategory: ${selectedCategory}\nProduct: ${selectedProduct}\nQuantity: ${quantity} units\n\nKindly share the availability and pricing.\n\nThank you.`;
    addMessages([
      { from: "user", text: `Quantity: ${quantity}` },
      { from: "bot", text: `Perfect! Redirecting you to WhatsApp to complete your enquiry... 🚀` },
    ]);
    setStep("done");
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    }, 800);
  };

  const getCategories = () =>
    selectedBrand?.categories.map((c) => c.name) ?? [];

  const getProducts = () => {
    const catObj = selectedBrand?.categories.find((c) => c.name === selectedCategory);
    return catObj?.subcategories.map((s) => s.name) ?? [];
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue to-blue-dark px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Hadeed Assistant</p>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <p className="text-white/70 text-xs">Online</p>
                  </span>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-blue text-white rounded-br-sm"
                        : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Options Panel */}
            <div className="border-t border-gray-100 bg-white">
              {step === "home" && (
                <div className="p-3 space-y-2">
                  <button
                    onClick={() => { addMessages([{ from: "bot", text: "Sure! Here are some common questions:" }]); setStep("faq-list"); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl border border-blue/20 hover:border-blue hover:bg-blue/5 text-sm text-blue-dark font-medium flex items-center justify-between transition-all"
                  >
                    <span>❓ Browse FAQs</span>
                    <ChevronRight size={14} className="text-blue" />
                  </button>
                  <button
                    onClick={() => { addMessages([{ from: "user", text: "Browse & Order Products" }, { from: "bot", text: "Great! Please select a brand to get started:" }]); setStep("brands"); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl border border-blue/20 hover:border-blue hover:bg-blue/5 text-sm text-blue-dark font-medium flex items-center justify-between transition-all"
                  >
                    <span>🛒 Browse & Order Products</span>
                    <ChevronRight size={14} className="text-blue" />
                  </button>
                </div>
              )}

              {step === "faq-list" && (
                <div className="max-h-48 overflow-y-auto p-2 space-y-1">
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => handleFaqSelect(faq)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue/5 text-xs text-gray-700 hover:text-blue transition-colors flex items-start gap-2"
                    >
                      <span className="text-blue mt-0.5">•</span>
                      {faq.q}
                    </button>
                  ))}
                </div>
              )}

              {step === "faq-answer" && (
                <div className="p-3 flex gap-2">
                  <button
                    onClick={() => setStep("faq-list")}
                    className="flex-1 px-3 py-2 rounded-xl border border-gray-200 hover:border-blue text-sm text-gray-600 hover:text-blue transition-all flex items-center justify-center gap-1"
                  >
                    <ArrowLeft size={13} /> More Questions
                  </button>
                  <button
                    onClick={reset}
                    className="flex-1 px-3 py-2 rounded-xl bg-blue text-white text-sm font-medium hover:bg-blue-dark transition-all"
                  >
                    Main Menu
                  </button>
                </div>
              )}

              {step === "brands" && (
                <div className="max-h-48 overflow-y-auto p-2 space-y-1">
                  {brands.map((brand) => (
                    <button
                      key={brand.slug}
                      onClick={() => handleBrandSelect(brand)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue/5 text-sm text-gray-700 hover:text-blue transition-colors flex items-center gap-2"
                    >
                      <span className="w-6 h-6 bg-blue/10 rounded text-[9px] font-bold text-blue flex items-center justify-center shrink-0">
                        {brand.abbr}
                      </span>
                      {brand.name}
                    </button>
                  ))}
                </div>
              )}

              {step === "categories" && (
                <div className="max-h-48 overflow-y-auto p-2 space-y-1">
                  {getCategories().map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue/5 text-sm text-gray-700 hover:text-blue transition-colors flex items-center justify-between"
                    >
                      <span>{cat}</span>
                      <ChevronRight size={13} className="text-blue/50" />
                    </button>
                  ))}
                </div>
              )}

              {step === "products" && (
                <div className="max-h-48 overflow-y-auto p-2 space-y-1">
                  {getProducts().map((product) => (
                    <button
                      key={product}
                      onClick={() => handleProductSelect(product)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue/5 text-sm text-gray-700 hover:text-blue transition-colors flex items-center justify-between"
                    >
                      <span>{product}</span>
                      <ChevronRight size={13} className="text-blue/50" />
                    </button>
                  ))}
                </div>
              )}

              {step === "quantity" && (
                <div className="p-3 flex gap-2">
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter quantity..."
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleQuantitySubmit()}
                    className="flex-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-blue focus:outline-none text-sm"
                    autoFocus
                  />
                  <button
                    onClick={handleQuantitySubmit}
                    disabled={!quantity.trim()}
                    className="px-4 py-2 bg-blue text-white rounded-xl hover:bg-blue-dark transition-all disabled:opacity-40 flex items-center gap-1"
                  >
                    <Send size={14} />
                  </button>
                </div>
              )}

              {step === "done" && (
                <div className="p-3">
                  <button
                    onClick={reset}
                    className="w-full px-3 py-2.5 rounded-xl bg-blue text-white text-sm font-medium hover:bg-blue-dark transition-all"
                  >
                    Start New Chat
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="relative">
        {/* Pulse rings - only when closed */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-blue opacity-20 animate-ping" />
            <span className="absolute inset-0 scale-110 rounded-full bg-blue opacity-10 animate-ping" style={{ animationDelay: "0.4s" }} />
          </>
        )}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setOpen(!open)}
          className="relative flex items-center gap-2.5 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #1B3A6B 0%, #4A90D9 50%, #1B3A6B 100%)",
            backgroundSize: "200% 200%",
            boxShadow: "0 8px 24px rgba(74,144,217,0.45), 0 2px 8px rgba(15,38,71,0.3)",
          }}
        >
          {/* Icon bubble */}
          <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <MessageCircle size={15} className="text-white" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-white/60 font-medium tracking-widest uppercase">Chat with us</span>
            <span className="text-sm font-bold tracking-wide">Let's Talk</span>
          </div>
          {/* Live dot */}
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white shadow-sm absolute -top-0.5 -right-0.5" />
        </motion.button>
      </div>
    </div>
  );
}
