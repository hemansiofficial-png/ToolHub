Website URL : https://allinonetools.in


# ToolHub India

Next.js 16 App Router starter for a multi-tool website. Implements initial tools: SIP, EMI, GST, QR Code, JSON Formatter, Word Counter, Age Calculator, Password Generator.

## Quick start

```bash
npm install
npm run dev
```

### Node requirement

This project requires Node.js 20.x or newer. If your machine uses an older Node version, install or switch to Node 20 before running `npm install` (Prisma and Next.js depend on modern Node features).

Windows (PowerShell) quick steps:

```powershell
# If you use nvm-windows (recommended):
nvm install 20
nvm use 20

# Alternatively download + install Node 20 from https://nodejs.org/

# Verify Node and npm
node -v
npm -v

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

macOS / Linux (nvm):

```bash
nvm install 20
nvm use 20
node -v
npm -v
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and set `DATABASE_URL` before deploying.

## Deployment

- Deploy on Vercel using the App Router.
- Set `NEXT_PUBLIC_SITE_URL` to your production domain.
- Set `DATABASE_URL` for Prisma if using PostgreSQL.

## Features

- App Router with TypeScript and Tailwind CSS
- Dark mode support and theme toggle
- Dynamic tool pages and blog pages
- SEO-ready metadata, sitemap, and robots.txt
- Admin panel placeholders and scalable folder structure
