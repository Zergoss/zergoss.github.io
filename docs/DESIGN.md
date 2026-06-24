# Design notes

Extended notes and assets for the portfolio site. Keep deeper write-ups,
diagrams, and reference material here so the top-level `README.md` stays short.

## Contents

- **Site** — `src/index.html` is the portfolio landing page.
- **Tic-Tac-Toe** — `src/tictactoe.html` is a standalone single-file game
  (HTML + CSS + JS, no build step or external dependencies).

## Conventions

- Each page is self-contained: styles and scripts live inline in the same
  `.html` file. There is no bundler.
- New pages go in `src/`; supporting images/assets can live alongside them
  or under `docs/` if they are reference-only.

## Deployment

The site is published to GitHub Pages from `src/` via the workflow at
`.github/workflows/pages.yml`. See the README for the one-time Pages setting.
