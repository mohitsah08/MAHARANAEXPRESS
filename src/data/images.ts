const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const asset = (path: string) => `${basePath}${path}`;

export const images = {
  logo: asset("/images/logo.jpeg"),
  hero: asset("/images/maharana-dining-hall.jpeg"),
  about: asset("/images/maharana-interior-window.jpeg"),
  kitchen: asset("/images/menu/kadhai-paneer.jpeg"),
  finalCta: asset("/images/maharana-anniversary.jpeg"),
  realInterior: asset("/images/maharana-dining-hall.jpeg"),
  realWindow: asset("/images/maharana-interior-window.jpeg"),
  realAnniversary: asset("/images/maharana-anniversary.jpeg"),
  realCelebration: asset("/images/maharana-celebration.jpeg"),
  realLogo: asset("/images/logo.jpeg"),

  menu: {
    paneerButterMasala: asset("/images/menu/paneer-butter-masala.jpeg"),
    paneerLababdar: asset("/images/menu/paneer-lababdar.jpeg"),
    shahiPaneer: asset("/images/menu/shahi-paneer.jpeg"),
    kadhaiPaneer: asset("/images/menu/kadhai-paneer.jpeg"),
    paneerDoPyaza: asset("/images/menu/paneer-do-pyaza.jpeg"),
    teenMirchiKaPaneer: asset("/images/menu/teen-mirchi-ka-paneer.jpeg"),
    palakPaneer: asset("/images/menu/palak-paneer.jpeg"),
    malaiKofta: asset("/images/menu/malai-kofta.jpeg"),
    mixVeg: asset("/images/menu/mix-veg.jpeg"),
    mushroomMasala: asset("/images/menu/mushroom-masala.jpeg"),
    matarMushroom: asset("/images/menu/matar-mushroom.jpeg"),
    hyderabadiSoyaChaap: asset("/images/menu/hyderabadi-soya-chaap.jpeg"),
    masaledarChole: asset("/images/menu/masaledar-chole.jpeg"),
    pindiChana: asset("/images/menu/pindi-chana.jpeg"),
    dumAloo: asset("/images/menu/dum-aloo.jpeg"),
    alooJeera: asset("/images/menu/aloo-jeera.jpeg"),
    dalMakhani: asset("/images/menu/dal-makhani.jpeg"),
    dalMaharana: asset("/images/menu/dal-maharana.jpeg"),
    dalTadka: asset("/images/menu/dal-tadka.jpeg"),
    dalFry: asset("/images/menu/dal-fry.jpeg"),
    plainRice: asset("/images/menu/plain-rice.jpeg"),
    jeeraRice: asset("/images/menu/jeera-rice.jpeg"),
    matarPulao: asset("/images/menu/matar-pulao.jpeg"),
    vegHandiBiryani: asset("/images/menu/veg-handi-biryani.jpeg"),
  },

  gallery: [
    {
      src: asset("/images/maharana-dining-hall.jpeg"),
      tag: "restaurant",
      alt: "Spacious main dining hall with modern warm ambiance at Maharana Express",
    },
    {
      src: asset("/images/logo.jpeg"),
      tag: "restaurant",
      alt: "Maharana Express official illuminated royal logo badge",
    },
    {
      src: asset("/images/maharana-interior-window.jpeg"),
      tag: "dining",
      alt: "Comfortable family dining area with large windows at Maharana Express",
    },
    {
      src: asset("/images/maharana-anniversary.jpeg"),
      tag: "celebrations",
      alt: "Special anniversary celebration setup and private dining backdrop",
    },
    {
      src: asset("/images/maharana-celebration.jpeg"),
      tag: "celebrations",
      alt: "Birthday party celebration with three-tier cake and balloon arch",
    },
    {
      src: asset("/images/menu/paneer-butter-masala.jpeg"),
      tag: "food",
      alt: "Signature creamy Paneer Butter Masala served fresh",
    },
    {
      src: asset("/images/menu/dal-makhani.jpeg"),
      tag: "food",
      alt: "Rich slow-cooked Dal Makhani and authentic dal specialties with fresh cream",
    },
    {
      src: asset("/images/menu/veg-handi-biryani.jpeg"),
      tag: "food",
      alt: "Authentic aromatic Veg Handi Biryani served with fragrant basmati rice",
    },
    {
      src: asset("/images/menu/kadhai-paneer.jpeg"),
      tag: "food",
      alt: "Kadhai Paneer prepared with fresh spices and cottage cheese",
    },
  ],
};