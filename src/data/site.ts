// ============================================================
//  CONTEÚDO DO PORTFOLIO — edita aqui os teus dados reais.
//  Tudo o que aparece no site vem deste ficheiro.
// ============================================================

export const site = {
  nome: "O Teu Nome",
  profissao: "Desenvolvedor Full-Stack & Designer",
  tagline:
    "Crio experiências digitais modernas, rápidas e memoráveis — da ideia ao produto final.",
  localizacao: "Lisboa, Portugal",
  email: "ola@teudominio.com",
  telefone: "+351 900 000 000",
  disponivel: true, // mostra o badge "Disponível para projetos"
  redes: {
    github: "https://github.com/teu-username",
    linkedin: "https://linkedin.com/in/teu-username",
    twitter: "https://twitter.com/teu-username",
  },
};

export const sobre = {
  paragrafos: [
    "Olá! Sou um profissional apaixonado por transformar problemas complexos em soluções simples e elegantes. Trabalho na interseção entre design e engenharia, sempre com foco na experiência do utilizador.",
    "Com vários anos de experiência, já ajudei startups e empresas a lançar produtos digitais que combinam performance técnica com um visual cuidado. Aqui podes descrever a tua história, valores e o que te move.",
  ],
  destaques: [
    { valor: "5+", label: "Anos de experiência" },
    { valor: "40+", label: "Projetos entregues" },
    { valor: "20+", label: "Clientes satisfeitos" },
    { valor: "∞", label: "Cafés bebidos" },
  ],
};

export type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
  cor: string; // gradiente Tailwind para o cabeçalho do card
  linkDemo?: string;
  linkRepo?: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "Plataforma SaaS",
    descricao:
      "Dashboard analítico em tempo real com autenticação, faturação e gráficos interativos. Placeholder — substitui pela descrição do teu projeto real.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    cor: "from-fuchsia-500 to-purple-600",
    linkDemo: "#",
    linkRepo: "#",
  },
  {
    titulo: "App de E-commerce",
    descricao:
      "Loja online completa com carrinho, pagamentos e área de administração. Focada em performance e conversão.",
    tags: ["React", "Node.js", "Tailwind", "Redis"],
    cor: "from-cyan-500 to-blue-600",
    linkDemo: "#",
    linkRepo: "#",
  },
  {
    titulo: "Website Institucional",
    descricao:
      "Site de apresentação com CMS headless, animações fluidas e otimização SEO de topo. 100/100 no Lighthouse.",
    tags: ["Astro", "Sanity", "Framer Motion"],
    cor: "from-amber-500 to-orange-600",
    linkDemo: "#",
    linkRepo: "#",
  },
  {
    titulo: "App Mobile",
    descricao:
      "Aplicação multiplataforma para gestão de tarefas com sincronização offline e notificações push.",
    tags: ["React Native", "Expo", "Supabase"],
    cor: "from-emerald-500 to-teal-600",
    linkDemo: "#",
    linkRepo: "#",
  },
  {
    titulo: "Design System",
    descricao:
      "Biblioteca de componentes reutilizáveis e documentados, adotada por várias equipas de produto.",
    tags: ["Storybook", "Radix UI", "TypeScript"],
    cor: "from-rose-500 to-pink-600",
    linkDemo: "#",
    linkRepo: "#",
  },
  {
    titulo: "Ferramenta de IA",
    descricao:
      "Assistente que gera conteúdo com modelos de linguagem, com streaming de respostas em tempo real.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK"],
    cor: "from-violet-500 to-indigo-600",
    linkDemo: "#",
    linkRepo: "#",
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
    categoria: "Ferramentas & Cloud",
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
    cargo: "Desenvolvedor Sénior",
    empresa: "Empresa Placeholder Lda.",
    periodo: "2023 — Presente",
    descricao:
      "Liderança técnica no desenvolvimento de produtos web, mentoria de equipa e definição da arquitetura de sistemas escaláveis.",
  },
  {
    cargo: "Desenvolvedor Full-Stack",
    empresa: "Startup Exemplo",
    periodo: "2021 — 2023",
    descricao:
      "Desenvolvimento de funcionalidades end-to-end, da base de dados à interface, num ambiente ágil e acelerado.",
  },
  {
    cargo: "Desenvolvedor Frontend",
    empresa: "Agência Digital",
    periodo: "2019 — 2021",
    descricao:
      "Construção de websites e interfaces para clientes de vários setores, com foco em responsividade e acessibilidade.",
  },
];
