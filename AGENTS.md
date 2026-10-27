<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Staxcent website

Marketing site for Staxcent, a studio that builds web apps, SaaS products and custom software. It is a small, fully static Next.js App Router site with no backend, no database and no API routes.

## Stack

- Next.js 16.3 (App Router), React 19.2, TypeScript (strict)
- Tailwind CSS v4 is installed through `@tailwindcss/postcss`, but the site's styles are hand-written CSS in `src/app/globals.css`, not Tailwind utility classes
- Fonts come from `next/font/google`: DM Sans (`--font-body`) and Space Grotesk (`--font-display`)
- ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)
- npm (`package-lock.json`)

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build; run it to check a change compiles
npm run lint    # eslint
```

There is no test suite. Before you finish a change, run `npm run lint` and `npm run build`.

## Layout

```
src/
  app/
    layout.tsx          root layout: fonts, site metadata, skip link
    globals.css         ALL styles: design tokens, components, responsive rules
    page.tsx            home page, built from home-sections components
    about/ services/ work/ contact/   one page.tsx per route
  components/
    site-header.tsx     header and nav links (server component)
    mobile-menu.tsx     the only client component ("use client")
    site-footer.tsx
    home-sections.tsx   Hero, Services, Process, CTA, etc.
  data/
    site.ts             shared content arrays (services, process, technologies…)
public/                 logos (logo_tr.png, long_logo_tr*.png)
```

## Conventions

- **Imports** use the `@/src/...` alias (`@/*` maps to the repo root), e.g. `import SiteHeader from "@/src/components/site-header"`.
- **Every page** renders `<SiteHeader />`, then `<main id="main">…</main>`, then `<SiteFooter />`. The skip link in `layout.tsx` points at `#main`, so keep that id.
- **Page metadata**: export `metadata: Metadata` with a short `title`. The root layout turns it into `"%s | Staxcent"`.
- **Components** are server components by default. Add `"use client"` only when you need state or browser APIs, and keep client components small, the way `mobile-menu.tsx` is.
- **Content** that appears in more than one place, or is list-shaped, goes in `src/data/site.ts`. Several lists there are tuples (`[number, title, description]`) and are destructured where they're used.
- **Code style** is compact JSX: simple sections are often single-line function components. Match the style of the file you are editing rather than reformatting it.
- **Escape apostrophes** in JSX text as `&apos;` (the lint rule requires it).
- **Images** use `next/image` with explicit `width` and `height`.

## Styling

- All styling lives in `src/app/globals.css` as plain, semantic class names (`.hero`, `.section`, `.service-card`, `.button-primary`, …). Add new classes there and don't scatter inline styles.
- Use the design tokens in `:root` instead of hard-coded colors: `--ink`, `--ink-soft`, `--muted`, `--paper`, `--paper-bright`, `--line`, `--lime`, `--lime-deep`, `--coral`, `--coral-text`, `--display`, `--body`.
- Layout width comes from `.container` (`min(1160px, 100% - 48px)`). The single mobile breakpoint is `@media (max-width: 800px)`, and its rules sit together in one block near the end of the file. Add mobile overrides there.
- Section building blocks: `.section` (with `.section-tint` for alternate backgrounds), `.section-heading` with an `.eyebrow` label and an `h2`, and `.page-hero` for the top of inner pages.

## Accessibility

Accessibility was deliberately improved in commit `f31c1f4`, so keep it intact:
- the skip link and `id="main"`
- visible `:focus-visible` outlines
- the `prefers-reduced-motion` override
- `aria-hidden="true"` on decorative glyphs (arrows like ↗ →)
- labelled nav landmarks
- Escape and outside-click closing in the mobile menu, with focus returned to the toggle

Form fields need a `<label htmlFor>`. Text colors must keep sufficient contrast: use `--coral-text`, not `--coral`, for text.

## Known placeholders and gaps

- `metadataBase` and the contact email use `staxcent.example`. Replace them once the real domain is known.
- The contact form is UI only. It has no submit handler and doesn't send anything.
- The Work page lists sample projects ("Project Alpha" etc.), not real case studies.

## Deployment and branches

- `.github/workflows/nextjs.yml` deploys to GitHub Pages on pushes to the `live` branch. Other branches: `main` (default), `dev`, and `feature/*`.
- The workflow is the stock template, and it uses `working-directory: staxcent` and `staxcent/out`. This repo's app is at the repo root, so those paths look wrong. Check them before relying on the deploy.
- GitHub Pages needs a static export. `actions/configure-pages` with `static_site_generator: next` tries to inject this config. If you set it yourself, add `output: "export"` and `images: { unoptimized: true }` to `next.config.ts`. Either way, keep the site free of server-only features (route handlers, server actions, dynamic rendering).
