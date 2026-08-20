# Content brief — portfolio rebuild

Fill this in wherever you can. Partial is fine; I'll build around gaps and
flag anything still missing. Priority order is top to bottom.

---

## 1. Imagery (biggest blocker)

This is a design portfolio: the imagery *is* the work. Here's what I actually have:

| Project | Have | Need |
|---|---|---|
| MTDex | 4 screenshots | fine as-is |
| SLASHER | 7 photos | fine as-is |
| PitchIn | 1 thumbnail | hero + 3–5 more |
| Commuter companions | **nothing** | hero + 3–5 |
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
