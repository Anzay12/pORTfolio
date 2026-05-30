# Himanshu Pandey — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Showcases projects, experience, skills (including MLOps), and professional certifications.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or newer
- npm (comes with Node.js)

## Local development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Run production build     |
| `npm run lint` | ESLint                   |

## Project structure

```
portfolio/
├── app/                 # Pages & API routes
├── components/          # UI sections
├── lib/                 # Data & utilities
├── public/certificates/ # Certificate images
└── package.json
```

Certificate cards load from `public/certificates/` via `/api/certificates`. Metadata (titles) is in `lib/data.ts`.

## Deploy (Vercel — recommended)

1. Push this repo to GitHub (see below).
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no environment variables required.

## Push to GitHub

Run these commands from the `portfolio` folder (where `package.json` is):

```powershell
cd "C:\Users\22f30\OneDrive\Documents\Desktop\portfolio_hm\portfolio"

# Optional: rename branch to main (GitHub default)
git branch -M main

# Stage all project files
git add .

# First commit with your full portfolio (adjust message if you like)
git commit -m "Add portfolio site with projects, skills, and certifications"

# Create a new empty repo on GitHub, then add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push
git push -u origin main
```

If `origin` already exists, update it:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Notes

- Do **not** commit `.env` files with secrets. Use `.env.example` as a template.
- `node_modules` and `.next` are ignored automatically.
- Certificate images in `public/certificates/` are included in the repo. Large files may slow clones; compress images if needed before pushing.

## Author

**Himanshu Pandey** — [GitHub](https://github.com/Anzay12) · [LinkedIn](https://linkedin.com/in/himanshu-pandey12)
