export type VideoPillar =
  | 'Build With Me'
  | 'Tool-Off'
  | 'Agency Operator'
  | 'Veteran Take'

export interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  pillar: VideoPillar
  url: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  featured?: boolean
  readTime: string
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'I built a full AI content pipeline in 48 hours — here\'s exactly what I used',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/b8ff00?text=Episode+01',
    duration: '18:42',
    pillar: 'Build With Me',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] Full walkthrough of a real AI content pipeline build.',
  },
  {
    id: '2',
    title: 'Claude vs GPT-4o for creative briefs — the honest test a creative director would run',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/ff3d2e?text=Episode+02',
    duration: '24:11',
    pillar: 'Tool-Off',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] Head-to-head comparison for real creative work.',
  },
  {
    id: '3',
    title: 'Why your agency\'s AI adoption is failing (and it\'s not the tools)',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/b8ff00?text=Episode+03',
    duration: '31:07',
    pillar: 'Agency Operator',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] Hard truths about AI implementation in agencies.',
  },
  {
    id: '4',
    title: '25 years of creative work taught me this — AI doesn\'t replace taste',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/ff3d2e?text=Episode+04',
    duration: '22:55',
    pillar: 'Veteran Take',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] A creative director\'s honest perspective on AI and craft.',
  },
  {
    id: '5',
    title: 'Building an AI brand voice engine from scratch — live build, no edits',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/b8ff00?text=Episode+05',
    duration: '44:18',
    pillar: 'Build With Me',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] Complete live build of an AI brand voice system.',
  },
  {
    id: '6',
    title: 'Midjourney vs Firefly vs DALL-E — which one works for client work?',
    thumbnail: 'https://placehold.co/640x360/1a1a1a/ff3d2e?text=Episode+06',
    duration: '19:33',
    pillar: 'Tool-Off',
    url: 'https://youtube.com/@askmrai',
    description: '[PLACEHOLDER] Real client context image generation comparison.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-wont-replace-creative-directors',
    title: 'AI won\'t replace creative directors. Bad creative directors will.',
    excerpt:
      'After 25 years in the industry, I\'ve watched a lot of technologies come and go. This one\'s different — but not in the way most people think.',
    date: '2025-04-28',
    category: 'Veteran Take',
    featured: true,
    readTime: '7 min',
  },
  {
    slug: 'real-ai-stack-for-agency-owners',
    title: 'The real AI stack I use to run a consulting practice in 2025',
    excerpt:
      'No fluff. No affiliate links. Here\'s what I actually open every morning.',
    date: '2025-04-14',
    category: 'Build With Me',
    readTime: '5 min',
  },
  {
    slug: 'why-prompt-engineering-is-a-red-herring',
    title: 'Why "prompt engineering" is a red herring for most creative teams',
    excerpt:
      'Everyone\'s teaching prompts. Nobody\'s teaching creative judgment. That\'s the gap.',
    date: '2025-03-30',
    category: 'Agency Operator',
    readTime: '6 min',
  },
  {
    slug: 'tool-off-claude-vs-gpt-creative-briefs',
    title: 'Tool-Off: Claude vs GPT-4o for creative briefs',
    excerpt:
      'I ran the test I\'d actually care about — not benchmarks, but real creative work with real client context.',
    date: '2025-03-15',
    category: 'Tool-Off',
    readTime: '8 min',
  },
]
