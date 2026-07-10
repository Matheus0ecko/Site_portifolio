// =====================================================================
//  EDITE ESTE ARQUIVO PARA ATUALIZAR SEU PORTFÓLIO
//  Todos os textos, links e projetos ficam aqui.
// =====================================================================

export const profile = {
  name: "Matheus Matos",
  initials: "MM",
  role: "Data Analyst",
  subrole: "Estudante de Ciência de Dados",
  // Frase de destaque do topo do site:
  tagline: "Buscando o desconforto.",
  // Texto maior da seção "Sobre":
  about:
    "Analista de dados e estudante de Ciência de Dados. Transformo dados brutos em decisões — de dashboards em Power BI a modelos em Python. Acredito que o crescimento mora fora da zona de conforto, e é onde procuro estar.",
  location: "Salvador, Bahia",
  email: "mateus2439@live.com",
  github: "https://github.com/Matheus0ecko",
  githubUsername: "Matheus0ecko",
  linkedin: "https://www.linkedin.com/in/matheus-luc/",
};

// Tecnologias exibidas na seção de Skills.
// group serve só para agrupar visualmente.
export const skills = [
  { name: "Python", group: "Linguagens & Dados" },
  { name: "SQL", group: "Linguagens & Dados" },
  { name: "R", group: "Linguagens & Dados" },
  { name: "Oracle", group: "Bancos de dados" },
  { name: "Power BI", group: "Visualização" },
  { name: "Ciência de Dados", group: "Áreas" },
  { name: "Análise de Dados", group: "Áreas" },
  { name: "Contabilidade", group: "Áreas" },
  { name: "Financeiro", group: "Áreas" },
];

// =====================================================================
//  PROJETOS EM DESTAQUE
//  Troque os campos abaixo pelos dados reais dos seus repositórios.
//  - repo:  link do repositório no GitHub
//  - demo:  link do dashboard publicado / notebook / vídeo (opcional; deixe "" se não tiver)
//  - kind:  "Power BI" ou "Data Science" (muda a cor da etiqueta)
// =====================================================================
export const featuredProjects = [
  {
    title: "Análise de Churn",
    kind: "Data Science",
    description:
      "Análise de evasão de clientes em Python: exploração dos dados e modelo para prever quem tende a cancelar.",
    tech: ["Python", "Pandas", "scikit-learn"],
    repo: "https://github.com/Matheus0ecko/Projeto_Data_Science/tree/main/Churn",
    demo: "",
  },
  {
    title: "People Analytics",
    kind: "Power BI",
    description:
      "Dashboard de RH com indicadores de pessoas — headcount, turnover e absenteísmo — a partir de dados tratados em SQL.",
    tech: ["SQL", "Power BI", "DAX"],
    repo: "https://github.com/Matheus0ecko/Projetos-SQL-PowerBI/tree/main/Projeto01-Pleople_Analytics",
    demo: "",
  },
  {
    title: "SAC — Help Desk",
    kind: "Power BI",
    description:
      "Painel de atendimento e chamados: SLA, tempo de resolução e volume por categoria para acompanhar o suporte.",
    tech: ["SQL", "Power BI", "DAX"],
    repo: "https://github.com/Matheus0ecko/Projetos-SQL-PowerBI/tree/main/Projeto04-Sac",
    demo: "",
  },
  {
    title: "Estoque",
    kind: "Power BI",
    description:
      "Dashboard de controle de estoque com níveis, giro de produtos e alertas de ruptura.",
    tech: ["SQL", "Power BI", "DAX"],
    repo: "https://github.com/Matheus0ecko/Projetos-SQL-PowerBI/tree/main/Projeto22-Estoque",
    demo: "",
  },
];
