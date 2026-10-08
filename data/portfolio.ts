export type WebShot = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

export type WebProject = {
  type: "web";
  title: string;
  summary: string;
  detail?: string;
  href: string;
  meta: "Live" | "GitHub";
  category: string;
  tags: string[];
  images?: WebShot[];
};

export type IosProject = {
  type: "ios";
  title: string;
  summary: string;
  href: string;
  meta: string;
  category: string;
  features: string;
  linkLabel: string;
  screens: { src: string; alt: string; width: number; height: number }[];
};

export const links = {
  linkedin: "https://linkedin.com/in/enzo-hiu-123750245",
  email: "emh274@cornell.edu",
  github: "https://github.com/cvepo",
};

export const iosProjects: IosProject[] = [
  {
    type: "ios",
    title: "Booked",
    summary: "An iOS app for finding and reserving study rooms at Cornell. Browse libraries, check room details, and manage reservations.",
    href: "https://github.com/cuappdev/booked",
    meta: "Launching soon",
    category: "Study room reservations",
    features: "Libraries, room details, and reservations",
    linkLabel: "View Booked on GitHub",
    screens: [
      { src: "/projects/booked-panel-1.png", alt: "Booked — an app for Cornell study spaces, with a preview of the library browser", width: 1242, height: 2688 },
      { src: "/projects/booked-panel-2.png", alt: "Browse — discover rooms across campus, shown in Booked’s room list", width: 1242, height: 2688 },
      { src: "/projects/booked-panel-3.png", alt: "Details — view a room’s location, amenities, capacity, and photos", width: 1242, height: 2688 },
      { src: "/projects/booked-panel-4.png", alt: "Reserve — open a study room’s Cornell Library reservation page", width: 1242, height: 2688 },
    ],
  },
  {
    type: "ios",
    title: "Uplift",
    summary: "An iOS app for checking Cornell gym hours, capacity, and fitness class schedules.",
    href: "https://apps.apple.com/us/app/uplift-cornell-fitness/id1439374374",
    meta: "On the App Store",
    category: "Cornell gym information",
    features: "Gym hours, capacity, and fitness classes",
    linkLabel: "View Uplift on the App Store",
    screens: [
      { src: "/projects/uplift-1.png", alt: "Uplift home with gym hours and classes", width: 290, height: 551 },
      { src: "/projects/uplift-2.png", alt: "Uplift details for Helen Newman", width: 291, height: 551 },
    ],
  },
];

export const webProjects: WebProject[] = [
  {
    type: "web",
    title: "Pokéfolio",
    summary: "Track the value of a sealed Pokémon collection.",
    detail: "Record purchases and sales, compare product prices over time, and see how the collection’s value compares with what you paid.",
    href: "/pokefolio/demo",
    meta: "Live",
    category: "Collection tracking",
    tags: ["Next.js", "TypeScript", "Postgres"],
    images: [
      {
        src: "/projects/pokefolio-dashboard.jpg",
        alt: "Pokéfolio dashboard with portfolio value, a price chart, and collection holdings",
        label: "Dashboard",
        width: 2880,
        height: 1800,
      },
      {
        src: "/projects/pokefolio-compare.jpg",
        alt: "Pokéfolio compare view with product price lines",
        label: "Compare",
        width: 2880,
        height: 1800,
      },
    ],
  },
  {
    type: "web",
    title: "Memorizer",
    summary: "Import questions from a spreadsheet and practice answering them to review study material.",
    href: "https://github.com/cvepo/memorizer",
    meta: "GitHub",
    category: "Learning tools",
    tags: ["Study & practice"],
  },
  {
    type: "web",
    title: "RecruitingOS",
    summary: "Organize job applications and track their progress.",
    detail: "Connect application records with Gmail updates, view each application’s status, and review recruiting activity in one dashboard.",
    href: "/recruitingos",
    meta: "Live",
    category: "Job application tracking",
    tags: ["Application tracking", "Gmail integration"],
    images: [
      {
        src: "/projects/recruitingos-home.jpg",
        alt: "RecruitingOS home with urgent items for the current cycle",
        label: "Overview",
        width: 3200,
        height: 2000,
      },
      {
        src: "/projects/recruitingos-pipeline.jpg",
        alt: "RecruitingOS pipeline board from applied through offer",
        label: "Pipeline",
        width: 3320,
        height: 2160,
      },
      {
        src: "/projects/recruitingos-analytics.jpg",
        alt: "RecruitingOS analytics showing how applications move through stages",
        label: "Analytics",
        width: 3320,
        height: 2160,
      },
    ],
  },
  {
    type: "web",
    title: "CHEM",
    summary: "Software for a nonprofit to track endowment funds, model allocations, and prepare reports. Built with Cornell Hack4Impact.",
    href: "https://github.com/cornellh4i/CHEM",
    meta: "GitHub",
    category: "Nonprofit fund management",
    tags: ["Next.js", "Prisma"],
  },
];
