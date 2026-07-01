export type Project = {
  slug: string;
  order: string;
  title: string;
  hook: string;
  tags: string[];
  body: string[];
  role: string;
  stack: string;
  highlight: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "pokefolio",
    order: "01",
    title: "Pokéfolio",
    hook: "a trading-card tracker with real accounting underneath",
    tags: ["ts", "next", "postgres"],
    body: [
      "Pokéfolio tracks the value of a trading-card collection over time — but the interesting part is underneath. Every buy and sell runs through a FIFO cost-basis engine, so realized gains are actually accurate instead of estimated.",
      "Prices come from a rate-limited external pricing pipeline, cached and batched to stay within API limits while keeping data fresh.",
    ],
    role: "Solo developer",
    stack: "TypeScript, Next.js, Postgres",
    highlight: "FIFO-accurate cost basis",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "uplift",
    order: "02",
    title: "Uplift",
    hook: "a fitness engagement app for the Cornell community",
    tags: ["react native"],
    body: [
      "Uplift is a fitness engagement app built to get more of the Cornell community moving, with features designed around the way students actually use campus fitness spaces.",
    ],
    role: "Developer & designer",
    stack: "React Native",
    highlight: "Design-led feature work",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "chem",
    order: "03",
    title: "CHEM",
    hook: "endowment management, built for a real nonprofit client",
    tags: ["ts", "fullstack"],
    body: [
      "CHEM is a fullstack endowment management platform built with Hack4Impact for a nonprofit client, handling transactions and contributor records across organizations.",
      "Audited and patched org-ownership gaps across REST endpoints, closing a cross-tenant data exposure issue.",
    ],
    role: "Backend developer",
    stack: "TypeScript, fullstack",
    highlight: "Backend security audit",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
