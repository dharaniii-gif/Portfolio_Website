import type { Project, SkillCategory, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: "Dharani S.",
  role: "Creative Developer",
  subRole: "Development + UI/UX",
  tagline: "Turning ideas into beautiful, responsive and meaningful web experiences.",
  location: "Coimbatore, India",
  college: "KPR College of Arts Science and Research",
  degree: "B.Sc Computer Science",
  period: "2024 – Present",
  cgpa: "7.5",
  email: "dharanii0211@gmail.com",
  phone: "+9042228584",
  linkedin: "https://www.linkedin.com/in/dharani2006",
  github: "https://github.com/dharaniii-gif",
  resumePath: "/DHARANI-RESUME.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: "elite-canine",
    number: "01",
    title: "Elite Canine – UI/UX Design",
    domain: "UI/UX & Product Design",
    concept: "High-Fidelity Canine Magazine, Breed Discovery Platform & Heritage UI/UX Specification",
    stack: ["Visily", "UI/UX Design", "Wireframing", "High-Fidelity Prototyping", "Design System", "Dark Theme UI"],
    description: "A comprehensive UI/UX design prototype engineered for canine enthusiasts to explore dog breeds, read curated magazine articles, compare breed temperaments, and navigate canine historical archives, hosted in Dharani's central PROJECTS repository alongside the full design specification document.",
    purpose: "Crafting an intuitive, visually harmonious, and engaging digital experience in Visily following user-centered navigation, consistent card-based layouts, and responsive design principles.",
    features: [
      "Modern Home Page featuring featured editorials, hero discovery banners, and curated categories",
      "Comprehensive Breed Collection catalog with multi-attribute filtering and visual cards",
      "Detailed Breed Profile screens displaying origins, physical traits, care guides, and temperament indicators",
      "Canine Atlas mapping global breed heritage and geographical origins",
      "Magazine Hub and deep-dive Article Details layout for editorial reading",
      "Interactive Breed Comparison view benchmarking multiple breeds side-by-side",
      "Curated showcases for Breeds by Country, Rare Breeds, and Canine History Timeline",
      "Includes full 6.8MB specification document (EliteCanine.pdf.pdf) hosted in Dharani's PROJECTS monorepo"
    ],
    contribution: [
      "Spearheaded user research and complete wireframing process in Visily",
      "Constructed a high-contrast dark theme design system with warm golden-amber accents",
      "Engineered reusable UI components including breed cards, article cards, and filter chips",
      "Designed an interactive clickable prototype linking all 11+ application viewports",
      "Curated production-ready assets and design specifications in GitHub PROJECTS archive"
    ],
    screenshots: [
      {
        url: "/projects/elite-canine/elite-canine-home.png",
        caption: "Canine Elite — Luxury Magazine & Breed Discovery Hero"
      },
      {
        url: "/projects/elite-canine/elite-canine-breed-collections.png",
        caption: "Breed Collections — Working, Hound, Herding, Sporting & Terrier Groups"
      },
      {
        url: "/projects/elite-canine/elite-canine-breed-comparison.png",
        caption: "Interactive Breed Comparison — Technical Specs, Cognitive Mastery & Lifestyle Compatibility"
      },
      {
        url: "/projects/elite-canine/elite-canine-atlas-heritage.png",
        caption: "The Atlas of Canine Heritage — Historical Migration Paths & Global Breed Directory"
      },
      {
        url: "/projects/elite-canine/elite-canine-history-timeline.png",
        caption: "The Thread of History — Canine Evolutionary Timeline from 15,000 BC to Modern Day"
      },
      {
        url: "/projects/elite-canine/elite-canine-magazine-editorial.png",
        caption: "Magazine Hub & Editorial Narratives — The Silent Guardians & The Weekly Dispatch"
      },
      {
        url: "/projects/elite-canine/elite-canine-borzoi-article.png",
        caption: "Deep-Dive Article Layout — A Borzoi Odyssey, Typography & Anatomy of Aristocracy"
      },
      {
        url: "/projects/elite-canine/elite-canine-about-publication.png",
        caption: "Publication Story & Editorial Board — The Elite Standards & Chronicle of Growth"
      }
    ],
    theme: {
      primary: "#FBBF24", // vibrant sunny yellow
      secondary: "#EAB308", // rich golden yellow
      accent: "#713F12",
      glow: "rgba(250, 204, 21, 0.60)", // luminous yellow glow
      cardBg: "linear-gradient(145deg, rgba(42, 34, 10, 0.92) 0%, rgba(20, 16, 5, 0.98) 100%)",
      border: "rgba(250, 204, 21, 0.70)",
      tagBg: "rgba(250, 204, 21, 0.20)",
      textAccent: "#FEF08A"
    },
    githubUrl: "https://github.com/dharaniii-gif/PROJECTS",
    prototypeUrl: "https://app.visily.ai/projects/264e8da9-6585-4fad-b787-581d1299c27d/boards/2612581",
    badge: "Verified in PROJECTS Repo",
    isPrototype: true
  },
  {
    id: "shopsphere-dashboard",
    number: "02",
    title: "ShopSphere Dashboard",
    domain: "E-Commerce Administration",
    concept: "Full-Stack Merchant Administration & Real-Time Analytics Command Center",
    stack: ["React 18", "Node.js", "Express 5", "MongoDB / Mongoose", "Socket.io", "Chart.js", "Recharts", "Vite"],
    description: "A full-stack administrative platform featuring real-time socket updates, business telemetry charts, modular admin views, and configured REST API endpoints.",
    purpose: "Providing store managers with a central administrative dashboard to monitor orders, inspect real-time metrics, review sales charts, and handle inventory operations.",
    features: [
      "Decoupled full-stack architecture with dedicated frontend-client and backend-server",
      "Real-time bidirectional synchronization powered by Socket.io client and server",
      "Interactive data visualizations with Chart.js, react-chartjs-2, and Recharts",
      "Admin authentication flows with AdminLogin view and environment-driven API URLs",
      "Express REST API controllers configured with CORS, Mongoose models, and dotenv",
      "Deployment manifests configured for Render (render.yaml, Procfile) and Vercel (vercel.json)"
    ],
    contribution: [
      "Configured end-to-end client and server repositories with Vite, React 18, and Express 5",
      "Implemented SocketContext for real-time socket events across dashboard views",
      "Integrated charting libraries for commercial telemetry and order monitoring",
      "Structured environment variables for dynamic switching between local development and production URLs"
    ],
    theme: {
      primary: "#0284C7", // radiant ocean blue
      secondary: "#38BDF8", // electric sky blue
      accent: "#0369A1",
      glow: "rgba(14, 165, 233, 0.60)", // luminous blue glow
      cardBg: "linear-gradient(145deg, rgba(8, 26, 48, 0.92) 0%, rgba(4, 12, 24, 0.98) 100%)",
      border: "rgba(14, 165, 233, 0.70)",
      tagBg: "rgba(14, 165, 233, 0.20)",
      textAccent: "#7DD3FC"
    },
    githubUrl: "https://github.com/dharaniii-gif/shopshpere-dashboard",
    liveUrl: "https://dharaniii-gif.github.io/shopshpere-dashboard/",
    badge: "Live on GitHub Pages"
  },
  {
    id: "restaurant-website",
    number: "03",
    title: "Fresh Food – Responsive E-Commerce",
    domain: "Responsive E-Commerce",
    concept: "Responsive Food E-Commerce Platform & Culinary Ordering Experience",
    stack: ["HTML5", "CSS3", "JavaScript", "CSS Flexbox", "CSS Grid", "Responsive Design", "E-Commerce UI"],
    description: "A fully responsive food e-commerce web platform engineered for intuitive browsing, culinary product catalogs, promotional offers, and table reservation workflows across all modern devices.",
    purpose: "Building a production-ready responsive food e-commerce storefront from scratch demonstrating semantic frontend architecture, mobile-first design, interactive menu exploration, and dynamic client validation.",
    features: [
      "Interactive Food Catalog & E-Commerce Menu presentation with category filtering",
      "Special Promotional Deals & Discount Showcase driving customer conversions",
      "Table Reservation & Online Order booking form with JavaScript input handling",
      "Customer Reviews & Testimonial Ratings establishing commercial trust",
      "Visual Culinary Gallery and Catering service packages",
      "Fully responsive layout optimized across smartphones, tablets, and desktop displays",
      "Smooth micro-interactions, responsive navigation bar, and accessible CTA buttons"
    ],
    contribution: [
      "Engineered semantic HTML5 markup and custom CSS grid/flexbox e-commerce layout",
      "Implemented client-side JavaScript logic for menu item toggles and reservation validation",
      "Designed responsive media queries ensuring pixel-perfect fidelity across all viewports",
      "Deployed public production build directly to GitHub Pages"
    ],
    screenshots: [
      {
        url: "https://github.com/user-attachments/assets/6ecc3784-d175-40a7-9a51-bd8393de328c",
        caption: "Fresh Food E-Commerce — Hero Landing Section & Navigation"
      },
      {
        url: "https://github.com/user-attachments/assets/06aa60e2-31e8-4fdf-8c88-a522acf65438",
        caption: "Interactive Food Menu & E-Commerce Category Catalog"
      },
      {
        url: "https://github.com/user-attachments/assets/0e6beed5-fd20-47fb-a18c-8ca7652a28ca",
        caption: "Promotional Specials & Limited-Time Deals Showcase"
      },
      {
        url: "https://github.com/user-attachments/assets/ad10f144-467d-4b07-8d2b-e4574ec369cf",
        caption: "Table Reservation & Online Order Booking Integration"
      }
    ],
    theme: {
      primary: "#10B981", // vibrant emerald green
      secondary: "#059669", // deep forest green
      accent: "#064E3B",
      glow: "rgba(16, 185, 129, 0.45)", // luminous green glow
      cardBg: "linear-gradient(145deg, rgba(8, 38, 22, 0.88) 0%, rgba(4, 20, 12, 0.96) 100%)",
      border: "rgba(16, 185, 129, 0.45)",
      tagBg: "rgba(16, 185, 129, 0.18)",
      textAccent: "#6EE7B7"
    },
    githubUrl: "https://github.com/dharaniii-gif/restraurant-website",
    liveUrl: "https://dharaniii-gif.github.io/restraurant-website/",
    badge: "Live on GitHub Pages"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "Java", description: "OOP Architecture, Data Structures, Exception Handling, Scanner" },
      { name: "JavaScript", description: "ES6+, Async, DOM Manipulation, Web APIs, Event Handling" },
      { name: "SQL", description: "Relational Queries, Joins, Schema Modeling, Data Integrity" }
    ]
  },
  {
    name: "Frontend",
    items: [
      { name: "HTML5", description: "Semantic Layouts, Accessibility, Modern Web Standards" },
      { name: "CSS3", description: "Flexbox, CSS Grid, 3D Transforms, Responsive Media Queries" },
      { name: "Bootstrap", description: "Component Frameworks, Grid Systems, Responsive Layouts" },
      { name: "React.js", description: "Components, Hooks, State Architecture, Virtual DOM" }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", description: "Event-Driven Runtime, NPM Packages, REST Web Services" },
      { name: "Express.js", description: "Middleware Pipelines, Routing Controllers, API Endpoints" }
    ]
  },
  {
    name: "Database",
    items: [
      { name: "MongoDB", description: "NoSQL Document Storage, Mongoose ODM, Schema Design" },
      { name: "MySQL", description: "Relational Tables, Primary/Foreign Keys, Data Queries" }
    ]
  },
  {
    name: "Tools & Design",
    items: [
      { name: "Git & GitHub", description: "Version Control, Branching, Open-Source Repositories" },
      { name: "VS Code", description: "Modern IDE Customization, Extensions, Terminal Workflow" },
      { name: "Visily", description: "High-Fidelity UI/UX Prototyping, Wireframing, User Flows" }
    ]
  },
  {
    name: "Soft Skills",
    items: [
      { name: "Communication", description: "Articulating technical concepts clearly across collaborative teams" },
      { name: "Teamwork", description: "Empathetic peer collaboration, code review, and collective problem solving" },
      { name: "Adaptability", description: "Swift mastery of emerging tech stacks and evolving requirements" },
      { name: "Self-discipline", description: "Methodical execution, focus on craft quality, and reliable timelines" },
      { name: "Problem-solving", description: "Deconstructing complex bugs into clean, testable logical steps" },
      { name: "Creative Thinker", description: "Harmonizing logical engineering discipline with intuitive UX aesthetic" }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "B.Sc Computer Science",
    subtitle: "KPR College of Arts Science and Research, Coimbatore",
    detail: "Current CGPA: 7.5. Deepening focus on modern software engineering, web architectures, algorithms, and interface design.",
    tag: "Education",
    type: "education"
  },
  {
    period: "2024 (1 Month)",
    title: "UI/UX Design Intern",
    subtitle: "Thiranex (Virtual)",
    detail: "Spearheaded user journey wireframing, high-fidelity design prototyping, design system synthesis, and usability research.",
    tag: "Experience",
    type: "experience"
  },
  {
    period: "2024 – 2025",
    title: "FIXIT @ KPRCAS — Runner-up",
    subtitle: "Departmental Technical Competition",
    detail: "Awarded Runner-Up honors for rapid algorithmic debugging, creative systems thinking, and technical problem remediation.",
    tag: "Honor",
    type: "achievement"
  },
  {
    period: "2024 – 2025",
    title: "Smart India Hackathon",
    subtitle: "National Level Initiative",
    detail: "Active participant in addressing real-world civic and technological problem statements with innovative software solutions.",
    tag: "Hackathon",
    type: "achievement"
  },
  {
    period: "2024 – 2025",
    title: "Google Cloud Agentic AI",
    subtitle: "Emerging Tech Exploration",
    detail: "Exploration and development of generative workflows, agentic AI frameworks, and cloud-native intelligence pipelines.",
    tag: "Specialization",
    type: "achievement"
  },
  {
    period: "2025",
    title: "Code & Concord 25",
    subtitle: "Technical Symposium",
    detail: "Showcased coding acumen, collaborative development strategies, and modern programming benchmarks.",
    tag: "Symposium",
    type: "achievement"
  },
  {
    period: "2024 – 2025",
    title: "Departmental Event Quiz Coordinator",
    subtitle: "KPRCAS Campus Leadership",
    detail: "Orchestrated and conducted large-scale intellectual quiz event for 500+ student participants, managing logistics, scoring systems, and stage coordination.",
    tag: "Leadership",
    type: "leadership"
  },
  {
    period: "2023 – 2024",
    title: "HSC (Higher Secondary Certificate)",
    subtitle: "Jaivabai Higher Secondary School",
    detail: "Completed higher secondary curriculum with 64.5%, strengthening mathematical foundations and analytical aptitude.",
    tag: "Education",
    type: "education"
  },
  {
    period: "2022 – 2023",
    title: "SSLC (Secondary School Leaving Certificate)",
    subtitle: "Pooluvapatti Government Higher Secondary School",
    detail: "Completed secondary education with 77.6% with academic merit.",
    tag: "Education",
    type: "education"
  }
];
