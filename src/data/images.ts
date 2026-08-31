const unsplash = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const images = {
  logo: "/images/devrana-logo.jpeg",
  hero: "/images/devrana-dining-hall.jpeg",
  about: "/images/devrana-interior-window.jpeg",
  kitchen: unsplash("photo-1555939594-58d7cb561ad1", 1200),
  finalCta: "/images/devrana-anniversary.jpeg",
  realInterior: "/images/devrana-dining-hall.jpeg",
  realWindow: "/images/devrana-interior-window.jpeg",
  realAnniversary: "/images/devrana-anniversary.jpeg",
  realCelebration: "/images/devrana-celebration.jpeg",
  realLogo: "/images/devrana-logo.jpeg",

  menu: {
    paneerButterMasala: unsplash("photo-1631452180519-c014fe946bc7", 800),
    paneerLababdar: unsplash("photo-1546833999-b9f581a1996d", 800),
    shahiPaneer: unsplash("photo-1565557623262-b51c2513a641", 800),
    kadhaiPaneer: unsplash("photo-1589301760014-d929f3979dbc", 800),
    paneerDoPyaza: unsplash("photo-1631452180519-c014fe946bc7", 800),
    teenMirchiKaPaneer: unsplash("photo-1589301760014-d929f3979dbc", 800),
    palakPaneer: unsplash("photo-1601050690597-df0568f70950", 800),
    malaiKofta: unsplash("photo-1585937421612-70a008356fbe", 800),
    mixVeg: unsplash("photo-1546833999-b9f581a1996d", 800),
    mushroomMasala: unsplash("photo-1546833999-b9f581a1996d", 800),
    matarMushroom: unsplash("photo-1546833999-b9f581a1996d", 800),
    hyderabadiSoyaChaap: unsplash("photo-1599487488170-d11ec9c172f0", 800),
    masaledarChole: unsplash("photo-1589301760014-d929f3979dbc", 800),
    pindiChana: unsplash("photo-1589301760014-d929f3979dbc", 800),
    dumAloo: unsplash("photo-1601050690117-94f5f6fa8bd8", 800),
    alooJeera: unsplash("photo-1601050690117-94f5f6fa8bd8", 800),
    dalMakhani: unsplash("photo-1546833999-b9f581a1996d", 800),
    dalDevrana: unsplash("photo-1546833999-b9f581a1996d", 800),
    dalTadka: unsplash("photo-1546833999-b9f581a1996d", 800),
    dalFry: unsplash("photo-1546833999-b9f581a1996d", 800),
    plainRice: unsplash("photo-1512058564366-18510be2db19", 800),
    jeeraRice: unsplash("photo-1601050690117-94f5f6fa8bd8", 800),
    matarPulao: unsplash("photo-1512058564366-18510be2db19", 800),
    vegHandiBiryani: unsplash("photo-1563379926898-05f4575a45d8", 800),
  },

  gallery: [
    {
      src: "/images/devrana-dining-hall.jpeg",
      tag: "restaurant",
      alt: "Spacious main dining hall with modern warm ambiance at Devrana Express Siwan",
    },
    {
      src: "/images/devrana-logo.jpeg",
      tag: "restaurant",
      alt: "Devrana Express Siwan official illuminated royal logo badge",
    },
    {
      src: "/images/devrana-interior-window.jpeg",
      tag: "dining",
      alt: "Comfortable family dining area with large windows at Devrana Express Siwan",
    },
    {
      src: "/images/devrana-anniversary.jpeg",
      tag: "celebrations",
      alt: "Special anniversary celebration setup and private dining backdrop",
    },
    {
      src: "/images/devrana-celebration.jpeg",
      tag: "celebrations",
      alt: "Birthday party celebration with three-tier cake and balloon arch",
    },
    {
      src: unsplash("photo-1631452180519-c014fe946bc7", 1200),
      tag: "food",
      alt: "Signature creamy Paneer Butter Masala served fresh",
    },
    {
      src: unsplash("photo-1546833999-b9f581a1996d", 1200),
      tag: "food",
      alt: "Rich slow-cooked Dal Makhani and Dal Devrana with fresh cream",
    },
    {
      src: unsplash("photo-1563379926898-05f4575a45d8", 1200),
      tag: "food",
      alt: "Authentic aromatic Veg Handi Biryani served with fragrant basmati rice",
    },
    {
      src: unsplash("photo-1589301760014-d929f3979dbc", 1200),
      tag: "food",
      alt: "Kadhai Paneer and Masaledar Chole with aromatic Indian spices",
    },
  ],
};