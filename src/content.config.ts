import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * A project is one markdown file in src/content/projects/.
 * The body of the file is the case study; the frontmatter below drives
 * the card on the home page, the ordering, and the case-study header.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line. Used on the card and as the page description. */
      summary: z.string(),
      /** Omitted where the year is not yet confirmed — never guessed. */
      year: z.number().optional(),
      /** What Marcus specifically did, as opposed to the team. */
      role: z.string(),
      /** Discipline labels shown as tags. */
      tags: z.array(z.string()).default([]),
      /** Card image. Optional: projects without imagery render as typographic cards. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Lower sorts first. */
      order: z.number().default(99),
      /** Gets the wide cell in the bento grid. */
      featured: z.boolean().default(false),
      /** External references, shown in the case-study sidebar. */
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      /** Context the reader deserves up front. */
      context: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
