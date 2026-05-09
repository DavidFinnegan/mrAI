import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ConsultingCTA from '@/components/ConsultingCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About David Finnegan',
  description:
    'AI consultant, creative director, and YouTube host with 25 years in the creative industry. Meet the man behind Ask Mr AI.',
  openGraph: {
    title: 'About David Finnegan | Ask Mr AI',
    description: '25 years creative. Building with AI for a living.',
  },
}

const timeline = [
  {
    years: '2000–2008',
    chapter: 'Chapter 01',
    title: 'The Agency Years',
    body: '[PLACEHOLDER] David begins his career in creative agencies, working across brand, advertising, and digital. Discovers early that the best work happens when technology and creative intuition collide. Leads first major digital campaign for [PLACEHOLDER brand]. Learns that most "creative problems" are actually communication problems.',
  },
  {
    years: '2008–2014',
    chapter: 'Chapter 02',
    title: 'Building Something',
    body: '[PLACEHOLDER] Co-founds or joins a creative studio/agency. Grows a team, wins awards, loses sleep. Navigates the shift from print to digital as the industry\'s defining disruption. Learns hard lessons about what creatives actually need from technology versus what vendors say they need.',
  },
  {
    years: '2014–2020',
    chapter: 'Chapter 03',
    title: 'Creative Direction at Scale',
    body: '[PLACEHOLDER] Takes on senior creative director roles across larger organisations. Begins working with CMOs and brand leaders directly. Notices a pattern: the same people who were afraid of digital are now afraid of data, and now they\'re afraid of AI. Realises the fear is never really about the technology.',
  },
  {
    years: '2020–2023',
    chapter: 'Chapter 04',
    title: 'The AI Moment Arrives',
    body: '[PLACEHOLDER] GPT-3 lands. Midjourney arrives. David is an early adopter — not out of FOMO but out of genuine professional curiosity. Starts building with AI tools daily. Brings his creative industry lens to evaluating what these tools actually do versus what the hype says. Begins advising colleagues informally.',
  },
  {
    years: '2023–Now',
    chapter: 'Chapter 05',
    title: 'Ask Mr AI',
    body: 'Launches Ask Mr AI as a YouTube channel to share honest, practitioner-level takes on AI for the creative industry. Starts consulting formally with Lution and independently with agency owners and CMOs. The brief is always the same: help them navigate AI without losing the thing that makes their work worth anything — creative judgment.',
  },
]

const currentFocus = [
  {
    label: '/ YouTube',
    title: 'Ask Mr AI Show',
    body: 'A weekly YouTube show covering AI tools, builds, honest comparisons, and the bigger questions around AI in the creative industry. No hype. No clickbait. Just useful.',
    cta: { label: 'Watch the show →', href: '/watch' },
  },
  {
    label: '/ Consulting',
    title: 'AI Navigation for Creative Leaders',
    body: 'David works 1:1 and in small groups with creative directors, CMOs, and agency owners. The work is strategic: figuring out where AI actually fits in your practice — and where it doesn\'t.',
    cta: { label: 'Work with David →', href: '/contact' },
  },
  {
    label: '/ Building',
    title: 'Lution & Other Projects',
    body: '[PLACEHOLDER] Details about Lution and any other active builds, tools, or projects David is working on. Keep it honest — what\'s live, what\'s in progress.',
    cta: { label: 'Ask about it →', href: '/contact' },
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
          style={{ background: '#b8ff00' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Headshot column */}
            <AnimatedSection>
              <div className="relative">
                {/* [PLACEHOLDER] Replace with David's actual headshot */}
                <div className="aspect-[4/5] bg-surface border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-acid-green/20 border border-acid-green/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-grotesk font-bold text-3xl text-acid-green">DF</span>
                    </div>
                    <p className="font-mono text-xs text-muted">[PLACEHOLDER<br/>Full David headshot]</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-bg/60 to-transparent" />
                </div>
                {/* decorative corner marks */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-acid-green" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-acid-green" />
              </div>
            </AnimatedSection>

            {/* Text column */}
            <AnimatedSection delay={0.15}>
              <p className="label mb-6">/ About</p>
              <h1 className="font-grotesk font-bold leading-none text-warm-white mb-6"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
                David<br />Finnegan
              </h1>
              <p className="font-mono text-sm text-acid-green mb-8">
                AI Consultant · Creative Director · YouTube Host
              </p>
              <p className="font-inter text-muted text-lg leading-relaxed mb-4">
                I&apos;ve spent 25 years in the creative industry — agencies, studios, brand-side, consulting. I&apos;ve led teams, built things, won some awards, and made plenty of expensive mistakes.
              </p>
              <p className="font-inter text-muted text-base leading-relaxed mb-8">
                Now I spend my time building with AI, making a YouTube show about it, and helping creative leaders figure out what the hell to actually do with these tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-acid-green text-bg font-grotesk font-bold text-sm uppercase tracking-widest hover:bg-acid-green/90 transition-colors"
                >
                  Work with me
                </Link>
                <a
                  href="https://askmrai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-warm-white font-grotesk font-bold text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all"
                >
                  Subscribe on Substack ↗
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-16">
            <p className="label mb-4">/ 25 Years in 5 Chapters</p>
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-warm-white leading-none">
              The story so far.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.chapter} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-white/10 group">
                  <div>
                    <p className="label text-muted mb-1">{item.chapter}</p>
                    <p className="font-mono text-xs text-muted/60">{item.years}</p>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-xl md:text-2xl text-warm-white mb-4 group-hover:text-acid-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-inter text-muted text-base leading-relaxed max-w-2xl">
                      {item.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-16">
            <p className="label mb-4">/ Right Now</p>
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-warm-white leading-none">
              What I&apos;m focused on.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentFocus.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 h-full flex flex-col">
                  <p className="label mb-4">{item.label}</p>
                  <h3 className="font-grotesk font-bold text-xl text-warm-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-inter text-muted text-sm leading-relaxed flex-1 mb-6">
                    {item.body}
                  </p>
                  <Link
                    href={item.cta.href}
                    className="font-mono text-sm text-acid-green hover:text-warm-white transition-colors"
                  >
                    {item.cta.label}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Substack prompt */}
      <AnimatedSection>
        <section className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="label mb-2">/ Newsletter</p>
              <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-warm-white">
                Get the honest takes in your inbox.
              </h2>
              <p className="font-inter text-muted text-sm mt-2">
                Join David&apos;s Substack — AI for creatives, no hype.
              </p>
            </div>
            <a
              href="https://askmrai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-acid-green text-bg font-grotesk font-bold text-sm uppercase tracking-widest hover:bg-acid-green/90 transition-colors"
            >
              Subscribe on Substack ↗
            </a>
          </div>
        </section>
      </AnimatedSection>

      <ConsultingCTA />
    </>
  )
}
