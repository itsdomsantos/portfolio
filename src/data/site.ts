// ============================================================
//  PORTFOLIO CONTENT — edit your real data here.
//  Everything shown on the site comes from this file.
// ============================================================

export const site = {
  nome: "Domingos Santos",
  profissao: "Full-Stack Web Developer",
  tagline:
    "M.Sc. in Informatics & Computing Engineering (FEUP). I build complete digital solutions — scalable APIs, solid data flows and responsive interfaces.",
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
    "I'm an Informatics & Computing Engineering graduate (M.Sc., FEUP) and full-stack web developer. My master's focused on data management and web semantics — proven by my work designing digital repositories for complex archaeological data.",
    "Today I build complete digital solutions: developing scalable RESTful and GraphQL APIs, structuring and optimizing complex data flows, and crafting responsive interfaces. My business background means I deliver code that fits your logic.",
    "📩 Open for freelance projects!",
  ],
  destaques: [
    { valor: "6", label: "Years at FEUP" },
    { valor: "M.Sc.", label: "Informatics Eng." },
    { valor: "Full-Stack", label: "Web Developer" },
    { valor: "∞", label: "Problems solved" },
  ],
};

export type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
  cor: string; // Tailwind gradient for the card header
  linkDemo?: string;
  linkRepo?: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "MegaLOD — Archaeological Data Repository",
    descricao:
      "My M.Sc. thesis: a Linked Open Data platform for publishing and querying complex archaeological datasets, built on semantic web standards.",
    tags: ["PHP", "Linked Open Data", "RDF / SPARQL", "Semantic Web"],
    cor: "from-red-600 to-rose-900",
    linkRepo: "https://github.com/itsdomsantos/MEIC-Thesis",
  },
  {
    titulo: "Java-- Compiler",
    descricao:
      "A full compiler for the Java-- language — lexical and syntactic analysis, semantic checks and JVM bytecode generation.",
    tags: ["Java", "Compilers", "ANTLR", "JVM"],
    cor: "from-rose-700 to-red-950",
    linkRepo: "https://github.com/itsdomsantos/Jmm-Compiler-FEUP-COMP",
  },
  {
    titulo: "Airport Management System",
    descricao:
      "A C++ application for managing airports, flights and routes using efficient data structures and graph algorithms.",
    tags: ["C++", "Data Structures", "Algorithms"],
    cor: "from-[#b91c1c] to-[#450a0a]",
    linkRepo: "https://github.com/itsdomsantos/AED-FEUP-Airport-Interface",
  },
  {
    titulo: "Mancala — Online Board Game",
    descricao:
      "A full-stack web version of the classic Mancala game, with multiplayer support, rankings and a REST backend.",
    tags: ["JavaScript", "PHP", "REST API", "HTML & CSS"],
    cor: "from-red-500 to-rose-800",
    linkRepo: "https://github.com/itsdomsantos/Mancala-LTW-FEUP",
  },
  {
    titulo: "AI Problem Solver",
    descricao:
      "Search and optimization algorithms applied to problem-solving, exploring heuristics and metaheuristics in Python.",
    tags: ["Python", "Artificial Intelligence", "Search Algorithms"],
    cor: "from-rose-800 to-[#2b0a0a]",
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
