# zergoss.github.io

Personal web portfolio for Raphael Roy-Laurore, plus a standalone
Tic-Tac-Toe game. Static site, no build step — each page is a single
self-contained HTML file.

## Project structure

```
zergoss.github.io/
├── .github/workflows/   # CI: deploys the site to GitHub Pages
├── .gitignore           # Files Git ignores locally
├── README.md            # This file
├── src/                 # Site source (published to GitHub Pages)
│   ├── index.html       # Portfolio landing page
│   └── tictactoe.html   # Tic-Tac-Toe game
├── tests/               # Smoke tests (Node built-in test runner)
└── docs/                # Extended design notes and assets
```

## Develop

Open the files directly in a browser, or serve `src/` locally:

```bash
python -m http.server -d src 8000
# then visit http://localhost:8000
```

## Test

```bash
node --test tests/
```

## Deploy

Hosted on **GitHub Pages**, deployed from `src/` by
`.github/workflows/pages.yml` on every push to `master`.

> **One-time setup:** GitHub's "deploy from a branch" mode can only serve
> from the repo root or `/docs`, not `/src`. To publish from `src/`, set
> **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
> The workflow then handles the rest.
