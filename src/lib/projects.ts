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
    id: "stallhazir",
    title: "StallHazir",
    tagline: "Real-time street food discovery and live GPS broadcasting platform.",
    description:
      "A hyper-local real-time web application connecting foodies with street food vendors. Casual users explore an interactive map with live GPS tracking, distance calculations, and instant walking navigation, while mobile vendors initiate 4-hour live broadcasting sessions with client-side photo optimization.",
    problem:
      "Street food lovers struggle to locate roaming food carts and pop-up stalls in real time, while informal vendors lack low-barrier tools to broadcast their live location without expensive hardware or app registration.",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "Leaflet",
      "Zustand",
    ],
    highlights: [
      "Live GPS broadcasting with 4-hour auto-expiring vendor sessions",
      "Customer discovery radar with Haversine distance tracking & Leaflet maps",
      "Client-side image optimization (<500KB) with direct Supabase Storage ingestion",
      "Passkey-gated admin moderation portal with category CRUD & instant vendor killswitches",
      "Decoupled hash routing with robust 404 fallback handling",
    ],
    image: "/images/stallhazir.png",
    githubUrl: "https://github.com/AliAhmedoo5/StallHazir",
    liveUrl: "https://stallhazir.vercel.app",
    category: "web",
    featured: true,
    accentColor: "#F97316",
  },
  {
    id: "vibeboard",
    title: "VibeBoard",
    tagline: "The collaborative AI coding context hub & system prompt manager.",
    description:
      "A collaborative workspace platform tailored for AI-first engineering teams. Manage, version-control, and share project context files and system prompts with dynamic variable interpolation, synchronized locally via a custom Node.js CLI tool.",
    problem:
      "AI-first developers ('vibe coders') scatter system prompts, markdown context files, and agent rules across disparate repos and machines without unified version control, file locking, or terminal-level synchronization.",
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "Node.js CLI",
    ],
    highlights: [
      "Bidirectional CLI file sync (`vibeboard link`, `push`, `pull`) via token auth",
      "Dynamic System Prompt Manager with variable templating (`{{var}}`)",
      "Live split-pane Markdown editor with real-time preview & focus mode",
      "Supabase Realtime multi-user presence indicators & chronological activity feed",
      "Token-authenticated REST API for headless terminal and developer tool integration",
    ],
    image: "/images/vibeboard.png",
    githubUrl: "https://github.com/AliAhmedoo5/vibeboard",
    liveUrl: "https://vibeboardapp.vercel.app",
    category: "fullstack",
    featured: false,
    accentColor: "#6366F1",
  },
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
    liveUrl: "https://vaultmasterapp.web.app",
    category: "mobile",
    featured: false,
    accentColor: "#8B5CF6",
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
    liveUrl: "https://echologic.web.app",
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
