# Gangesh Portfolio

Modern, animated Vue.js portfolio for [Gangesh Srivastava](https://github.com/GangeshSrivastava) — backend & platform engineer.

Live site: [gangeshsrivastava.github.io/portfolio](https://gangeshsrivastava.github.io/portfolio/)

## Features

- Vue 3 + Vite
- Animated hero with rotating role text
- Floating background objects & glassmorphism UI
- Scroll-reveal sections & animated skill bars
- Impact counters with intersection observer
- Icon-rich design via Iconify (tech stack, social, section icons)
- Fully responsive mobile navigation
- GitHub Pages deployment via GitHub Actions

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

### Option 1: GitHub Actions (recommended)

Push to the `portfolio` or `main` branch. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

Ensure GitHub Pages is set to **GitHub Actions** as the source in repo Settings → Pages.

### Option 2: Manual deploy

```bash
npm run deploy
```

This builds with base path `/portfolio/` and pushes `dist/` to the `gh-pages` branch.

## Assets

Place your images in `public/assets/img/`:

- `ProfMe.png` — profile photo
- `work3.jpg` — skills section image

## Project structure

```
src/
  components/     # Vue section components
  composables/    # Scroll spy, counters, reveal
  data/           # Portfolio content (easy to edit)
  assets/styles/  # Global CSS
public/
  assets/img/     # Static images
```

## Customize content

Edit `src/data/portfolio.js` to update skills, projects, blogs, and contact info.
