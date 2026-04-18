# portfolio

Sam Mobley's personal portfolio site.

## Stack

- [Astro](https://astro.build) (static site generator)
- Tailwind CSS v4
- MDX for featured project detail pages
- Deployed to Vercel

## Local development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Adding or editing projects

Each project is a Markdown/MDX file in `src/content/projects/`.

Frontmatter fields:

| Field | Type | Notes |
|---|---|---|
| `title` | string | Required |
| `description` | string | 1-2 sentence summary |
| `tech` | string[] | Stack badges shown on card |
| `status` | `live` / `testflight` / `internal` / `dev` | Required |
| `url` | URL | Live web link |
| `testflight` | URL | TestFlight join link |
| `github` | URL | Public repo link |
| `featured` | boolean | If true, surfaces on home and gets a detail page |
| `order` | number | Sort on `/projects` (lower first) |
| `published` | boolean | Must be `true` to appear anywhere |

To add a new project:
1. Copy an existing file in `src/content/projects/`
2. Edit frontmatter
3. Set `published: true` when ready
4. Commit + push — auto-deploys via Vercel

## Status

In development.
