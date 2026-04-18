# Portfolio Site — Design

**Date:** 2026-04-17
**Owner:** Sam Mobley
**Status:** Approved, ready for implementation plan

## Goal

A lean personal portfolio site that serves as a public hub linking to Sam's live projects (web apps + TestFlight iOS builds) and outbound to Medium for long-form writing. Site should feel minimal, fast, and easy to maintain.

## Non-goals

- Hosting blog posts on-site (Medium handles that)
- Admin UI / CMS
- Authentication, comments, analytics dashboards
- Case studies for every project — only 1-2 featured

## Site structure

| Route | Purpose |
|---|---|
| `/` | Home: intro, 2 featured project highlights, "All projects" link, outbound links (Medium / GitHub / TestFlight) |
| `/projects` | Grid of all published project cards |
| `/projects/[slug]` | Detail page (MDX case study) for featured projects only |
| `/about` | Short bio + contact |

Top nav: **Home / Projects / Writing / About**
"Writing" opens Medium in a new tab — no embed, no RSS sync (possibly added later as enhancement).

## Content model

All projects live in `src/content/projects/*.md` using Astro content collections.

Frontmatter schema:

```yaml
title: string
description: string              # 1-2 sentence summary for card
tech: string[]                   # e.g. ["Python", "Flask", "Schwab API"]
status: "live" | "testflight" | "internal" | "dev"
url: string?                     # live web URL if applicable
testflight: string?              # TestFlight link if iOS
github: string?                  # repo link if public
featured: boolean                # surfaces on home + gets detail page
order: number                    # sort order on /projects (lower = earlier)
published: boolean               # false = hidden everywhere
```

- Only `published: true` projects render anywhere.
- Body content (MDX) is optional and only rendered for `featured: true` projects on their detail page.
- Initial seed: 9 project files, all `published: false`. Sam curates by flipping flags.

### Initial project seed

1. Tax Burden Calculator — web, live
2. World Pulse — web, live
3. Cycle Nutrition — web, live
4. Options Intelligence — internal (case study only, no live link)
5. Project Dashboard — internal tool
6. Project OS — internal tool
7. Italy Trip — iOS / TestFlight
8. Sign Tracker — iOS / TestFlight
9. Mood Tracker — iOS / TestFlight

## Visual design

- **Style:** minimal / typographic (Vercel, Lee Robinson reference)
- **Typography:** Geist Sans (UI), JetBrains Mono (code, tech badges)
- **Color:** near-black text on off-white, single restrained accent (desaturated blue/green — final pick during build)
- **Layout:** max content width ~720px, generous whitespace, subtle hover/focus states, no heavy animation
- **Responsive:** mobile-first, works well on phone

## Tech stack

- **Framework:** Astro (zero-JS by default, content-collections, MDX support)
- **Styling:** Tailwind CSS (purged at build time)
- **Content:** Markdown + MDX for featured detail pages
- **Icons:** lucide-astro or similar lightweight set

## Deploy

- GitHub repo: `sammobley/portfolio` (public)
- Hosting: **Vercel** (auto-deploy from `main`, free tier)
- Preview deploys on PRs for visual review
- **Domain:** keep at current registrar, point DNS at Vercel (A/CNAME records per Vercel docs). No registrar migration needed.

## Out of scope / future

- Medium RSS sync for "Latest writing" strip on homepage
- View counts / analytics (add Vercel Analytics later if wanted)
- Dark mode toggle (start light-mode only; add if demand arises)
- Contact form (use mailto link initially)

## Success criteria

- Lighthouse score ≥ 95 on Performance / Accessibility / Best Practices
- Ships zero client JS on pages without interactive components
- Adding a new project = create one Markdown file, push to main, deploys in < 2 min
- Mobile + desktop render well at common breakpoints
