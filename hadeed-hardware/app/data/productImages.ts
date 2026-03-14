// Stock images for product categories from Unsplash
const imageMap: Record<string, string[]> = {
  // Power Tools
  "angle-grinders": [
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
  ],
  "drills---drivers": [
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
  ],
  "circular-saws": [
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  ],
  // Hand Tools
  "screwdrivers": [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  ],
  "hammers": [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
  ],
  // Safety
  "safety-helmets": [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
  "safety-glasses": [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  ],
  // Welding
  "welding-machines": [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
  // Testing
  "digital-multimeters": [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
};

// Sector-based fallback images
const sectorImages: Record<string, string[]> = {
  tools: [
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
  ],
  safety: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
  welding: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  ],
  chemicals: [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
  testing: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  ],
  abrasives: [
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
  ],
};

export function getProductImages(slug: string, sector: string): string[] {
  return imageMap[slug] || sectorImages[sector] || sectorImages.tools;
}

export function getProductImage(slug: string, sector: string): string {
  return getProductImages(slug, sector)[0];
}
