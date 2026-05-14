# Champ Lanka — Hostinger Deployment Guide

## What changed from the original (Lovable / Cloudflare Workers build)

| Before | After |
|---|---|
| `@lovable.dev/vite-tanstack-config` | Standard `vite` + `@vitejs/plugin-react` |
| `@tanstack/react-start` (SSR) | `@tanstack/react-router` SPA only |
| `@cloudflare/vite-plugin` | Removed |
| `wrangler.jsonc` | Removed |
| `bun.lockb` / `bunfig.toml` | Removed (use npm) |
| CSS loaded via `?url` + `<HeadContent>` | Normal CSS import in `main.tsx` |
| `shellComponent` / `<Scripts>` in root | Removed — `index.html` is the shell |
| No `.htaccess` | Added `public/.htaccess` for SPA routing |

## Build & Deploy Steps

### 1. Install dependencies
```bash
npm install
```

### 2. Build for production
```bash
npm run build
```
This outputs to the `dist/` folder.

### 3. Upload to Hostinger
- Go to **Hostinger → File Manager → public_html**
- Upload **all contents** of the `dist/` folder into `public_html/`
- The `.htaccess` file (copied from `public/`) is already inside `dist/` — make sure it uploads (it's a hidden file)

> **Important:** Upload the *contents* of `dist/`, not the `dist/` folder itself.  
> Your root should look like: `public_html/index.html`, `public_html/assets/`, `public_html/.htaccess`

### 4. Verify .htaccess is present
In Hostinger File Manager, enable "Show Hidden Files" and confirm `.htaccess` is in `public_html/`.  
This file is critical — without it, refreshing any page like `/about` will give a 404.

## Local Development
```bash
npm run dev
```

## Troubleshooting
- **Blank page after deploy**: Check browser console for 404s on JS/CSS files. Make sure you uploaded the contents of `dist/`, not the folder.
- **404 on page refresh**: `.htaccess` is missing or mod_rewrite is not enabled on your hosting plan.
- **Styles broken**: The `assets/` folder must be in `public_html/assets/`.
