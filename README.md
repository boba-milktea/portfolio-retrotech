# Portfolio — Retro Terminal

A personal portfolio website built with a phosphor terminal aesthetic. Supports green and amber display modes.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Fonts** — VT323 (display), Share Tech Mono (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/                  # Next.js app router
    layout.tsx
    page.tsx
    globals.css         # Tailwind theme + CSS variables
  components/
    layout/             # Navbar, Footer, Scanlines
    sections/           # Hero, Projects, Skills, About, Contact, BottomRow
    ui/                 # Reusable atoms (FadeIn, TerminalLine, ProjectCard...)
  context/
    ThemeContext.tsx     # Phosphor mode state
  hooks/
    useTheme.ts
  data/
    config.ts           # Personal info, tagline, about, contact
    projects.ts         # Project list
    skills.ts           # Skill groups
  types/
    index.ts
```

## Customisation

All personal content lives in `src/data/`. You never need to touch component files to update your info.

**`src/data/config.ts`** — name, role, tagline, about lines, contact links, resume URL.

**`src/data/projects.ts`** — project title, description, tags, live URL, repo URL.

**`src/data/skills.ts`** — skill groups and their items.

Drop your resume PDF into `public/` and update `resumeUrl` in `config.ts`.

## Phosphor Toggle

The site ships with two display modes toggled from the navbar:

- **Green** — classic phosphor green `#39ff14`
- **Amber** — warm amber `#ffb800`

The user's preference is saved to `localStorage` and restored on next visit.

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
```

## Deployment

Always confirm the build passes locally before deploying:

```bash
npm run build
```

**Vercel**

Push to GitHub and connect the repo to [Vercel](https://vercel.com). Next.js is detected automatically — no configuration needed.

**Netlify**

Push to GitHub and connect the repo to [Netlify](https://netlify.com). Add a `netlify.toml` file at the project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Then install the Netlify Next.js plugin:

```bash
npm install -D @netlify/plugin-nextjs
```

Netlify will handle SSR, image optimisation, and API routes automatically via the plugin.
