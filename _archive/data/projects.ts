export type ProjectLink = {
  label: string;
  href: string;
};

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
  links?: ProjectLink[];
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
  },
  {
    slug: "uplift",
    order: "02",
    title: "Uplift",
    hook: "campus fitness app for Cornell's gym facilities",
    tags: ["swiftui", "flask", "graphql"],
    body: [
      "Uplift gives Cornell students a centralized place to check gym hours, real-time capacity, and fitness class schedules across campus facilities.",
      "The app serves thousands of active users each semester and is maintained by a cross-functional team of engineers and PMs within Cornell AppDev. I joined as an Associate Product Manager, working across iOS and backend teams to prioritize features and ship iterative improvements.",
    ],
    role: "Associate Product Manager",
    stack: "SwiftUI, Flask, GraphQL, PostgreSQL, Xcode",
    highlight: "400+ monthly active users across Cornell",
    links: [
      {
        label: "github · ios",
        href: "https://github.com/cuappdev/uplift-ios-swiftui",
      },
      {
        label: "github · backend",
        href: "https://github.com/cuappdev/uplift-backend",
      },
    ],
  },
  {
    slug: "chem",
    order: "03",
    title: "CHEM",
    hook: "endowment management, built for a real nonprofit client",
    tags: ["next", "react", "prisma"],
    body: [
      "CHEM is a full-stack web application developed for a nonprofit client through Cornell Hack4Impact. It streamlines tracking of endowment funds, models allocation scenarios, and supports compliance reporting.",
      "The platform replaces a manual, spreadsheet-based workflow with a structured dashboard. I audited and patched org-ownership gaps across REST endpoints, closing a cross-tenant data exposure issue.",
    ],
    role: "Maintenance Developer",
    stack: "Next.js, React, Express.js, Prisma, TypeScript",
    highlight: "In production for a live nonprofit client",
    githubUrl: "https://github.com/cornellh4i/CHEM",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
