# Mundia Wamuyuwa — Portfolio

A modern developer portfolio for Mundia Wamuyuwa, built with React, Tailwind CSS, Framer Motion, and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The included GitHub Actions workflow deploys `main` to GitHub Pages.

## Render deployment

The included `render.yaml` configures the portfolio as a static site with:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`

For an existing manually configured Render service, set those same values under
**Settings → Build & Deploy** and trigger a fresh deploy.
