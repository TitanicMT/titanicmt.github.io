---
title: Maple Citizen
summary: A study app for the Canadian citizenship test, designed, built, shipped and marketed solo — auth, payments, an adaptive review algorithm and its own design system.
year: 2026
role: Solo founder — product, design system, front-end, backend, payments and marketing
tags: ["Product design", "Design system", "Front-end", "Payments", "Solo shipped"]
order: 1
featured: true
links:
  - label: "maplecitizen.ca"
    href: "https://maplecitizen.ca"
context: Self-founded product, live and taking payments.
---

## Where it came from

I passed the Canadian citizenship test on the first attempt, and the studying was worse
than the test. The official material is a government guide written to be complete rather
than learnable, and the practice tools around it are mostly ad-farms.

So I built the thing I had wanted: a realistic timed mock exam, topic drills, and a
system that remembers what you keep getting wrong.

## What it does

A **20-question timed mock exam** matching the real format, topic study drills, a
persistent **mistake book**, flagged bookmarks, an **adaptive review algorithm** that
resurfaces weak areas, progress statistics, badges and an opt-in leaderboard.

## The decisions worth explaining

**No build step.** The entire app is a single self-contained HTML file. That sounds like
a limitation and functions as a feature: nothing to install, nothing to break in a
toolchain, and page loads that finish before a framework would have finished booting.

**One Worker serves everything.** The static site and the `/api/*` payment endpoints run
on a single Cloudflare Worker, git-connected and auto-deploying from the default branch.
There is no CI to maintain.

**Entitlements live server-side.** Sign-in is Google or an email magic link through
Supabase, with progress syncing across devices and `localStorage` as an offline cache.
Pro status is stored in Supabase behind row-level security: clients can read their own
row and can never grant themselves Pro. Unlock is instant on return from Stripe
checkout, with the webhook as a backstop for renewals and cancellations.

**Free tier that is actually useful.** The study path, the mistake book, one baseline
mock test and the leaderboard are free. Pro adds smart review, unlimited mock tests,
mixing your own mistakes into a mock, and no ads — $9.85 CAD lifetime or $3.95 CAD
monthly with a three-day trial.

## The ethical constraint

The real exam questions are confidential. Every question in Maple Citizen is written
from facts in the Government of Canada's *Discover Canada* guide, and the app states
plainly that it is not an official IRCC product.

That constraint shaped the product: it had to teach the material rather than drill
leaked answers, which is what pushed the design toward the mistake book and adaptive
review rather than a bank of practice questions.

## The design system

Maple Citizen has its own: a flag-red primary, Sora paired with Hanken Grotesk, and a
voice rule I held everything to — **coach, not clerk**. Government-adjacent products
default to bureaucratic tone, and that tone is exactly what makes studying feel like
paperwork.

## Stack

Vanilla JavaScript, Cloudflare Workers, Supabase for auth and data, Stripe for payments,
Cloudflare Email Routing for support mail.
