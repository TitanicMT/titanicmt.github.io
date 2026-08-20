---
title: MTDex
summary: A responsive, high-definition Pokédex built with React and Vite, structuring thousands of deeply nested API records into something that stays fast and readable.
year: 2026
role: Product manager, UX designer and frontend developer — sole contributor
tags: ["Product design", "Front-end", "Information architecture", "React & Vite"]
cover: ../../assets/projects/mtdex-home.png
coverAlt: MTDex home screen showing the searchable Pokémon index with type-coloured cards
order: 2
featured: false
links:
  - label: "Try MTDex"
    href: "#"
context: Self-directed project. Sole developer and designer.
---

## The problem

The PokéAPI exposes an enormous, deeply nested dataset — evolutionary chains, move
lists, item databases, abilities, natures, alternate forms. Most front-ends built on it
are thin API wrappers: technically complete, unpleasant to browse.

I wanted to find out whether the same data could be made genuinely enjoyable to explore,
and to own every decision from scope through to shipped code.

## What I did

I acted as product manager, UX designer and frontend developer.

**Defining the MVP.** I evaluated the full dataset first and deliberately narrowed:
core Pokémon discovery, high-quality visual representation, fluid navigation. Everything
else waited until those three felt right.

**Establishing the visual system.** A type-driven colour palette, a deliberate type
scale, and micro-animations tuned so the interface reads as lightweight while carrying
a lot of information at once.

**Building it.** A single-page application in React and Vite with dynamic routing,
state management and reusable components — cards, modals, badges — styled with Tailwind.

**Taming the API.** The bulk of the engineering was data-shaping: fetching and
normalising deeply nested JSON into structures the interface could render without
each view re-deriving the same thing.

**Organising the depth.** Thousands of data points across moves, items, abilities,
natures and forms had to sit in a hierarchy where deep detail stayed discoverable
without burying the common case.

## What I'd do differently

The MVP boundary held, but I set the visual system before I understood how irregular
the data actually was. Several type-colour pairings needed reworking once real records
were flowing through the components rather than sample ones.
