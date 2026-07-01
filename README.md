# enzohiu.com

Next.js (App Router) + TypeScript + Tailwind. Warm editorial design system:
Fraunces (display serif), Inter (body sans), IBM Plex Mono (utility mono),
on a butter-and-plum palette.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — home (name, bio, dotted table-of-contents nav)
- `app/projects/page.tsx` — projects index
- `app/projects/[slug]/page.tsx` — individual project case study template
- `app/about/page.tsx` — about
- `app/contact/page.tsx` — contact
- `data/projects.ts` — **all project content lives here.** Edit this file to
  add/remove/update projects — no need to touch any page files.
- `components/PlaceholderImage.tsx` — swap this out once you have real
  screenshots (see below).
- `tailwind.config.ts` — color tokens (`butter`, `sand`, `ink`, `plum`,
  `mustard`, `warmgray`, `body`, `hairline`).

## Swapping in real project images

Every image slot currently renders `<PlaceholderImage />`. To use a real
screenshot:

1. Drop the image in `public/` (e.g. `public/pokefolio.png`).
2. Replace the `<PlaceholderImage className="..." />` usage with
   `<Image src="/pokefolio.png" alt="..." fill className="object-cover rounded-md" />`
   from `next/image` (wrap in a `relative` container since it's using `fill`).

## To fill in before shipping

- `data/projects.ts` — `liveUrl` / `githubUrl` are placeholder `#` links
- `app/contact/page.tsx` — email/social links are placeholders, confirm handles
- `app/about/page.tsx` — experience dates are estimates, confirm against your resume
- Real screenshots for all five projects and (optionally) a headshot for `/about`

## Deploying

This is already Vercel-ready. Push to a GitHub repo, import it in Vercel,
and point `enzohiu.com`'s DNS at Vercel the same way you set up vepo.studio
previously (A record `@` → Vercel's IP, CNAME `www` → `cname.vercel-dns.com`).
