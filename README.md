# Ruthvik Reddy Veerannagari — Portfolio

Personal portfolio built with Next.js (App Router), React 19, and Tailwind CSS v4.

## Sections

- **Hero** — introduction, profile photo, quick CTAs
- **About** — narrative bio and quick facts
- **Education** — academic record and relevant coursework
- **Skills** — categorized technical skills and tools
- **Experience** — timeline of internships/research roles
- **Projects** — ArchViz-XR, EduChain, LendFundz, ParkEase, Mental Health Detector
- **Achievements** — publications under review
- **Certifications** — professional certifications
- **Resume/CV** — view and download both documents
- **Contact** — contact details and message form

## Design system

- **Palette**: cool paper/ink neutrals with a circuit-teal primary accent and a muted gold secondary accent (see CSS variables in `app/globals.css`).
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags) — loaded via `next/font`.
- **Motif**: a technical-blueprint aesthetic (grid-paper texture, corner-bracket frames, mono "// eyebrow" labels) reflecting a resume built around architecting, designing schemas, and constructing pipelines.
- **Dark mode**: class-based, toggled via the header button; preference is persisted to `localStorage` and applied pre-hydration to avoid a flash of the wrong theme.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Updating content

- Resume/CV files live in `public/Ruthvik_Resume.pdf` and `public/Ruthvik_CV.pdf` — replace them (keeping the same filenames) to update the downloadable documents.
- The profile photo is `public/profile.jpg` — replace with a new image at roughly the same aspect ratio (4:5) to update the hero portrait.
- Section content (skills, projects, experience, etc.) is defined as plain data arrays at the top of each file in `components/`.

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
