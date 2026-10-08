# Enzo Hiu’s portfolio

A single-page portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS. Fraunces, Inter, and IBM Plex Mono sit on a warm paper and muted green palette.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npx tsc --noEmit` for type checking and `npm run build` for the production build.

## Editing the portfolio

- `data/portfolio.ts` contains the six projects, destinations, screenshots, and social links.
- `app/page.tsx` contains the introduction, project sections, and contact section.
- `components/IosAppCard.tsx` presents the campus apps.
- `components/WebsiteCard.tsx` presents web projects and compact project entries.
- `components/ProjectGallery.tsx` provides accessible screenshot selectors.
- `components/ContactLinks.tsx` displays GitHub, LinkedIn, and email buttons in the header and contact section. `CopyEmail.tsx` copies the email address, with a selectable address as a fallback when clipboard access is unavailable.
- `app/globals.css` contains the responsive layout, hover states, focus styles, and reduced-motion rules.
- `app/layout.tsx` configures fonts and search/social metadata.
- `public/projects/` contains project images. Include the actual image dimensions and descriptive alt text when adding screenshots.

The mobile layout stacks project cards. Booked uses four complete promotional panels in order inside one rounded frame, with all four visible at every screen size. Web screenshots retain their full contents, and view buttons switch between the supplied screenshots without navigation.

## Public access

The portfolio is public and does not require a password. The former `/unlock` page redirects to the homepage so existing bookmarks still work.

## Live demos

`next.config.js` proxies `/pokefolio`, `/recruitingos`, and the legacy `/memorizer` route to their existing Vercel projects, including nested routes and assets. Those apps are maintained and deployed separately. Pokéfolio links directly to `/pokefolio/demo`, RecruitingOS links to `/recruitingos`, and Memorizer links to its GitHub repository.

`_archive/` preserves the earlier multipage design and is excluded from TypeScript checking. `data/projects.ts` is legacy content; edit `data/portfolio.ts` for the current site.
