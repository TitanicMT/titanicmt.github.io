// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Used for canonical URLs, sitemaps, and any absolute link Astro generates.
	site: 'https://zonghengtian.com',

	// The old hand-written pages are being replaced by /work/<slug>/ routes.
	// These keep any existing inbound link working instead of 404ing.
	redirects: {
		'/mtdex-project.html': '/work/mtdex/',
		'/slasher-board-game.html': '/work/slasher/',
		'/information-architecture-projects.html': '/work/information-architecture/',
	},
});
