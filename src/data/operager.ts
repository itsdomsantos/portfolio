// ============================================================
//  OPERAGER — case study page content.
//  Page lives at /projects/operager
// ============================================================

export type Screenshot = {
  src: string; // e.g. "/projects/operager/dashboard.png"
  legenda: string; // short caption
};

export const operager = {
  nome: "Operager",
  subtitulo: "Fleet & Workshop, Under Control",
  status: "In production · actively developed",
  intro:
    "A full-stack fleet & workshop inventory platform for construction and civil engineering companies. Operager tracks every part, machine and movement in real time, with role-based access, employee time tracking and Excel export — all served by a secure REST API.",

  tags: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "JWT"],

  // 👇 Drop your demo recording in public/projects/operager/ and set the path,
  //     e.g. "/projects/operager/demo.mp4". Leave "" to show a placeholder.
  demoVideo: "",
  demoPoster: "", // optional thumbnail, e.g. "/projects/operager/demo-poster.png"

  funcionalidades: [
    {
      titulo: "Real-time inventory",
      descricao:
        "Track spare parts, quantities and locations, with movement logging for purchases, consumption, transfers and adjustments.",
    },
    {
      titulo: "Fleet management",
      descricao:
        "Monitor machinery and equipment across multiple workshops and cost centers.",
    },
    {
      titulo: "Role-based access",
      descricao:
        "Admin, Manager, Operator and Viewer roles, secured with JWT authentication and hashed passwords.",
    },
    {
      titulo: "Part history & filters",
      descricao:
        "Full movement timeline per part, with advanced filtering by date, type and part.",
    },
    {
      titulo: "Excel export",
      descricao:
        "Export any filtered view straight to an Excel spreadsheet in one click.",
    },
    {
      titulo: "Live dashboard",
      descricao:
        "Real-time statistics and recent activity, plus stock validation to prevent over-consumption.",
    },
  ],

  stack: {
    Frontend: ["React", "React Router", "Axios", "XLSX"],
    Backend: ["Node.js", "Express", "PostgreSQL", "JWT", "bcrypt"],
    Security: ["Helmet.js", "Rate limiting", "CORS", "SQL-injection protection"],
  },

  // 👇 Add screenshots: drop files in public/projects/operager/ and list them here.
  //    Leave the array empty to show placeholder tiles.
  screenshots: [] as Screenshot[],
};
