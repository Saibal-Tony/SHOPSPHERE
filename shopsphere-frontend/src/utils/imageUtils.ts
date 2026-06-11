// All images mapped by category/subcategory
// Paths start with /assets/ because they're in public/assets/

export const images = {
  men: {
    shirts: Array.from({ length: 19 }, (_, i) => `/assets/men/shirts/shirts_${i + 1}.jpg`),
    pants:  Array.from({ length: 11 }, (_, i) => `/assets/men/pants/pants_${i + 1}.jpg`),
  },
  women: {
    shirts:   Array.from({ length: 10 }, (_, i) => `/assets/women/shirts/shirts_${i + 1}.jpg`),
    pants:    Array.from({ length: 10 }, (_, i) => `/assets/women/pants/pants_${i + 1}.jpg`),
    frock:    Array.from({ length: 5  }, (_, i) => `/assets/women/frock/frock_${i + 1}.jpg`),
    specials: Array.from({ length: 5  }, (_, i) => `/assets/women/specials/specials_${i + 1}.jpg`),
  },
  bags: Array.from({ length: 30 }, (_, i) => `/assets/bags/bags_${i + 1}.jpg`),
  footwear: Array.from({ length: 30 }, (_, i) => `/assets/footwear/shoes_${i + 1}.jpg`),
  watches: Array.from({ length: 30 }, (_, i) => `/assets/watches/watches_${i + 1}.jpg`),
  accessories: {
    sunglasses: Array.from({ length: 11 }, (_, i) => `/assets/accessories/sunglasses/sunglasses_${i + 1}.jpg`),
    caps:       Array.from({ length: 6  }, (_, i) => `/assets/accessories/caps/caps_${i + 1}.jpg`),
    rings:      Array.from({ length: 5  }, (_, i) => `/assets/accessories/rings/rings_${i + 1}.jpg`),
    necklaces:  Array.from({ length: 3  }, (_, i) => `/assets/accessories/necklaces/necklaces_${i + 1}.jpg`),
    bracelets:  Array.from({ length: 4  }, (_, i) => `/assets/accessories/bracelets/bracelets_${i + 1}.jpg`),
    earrings:   ["/assets/accessories/earrings/earrings_1.jpg"],
  },
  beauty: {
    face_cream: Array.from({ length: 14 }, (_, i) => `/assets/beauty/face_cream/facecream_${i + 1}.jpg`),
    lipsticks:  Array.from({ length: 5  }, (_, i) => `/assets/beauty/lipsticks/lipsticks_${i + 1}.jpg`),
    brushes:    Array.from({ length: 4  }, (_, i) => `/assets/beauty/brushes/brushes_${i + 1}.jpg`),
    body_oil:   Array.from({ length: 3  }, (_, i) => `/assets/beauty/body_oil/bodyoil_${i + 1}.jpg`),
    foundation: Array.from({ length: 2  }, (_, i) => `/assets/beauty/foundation/foundation_${i + 1}.jpg`),
    palette:    Array.from({ length: 2  }, (_, i) => `/assets/beauty/palette/palette_${i + 1}.jpg`),
  },
  electronics: {
    earbuds:   Array.from({ length: 2  }, (_, i) => `/assets/electronics/earbuds/earbuds_${i + 1}.jpg`),
    headset:   Array.from({ length: 3  }, (_, i) => `/assets/electronics/headset/headset_${i + 1}.jpg`),
    keyboards: Array.from({ length: 5  }, (_, i) => `/assets/electronics/keyboards/keyboards_${i + 1}.jpg`),
    laptops:   Array.from({ length: 6  }, (_, i) => `/assets/electronics/laptops/laptops_${i + 1}.jpg`),
    consoles:  Array.from({ length: 9  }, (_, i) => `/assets/electronics/consoles/consoles_${i + 1}.jpg`),
    camera:    Array.from({ length: 3  }, (_, i) => `/assets/electronics/camera/camera_${i + 1}.jpg`),
    VR:        Array.from({ length: 2  }, (_, i) => `/assets/electronics/VR/VR_${i + 1}.jpg`),
  },
  hero: "/assets/hero.png",
  heroBanner: "/assets/hero_banner.jpg",
  sale: [
    "/assets/sale_1.jpg",
    "/assets/sale_2.jpg",
    "/assets/sale_3.jpg",
  ],
};

// Pick N random images from an array
export function pickRandom(arr: string[], count = 2): string[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, arr.length));
}

// Get first N images
export function pick(arr: string[], count = 2): string[] {
  return arr.slice(0, count);
}