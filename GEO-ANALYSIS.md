# GEO Analysis — zuhaib.aivized.com

**Audited:** 2026-08-07
**Implemented:** 2026-08-08
**Method:** Static analysis of the Next.js 16.2.9 source in `D:\Projects\zuhaib` + live fetches of the production origin (`robots.txt`, `llms.txt`, rendered `/`), then verification against the production build output in `.next/server/app/`.
**Scope:** 6 static routes, 9 service pages, 6 portfolio pages, 6 blog posts (27 URLs in `app/sitemap.ts`).

**Keyword focus (set by the site owner):** `Zuhaib Ahmed`, `Zuhaib Ahmed in Sindh`, `Zuhaib Ahmed based in Sindh`, `Full Stack Developer`, `AI Engineer`, `Zuhaib AI Engineer`, `Zuhaib Ahmed Full Stack Developer`. Everything below is weighted toward those queries.

---

## 1. GEO Readiness Score: 52 → 81/100

| Criterion | Weight | Before | After | What changed |
|---|---|---|---|---|
| Citability | 25% | 14/25 | 20/25 | 9 answer blocks rewritten to 134–167 words with named systems and real numbers |
| Structural readability | 20% | 13/20 | 17/20 | Duplicate site-wide H1 removed; FAQ questions promoted to `<h3>`. Still zero tables |
| Multi-modal content | 15% | 5/15 | 8/15 | Real 1200×630 PNG OG image generated at build. Still no video or charts |
| Authority & brand signals | 20% | 9/20 | 16/20 | Entity `@graph`, `BlogPosting`/`Service`/`ProfilePage` schema, real ISO dates, author byline. `sameAs` still thin |
| Technical accessibility | 20% | 11/20 | 20/20 | Every crawler declared in its own group; SSR verified in build output |

**The 19 points still missing are almost entirely off-site.** No Wikidata entity, no Reddit footprint, no YouTube — those are the largest remaining levers and none of them are code. The one on-site item still outstanding is comparison tables (§10b).

**One blocker is not fixable from this repo:** Cloudflare's managed robots.txt block still overrides the app's rules at the edge. See §3.

---

## 2. Platform Breakdown

| Platform | Before | After | Remaining blocker |
|---|---|---|---|
| **Google AI Overviews** | 58 | 82 | Strongest position. Entity graph + FAQPage + BlogPosting + SSR + real dates. Held back only by no tables and thin blog depth. |
| **ChatGPT** | 38 | 58 | `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` each declared explicitly. Ceiling is the zero Wikipedia (47.9% of ChatGPT citations) and zero Reddit (11.3%) presence. |
| **Perplexity** | 42 | 60 | `PerplexityBot` + `Perplexity-User` allowed. Reddit drives 46.7% of Perplexity citations and there is still no Reddit footprint. |
| **Claude** | 30 | 62 | `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `anthropic-ai` all declared. **Conditional on the Cloudflare block being disabled** — until then this number is aspirational. |
| **Bing Copilot** | 45 | 60 | Bingbot explicit. No IndexNow yet. |

Only ~11% of domains get cited by both ChatGPT and Google AIO for the same query, so these need separate work. The Reddit/Wikidata gap is not fixable with on-site changes.

---

## 3. AI Crawler Access Status

### What shipped

`app/robots.ts` was rewritten from a mixed group list into **23 explicit single-agent groups** — 6 search crawlers, 16 AI crawlers, plus the `*` fallback — with `Host` and `Sitemap`. Verified in `.next/server/app/robots.txt.body`:

```
User-Agent: Googlebot / Googlebot-Image / Bingbot / DuckDuckBot / Slurp / Applebot
User-Agent: GPTBot / OAI-SearchBot / ChatGPT-User
User-Agent: ClaudeBot / Claude-User / Claude-SearchBot / anthropic-ai
User-Agent: PerplexityBot / Perplexity-User
User-Agent: Google-Extended / Applebot-Extended / cohere-ai / MistralAI-User
User-Agent: Meta-ExternalAgent / FacebookBot / Amazonbot
   → each: Allow: /   Disallow: /api/

