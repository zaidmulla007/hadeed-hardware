export interface Subcategory {
  name: string;
  slug: string;
  products: string[];
}

export interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

export interface Brand {
  name: string;
  slug: string;
  abbr: string;
  sector: string;
  sectorLabel: string;
  description: string;
  categories: Category[];
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildCategory(
  cat: string,
  subs: string[]
): Category {
  return {
    name: cat,
    slug: slugify(cat),
    subcategories: subs.map((s) => ({
      name: s,
      slug: slugify(s),
      products: [],
    })),
  };
}

const sectorDescriptions: Record<string, string> = {
  tools:
    "Professional power tools and hand tools for construction, fabrication, and industrial applications.",
  safety:
    "Complete range of personal protective equipment and safety gear for workplace safety.",
  welding:
    "Welding machines, consumables, gas equipment, and cutting solutions for fabrication works.",
  chemicals:
    "Industrial chemicals, lubricants, adhesives, and maintenance products.",
  testing:
    "Electrical testing, measuring instruments, gas detection, and calibration equipment.",
  abrasives:
    "Grinding wheels, cutting discs, sandpaper, and surface conditioning products.",
};

const sectorLabels: Record<string, string> = {
  tools: "Power Tools",
  safety: "Safety & PPE",
  welding: "Welding",
  chemicals: "Chemicals",
  testing: "Testing",
  abrasives: "Abrasives",
};

export const brands: Brand[] = [
  {
    name: "TOTAL Tools",
    slug: "total-tools",
    abbr: "TT",
    sector: "tools",
    sectorLabel: sectorLabels.tools,
    description: sectorDescriptions.tools,
    categories: [
      buildCategory("Power Tools", [
        "Angle Grinders",
        "Drills & Drivers",
        "Circular Saws",
        "Jigsaws",
        "Rotary Hammers",
        "Demolition Hammers",
      ]),
      buildCategory("Hand Tools", [
        "Screwdrivers",
        "Pliers",
        "Wrenches",
        "Hammers",
        "Chisels",
        "Files & Rasps",
      ]),
      buildCategory("Measuring Tools", [
        "Tape Measures",
        "Spirit Levels",
        "Squares",
        "Marking Tools",
      ]),
      buildCategory("Tool Sets & Kits", [
        "Combo Kits",
        "Hand Tool Sets",
        "Mechanic Sets",
      ]),
    ],
  },
  {
    name: "3M",
    slug: "3m",
    abbr: "3M",
    sector: "abrasives",
    sectorLabel: sectorLabels.abrasives,
    description: sectorDescriptions.abrasives,
    categories: [
      buildCategory("Abrasives & Sanding", [
        "Sandpaper Sheets",
        "Sanding Discs",
        "Sanding Belts",
        "Abrasive Rolls",
        "Scotch-Brite Pads",
      ]),
      buildCategory("Adhesives & Tapes", [
        "Masking Tapes",
        "Double-Sided Tapes",
        "Duct Tapes",
        "Foam Tapes",
        "VHB Tapes",
      ]),
      buildCategory("Safety & PPE", [
        "Respirators & Masks",
        "Hearing Protection",
        "Safety Glasses",
        "Protective Gloves",
      ]),
      buildCategory("Sealants & Fillers", [
        "Silicone Sealants",
        "Spray Adhesives",
        "Construction Adhesives",
      ]),
    ],
  },
  {
    name: "Ambersil",
    slug: "ambersil",
    abbr: "AM",
    sector: "chemicals",
    sectorLabel: sectorLabels.chemicals,
    description: sectorDescriptions.chemicals,
    categories: [
      buildCategory("Lubricants & Oils", [
        "General Purpose Lubricants",
        "Chain Lubricants",
        "Anti-Seize Compounds",
        "Mould Release Agents",
      ]),
      buildCategory("Cleaning & Degreasers", [
        "Industrial Degreasers",
        "Electrical Cleaners",
        "Contact Cleaners",
        "Parts Washers",
      ]),
      buildCategory("Coatings & Protectants", [
        "Corrosion Inhibitors",
        "Rust Removers",
        "Protective Coatings",
        "Cold Galvanising Sprays",
      ]),
    ],
  },
  {
    name: "Hadeed Safety Wear",
    slug: "hadeed-safety-wear",
    abbr: "HS",
    sector: "safety",
    sectorLabel: sectorLabels.safety,
    description: sectorDescriptions.safety,
    categories: [
      buildCategory("Welding Safety Wear", [
        "Welding Leather Hand Gloves",
        "Working Leather Hand Gloves",
        "Welding Leather Aprons",
        "Welding Leather Hand Sleeves",
        "Welding Leg Guards",
        "Welding Leather Bib Jackets",
      ]),
    ],
  },
  {
    name: "Norton",
    slug: "norton",
    abbr: "NR",
    sector: "abrasives",
    sectorLabel: sectorLabels.abrasives,
    description: sectorDescriptions.abrasives,
    categories: [
      buildCategory("Bonded Abrasives", [
        "Grinding Wheels",
        "Cutting Discs",
        "Flap Discs",
        "Mounted Points",
      ]),
      buildCategory("Coated Abrasives", [
        "Sandpaper Sheets",
        "Sanding Rolls",
        "Sanding Belts",
        "Sanding Discs",
      ]),
      buildCategory("Surface Conditioning", [
        "Fibre Discs",
        "Non-Woven Discs",
        "Wire Brushes",
        "Strip Discs",
      ]),
    ],
  },
  {
    name: "Makita",
    slug: "makita",
    abbr: "MK",
    sector: "tools",
    sectorLabel: sectorLabels.tools,
    description: sectorDescriptions.tools,
    categories: [
      buildCategory("Drills & Drivers", [
        "Cordless Drills",
        "Impact Drivers",
        "Hammer Drills",
        "SDS Drills",
        "Angle Drills",
      ]),
      buildCategory("Saws", [
        "Circular Saws",
        "Reciprocating Saws",
        "Jigsaws",
        "Miter Saws",
        "Band Saws",
      ]),
      buildCategory("Grinders & Sanders", [
        "Angle Grinders",
        "Belt Sanders",
        "Orbital Sanders",
        "Die Grinders",
      ]),
      buildCategory("Batteries & Chargers", [
        "18V Batteries",
        "40V Batteries",
        "Multi-Voltage Chargers",
      ]),
      buildCategory("Outdoor Power Tools", [
        "Blowers",
        "Hedge Trimmers",
        "Chain Saws",
      ]),
    ],
  },
  {
    name: "DeltaPlus",
    slug: "deltaplus",
    abbr: "DP",
    sector: "safety",
    sectorLabel: sectorLabels.safety,
    description: sectorDescriptions.safety,
    categories: [
      buildCategory("Head Protection", [
        "Safety Helmets",
        "Bump Caps",
      ]),
      buildCategory("Eye Protection", [
        "Safety Glasses",
        "Goggles",
        "Welding Shields",
      ]),
      buildCategory("Hand Protection", [
        "Mechanic Gloves",
        "Cut-Level Gloves",
        "Chemical Gloves",
        "Anti-Vibration Gloves",
      ]),
      buildCategory("Fall Protection", [
        "Safety Harnesses",
        "Lanyards",
        "Self-Retracting Lifelines",
        "Anchor Points",
      ]),
      buildCategory("Workwear", [
        "Hi-Vis Jackets",
        "Coveralls",
        "Trousers",
        "Flame-Retardant Clothing",
      ]),
    ],
  },
  {
    name: "BW Technologies",
    slug: "bw-technologies",
    abbr: "BW",
    sector: "testing",
    sectorLabel: sectorLabels.testing,
    description: sectorDescriptions.testing,
    categories: [
      buildCategory("Gas Detection", [
        "Single Gas Detectors",
        "Multi Gas Detectors",
        "Clip-On Gas Monitors",
        "Area Monitors",
      ]),
      buildCategory("Accessories & Calibration", [
        "Calibration Gas Cylinders",
        "Sensors & Probes",
        "Docking Stations",
        "Carrying Cases",
      ]),
    ],
  },
  {
    name: "JSP",
    slug: "jsp",
    abbr: "JSP",
    sector: "safety",
    sectorLabel: sectorLabels.safety,
    description: sectorDescriptions.safety,
    categories: [
      buildCategory("Head Protection", [
        "Safety Helmets",
        "Bump Caps",
        "Climbing Helmets",
      ]),
      buildCategory("Eye & Face Protection", [
        "Safety Spectacles",
        "Goggles",
        "Face Shields",
      ]),
      buildCategory("Respiratory Protection", [
        "Disposable Masks FFP1/FFP2/FFP3",
        "Reusable Half Masks",
        "Full Face Masks",
        "Powered Air Units",
      ]),
      buildCategory("Hearing Protection", [
        "Ear Plugs",
        "Ear Defenders",
        "Banded Ear Plugs",
      ]),
    ],
  },
  {
    name: "Weicon",
    slug: "weicon",
    abbr: "WC",
    sector: "chemicals",
    sectorLabel: sectorLabels.chemicals,
    description: sectorDescriptions.chemicals,
    categories: [
      buildCategory("Adhesives", [
        "Cyanoacrylate Super Glue",
        "Epoxy Adhesives",
        "Anaerobic Adhesives",
        "Structural Adhesives",
      ]),
      buildCategory("Lubricants & Sprays", [
        "Anti-Seize Pastes",
        "Penetrating Oils",
        "Food-Grade Lubricants",
        "Release Agents",
      ]),
      buildCategory("Sealants", [
        "Silicone Sealants",
        "Thread Sealants",
        "Gasketing Compounds",
      ]),
      buildCategory("Tools & Accessories", [
        "Wire Stripper Tools",
        "Crimp Tools",
        "Cable Cutters",
      ]),
    ],
  },
  {
    name: "UNI-T",
    slug: "uni-t",
    abbr: "UT",
    sector: "testing",
    sectorLabel: sectorLabels.testing,
    description: sectorDescriptions.testing,
    categories: [
      buildCategory("Multimeters", [
        "Digital Multimeters",
        "Clamp Meters",
        "True RMS Meters",
        "Autoranging Meters",
      ]),
      buildCategory("Thermometers & Thermal", [
        "Infrared Thermometers",
        "Thermal Cameras",
        "Temperature Loggers",
      ]),
      buildCategory("Environmental Meters", [
        "Sound Level Meters",
        "Lux Meters",
        "Anemometers",
        "Humidity Meters",
      ]),
      buildCategory("Oscilloscopes & Analyzers", [
        "Handheld Oscilloscopes",
        "Bench Oscilloscopes",
        "Spectrum Analyzers",
      ]),
    ],
  },
  {
    name: "Victor",
    slug: "victor",
    abbr: "VC",
    sector: "welding",
    sectorLabel: sectorLabels.welding,
    description: sectorDescriptions.welding,
    categories: [
      buildCategory("Welding Equipment", [
        "Welding Regulators",
        "Cutting Torches",
        "Welding Torches",
        "Victor Outfit Sets",
      ]),
      buildCategory("Regulators & Flowmeters", [
        "Oxygen Regulators",
        "Acetylene Regulators",
        "Argon/CO2 Regulators",
        "Flowmeters",
      ]),
      buildCategory("Hoses & Fittings", [
        "Welding Hoses",
        "Hose Connectors",
        "Check Valves",
        "Flashback Arrestors",
      ]),
    ],
  },
  {
    name: "Fluke",
    slug: "fluke",
    abbr: "FL",
    sector: "testing",
    sectorLabel: sectorLabels.testing,
    description: sectorDescriptions.testing,
    categories: [
      buildCategory("Electrical Testing", [
        "Digital Multimeters",
        "Clamp Meters",
        "Insulation Testers",
        "Earth Ground Testers",
      ]),
      buildCategory("Thermal Imaging", [
        "Thermal Cameras",
        "IR Thermometers",
        "Thermal Imager Accessories",
      ]),
      buildCategory("Power Quality", [
        "Power Analyzers",
        "Energy Loggers",
        "Power Quality Recorders",
      ]),
      buildCategory("Calibration Tools", [
        "Calibrators",
        "Process Meters",
        "Signal Generators",
      ]),
    ],
  },
  {
    name: "Honeywell",
    slug: "honeywell",
    abbr: "HW",
    sector: "safety",
    sectorLabel: sectorLabels.safety,
    description: sectorDescriptions.safety,
    categories: [
      buildCategory("Gas Detection", [
        "Portable Gas Detectors",
        "Fixed Gas Detectors",
        "Multi-Gas Monitors",
      ]),
      buildCategory("Safety & PPE", [
        "Hard Hats",
        "Safety Glasses",
        "Hearing Protection",
        "Fall Protection",
      ]),
      buildCategory("Industrial Automation", [
        "Pressure Sensors",
        "Temperature Sensors",
        "Limit Switches",
      ]),
    ],
  },
  {
    name: "Kiswel Electrode",
    slug: "haswel-electrode",
    abbr: "HE",
    sector: "welding",
    sectorLabel: sectorLabels.welding,
    description: sectorDescriptions.welding,
    categories: [
      buildCategory("Welding Electrodes", [
        "Mild Steel Electrodes",
        "Stainless Steel Electrodes",
        "Cast Iron Electrodes",
        "Hard-Facing Electrodes",
      ]),
      buildCategory("Welding Wires", [
        "MIG Wires ER70S",
        "Flux-Cored Wires",
        "Stainless MIG Wires",
      ]),
      buildCategory("Welding Accessories", [
        "Welding Helmets",
        "Welding Gloves",
        "Electrode Holders",
        "Earth Clamps",
      ]),
    ],
  },
  {
    name: "DeWalt",
    slug: "dewalt",
    abbr: "DW",
    sector: "tools",
    sectorLabel: sectorLabels.tools,
    description: sectorDescriptions.tools,
    categories: [
      buildCategory("Drills & Drivers", [
        "Cordless Drills",
        "Impact Drivers",
        "Hammer Drills",
        "Right Angle Drills",
      ]),
      buildCategory("Saws", [
        "Circular Saws",
        "Miter Saws",
        "Reciprocating Saws",
        "Jigsaws",
        "Table Saws",
      ]),
      buildCategory("Grinders & Sanders", [
        "Angle Grinders",
        "Random Orbital Sanders",
        "Belt Sanders",
        "Polishers",
      ]),
      buildCategory("Nailers & Staples", [
        "Framing Nailers",
        "Finishing Nailers",
        "Brad Nailers",
        "Staple Guns",
      ]),
      buildCategory("Batteries & Chargers", [
        "20V MAX Batteries",
        "FLEXVOLT Batteries",
        "Fast Chargers",
      ]),
      buildCategory("Accessories", [
        "Drill Bits",
        "Saw Blades",
        "Screwdriver Bits",
        "Diamond Blades",
      ]),
    ],
  },
  {
    name: "Stanley",
    slug: "stanley",
    abbr: "ST",
    sector: "tools",
    sectorLabel: sectorLabels.tools,
    description: sectorDescriptions.tools,
    categories: [
      buildCategory("Hand Tools", [
        "Hammers",
        "Screwdrivers",
        "Pliers",
        "Wrenches",
        "Utility Knives",
        "Chisels",
      ]),
      buildCategory("Measuring & Layout", [
        "Short & Long Tapes",
        "Spirit Levels",
        "Squares",
        "Chalk Lines",
        "Laser Levels",
      ]),
      buildCategory("Storage Solutions", [
        "Tool Boxes",
        "Tool Bags",
        "Tool Chests",
        "Organizers",
      ]),
      buildCategory("Cutting Tools", [
        "Utility Knives",
        "Hand Saws",
        "Hacksaw Frames",
        "Blades & Replacement Parts",
      ]),
      buildCategory("Power Tool Accessories", [
        "Drill Bits",
        "Saw Blades",
        "Screwdriver Bits",
        "Grinding Discs",
      ]),
    ],
  },
  {
    name: "Rothenberger",
    slug: "rothenberger",
    abbr: "RB",
    sector: "tools",
    sectorLabel: sectorLabels.tools,
    description: sectorDescriptions.tools,
    categories: [
      buildCategory("Pipe Tools", [
        "Pipe Cutters",
        "Pipe Benders",
        "Pipe Wrenches",
        "Pipe Threading Machines",
      ]),
      buildCategory("Press Fitting Tools", [
        "Electro-Hydraulic Press Tools",
        "Manual Press Tools",
        "Press Jaws & Profiles",
      ]),
      buildCategory("Soldering & Brazing", [
        "Gas Torches",
        "Soldering Torches",
        "Blow Lamps",
        "Gas Cartridges",
      ]),
      buildCategory("Drain Cleaning", [
        "Drain Machines",
        "Hand Spinners",
        "Drain Rods",
        "Water Jetting",
      ]),
      buildCategory("Measuring & Testing", [
        "Pressure Test Pumps",
        "Leak Detectors",
        "Manometers",
      ]),
    ],
  },
  {
    name: "CRC",
    slug: "crc",
    abbr: "CRC",
    sector: "chemicals",
    sectorLabel: sectorLabels.chemicals,
    description: sectorDescriptions.chemicals,
    categories: [
      buildCategory("Maintenance Sprays", [
        "Multi-Purpose Lubricants",
        "Penetrating Oils",
        "Corrosion Inhibitors",
        "Rust Removers",
      ]),
      buildCategory("Electrical & Electronic", [
        "Contact Cleaners",
        "Electrical Insulation Spray",
        "PCB Protective Coatings",
        "Freeze Spray",
      ]),
      buildCategory("Automotive Care", [
        "Brake Cleaners",
        "Carb & Throttle Cleaner",
        "Battery Terminal Protector",
      ]),
      buildCategory("Industrial Cleaning", [
        "Degreasers",
        "Parts Washers",
        "Mould Cleaners",
      ]),
    ],
  },
  {
    name: "ESAB",
    slug: "esab",
    abbr: "ES",
    sector: "welding",
    sectorLabel: sectorLabels.welding,
    description: sectorDescriptions.welding,
    categories: [
      buildCategory("Welding Machines", [
        "MIG/MAG Welders",
        "TIG Welders",
        "MMA Stick Welders",
        "Plasma Cutters",
        "Multi-Process Welders",
      ]),
      buildCategory("Welding Consumables", [
        "Stick Electrodes",
        "MIG Wires",
        "TIG Filler Rods",
        "Flux-Cored Wires",
        "Submerged Arc Products",
      ]),
      buildCategory("Welding Safety & PPE", [
        "Auto-Darkening Welding Helmets",
        "Welding Gloves",
        "Welding Jackets",
        "Welding Curtains",
      ]),
      buildCategory("Cutting Equipment", [
        "Plasma Cutting Systems",
        "Gas Cutting Machines",
        "Cutting Torches",
        "Gouging Electrodes",
      ]),
    ],
  },
];

// Helper functions
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getCategoryBySlug(
  brandSlug: string,
  categorySlug: string
): { brand: Brand; category: Category } | undefined {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return undefined;
  const category = brand.categories.find((c) => c.slug === categorySlug);
  if (!category) return undefined;
  return { brand, category };
}

export function getTotalProducts(brand: Brand): number {
  return brand.categories.reduce(
    (acc, cat) =>
      acc + cat.subcategories.reduce((a, sub) => a + Math.max(sub.products.length, 1), 0),
    0
  );
}

export function getTotalSubcategories(brand: Brand): number {
  return brand.categories.reduce((acc, cat) => acc + cat.subcategories.length, 0);
}
