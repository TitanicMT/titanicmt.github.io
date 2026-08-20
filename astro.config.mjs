// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Used for canonical URLs, sitemaps, and any absolute link Astro generates.
	site: 'https://zonghengtian.com',

	image: {
		// Pin the build-time image service explicitly.
		//
		// Cloudflare's Astro-on-Workers preset swaps in a passthrough service,
		// because sharp cannot run inside the Workers runtime. That is correct
		// for a server-rendered site, where a Worker answers /_image at runtime.
		// This site is fully static, so nothing answers /_image and every image
		// 404s. Pinning sharp forces images to be transformed at build time and
		// emitted as plain files, which any static host can serve.
		service: sharpImageService(),
	},

	// The old hand-written pages are replaced by /work/<slug>/ routes.
	// These keep existing inbound links working instead of 404ing.
	redirects: {
		'/mtdex-project.html': '/work/mtdex/',
		'/slasher-board-game.html': '/work/slasher/',
		'/information-architecture-projects.html': '/work/information-architecture/',
	},
});