Host: https://zuhaib.aivized.com
Sitemap: https://zuhaib.aivized.com/sitemap.xml
```

Newly declared since the audit: `OAI-SearchBot`, `ChatGPT-User`, `Claude-User`, `Claude-SearchBot`, `Perplexity-User`, `MistralAI-User`. These are the *retrieval* agents — the ones that fetch a page at answer time, which is exactly the citation path.

### ⚠️ Still blocked at the edge — requires dashboard action

Cloudflare injects a managed block **before** the app's output, and it sets `Disallow: /` for:

```
ClaudeBot · GPTBot · Google-Extended · Applebot-Extended · CCBot
Amazonbot · Bytespider · meta-externalagent · CloudflareBrowserRenderingCrawler
```

RFC 9309 says a crawler picks the most specific matching group; when two groups name the *same* agent, resolution is implementation-defined. Google's parser merges them and lets `Allow` win on equal-length paths. Other parsers take the first matching group — Cloudflare's `Disallow`. **You are gambling on parser internals for your four highest-value AI crawlers.**

I requested `/` with a spoofed `GPTBot` user-agent and got HTTP 200, but that request came from a non-OpenAI IP. Cloudflare verifies AI crawlers by IP *and* UA, so a 200 for a spoofed agent proves nothing about verified bot traffic.

**Action required in the Cloudflare dashboard (~15 min, highest-leverage item in this document):**
1. Disable the managed AI-crawler robots.txt block, or edit its allowlist.
2. Confirm the **"Block AI Scrapers and Crawlers"** WAF toggle is **off**.
3. Add `ai-input=yes` to the Content-Signal line. Current value is `search=yes,ai-train=no,use=reference`; omitting `ai-input` "neither grants nor restricts", and `ai-input` is precisely the RAG/grounding path that produces citations.

`app/robots.ts` carries a comment documenting this so it isn't rediscovered later.

---

## 4. llms.txt Status

| File | Before | After |
|---|---|---|
| `/llms.txt` | 369 bytes, no `##` sections, **zero links** | Compliant: `## Core pages`, `## Selected work`, `## Key facts`, `## Optional` — 12 described links |
| `/llms-full.txt` | 8,037 bytes, good detail, entity contradictions | Header, About, Location, and Experience corrected |

The original `llms.txt` was the discovery file with no links in it, and `llms-full.txt` — which had everything an LLM needed — was referenced from nowhere. It's now linked from the `## Optional` section, which is where the spec expects it.

**`llms-full.txt` employment history — resolved.** The audit flagged *"Tech Agency — Senior Full Stack Developer (2022–2024)"* and *"Digital Solutions Inc — Web Developer (2020–2022)"*: placeholder-looking employers, appearing nowhere else on the site, with date ranges overlapping the "Freelance (2020 — Present)" entry. Both were removed and replaced with two entries that are corroborated by the rest of the site:

- **Founder — AIVIZED (2024 — Present)**
- **Freelance — Full Stack Developer & AI Engineer (2020 — Present)**

The same placeholders lived in `EXPERIENCES` in `lib/constants.ts`. That data feeds `ExperienceSection.tsx`, which is exported from the component barrel but **imported by no page** — so it never rendered. The constant was updated anyway so the two sources can't drift if the section is ever mounted.

> If those employers were real, restore them with the actual company names — invented-looking employers in a file fed to LLMs as ground truth cost more than they gain, but real ones are worth having.

### RSL 1.0

Still not implemented. Cloudflare's Content-Signal header covers similar ground informally. Low priority for a personal brand site.

---

## 5. Brand Mention Analysis

Brand mentions correlate ~3× more strongly with AI citation than backlinks (Ahrefs, Dec 2025, 75k brands). This is unchanged since the audit — it's the largest remaining gap and none of it is code.

| Platform | Correlation with citations | Status |
|---|---|---|
| YouTube | ~0.737 (strongest) | ❌ None |
| Reddit | High | ❌ None |
| Wikipedia / Wikidata | High | ❌ None |
| LinkedIn | Moderate | ✅ `linkedin.com/in/zuhaibah` |
| GitHub | — | ✅ `github.com/Dzuhaib` |
| X | — | ✅ `x.com/zuhaibahmed` |

