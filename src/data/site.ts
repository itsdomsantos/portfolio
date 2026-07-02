// ============================================================
//  PORTFOLIO CONTENT — edit your real data here.
//  Everything shown on the site comes from this file.
// ============================================================

export const site = {
  nome: "Domingos Santos",
  profissao: "Full-Stack Web Developer · API Integrations",
  tagline:
    "I build web applications that just work — scalable REST & GraphQL APIs, seamless third-party integrations and fast, responsive interfaces.",
  localizacao: "Porto, Portugal",
  email: "domingosjsmsantos@gmail.com",
  telefone: "", // leave empty to hide the phone line
  disponivel: true, // shows the "Available for projects" badge
  redes: {
    github: "https://github.com/itsdomsantos",
    linkedin: "https://www.linkedin.com/in/dawnofdom/",
  },
};

export const sobre = {
  paragrafos: [
    "I'm a full-stack web developer focused on building complete digital solutions — from scalable RESTful and GraphQL APIs to responsive, polished interfaces. I specialise in API integration and structuring complex data flows, so your systems and services talk to each other cleanly.",
    "That's backed by an M.Sc. in Informatics & Computing Engineering from FEUP, with a focus on data management and web semantics — experience I bring to every integration and data-heavy project. My business background means I deliver code that fits your logic, not just the spec.",
    "📩 Open for freelance projects!",
  ],
  destaques: [
    { valor: "Full-Stack", label: "Web development" },
    { valor: "REST · GraphQL", label: "API integration" },
    { valor: "M.Sc.", label: "FEUP Engineering" },
    { valor: "6+", label: "Years coding" },
  ],
};

export type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
  cor: string; // Tailwind gradient for the card header (fallback when no media)
  destaque?: boolean; // featured project — wider card + larger media area
  privado?: boolean; // private/client project — shows a "Private" badge, no code link
  imagem?: string; // screenshot, e.g. "/projects/operager.png" (put file in public/projects/)
  video?: string; // demo video, e.g. "/projects/operager-demo.mp4"
  linkDemo?: string;
  linkRepo?: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "Workshop Inventory System",
    descricao:
      "A full-stack fleet & workshop inventory platform for construction companies: real-time stock tracking, movement logging, role-based access, employee time tracking and Excel export — all powered by a secure REST API with JWT authentication.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
    cor: "from-red-600 to-rose-950",
    destaque: true,
    privado: true,
    // 👇 Drop your file in public/projects/ and uncomment ONE of these:
    // imagem: "/projects/operager.png",
    // video: "/projects/operager-demo.mp4",
  },
  {
    titulo: "MegaLOD — Web Data Platform",
    descricao:
      "My M.Sc. thesis: a web platform with a REST API for publishing and querying large, interconnected datasets, built on Linked Open Data standards. Heavy focus on data modeling and API design.",
    tags: ["PHP", "REST API", "Linked Open Data", "Data Modeling"],
    cor: "from-rose-700 to-red-950",
    linkRepo: "https://github.com/itsdomsantos/MEIC-Thesis",
  },
  {
    titulo: "Mancala — Online Multiplayer Game",
    descricao:
      "A full-stack web app with a REST API backend: user accounts, rankings and real-time multiplayer game state. Vanilla JS front end talking to a PHP API.",
    tags: ["JavaScript", "PHP", "REST API", "HTML & CSS"],
    cor: "from-red-500 to-rose-800",
    linkRepo: "https://github.com/itsdomsantos/Mancala-LTW-FEUP",
  },
  {
    titulo: "Java-- Compiler",
    descricao:
      "A full compiler for the Java-- language — lexical and syntactic analysis, semantic checks and JVM bytecode generation.",
    tags: ["Java", "Compilers", "ANTLR", "JVM"],
    cor: "from-[#b91c1c] to-[#450a0a]",
    linkRepo: "https://github.com/itsdomsantos/Jmm-Compiler-FEUP-COMP",
  },
  {
    titulo: "Airport Management System",
    descricao:
      "A C++ application for managing airports, flights and routes using efficient data structures and graph algorithms.",
    tags: ["C++", "Data Structures", "Algorithms"],
    cor: "from-rose-800 to-[#2b0a0a]",
    linkRepo: "https://github.com/itsdomsantos/AED-FEUP-Airport-Interface",
  },
  {
    titulo: "AI Problem Solver",
    descricao:
      "Search and optimization algorithms applied to problem-solving, exploring heuristics and metaheuristics in Python.",
    tags: ["Python", "Artificial Intelligence", "Search Algorithms"],
    cor: "from-[#dc2626] to-[#4c0519]",
    linkRepo: "https://github.com/itsdomsantos/IART-2022-FEUP",
  },
];

export type GrupoSkills = {
  categoria: string;
  skills: string[];
};

export const skills: GrupoSkills[] = [
  {
    categoria: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C / C++"],
  },
  {
    categoria: "Web & APIs",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "GraphQL", "HTML & CSS"],
  },
  {
    categoria: "Data & Semantic Web",
    skills: ["SQL", "Data Modeling", "Linked Open Data", "RDF / SPARQL", "Git"],
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
    cargo: "IT & Full-Stack Developer",
    empresa: "Family-run business",
    periodo: "2025 — Present",
    descricao:
      "Building and maintaining internal digital solutions, web applications, APIs and data integrations that fit the business logic.",
  },
  {
    cargo: "M.Sc. & B.Sc. in Informatics & Computing Engineering",
    empresa: "FEUP — University of Porto",
    periodo: "2019 — 2025",
    descricao:
      "Six years focused on software engineering, data management and web semantics. Thesis: MegaLOD, a Linked Open Data repository for archaeological data.",
  },
];
