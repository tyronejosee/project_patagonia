export type Cabin = {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  shortDescription: string;
  mainImage: string;
  gallery: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  price: number;
  features: { title: string; desc: string; icon: string }[];
  amenities: string[];
  commonSpaces: { title: string; desc: string; images: string[] };
  rules: { item: string; detail: string }[];
};

export const cabins: Cabin[] = [
  {
    id: "1",
    slug: "alaska",
    name: "Alaska",
    title: "Cabaña Alaska",
    description:
      "Ubicada en el corazón de Malalcahuello, Alaska ofrece una experiencia de montaña inigualable. Diseñada con maderas nobles y grandes ventanales que permiten una conexión total con el entorno nevado.",
    shortDescription: "Refugio cálido con vistas espectaculares a la cordillera",
    mainImage: "/alaska/Alaska-foto.jpg",
    gallery: [
      "/alaska/Alaska-foto.jpg",
      "/alaska/Cabana-Alaska.jpg",
      "/alaska/Cabana-cerca-de-la-nieve.jpg",
      "/alaska/Cabana-cordillera-Chile.jpg",
      "/alaska/Cabana-de-Chile-Sur.jpg",
      "/alaska/Cabanas-malalcahuello-nieve.jpg",
      "/alaska/Cabanas-sur-de-Chile.jpg",
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    sqm: 65,
    price: 85000,
    features: [
      {
        title: "Calefacción a leña",
        desc: "Bosca de alta eficiencia para los días de frío.",
        icon: "flame",
      },
      {
        title: "Cocina completa",
        desc: "Equipada con todo lo necesario para tu estadía.",
        icon: "utensils",
      },
      {
        title: "Camino accesible",
        desc: "Acceso despejado incluso en días de nieve.",
        icon: "car",
      },
      {
        title: "WiFi Satelital",
        desc: "Conexión estable de alta velocidad (Starlink).",
        icon: "wifi",
      },
      {
        title: "Jacuzzi exterior",
        desc: "Tinaja de madera para relajarse bajo las estrellas.",
        icon: "waves",
      },
      {
        title: "Parrilla",
        desc: "Área techada para asados en cualquier clima.",
        icon: "beef",
      },
    ],
    amenities: [
      "Ropa de cama premium",
      "Toallas incluidas",
      "Kit de bienvenida",
      "Leña de cortesía",
      "Estacionamiento",
      "Cafetera Nespresso",
    ],
    commonSpaces: {
      title: "Espacios comunes",
      desc: "Nuestros huéspedes tienen acceso a áreas compartidas diseñadas para el bienestar y la recreación en medio del bosque nativo.",
      images: ["/gym/gym-1.jpg", "/gym/gym-2.jpg"],
    },
    rules: [
      { item: "Check-in", detail: "A partir de las 15:00 hrs" },
      { item: "Check-out", detail: "Hasta las 11:00 hrs" },
      {
        item: "Prohibido fumar",
        detail: "Espacio libre de humo en interiores",
      },
      {
        item: "Mascotas",
        detail: "Consultar disponibilidad (Pet Friendly con cargo)",
      },
      {
        item: "Ruidos molestos",
        detail: "Después de las 23:00 hrs para respetar el entorno",
      },
    ],
  },
  {
    id: "2",
    slug: "cautin",
    name: "Cautín",
    title: "Cabaña Cautín",
    description:
      "La cabaña Cautín destaca por su arquitectura asimétrica y techos altos. Un espacio lujoso pensado para familias que buscan una base de operaciones para el esquí y la montaña.",
    shortDescription: "Arquitectura moderna con ventanales de piso a techo",
    mainImage: "/cautin/Cautin-foto.jpg",
    gallery: [
      "/cautin/Cautin-foto.jpg",
      "/cautin/499597079_18040285769627438_6944599895803091988_n.jpg",
      "/cautin/Cabanas-cerca-de-Pucon.jpg",
      "/cautin/Cabanas-en-la-nieve-Chile-2.jpg",
      "/cautin/Cabanas-en-la-nieve-Chile.jpg",
      "/cautin/Cabanas-para-ski.jpg",
      "/cautin/cabana-malalcahuello-nieve.jpg",
    ],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    sqm: 90,
    price: 95000,
    features: [
      {
        title: "Living amplio",
        desc: "Techos de doble altura y gran iluminación natural.",
        icon: "sofa",
      },
      {
        title: "Cocina Gourmet",
        desc: "Isla central y electrodomésticos de alta gama.",
        icon: "cooking",
      },
      {
        title: "Camino accesible",
        desc: "Fácil llegada para todo tipo de vehículos.",
        icon: "car",
      },
      {
        title: "WiFi Profesional",
        desc: "Ideal para nómadas digitales (Starlink).",
        icon: "wifi",
      },
      {
        title: "Jacuzzi Doble",
        desc: "Tinaja amplia para toda la familia.",
        icon: "waves",
      },
      {
        title: "Deck Exterior",
        desc: "Gran terraza con vista al volcán Lonquimay.",
        icon: "tent",
      },
    ],
    amenities: [
      "Secador de pelo",
      'Smart TV 50"',
      "Lavavajillas",
      "Caja fuerte",
      "Ropa de cama de lujo",
      "Kit de asado completo",
    ],
    commonSpaces: {
      title: "Áreas de relajación",
      desc: "Comparte momentos únicos en nuestro gimnasio equipado y áreas de lectura rodeadas de araucarias milenarias.",
      images: ["/gym/gym-1.jpg", "/gym/gym-2.jpg"],
    },
    rules: [
      { item: "Check-in", detail: "Desde las 16:00 hrs" },
      { item: "Check-out", detail: "Hasta las 12:00 hrs" },
      {
        item: "Cuidado entorno",
        detail: "Prohibido arrojar basura en el predio",
      },
      { item: "Eventos", detail: "No se permiten fiestas masivas" },
      { item: "Calefacción", detail: "Uso responsable de la leña y estufas" },
    ],
  },
  {
    id: "3",
    slug: "woods",
    name: "Woods",
    title: "Cabaña Woods",
    description:
      "Woods es un refugio contemporáneo que parece flotar entre los árboles. Su diseño minimalista y acogedor invita a la desconexión total y el descanso profundo.",
    shortDescription: "Diseño minimalista integrado perfectamente con el bosque",
    mainImage: "/woods/540995218_18051919616627438_5240315733269142835_n.jpg",
    gallery: [
      "/woods/540995218_18051919616627438_5240315733269142835_n.jpg",
      "/woods/20241017_110724.avif",
      "/woods/20241018_184839.avif",
      "/woods/20241022_114856.avif",
      "/woods/20241022_115320.avif",
      "/woods/20241022_144935.avif",
    ],
    capacity: 5,
    bedrooms: 2,
    bathrooms: 2,
    sqm: 75,
    price: 90000,
    features: [
      {
        title: "Arquitectura Wood",
        desc: "Madera tratada para un ambiente cálido.",
        icon: "tree",
      },
      {
        title: "Diseño Loft",
        desc: "Concepto abierto para una mayor sensación de espacio.",
        icon: "layout",
      },
      {
        title: "Bosque Privado",
        desc: "Acceso directo a senderos dentro de la propiedad.",
        icon: "mountain",
      },
      {
        title: "WiFi Starlink",
        desc: "Velocidad para streaming y teletrabajo.",
        icon: "wifi",
      },
      {
        title: "Estufa a Pellet",
        desc: "Calefacción automática y ecológica.",
        icon: "flame",
      },
      {
        title: "Terraza Zen",
        desc: "Espacio para yoga o contemplación matutina.",
        icon: "sun",
      },
    ],
    amenities: [
      "Artículos de aseo orgánicos",
      "Albornoces",
      "Altavoz Bluetooth",
      "Guía de senderismo local",
      "Parking cubierto",
      "Té y café orgánico",
    ],
    commonSpaces: {
      title: "Espacios de bienestar",
      desc: "Nuestra zona de bienestar incluye un gimnasio funcional y rincones de paz bajo el follaje del bosque nativo.",
      images: ["/gym/gym-1.jpg", "/gym/gym-2.jpg"],
    },
    rules: [
      { item: "Check-in", detail: "A las 15:30 hrs" },
      { item: "Check-out", detail: "A las 11:30 hrs" },
      {
        item: "Fuego",
        detail: "Solo usar parrilla y estufa en zonas habilitadas",
      },
      {
        item: "Calzado",
        detail: "Se recomienda andar sin zapatos en el interior",
      },
      {
        item: "Residuos",
        detail: "Punto de reciclaje disponible en el acceso",
      },
    ],
  },
];