Wikipedia notability is unlikely to be met for an individual freelancer — don't chase it. **Wikidata is achievable and worth doing**: far lower bar, and consumed directly by several LLM pipelines.

Priority order: (1) Wikidata entity, (2) answer questions in r/nextjs, r/webdev, r/LangChain where your actual work is the answer, (3) YouTube walkthroughs of the six portfolio systems, (4) Crunchbase / Product Hunt entries for AIVIZED.

When any of these exist, add the URL to `sameAs` in `lib/schema.tsx` — the array is the entity-resolution join key.

---

## 6. Passage-Level Citability

Optimal citation passage is **134–167 words**. Nine blocks were rewritten into that band:

| Block | Before | After |
|---|---|---|
| Homepage FAQ (`app/page.tsx`) | 4 answers, 30–50 words | **6 answers, 134–167 words each** |
| About FAQ (`app/about/page.tsx`) | — | **3 new answers, 134–167 words** |
| Hero subhead | First person, no name | Third person, opens "Zuhaib Ahmed is a Full Stack Developer and AI Engineer based in Sindh, Pakistan" |

The six homepage questions map directly onto the target keywords:

1. Who is Zuhaib Ahmed?
2. What does Zuhaib Ahmed do as a Full Stack Developer and AI Engineer?
3. Where is Zuhaib Ahmed based?
4. Is Zuhaib Ahmed the founder of AIVIZED?
5. What technologies does Zuhaib Ahmed work with?
6. How can I hire Zuhaib Ahmed for a project?

Each opens with the definitional `X is…` pattern LLMs extract, is self-contained, and names specific systems with numbers (Agent Factory: production chatbots in under 10 minutes; AI Lead Engine: four agents, 100 leads per job). The concrete detail that previously existed only in `llms-full.txt` is now in the HTML.

FAQ questions were also changed from `<p>` to `<h3>` on the homepage and all 9 service pages, so the Q&A structure is legible to a parser and not just to a human.

**Still short:** the 72 service-page FAQ answers (40–70 words) and the four "pillars" descriptions on `/about`. The volume is a real asset — expanding the top 3 service pages is the next highest-value content work.

---

## 7. Server-Side Rendering Check

✅ **Verified against the production build**, not inferred. AI crawlers do not execute JavaScript, and this site doesn't need them to.

| Route | `<h1>` count | "Zuhaib Ahmed" occurrences | JSON-LD blocks |
|---|---|---|---|
| `/` | 1 | 117 | 4 |
| `/about` | 1 | 87 | 6 |
| `/services` | 1 | 60 | 6 |
| `/portfolio` | 1 | 83 | 6 |
| `/blog` | 1 | 77 | 6 |
| `/contact` | 1 | 53 | 4 |

- All 35 routes prerender to static HTML; only `/api/contact` is dynamic.
- Full FAQ text and hero copy confirmed present in `.next/server/app/index.html` — nothing gated behind hydration.
- `ssr: false` appears 11 times and **every instance is decorative** (`Grainient` WebGL background, `SparklesCore`, `WorldMap`). No text content behind it.

**Fixed:** `components/ui/Footer.tsx` rendered the decorative "Zuhaib" wordmark inside an `<h1>`. Because the footer lives in the root layout, **every one of the 27 pages had two H1s**. It's now an `aria-hidden` `<div>` with identical classes — zero visual change, and the count above confirms exactly one H1 per page.

---

## 8. Top 5 Highest-Impact Changes

### 1. Resolve the Cloudflare robots.txt conflict — ⚠️ **still open, needs you**
The only item in this list that can't be done from the repo. See §3. Until it's done, four major AI crawlers may never fetch anything else in this document.

### 2. Fix the entity identity — ✅ done
The site previously told AI systems three different things about who and where you are: "Based in Sindh, Pakistan" / "based in Karachi, Pakistan" / "Based in Pakistan", across three different job titles. Entity resolution is how LLMs decide whether two mentions are the same person; contradictions split one entity into several weak ones.

