# Tests

Smoke tests for the static site, written against Node's built-in test runner
(no dependencies, no `npm install`).

```bash
node --test tests/
```

`smoke.test.mjs` checks that each page in `src/` is a complete HTML document
and that key content is present. Add a new `*.test.mjs` file here as the site
grows.
