/**
 * Post-build guard.
 *
 * Every check here exists because something in this class already shipped
 * broken. A build that fails loudly is strictly better than a deploy that
 * looks fine and isn't.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const problems = [];

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const p = join(dir, entry);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const pages = walk(DIST).filter((f) => f.endsWith('.html'));

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const where = relative(DIST, page);

  // 1. On-demand image endpoint. Nothing serves /_image on a static host, so
  //    every image 404s. This is exactly what shipped on 2026-08-20.
  if (html.includes('/_image?')) {
    problems.push(`${where}: uses the /_image on-demand endpoint. The build did not ` +
      `transform images (sharp missing, or the image service was overridden). ` +
      `Static hosting cannot answer /_image.`);
  }

  // 2. Referenced build assets must actually exist.
  for (const m of html.matchAll(/(?:src|href)="(\/_astro\/[^"]+)"/g)) {
    if (!existsSync(join(DIST, m[1]))) problems.push(`${where}: missing asset ${m[1]}`);
  }

  // 3. Images need intrinsic dimensions, or they reflow on load.
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    const t = tag[0];
    if (!/\bwidth=/.test(t) || !/\bheight=/.test(t)) {
      const alt = (t.match(/alt="([^"]{0,40})"/) || [, '(no alt)'])[1];
      problems.push(`${where}: <img> without width/height — "${alt}"`);
    }
    if (!/\balt=/.test(t)) problems.push(`${where}: <img> with no alt attribute`);
  }

  // 4. Placeholder text must never reach a build.
  for (const marker of ['still to be written', 'REPLACE-WITH', 'Lorem ipsum', 'TODO:']) {
    if (html.includes(marker)) problems.push(`${where}: contains placeholder text "${marker}"`);
  }
}

if (problems.length) {
  console.error(`\n✗ Build verification failed (${problems.length}):\n`);
  for (const p of problems) console.error('  - ' + p);
  console.error('');
  process.exit(1);
}
console.log(`✓ Build verified: ${pages.length} pages, images transformed, assets present.`);