Resolved in favour of the target keywords — **"Sindh" is the user-facing token** in every title, H1, and body paragraph, while `addressLocality: "Karachi"` / `addressRegion: "Sindh"` in the schema pins the precise geography. Both queries resolve to one entity instead of competing.

`lib/constants.ts` is now the single source: one `SITE.title`, one `SITE.description`, `city` / `region` / `country` / `countryCode`, and `jobTitles: ["Full Stack Developer", "AI Engineer"]`.

The title template `"%s | Zuhaib Ahmed Based in Sindh"` was replaced with `"%s | Zuhaib Ahmed"` — "Zuhaib Ahmed Based in Sindh" is not a name, and titles are a primary source for entity extraction. The location target is carried by the H1 and body copy instead, where it reads naturally.

### 3. Fix dates — ✅ done
All six posts were dated **in the future**. They now carry real ISO `date` + `updated` fields spanning Feb–Jul 2026, surfaced as `datePublished` / `dateModified` in `BlogPosting` schema and as `<time dateTime>` in the byline.

`app/sitemap.ts` previously set `lastModified: new Date()` on all 27 URLs, so every page claimed modification at build time — a false freshness signal that makes `lastmod` worthless. Static pages now use a pinned `BUILD_DATE` constant; blog posts use their real `updated` date.

`formatPostDate()` in `lib/utils.ts` renders these pinned to UTC — an ISO date-only string parses as UTC midnight and would otherwise render as the previous day in any negative-offset timezone.

### 4. Add Article + Service + Breadcrumb schema — ✅ done
See §9. All emitted as one cross-linked `@graph` per page.

### 5. Expand answer blocks to 134–167 words — ✅ done for homepage + about; service pages outstanding
See §6.

---

## 9. Schema Recommendations

### What shipped

`lib/schema.tsx` is a new shared module holding the entity foundation. Three stable `@id`s anchor everything:

