export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  techStack: string[];
  highlights: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  category: "mobile" | "web" | "fullstack";
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "vaultmaster",
    title: "VaultMaster",
    tagline: "Your pocket filing cabinet — scan, encrypt, sync.",
    description:
      "A secure, offline-first mobile application designed for professionals, freelancers, and students. Smartly scan physical documents, import digital files, organize them into customizable folders, protect sensitive assets behind device-level biometrics, and seamlessly synchronize to the cloud.",
    problem:
      "Physical and digital documents are scattered, insecure, and impossible to access offline. Existing solutions force cloud dependence and subscription models.",
    techStack: ["Flutter", "Firebase", "Cloudinary", "ML Kit", "Riverpod"],
    highlights: [
      "Offline-first engine with background cloud sync",
      "Biometric security vault (FaceID/Fingerprint/PIN)",
      "SHA-256 byte-level deduplication",
      "Smart document scanner with edge detection",
      "Clean Architecture with 4-layer separation",
    ],
    image: "/images/vaultmaster.png",
    githubUrl: "https://github.com/AliAhmedoo5/VaultMaster",
    category: "mobile",
    featured: true,
    accentColor: "#8B5CF6",
  },
  {
    id: "wealthodyssey",
    title: "WealthOdyssey",
    tagline: "A premium idle RPG for mastering personal finance.",
    description:
      "An immersive financial-literacy RPG that gamifies life's major fiscal milestones. Starting at age 18, journey through a simulated lifetime making critical decisions about education, career paths, real estate, stock markets, and business empires.",
    problem:
      "Financial literacy is boring and inaccessible. Traditional education fails to teach practical money management in an engaging way.",
    techStack: ["React 19", "Vite", "Capacitor", "Firebase", "Zustand", "Tailwind CSS"],
    highlights: [
      "Local-first with cloud-synced architecture",
      "High-precision idle earnings engine",
      "Prestige loop with permanent progression",
      "Real-time stock exchange & real estate simulators",
      "Cross-platform via Capacitor (Web + Android)",
    ],
    image: "/images/wealthodyssey.png",
    githubUrl: "https://github.com/AliAhmedoo5/WealthOdysseyGame",
    category: "web",
    featured: true,
    accentColor: "#F59E0B",
  },
  {
    id: "echologic",
    title: "EchoLogic",
    tagline: "Brain off. Logic on. — Quote discovery for Gen Z.",
    description:
      "A high-speed, minimalist quote discovery app delivering hilariously absurd, self-referential, and profound quotes with a striking Neo-Brutalist aesthetic. Features 4 premium themes and 200+ curated quotes across 15+ categories.",
    problem:
      "Quote apps are generic and visually boring. Gen Z needs a fast, aesthetic, and personality-driven experience — not another motivational poster.",
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Firebase", "Hilt", "AdMob"],
    highlights: [
      "4 premium themes (Neo-Brutalist, OLED, Hacker, Editorial)",
      "200+ offline-seeded quotes with cloud sync",
      "Google Play Billing integration",
      "MVVM + Repository pattern architecture",
      "Custom crash reporter with recovery UI",
    ],
    image: "/images/echologic.png",
    githubUrl: "https://github.com/AliAhmedoo5/EchoLogic",
    category: "mobile",
    featured: false,
    accentColor: "#FACC15",
  },
  {
    id: "boxed",
    title: "Boxed",
    tagline: "X-ray vision for your storage — scan, tag, find.",
    description:
      "An offline-first mobile application that gives users 'X-ray vision' for their physical storage. Combine local photo capture with on-device QR code generation to create a visual inventory of any box, bin, or container.",
    problem:
      "The human brain is terrible at remembering contents of opaque containers. Rummaging through boxes months later is frustrating and leads to duplicate purchases.",
    techStack: ["Flutter", "SQLite", "QR Codes", "PathProvider"],
    highlights: [
      "Zero cloud — 100% private, data never leaves device",
      "No subscriptions, no vendor lock-in",
      "Millisecond search via offline SQLite",
      "Full database export as .zip",
      "Works in basements with zero cell reception",
    ],
    image: "/images/boxed.png",
    githubUrl: "https://github.com/AliAhmedoo5/Boxed",
    category: "mobile",
    featured: false,
    accentColor: "#06B6D4",
  },
];
