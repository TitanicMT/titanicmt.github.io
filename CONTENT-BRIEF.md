# Content brief — portfolio rebuild

**Status:** the site is built and running. Six projects are live with real case
studies pulled from your PDFs, your old project pages and the Notion doc. What
remains is listed below.

Fill this in wherever you can. Partial is fine; I'll build around gaps and
flag anything still missing. Priority order is top to bottom.

---

## 0. Resolved since the first draft

- MTDex, SLASHER, Commuter companions, PitchIn and the IA studies now have full
  case studies written from your own material, not placeholder copy.
- Both Notion exports are in. Commuter companions gained 12 images and PitchIn 7,
  and PitchIn went from a placeholder to a full case study and is now live.
- Confirmed: Faculty of Information, University of Toronto (INF2170, Dr. Vera
  Khovanskaya). SLASHER was CCT419. I had guessed "information systems" — corrected.
- MTDex is dated 2026; the IA work is dated 2024. Every other year is still unknown
  and is **deliberately omitted** rather than guessed — the Year field simply does
  not render on those pages.

### Still needed, in priority order

1. **Imagery.** Captured what was reachable; four projects still have none.

   | Project | Imagery |
   |---|---|
   | Maple Citizen | captured from the live site: hero, study interface, pricing |
   | MTDex | 4 screenshots (already had) |
   | SLASHER | 3 photos (already had) |
   | PitchIn | thumbnail plus 6 from the Notion export — done |
   | Unity VR | project video still |
   | **Tripshepherd** | **none** — internship work, only you have it |
   | **CarbonTrace** | **none** — OneDrive folders are empty locally |
   | Commuter companions | 12 from the Notion export — done |
   | **IA studies** | **none** — the PDFs contain figures that could be exported |

2. **CarbonTrace findings.** The INF2192 folders in OneDrive are empty locally, so the
   research did not sync. Method, findings and decisions only; no participant material.
3. **Case study content** for Unity VR — it still carries a visible
   "still to be written" note rather than invented detail.
4. **Years** for SLASHER, Commuter companions, PitchIn and Unity VR. Not in the MI
   archive, so these are undergrad and I have no evidence to date them. One clue:
   the PitchIn mock-ups use event dates of Jun 2025, which suggests but does not
   prove a 2025 project — confirm it and I will set it.
5. **A curation call.** With PitchIn now written from its documentation, Unity VR is
   the only remaining item I would cut until it has content.

### What was deliberately excluded

From the personal archive, none of the following is on the site, and none should be:
transcript and grades; the note about first-year math; the list of employers who did
not hire you; the ghosted HK role; police as a fallback career; weight loss, PR status
and relationship; ArcheSell product names, architecture, workflows, competitive research
and internal governance; CarbonTrace participant recordings and transcripts.

ArcheSell appears as a job title with a craft-level description of the design system
work — no product names, no screenshots, no design breakdown, per your instruction.

> **Privacy note:** your student number (1005937113) appears on the cover pages of
> all three IA PDFs, which are now served publicly at `/docs/`. Worth redacting
> before this goes live.

---

## 1. Imagery (biggest blocker)

This is a design portfolio: the imagery *is* the work. Here's what I actually have:

| Project | Have | Need |
|---|---|---|
| MTDex | 4 screenshots | fine as-is |
| SLASHER | 7 photos | fine as-is |
| PitchIn | 7 images | done |
| Commuter companions | 13 images | done |
| Unity VR | **nothing** | hero + 3–5 |
| IA studies | **nothing** (PDFs only) | hero + 3–5 |
| New project A | **nothing** | hero + 3–5 |
| New project B | **nothing** | hero + 3–5 |

**Per project I need:**
- **1 hero image**, landscape, ideally ≥2000px wide. This is the card image and the
  case-study banner. It should read at thumbnail size.
- **3–6 supporting images** — screens, process shots, sketches, artefacts, photos.
- Rough source files are fine; I'll crop, compress and generate responsive sizes.

Drop them anywhere and tell me the path, or put them in `inbox/<project-name>/`.

**Note:** the three projects with no imagery currently render as text-only cards.
That's a deliberate treatment, not a placeholder — but 3 of 8 is too many.

---

## 2. The two new 2026 projects

For each, at minimum:

- **Name**
- **One line** — what it is
- **Year / duration**
- **Your role** — specifically what *you* did, vs. what a team did
- **Discipline tags** — e.g. UX research, product design, front-end, game design
- **Why it belongs in the portfolio** — what it proves that the others don't

---

## 3. Case study content (all 8)

You chose "curate and write real case studies", which means pulling the Notion,
WordPress and YouTube content onto your own site. For each project:

- **The problem** — what was broken, who for
- **What you did** — the actual process, in order
- **2–3 key decisions** — and why you made them that way. This is the part
  hiring managers actually read.
- **Outcome** — what shipped, what changed, what you'd do differently
- **Constraints** — timeline, team, coursework vs client vs personal
- **Tools**
- **Links** — live site, repo, Notion, video, PDF

Voice: write it however you talk. All copy currently on the drafts is mine and
placeholder — I'd rather rewrite from your words than have you approve mine.

---

## 4. Facts I guessed and need confirmed

- [ ] Degree/program — I wrote "information systems at the University of Toronto",
      inferred from your old email domain. Correct?
- [ ] Years on each project (I assigned 2023–2025 by guesswork)
- [ ] "Available for 2026" in the hero — accurate? Looking for full-time, contract,
      freelance?
- [ ] Location — Toronto?
- [ ] Which projects were coursework vs. client vs. personal (worth being explicit;
      coursework framed honestly reads better than coursework framed vaguely)

---

## 5. Decisions

- [ ] **Links beyond GitHub** — LinkedIn, Dribbble, Behance, Read.cv?
- [ ] **Résumé/CV** — want a downloadable PDF linked?
- [ ] **Accent colour** — draft A uses a sea green (`#4fd1b0`) on near-black. Yours
      to change; it's one token.
- [ ] **Typefaces** — Archivo (display) + Spline Sans Mono (data). I'll self-host
      rather than use Google's CDN. Happy with these?
- [ ] **The SLASHER resources page** — the current site has one with rulebook,
      evaluation report and presentation PDFs. Keep it? People may have linked to it.
- [ ] **Old URLs** — `/mtdex-project.html`, `/slasher-board-game.html` etc. will
      change. I'll add redirects so existing links survive. Any you especially care about?

---

## 6. Not blocked on you

While you gather the above I'll build:

- token layer extracted from draft A into Astro
- reusable components (nav, card, footer, layout)
- content collection schema so a project = one markdown file + an image folder
- the case-study page template
- the three projects I already have imagery for
- redirects from the old URLs
