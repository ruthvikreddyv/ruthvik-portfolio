# Ruthvik Reddy Veerannagari — Portfolio

Personal portfolio built with Next.js (App Router), React 19, and Tailwind CSS v4.
Positioned for PhD admissions, AI/ML research roles, and software engineering roles.

## Sections

- **Hero** — headline, profile photo, Download Resume / View Research / Contact CTAs
- **About** — research-focused narrative (AI, wireless comms, blockchain, XR)
- **Research Interests** — tag grid + "seeking fully funded PhD" statement
- **Current Research Focus** — ongoing research directions (5G/6G AI, graph learning, XR, blockchain trust systems)
- **Education** — academic record and relevant coursework
- **Skills** — categorized tags + animated skill-level bars
- **Experience** — Research Intern (IIIT Naya Raipur, NMICPS-funded project) and Software Developer Intern (Cypwng)
- **Projects** — filterable grid: ArchViz-XR, GNN-DRL & GNN-SPN, EduChain, LendFundz, ParkEase, Mental Health Detector
- **Publications** — 3 manuscripts (under review / draft) with venue and status
- **Certifications**
- **Resume/CV** — view and download both documents
- **Contact** — contact details, message form, live GitHub contribution graph

## Design system

- **Palette**: cool paper/ink neutrals, circuit-teal primary accent, muted gold (publication status) and violet (draft status) secondary accents — see `app/globals.css`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags) via `next/font`.
- **Motif**: technical-blueprint aesthetic (grid-paper texture, corner-bracket frames, mono `// eyebrow` labels).
- **Dark mode**: class-based, toggled via the header button, persisted to `localStorage`, applied pre-hydration to avoid a flash of the wrong theme.
- **Animations**: scroll-reveal (`components/Reveal.tsx`) and animated skill bars (`components/SkillBar.tsx`), both via `IntersectionObserver` — no animation library dependency.

## SEO

- Full metadata, Open Graph, and Twitter card tags in `app/layout.tsx`.
- JSON-LD `Person` structured data (name, affiliation, `knowsAbout`, social links) for richer search results.
- Semantic headings and `alt` text throughout for accessibility and search.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Updating content

- Resume/CV files live in `public/Ruthvik_Resume.pdf` and `public/Ruthvik_CV.pdf` — replace them (keeping the same filenames) to update the downloadable documents.
- The profile photo is `public/profile.jpg` — replace with a new image at roughly the same aspect ratio (4:5) to update the hero portrait.
- Section content (skills, projects, publications, research interests, etc.) is defined as plain data arrays at the top of each file in `components/`.
- Project cards currently use icon-based visual headers rather than screenshots, since no project screenshots or live demo URLs were available — add `image`/`demoUrl` fields to the `projects` array in `components/Projects.tsx` and render them if/when you have real assets.
- The GitHub contribution graph in the Contact section pulls live from `ghchart.rshah.org` using the `ruthvikreddyv` GitHub username — update the username in `components/ContactSection.tsx` if it ever changes.

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
