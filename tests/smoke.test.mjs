// Zero-dependency smoke tests for the static site.
// Run with:  node --test tests/
// (Node's built-in test runner — no npm install required.)

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFile(join(root, rel), 'utf8');

test('index.html exists and is a complete HTML document', async () => {
  const html = await read('src/index.html');
  assert.match(html, /<!DOCTYPE html>/i, 'missing doctype');
  assert.match(html, /<\/html>/i, 'missing closing </html> tag');
});

test('index.html exposes the résumé link', async () => {
  const html = await read('src/index.html');
  assert.match(html, /See Résumé/, 'résumé call-to-action not found');
});

test('tictactoe.html exists and is a complete HTML document', async () => {
  const html = await read('src/tictactoe.html');
  assert.match(html, /<!DOCTYPE html>/i, 'missing doctype');
  assert.match(html, /<\/html>/i, 'missing closing </html> tag');
});
