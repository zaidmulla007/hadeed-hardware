"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Search } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

type BrandData = {
  brand: string;
  abbr: string;
  sector: string;
  categories: { cat: string; subs: string[] }[];
};

const brands: BrandData[] = [
  {
    brand: "TOTAL Tools",
    abbr: "TT",
    sector: "tools",
    categories: [
      { cat: "Power Tools", subs: ["Angle Grinders", "Drills & Drivers", "Circular Saws", "Jigsaws", "Rotary Hammers", "Demolition Hammers"] },
      { cat: "Hand Tools", subs: ["Screwdrivers", "Pliers", "Wrenches", "Hammers", "Chisels", "Files & Rasps"] },
      { cat: "Measuring Tools", subs: ["Tape Measures", "Spirit Levels", "Squares", "Marking Tools"] },
      { cat: "Tool Sets & Kits", subs: ["Combo Kits", "Hand Tool Sets", "Mechanic Sets"] },
    ],
  },
  {
    brand: "3M",
    abbr: "3M",
    sector: "abrasives",
    categories: [
      { cat: "Abrasives & Sanding", subs: ["Sandpaper Sheets", "Sanding Discs", "Sanding Belts", "Abrasive Rolls", "Scotch-Brite Pads"] },
      { cat: "Adhesives & Tapes", subs: ["Masking Tapes", "Double-Sided Tapes", "Duct Tapes", "Foam Tapes", "VHB Tapes"] },
      { cat: "Safety & PPE", subs: ["Respirators & Masks", "Hearing Protection", "Safety Glasses", "Protective Gloves"] },
      { cat: "Sealants & Fillers", subs: ["Silicone Sealants", "Spray Adhesives", "Construction Adhesives"] },
    ],
  },
  {
    brand: "Ambersil",
    abbr: "AM",
    sector: "chemicals",
    categories: [
      { cat: "Lubricants & Oils", subs: ["General Purpose Lubricants", "Chain Lubricants", "Anti-Seize Compounds", "Mould Release Agents"] },
      { cat: "Cleaning & Degreasers", subs: ["Industrial Degreasers", "Electrical Cleaners", "Contact Cleaners", "Parts Washers"] },
      { cat: "Coatings & Protectants", subs: ["Corrosion Inhibitors", "Rust Removers", "Protective Coatings", "Cold Galvanising Sprays"] },
    ],
  },
  {
    brand: "Hadeed Safety Wear",
    abbr: "HS",
    sector: "safety",
    categories: [
      { cat: "Head Protection", subs: ["Safety Helmets", "Bump Caps", "Hard Hat Accessories"] },
      { cat: "Eye & Face Protection", subs: ["Safety Glasses", "Goggles", "Face Shields", "Welding Visors"] },
      { cat: "Hand Protection", subs: ["Leather Gloves", "Cut-Resistant Gloves", "Chemical Gloves", "Disposable Gloves"] },
      { cat: "Foot Protection", subs: ["Safety Shoes", "Safety Boots", "Anti-Static Footwear"] },
      { cat: "Body Protection", subs: ["Hi-Vis Vests", "Coveralls", "Safety Harnesses", "Knee Pads"] },
      { cat: "Respiratory Protection", subs: ["Dust Masks", "Half-Face Respirators", "Full-Face Respirators"] },
    ],
  },
  {
    brand: "Norton (Saint-Gobain)",
    abbr: "NR",
    sector: "abrasives",
    categories: [
      { cat: "Bonded Abrasives", subs: ["Grinding Wheels", "Cutting Discs", "Flap Discs", "Mounted Points"] },
      { cat: "Coated Abrasives", subs: ["Sandpaper Sheets", "Sanding Rolls", "Sanding Belts", "Sanding Discs"] },
      { cat: "Surface Conditioning", subs: ["Fibre Discs", "Non-Woven Discs", "Wire Brushes", "Strip Discs"] },
    ],
  },
  {
    brand: "Makita",
    abbr: "MK",
    sector: "tools",
    categories: [
      { cat: "Drills & Drivers", subs: ["Cordless Drills", "Impact Drivers", "Hammer Drills", "SDS Drills", "Angle Drills"] },
      { cat: "Saws", subs: ["Circular Saws", "Reciprocating Saws", "Jigsaws", "Miter Saws", "Band Saws"] },
      { cat: "Grinders & Sanders", subs: ["Angle Grinders", "Belt Sanders", "Orbital Sanders", "Die Grinders"] },
      { cat: "Batteries & Chargers", subs: ["18V Batteries", "40V Batteries", "Multi-Voltage Chargers"] },
      { cat: "Outdoor Power Tools", subs: ["Blowers", "Hedge Trimmers", "Chain Saws"] },
    ],
  },
  {
    brand: "DeltaPlus",
    abbr: "DP",
    sector: "safety",
    categories: [
      { cat: "Head Protection", subs: ["Safety Helmets", "Bump Caps"] },
      { cat: "Eye Protection", subs: ["Safety Glasses", "Goggles", "Welding Shields"] },
      { cat: "Hand Protection", subs: ["Mechanic Gloves", "Cut-Level Gloves", "Chemical Gloves", "Anti-Vibration Gloves"] },
      { cat: "Fall Protection", subs: ["Safety Harnesses", "Lanyards", "Self-Retracting Lifelines", "Anchor Points"] },
      { cat: "Workwear", subs: ["Hi-Vis Jackets", "Coveralls", "Trousers", "Flame-Retardant Clothing"] },
    ],
  },
  {
    brand: "BW Technologies",
    abbr: "BW",
    sector: "testing",
    categories: [
      { cat: "Gas Detection", subs: ["Single Gas Detectors", "Multi Gas Detectors", "Clip-On Gas Monitors", "Area Monitors"] },
      { cat: "Accessories & Calibration", subs: ["Calibration Gas Cylinders", "Sensors & Probes", "Docking Stations", "Carrying Cases"] },
    ],
  },
  {
    brand: "JSP",
    abbr: "JSP",
    sector: "safety",
    categories: [
      { cat: "Head Protection", subs: ["Safety Helmets", "Bump Caps", "Climbing Helmets"] },
      { cat: "Eye & Face Protection", subs: ["Safety Spectacles", "Goggles", "Face Shields"] },
      { cat: "Respiratory Protection", subs: ["Disposable Masks FFP1/FFP2/FFP3", "Reusable Half Masks", "Full Face Masks", "Powered Air Units"] },
      { cat: "Hearing Protection", subs: ["Ear Plugs", "Ear Defenders", "Banded Ear Plugs"] },
    ],
  },
  {
    brand: "Weicon",
    abbr: "WC",
    sector: "chemicals",
    categories: [
      { cat: "Adhesives", subs: ["Cyanoacrylate Super Glue", "Epoxy Adhesives", "Anaerobic Adhesives", "Structural Adhesives"] },
      { cat: "Lubricants & Sprays", subs: ["Anti-Seize Pastes", "Penetrating Oils", "Food-Grade Lubricants", "Release Agents"] },
      { cat: "Sealants", subs: ["Silicone Sealants", "Thread Sealants", "Gasketing Compounds"] },
      { cat: "Tools & Accessories", subs: ["Wire Stripper Tools", "Crimp Tools", "Cable Cutters"] },
    ],
  },
  {
    brand: "UNI-T",
    abbr: "UT",
    sector: "testing",
    categories: [
      { cat: "Multimeters", subs: ["Digital Multimeters", "Clamp Meters", "True RMS Meters", "Autoranging Meters"] },
      { cat: "Thermometers & Thermal", subs: ["Infrared Thermometers", "Thermal Cameras", "Temperature Loggers"] },
      { cat: "Environmental Meters", subs: ["Sound Level Meters", "Lux Meters", "Anemometers", "Humidity Meters"] },
      { cat: "Oscilloscopes & Analyzers", subs: ["Handheld Oscilloscopes", "Bench Oscilloscopes", "Spectrum Analyzers"] },
    ],
  },
  {
    brand: "Victor",
    abbr: "VC",
    sector: "welding",
    categories: [
      { cat: "Welding Equipment", subs: ["Welding Regulators", "Cutting Torches", "Welding Torches", "Victor Outfit Sets"] },
      { cat: "Regulators & Flowmeters", subs: ["Oxygen Regulators", "Acetylene Regulators", "Argon/CO2 Regulators", "Flowmeters"] },
      { cat: "Hoses & Fittings", subs: ["Welding Hoses", "Hose Connectors", "Check Valves", "Flashback Arrestors"] },
    ],
  },
  {
    brand: "Fluke",
    abbr: "FL",
    sector: "testing",
    categories: [
      { cat: "Electrical Testing", subs: ["Digital Multimeters", "Clamp Meters", "Insulation Testers", "Earth Ground Testers"] },
      { cat: "Thermal Imaging", subs: ["Thermal Cameras", "IR Thermometers", "Thermal Imager Accessories"] },
      { cat: "Power Quality", subs: ["Power Analyzers", "Energy Loggers", "Power Quality Recorders"] },
      { cat: "Calibration Tools", subs: ["Calibrators", "Process Meters", "Signal Generators"] },
    ],
  },
  {
    brand: "Honeywell",
    abbr: "HW",
    sector: "safety",
    categories: [
      { cat: "Gas Detection", subs: ["Portable Gas Detectors", "Fixed Gas Detectors", "Multi-Gas Monitors"] },
      { cat: "Safety & PPE", subs: ["Hard Hats", "Safety Glasses", "Hearing Protection", "Fall Protection"] },
      { cat: "Industrial Automation", subs: ["Pressure Sensors", "Temperature Sensors", "Limit Switches"] },
    ],
  },
  {
    brand: "Haswel Electrode",
    abbr: "HE",
    sector: "welding",
    categories: [
      { cat: "Welding Electrodes", subs: ["Mild Steel Electrodes", "Stainless Steel Electrodes", "Cast Iron Electrodes", "Hard-Facing Electrodes"] },
      { cat: "Welding Wires", subs: ["MIG Wires ER70S", "Flux-Cored Wires", "Stainless MIG Wires"] },
      { cat: "Welding Accessories", subs: ["Welding Helmets", "Welding Gloves", "Electrode Holders", "Earth Clamps"] },
    ],
  },
  {
    brand: "DeWalt",
    abbr: "DW",
    sector: "tools",
    categories: [
      { cat: "Drills & Drivers", subs: ["Cordless Drills", "Impact Drivers", "Hammer Drills", "Right Angle Drills"] },
      { cat: "Saws", subs: ["Circular Saws", "Miter Saws", "Reciprocating Saws", "Jigsaws", "Table Saws"] },
      { cat: "Grinders & Sanders", subs: ["Angle Grinders", "Random Orbital Sanders", "Belt Sanders", "Polishers"] },
      { cat: "Nailers & Staples", subs: ["Framing Nailers", "Finishing Nailers", "Brad Nailers", "Staple Guns"] },
      { cat: "Batteries & Chargers", subs: ["20V MAX Batteries", "FLEXVOLT Batteries", "Fast Chargers"] },
      { cat: "Accessories", subs: ["Drill Bits", "Saw Blades", "Screwdriver Bits", "Diamond Blades"] },
    ],
  },
  {
    brand: "Stanley",
    abbr: "ST",
    sector: "tools",
    categories: [
      { cat: "Hand Tools", subs: ["Hammers", "Screwdrivers", "Pliers", "Wrenches", "Utility Knives", "Chisels"] },
      { cat: "Measuring & Layout", subs: ["Short & Long Tapes", "Spirit Levels", "Squares", "Chalk Lines", "Laser Levels"] },
      { cat: "Storage Solutions", subs: ["Tool Boxes", "Tool Bags", "Tool Chests", "Organizers"] },
      { cat: "Cutting Tools", subs: ["Utility Knives", "Hand Saws", "Hacksaw Frames", "Blades & Replacement Parts"] },
      { cat: "Power Tool Accessories", subs: ["Drill Bits", "Saw Blades", "Screwdriver Bits", "Grinding Discs"] },
    ],
  },
  {
    brand: "Rothenberger",
    abbr: "RB",
    sector: "tools",
    categories: [
      { cat: "Pipe Tools", subs: ["Pipe Cutters", "Pipe Benders", "Pipe Wrenches", "Pipe Threading Machines"] },
      { cat: "Press Fitting Tools", subs: ["Electro-Hydraulic Press Tools", "Manual Press Tools", "Press Jaws & Profiles"] },
      { cat: "Soldering & Brazing", subs: ["Gas Torches", "Soldering Torches", "Blow Lamps", "Gas Cartridges"] },
      { cat: "Drain Cleaning", subs: ["Drain Machines", "Hand Spinners", "Drain Rods", "Water Jetting"] },
      { cat: "Measuring & Testing", subs: ["Pressure Test Pumps", "Leak Detectors", "Manometers"] },
    ],
  },
  {
    brand: "CRC",
    abbr: "CRC",
    sector: "chemicals",
    categories: [
      { cat: "Maintenance Sprays", subs: ["Multi-Purpose Lubricants", "Penetrating Oils", "Corrosion Inhibitors", "Rust Removers"] },
      { cat: "Electrical & Electronic", subs: ["Contact Cleaners", "Electrical Insulation Spray", "PCB Protective Coatings", "Freeze Spray"] },
      { cat: "Automotive Care", subs: ["Brake Cleaners", "Carb & Throttle Cleaner", "Battery Terminal Protector"] },
      { cat: "Industrial Cleaning", subs: ["Degreasers", "Parts Washers", "Mould Cleaners"] },
    ],
  },
  {
    brand: "ESAB",
    abbr: "ES",
    sector: "welding",
    categories: [
      { cat: "Welding Machines", subs: ["MIG/MAG Welders", "TIG Welders", "MMA Stick Welders", "Plasma Cutters", "Multi-Process Welders"] },
      { cat: "Welding Consumables", subs: ["Stick Electrodes", "MIG Wires", "TIG Filler Rods", "Flux-Cored Wires", "Submerged Arc Products"] },
      { cat: "Welding Safety & PPE", subs: ["Auto-Darkening Welding Helmets", "Welding Gloves", "Welding Jackets", "Welding Curtains"] },
      { cat: "Cutting Equipment", subs: ["Plasma Cutting Systems", "Gas Cutting Machines", "Cutting Torches", "Gouging Electrodes"] },
    ],
  },
];

