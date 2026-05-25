export const navItems = ["Home", "About", "Experience", "Services", "Process", "Contact"];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90",
  aboutMain:
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=90",
  aboutStrip:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=90",
  aboutSmall:
    "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=650&q=90",
  testimonial:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1500&q=90",
  workA:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90",
  workB:
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=90",
  workC:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=90",
  workD:
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=90",
};

export const works = [
  ["Maison Rue", "Brand Identity", images.workA, "md:col-span-7"],
  ["Velvet Archive", "Creative Direction", images.workB, "md:col-span-5 md:mt-24"],
  ["Noor Studio", "Visual System", images.workC, "md:col-span-5"],
  ["Aster Edit", "Editorial Campaign", images.workD, "md:col-span-7 md:-mt-20"],
];

export const services = [
  ["Brand Identity", "Distinctive identity systems with marks, typography, palettes, and brand-world rules."],
  ["Creative Direction", "Campaign mood, image language, art direction, and visual storytelling for launches."],
  ["Visual Design", "Editorial layouts, social systems, decks, packaging moments, and refined digital assets."],
];

export const processSteps = [
  ["Discovery", "Clarify the feeling, audience, visual references, and brand ambition."],
  ["Direction", "Build the creative concept, art direction, and editorial mood system."],
  ["Design", "Create identity, layouts, visuals, and refined brand applications."],
  ["Launch", "Package the final system for confident rollout across every touchpoint."],
];

export const experienceItems = [
  ["2026", "Independent Graphic Designer", "Luxury identity systems, editorial campaigns, and brand visuals."],
  ["2025", "Creative Direction", "Visual worlds for fashion, beauty, lifestyle, and boutique founders."],
  ["2024", "Editorial Design", "Magazine-inspired layouts, social suites, decks, and launch systems."],
];

export const brandWorks = [
  {
    name: "Maison Rue",
    category: "Luxury Fashion Identity",
    year: "2026",
    accent: "#8B2A24",
    image: images.workA,
    mood: "cinematic, warm, editorial",
    brief: "A fashion-led identity system with campaign layouts, visual language, and launch assets.",
    deliverables: ["Logo suite", "Editorial grid", "Campaign art direction", "Social launch system"],
    media: [
      { type: "graphic", title: "Campaign Poster", image: images.workA, ratio: "portrait" },
      { type: "video", title: "Launch Reel", image: images.workB, duration: "00:18" },
      { type: "graphic", title: "Social Story Set", image: images.workC, ratio: "story" },
      { type: "video", title: "Mood Film", image: images.workD, duration: "00:11" },
    ],
  },
  {
    name: "Noor Studio",
    category: "Beauty Brand System",
    year: "2025",
    accent: "#A76B5B",
    image: images.workC,
    mood: "soft, refined, intimate",
    brief: "A minimal beauty identity shaped around muted warmth, elegant typography, and tactile brand moments.",
    deliverables: ["Brand palette", "Packaging direction", "Typography system", "Instagram templates"],
    media: [
      { type: "graphic", title: "Packaging Direction", image: images.workC, ratio: "landscape" },
      { type: "video", title: "Texture Reel", image: images.aboutStrip, duration: "00:09" },
      { type: "graphic", title: "Palette Cards", image: images.aboutSmall, ratio: "square" },
      { type: "graphic", title: "Launch Grid", image: images.workA, ratio: "story" },
    ],
  },
  {
    name: "Velvet Archive",
    category: "Editorial Campaign",
    year: "2025",
    accent: "#4A1414",
    image: images.workB,
    mood: "moody, archival, fashion",
    brief: "A campaign concept for a boutique label with magazine-style imagery, art direction, and story-led assets.",
    deliverables: ["Campaign concept", "Lookbook layouts", "Poster system", "Digital launch visuals"],
    media: [
      { type: "video", title: "Editorial Teaser", image: images.workB, duration: "00:15" },
      { type: "graphic", title: "Lookbook Spread", image: images.workD, ratio: "landscape" },
      { type: "graphic", title: "Poster System", image: images.workA, ratio: "portrait" },
      { type: "video", title: "Behind The Mood", image: images.testimonial, duration: "00:22" },
    ],
  },
];
