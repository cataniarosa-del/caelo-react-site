export type EditorialArticle = {
  date: string;
  isoDate: string;
  category: string;
  title: string;
  excerpt: string;
  path: string;
  topics: string[];
};

export const editorialArticles: EditorialArticle[] = [
  {
    date: "4 agosto 2026",
    isoDate: "2026-08-04",
    category: "Etica dell’IA · Procedimenti pubblici",
    title: "Quando l’amministrazione colpisce chi è nel giusto",
    excerpt: "Dalle cartelle pazze delle case popolari all’etica dell’intelligenza artificiale nei procedimenti pubblici.",
    path: "/la-voce/quando-amministrazione-colpisce-chi-e-nel-giusto",
    topics: ["Etica dell’IA", "Pubblica Amministrazione", "Governance procedurale"],
  },
  {
    date: "3 agosto 2026",
    isoDate: "2026-08-03",
    category: "Glass Box · Audit trail procedurale",
    title: "L’infrastruttura della trasparenza: oltre la black box",
    excerpt: "Nei procedimenti regolati la fiducia nasce da tracciabilità, auditabilità, regole verificabili e supervisione umana.",
    path: "/la-voce/linfrastruttura-della-trasparenza-oltre-la-black-box",
    topics: ["Glass Box procedurale", "Auditabilità", "Tracciabilità"],
  },
  {
    date: "2 agosto 2026",
    isoDate: "2026-08-02",
    category: "Glass Box Procedurale · Responsabilità",
    title: "Chi firma deve poter vedere: dalla Black Box alla Glass Box Procedurale",
    excerpt: "La sicurezza di un dirigente nasce dalla possibilità di governare, verificare e ricostruire ogni passaggio della decisione.",
    path: "/la-voce/chi-firma-deve-poter-vedere-dalla-black-box-alla-glass-box-procedurale",
    topics: ["Glass Box procedurale", "Responsabilità dirigenziale", "Controllo umano"],
  },
  {
    date: "24 luglio 2026",
    isoDate: "2026-07-24",
    category: "AI Governance · Controllo umano",
    title: "Il controllo umano non è un pulsante di emergenza",
    excerpt: "Il vero rischio dell’intelligenza artificiale è rendere l’essere umano irrilevante nel processo decisionale.",
    path: "/la-voce/il-controllo-umano-non-e-un-pulsante-di-emergenza",
    topics: ["Controllo umano", "Human in the Loop", "AI Governance"],
  },
  {
    date: "21 luglio 2026",
    isoDate: "2026-07-21",
    category: "Sovranità tecnologica · Pubblica Amministrazione",
    title: "Il cancello europeo nel giardino tecnologico degli altri",
    excerpt: "Regolare l’intelligenza artificiale non basta: servono infrastrutture controllabili e una strada reale verso la PA.",
    path: "/la-voce/il-cancello-europeo-nel-giardino-tecnologico-degli-altri",
    topics: ["Sovranità tecnologica", "Pubblica Amministrazione", "Innovazione"],
  },
  {
    date: "15 luglio 2026",
    isoDate: "2026-07-15",
    category: "Agentic AI · Governance dell’autorità",
    title: "Non basta identificare un agente AI. Bisogna governarne l’autorità",
    excerpt: "L’autorità di un agente deve derivare dal procedimento nel quale opera.",
    path: "/la-voce/non-basta-identificare-un-agente-ai-bisogna-governarne-lautorita",
    topics: ["Agentic AI", "Mandato procedurale", "Governance dell’autorità"],
  },
  {
    date: "13 luglio 2026",
    isoDate: "2026-07-13",
    category: "Governance procedurale · Futuro dell’AI",
    title: "Chi governerà i procedimenti governerà il futuro dell’AI",
    excerpt: "Il vantaggio competitivo nascerà dalla capacità di governare i procedimenti nei quali l’intelligenza artificiale opera.",
    path: "/la-voce/chi-governera-i-procedimenti-governera-il-futuro-dell-ai",
    topics: ["Governance procedurale", "Futuro dell’AI", "Processi regolati"],
  },
];

export const editorialTopics = Array.from(
  new Set(editorialArticles.flatMap((article) => article.topics)),
).sort((a, b) => a.localeCompare(b, "it"));

export const getEditorialArticle = (path: string) =>
  editorialArticles.find((article) => article.path === path);

export const getRelatedArticles = (path: string, limit = 3) => {
  const current = getEditorialArticle(path);
  if (!current) return editorialArticles.slice(0, limit);

  return editorialArticles
    .filter((article) => article.path !== path)
    .map((article) => ({
      article,
      score: article.topics.filter((topic) => current.topics.includes(topic)).length,
    }))
    .sort((a, b) => b.score - a.score || b.article.isoDate.localeCompare(a.article.isoDate))
    .slice(0, limit)
    .map(({ article }) => article);
};
