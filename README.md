# pr3cio

![version](https://img.shields.io/badge/version-0.1.0-blue)

A modern Next.js + TypeScript frontend demo focusing on music/artist marketplace and streaming UI patterns. The project contains reusable UI components (artist cards, top charts, merch, hero, modals), an API hook, and a production-ready build setup.

**What this project does**

- Implements a component-based UI built with Next.js (app router) and TypeScript.
- Uses Tailwind CSS for styling and responsive layouts.
- Includes reusable components for music/streaming experiences: top artists, trending songs, merchandise, auth modals, and more.
- Ships with a small API helper (`api/useApi.ts`) to demonstrate client requests using `axios`.

**Why its useful**

- Fast starting point for building music-related frontends or marketplaces.
- Clean, component-driven structure makes it easy to adapt or extract parts into other projects.
- Uses modern Next.js (app dir) patterns and TypeScript, so it's aligned with current best practices.

**Main technologies**

- Next.js 16 (app router)
- React 19 + TypeScript
- Tailwind CSS
- Axios for API calls
- Sonner for notifications

## Quickstart

Prerequisites

- Node.js 18+ recommended
- npm (comes with Node) — works with yarn/pnpm if preferred

Install dependencies and run locally (PowerShell example):

```powershell
npm install
npm run dev

# Build for production
npm run build
npm start

# Lint (if configured)
npm run lint
```

Open `http://localhost:3000` in your browser.

## Usage example

Import and reuse components from the `components/` directory. Example (simplified):

```tsx
// app/page.tsx
import Hero from '../components/hero-section';

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

You can explore components in `components/` (for example `components/top-artist.tsx`, `components/hero-section.tsx`).

## Project structure (important files)

- `app/` — Next.js app routes and layout
- `components/` — Reusable UI components
- `api/useApi.ts` — Small API helper hook
- `public/assets/images/` — Project images and static assets
- `package.json` — Scripts and dependencies

## Development notes

- Tailwind CSS is configured via `postcss.config.mjs` and `tailwindcss` dependency.
- Type definitions and linting are available via the dev dependencies in `package.json`.

## Where to get help

- Open an issue or submit a pull request on the repository.

## Maintainers

- Repository owner: `prasenjitPaulIndia`