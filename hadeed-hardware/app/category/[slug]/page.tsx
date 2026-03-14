import { brands } from "@/app/data/products";
import CategorySectorClient from "./CategorySectorClient";

const categoryConfig: Record<
  string,
  { title: string; description: string; sectors: string[]; keywords: string[] }
> = {
  "power-tools": {
    title: "Power Tools",
    description:
      "High-performance power tools for construction, fabrication, and industrial applications from leading global brands.",
    sectors: ["tools"],
    keywords: [
      "power tools",
      "drills",
      "drivers",
      "grinders",
      "sanders",
      "saws",
      "rotary",
      "demolition",
      "batteries",
      "chargers",
      "outdoor",
      "nailers",
    ],
  },
  "hand-tools": {
    title: "Hand Tools",
    description:
      "Reliable hand tools designed for precision and durability — screwdrivers, pliers, wrenches, hammers, and more.",
    sectors: ["tools"],
    keywords: [
      "hand tools",
      "screwdrivers",
      "pliers",
      "wrenches",
      "hammers",
      "chisels",
      "measuring",
      "tool sets",
      "kits",
      "cutting tools",
      "storage",
      "pipe tools",
      "press fitting",
      "drain",
    ],
  },
  "safety-equipment": {
    title: "Safety Equipment",
    description:
      "Professional personal protective equipment and safety gear for workplace safety across all industries.",
    sectors: ["safety"],
    keywords: [],
  },
  "welding-cutting": {
    title: "Welding & Cutting",
    description:
      "Complete welding machines, electrodes, consumables, gas equipment, and cutting solutions for fabrication works.",
    sectors: ["welding"],
    keywords: [],
  },
  "electrical-measuring": {
    title: "Electrical & Measuring",
    description:
      "Accurate electrical testing, measuring instruments, gas detection, and calibration equipment from top brands.",
    sectors: ["testing"],
    keywords: [],
  },
  "industrial-chemicals": {
    title: "Industrial Chemicals",
    description:
      "Industrial chemicals, lubricants, adhesives, sealants, degreasers, and maintenance products.",
    sectors: ["chemicals", "abrasives"],
    keywords: [],
  },
};

const validSlugs = Object.keys(categoryConfig);

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = categoryConfig[slug];

  if (!config) {
    return <div>Category not found</div>;
  }

  // Gather all brands and their categories that match this sector
  const matchingBrands = brands
    .filter((b) => config.sectors.includes(b.sector))
    .map((brand) => ({
      brand,
      categories: brand.categories,
    }));

  return (
    <CategorySectorClient
      slug={slug}
      title={config.title}
      description={config.description}
      matchingBrands={matchingBrands.map((mb) => ({
        name: mb.brand.name,
        slug: mb.brand.slug,
        abbr: mb.brand.abbr,
        sector: mb.brand.sector,
        categories: mb.categories.map((c) => ({
          name: c.name,
          slug: c.slug,
          subcategories: c.subcategories.map((s) => ({
            name: s.name,
            slug: s.slug,
          })),
        })),
      }))}
    />
  );
}