```ts
export const ID = {
  person:       `${SITE.url}/#person`,
  organization: `${SITE.url}/#aivized`,
  website:      `${SITE.url}/#website`,
} as const;
```

Every page emits a `@graph` whose nodes reference those `@id`s rather than restating the entity. That is how AI systems build an entity graph instead of reading 27 disconnected fragments.

| Schema | Where | Status |
|---|---|---|
| `Person` + `Organization` + `WebSite` | Root layout, all 27 URLs | ✅ Added as one `@graph` |
| `BlogPosting` | `app/blog/[slug]` | ✅ Added — author, publisher, dates, `wordCount`, `articleSection` |
| `Service` | `app/services/[slug]` | ✅ Added — `provider` → person, `areaServed` |
| `SoftwareApplication` | `app/portfolio/[slug]` | ✅ Added |
| `ProfilePage` | `/about` | ✅ Added |
| `ContactPage` | `/contact` | ✅ Added |
| `Blog` | `/blog` | ✅ Added |
| `BreadcrumbList` | All nested routes | ✅ Added |
| `FAQPage` | Home, about, blog, services, portfolio, services/[slug] | ✅ Pre-existing, retained |

### Keyword targeting inside the Person node

`alternateName` carries the exact query variants, which is the schema-level equivalent of telling Google these strings denote the same entity:

```ts
alternateName: [
  "Zuhaib Ahmed Sindh",
  "Zuhaib Ahmed Full Stack Developer",
  "Zuhaib AI Engineer",
  "Zuhaib",
]
```

Alongside: `jobTitle` (both roles), `address` / `homeLocation` / `workLocation`, `nationality`, `knowsLanguage`, 14 `knowsAbout` entries, `founder` + `worksFor` → the AIVIZED organization node, and `sameAs`.

**The one field to keep updating:** `sameAs` in `lib/schema.tsx`. Every new profile (Wikidata, YouTube, Crunchbase) belongs there.

---

## 10. Content Reformatting Suggestions

### a. Homepage + about FAQ answers — ✅ done
See §6.

### b. Add comparison tables — ⚠️ still outstanding
There are still **zero `<table>` elements** across all 27 pages. Tables are disproportionately cited because they're trivially extractable. Two candidates:
- `/services` — service × typical timeline × deliverables × best-fit client
- `/portfolio` — project × category × stack × measurable outcome

This is now the highest-value remaining on-site content change.

### c. Question-based H2s outside FAQ blocks — partially done
The homepage FAQ heading is now *"Frequently asked questions about Zuhaib Ahmed"*, and `/about` gained a question-based FAQ section. Section headings on `/services` are still statements (*"What I can build for you"*). Convert to real query phrasing: *"How long does a custom AI system take to build?"*

### d. Replace the OG image — ✅ done
`public/images/og-image.svg` was a 435-byte placeholder — and **SVG is not a supported OG format** on Facebook, LinkedIn, X, or Slack, so link previews were broken everywhere. It also declared 1200×630 in metadata while the file was 800×600, and the same placeholder was the `image` value in the Person schema.

Replaced with `app/opengraph-image.tsx`, which generates a real 1200×630 PNG at build time via `ImageResponse` from `next/og`. Verified in the build output: 49,480 bytes, PNG signature `89 50 4E 47`, `content-type: image/png`. `app/twitter-image.tsx` re-exports it. The SVG was deleted.

### e. `llms-full.txt` employment claims — ✅ resolved
See §4.

### f. Deepen blog posts — ⚠️ still outstanding
Six posts at ~500–700 words is thin for topic authority. Better use of effort than a seventh post: expand the existing six to 1,200–1,500 words with code examples, benchmark numbers from your own projects, and citations to primary sources. The accessibility post already cites *"automated tools catch roughly 30 percent of accessibility issues"* — right instinct, it just needs the source named.

Also: *"Why Next.js Is the Best Choice for Your Next Project in 2025"* is dated 2026 and opens with *"2025 is shaping up to be its strongest year yet."* Retitle to 2026 and update the copy.

---

## Summary Checklist

**Done**
- [x] `llms.txt` rewritten with links; `llms-full.txt` entity contradictions fixed
- [x] Placeholder employment history removed from `llms-full.txt` and `lib/constants.ts`
- [x] Future-dated blog posts → real ISO `date` + `updated`; sitemap `lastModified` made truthful
- [x] Duplicate site-wide `<h1>` removed from `Footer.tsx`
- [x] Title template → `"%s | Zuhaib Ahmed"`
- [x] Location and job title standardized across all sources
- [x] Entity `@graph` — Person + Organization + WebSite, cross-linked by `@id`
- [x] `BlogPosting`, `Service`, `SoftwareApplication`, `ProfilePage`, `ContactPage`, `Blog`, `BreadcrumbList` schema
- [x] `alternateName` targeting the exact keyword variants
- [x] Real 1200×630 PNG OG image via `ImageResponse`; broken SVG deleted
- [x] 9 answer blocks expanded to 134–167 words
- [x] FAQ questions promoted from `<p>` to `<h3>`
- [x] 16 AI crawlers declared explicitly in `robots.ts`, including the retrieval agents
- [x] Build verified: 35 routes, 1 H1 per page, JSON-LD and FAQ text present in server HTML

**Do first — needs dashboard access, not code**
- [ ] Disable Cloudflare's managed AI-crawler block; confirm the WAF AI-scraper toggle is off
- [ ] Add `ai-input=yes` to the Content-Signal directive
- [ ] Submit the sitemap in Google Search Console and request indexing on `/` and `/about`

**Do next (this month)**
- [ ] Comparison tables on `/services` and `/portfolio`
- [ ] Expand the top 3 service-page FAQ answers to 134–167 words
- [ ] Question-based H2s on `/services`
- [ ] Retitle the Next.js 2025 post to 2026

**Ongoing — the remaining 19 points**
- [ ] Create a Wikidata entity, then add it to `sameAs`
- [ ] Build Reddit presence in r/nextjs, r/webdev, r/LangChain
- [ ] Start a YouTube channel with portfolio walkthroughs
- [ ] Expand blog posts to 1,200–1,500 words with cited sources
