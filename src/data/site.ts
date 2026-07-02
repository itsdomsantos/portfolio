// ============================================================
//  PORTFOLIO CONTENT — edit your real data here.
//  Everything shown on the site comes from this file.
// ============================================================

export const site = {
  nome: "Your Name",
  profissao: "Full-Stack Developer & Designer",
  tagline:
    "I craft modern, fast and memorable digital experiences — from idea to finished product.",
  localizacao: "Lisbon, Portugal",
  email: "hello@yourdomain.com",
  telefone: "+351 900 000 000",
  disponivel: true, // shows the "Available for projects" badge
  redes: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
  },
};

export const sobre = {
  paragrafos: [
    "Hi! I'm a professional passionate about turning complex problems into simple, elegant solutions. I work at the intersection of design and engineering, always focused on the user experience.",
    "With several years of experience, I've helped startups and companies ship digital products that combine technical performance with polished visuals. Use this space to tell your story, values and what drives you.",
  ],
  destaques: [
    { valor: "5+", label: "Years of experience" },
    { valor: "40+", label: "Projects delivered" },
    { valor: "20+", label: "Happy clients" },
    { valor: "∞", label: "Cups of coffee" },
  ],
};

export type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
  cor: string; // Tailwind gradient for the card header
  linkDemo?: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "SaaS Platform",
    descricao:
      "Real-time analytics dashboard with authentication, billing and interactive charts. Placeholder — swap for your real project description.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    cor: "from-red-600 to-rose-900",
    linkDemo: "#",
  },
  {
    titulo: "E-commerce App",
    descricao:
      "Complete online store with cart, payments and an admin area. Built for performance and conversion.",
    tags: ["React", "Node.js", "Tailwind", "Redis"],
    cor: "from-rose-700 to-red-950",
    linkDemo: "#",
  },
  {
    titulo: "Corporate Website",
    descricao:
      "Marketing site with a headless CMS, smooth animations and top-tier SEO optimization. 100/100 on Lighthouse.",
    tags: ["Astro", "Sanity", "Framer Motion"],
    cor: "from-[#b91c1c] to-[#450a0a]",
    linkDemo: "#",
  },
  {
    titulo: "Mobile App",
    descricao:
      "Cross-platform task management app with offline sync and push notifications.",
    tags: ["React Native", "Expo", "Supabase"],
    cor: "from-red-500 to-rose-800",
    linkDemo: "#",
  },
  {
    titulo: "Design System",
    descricao:
      "A library of reusable, documented components adopted by several product teams.",
    tags: ["Storybook", "Radix UI", "TypeScript"],
    cor: "from-rose-800 to-[#2b0a0a]",
    linkDemo: "#",
  },
  {
    titulo: "AI Tool",
    descricao:
      "An assistant that generates content with language models, streaming responses in real time.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK"],
    cor: "from-[#dc2626] to-[#4c0519]",
    linkDemo: "#",
  },
];

export type GrupoSkills = {
  categoria: string;
  skills: string[];
};

export const skills: GrupoSkills[] = [
  {
    categoria: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Framer Motion"],
  },
  {
    categoria: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis", "REST APIs"],
  },
  {
    categoria: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
  },
];

export type Experiencia = {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
};

export const experiencias: Experiencia[] = [
  {
    cargo: "Senior Developer",
    empresa: "Placeholder Company Ltd.",
    periodo: "2023 — Present",
    descricao:
      "Technical lead on web product development, team mentoring and defining the architecture of scalable systems.",
  },
  {
    cargo: "Full-Stack Developer",
    empresa: "Example Startup",
    periodo: "2021 — 2023",
    descricao:
      "End-to-end feature development, from database to interface, in a fast-paced agile environment.",
  },
  {
    cargo: "Frontend Developer",
    empresa: "Digital Agency",
    periodo: "2019 — 2021",
    descricao:
      "Built websites and interfaces for clients across many sectors, with a focus on responsiveness and accessibility.",
  },
];