const sectorLabels: Record<string, string> = {
  tools: "Power Tools",
  safety: "Safety & PPE",
  welding: "Welding",
  chemicals: "Chemicals",
  testing: "Testing",
  abrasives: "Abrasives",
};

const sectorColors: Record<string, string> = {
  tools: "bg-blue/10 text-blue border-blue/20",
  safety: "bg-green-500/10 text-green-700 border-green-500/20",
  welding: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  chemicals: "bg-teal-500/10 text-teal-700 border-teal-500/20",
  testing: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  abrasives: "bg-amber-500/10 text-amber-700 border-amber-500/20",
};

function BrandCard({ brand, defaultOpen }: { brand: BrandData; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const totalSubs = brand.categories.reduce((a, c) => a + c.subs.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-accent/40 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-blue rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">
            {brand.abbr}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-blue-dark">{brand.brand}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide border ${
                  sectorColors[brand.sector]
                }`}
              >
                {sectorLabels[brand.sector]}
              </span>
            </div>
            <div className="flex gap-3 mt-1 text-xs text-grey">
              <span className="bg-grey-light px-2 py-0.5 rounded">
                {brand.categories.length} categories
              </span>
              <span className="bg-grey-light px-2 py-0.5 rounded">
                {totalSubs} products
              </span>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-grey" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
              {brand.categories.map((cat, j) => (
                <div key={j}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-accent uppercase tracking-wider">
                      {cat.cat}
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subs.map((sub, k) => (
                      <span
                        key={k}
                        className="text-xs px-3 py-1.5 bg-grey-light text-grey-dark rounded-full border border-gray-200 hover:bg-blue/5 hover:border-blue-accent/30 hover:text-blue transition-all cursor-default"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function BrandsPage() {
  const [searchVal, setSearchVal] = useState("");
  const [activeSector, setActiveSector] = useState("all");

  const sectors = ["all", "tools", "safety", "welding", "chemicals", "testing", "abrasives"];

  const filtered = brands.filter((b) => {
    if (activeSector !== "all" && b.sector !== activeSector) return false;
    if (!searchVal) return true;
    const q = searchVal.toLowerCase();
    if (b.brand.toLowerCase().includes(q)) return true;
    return b.categories.some(
      (c) =>
        c.cat.toLowerCase().includes(q) ||
        c.subs.some((s) => s.toLowerCase().includes(q))
    );
  });

  const totalCats = brands.reduce((a, b) => a + b.categories.length, 0);
  const totalSubs = brands.reduce(
    (a, b) => a + b.categories.reduce((x, c) => x + c.subs.length, 0),
    0
  );

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
              <span className="text-white">Our Brands</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Brand Portfolio
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              We partner with 20+ globally recognized brands to bring you the
              best hardware, tools, and industrial products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 sm:gap-12 flex-wrap"
          >
            {[
              { num: "20", label: "Brands" },
              { num: String(totalCats), label: "Categories" },
              { num: String(totalSubs), label: "Products" },
              { num: "6", label: "Sectors" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-accent">{s.num}</div>
                <div className="text-sm text-grey mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brands Content */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-8"
          >
            <div className="relative flex-1 w-full">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-grey"
              />
              <input
                type="text"
                placeholder="Search brand, category or product..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-accent transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSector(s)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all ${
                    activeSector === s
                      ? "bg-blue text-white"
                      : "bg-white text-grey hover:bg-gray-200"
                  }`}
                >
                  {s === "all" ? "All" : sectorLabels[s]}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Brand Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((brand) => (
              <BrandCard
                key={brand.brand}
                brand={brand}
                defaultOpen={true}
              />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-16 text-grey">
                <p>No brands match your search.</p>
              </div>
            )}
          </div>

          {/* Footer count */}
          <div className="mt-6 text-center text-sm text-grey">
            {filtered.length} brand{filtered.length !== 1 ? "s" : ""} shown
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 mb-7 bg-gradient-to-br from-blue-dark via-blue to-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Looking for a Specific Brand or Product?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Browse our complete product catalog or contact us for inquiries
              about any specific brand or product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
