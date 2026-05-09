# Ask Mr AI — askmrai.ai

Personal brand website for David Finnegan — AI consultant, creative director, and YouTube host.

**Stack:** Next.js 14 (App Router) · Tailwind CSS · Framer Motion · Vercel

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. On first deploy, Vercel auto-detects Next.js and configures everything.

### Option B — GitHub integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repo — Vercel detects Next.js automatically.
4. Add your domain `askmrai.ai` under **Settings → Domains**.

### Environment variables

No env vars required for the basic site. When you wire up the contact form, add:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Your Formspree form ID (or swap for Resend/other) |

---

## Placeholder content to replace

Search the project for `[PLACEHOLDER]` — every instance marks something David needs to fill in:

| Location | What to replace |
|---|---|
| `components/Hero.tsx` | David's headshot image (`/public/david-headshot.jpg`) |
| `app/about/page.tsx` | Hero headshot + timeline chapter details |
| `lib/data.ts` | Real YouTube video IDs, thumbnails, and blog post content |
| `components/ContactForm.tsx` | Wire up form backend (Formspree/Resend) |
| `app/layout.tsx` | `og-default.jpg` — OG image for social sharing |
| `app/contact/page.tsx` | Email address `hello@askmrai.ai` |

---

## Adding David's headshot

1. Export a high-res photo as `david-headshot.jpg` (min 800×1000px).
2. Place it at `public/david-headshot.jpg`.
3. In `components/Hero.tsx`, replace the placeholder `<div>` with:

```tsx
<Image
  src="/david-headshot.jpg"
  alt="David Finnegan"
  fill
  className="object-cover object-top"
  priority
/>
```

Do the same in `app/about/page.tsx`.

---

## Adding real YouTube videos

In `lib/data.ts`, update the `videos` array. For each video:

```ts
{
  id: 'YOUTUBE_VIDEO_ID',
  title: 'Your video title',
  thumbnail: `https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg`,
  duration: '12:34',
  pillar: 'Build With Me', // or Tool-Off / Agency Operator / Veteran Take
  url: `https://youtube.com/watch?v=YOUTUBE_VIDEO_ID`,
  description: 'Short description',
}
```

YouTube thumbnail URLs are always `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg` — no API key needed.

---

## Adding blog posts

1. Add post metadata to `lib/data.ts` → `blogPosts` array.
2. Create the page at `app/blog/[slug]/page.tsx`.
3. Write content in MDX or plain TSX.

---

## Wiring up the contact form

The form in `components/ContactForm.tsx` currently simulates success. To make it real:

**With Formspree (easiest):**

```bash
npm install @formspree/react
```

Replace the `handleSubmit` function:

```ts
import { useForm } from '@formspree/react'
const [state, handleSubmit] = useForm('YOUR_FORM_ID')
```

**With Resend:**
Create an API route at `app/api/contact/route.ts` and POST from the form.

---

## Project structure

```
askmrai/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── watch/page.tsx      # YouTube page
│   ├── blog/page.tsx       # Blog listing
│   ├── contact/page.tsx    # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots config
├── components/
│   ├── Nav.tsx             # Sticky nav, mobile hamburger
│   ├── Footer.tsx          # Footer with links
│   ├── Hero.tsx            # Home hero section
│   ├── TheShow.tsx         # YouTube preview section
│   ├── AboutTeaser.tsx     # About pull-quote section
│   ├── LatestBlog.tsx      # Blog preview section
│   ├── ConsultingCTA.tsx   # "Got a conundrum?" CTA
│   ├── VideoCard.tsx       # Individual video card
│   ├── VideoGrid.tsx       # Filterable video grid
│   ├── BlogCard.tsx        # Individual blog card
│   ├── ContactForm.tsx     # Contact form (client)
│   └── AnimatedSection.tsx # Scroll-triggered fade-in wrapper
├── lib/
│   └── data.ts             # Placeholder video + blog data
└── public/
    └── robots.txt
```

---

Built with [Claude Code](https://claude.ai/code) ◆
