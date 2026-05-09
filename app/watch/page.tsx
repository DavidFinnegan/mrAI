import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import VideoGrid from '@/components/VideoGrid'

export const metadata: Metadata = {
  title: 'Watch — Ask Mr AI on YouTube',
  description:
    'Real builds, honest tool comparisons, and straight talk about AI for creatives. New episodes weekly.',
  openGraph: {
    title: 'Watch | Ask Mr AI',
    description: 'Real builds. Honest takes. AI for creatives.',
  },
}

export default function WatchPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10 relative">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
          style={{ background: '#b8ff00' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <p className="label mb-6">/ The Show</p>
            <h1
              className="font-grotesk font-bold text-warm-white leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
            >
              Ask Mr AI<br />
              <span className="text-acid-green">on YouTube</span>
            </h1>
            <p className="font-inter text-muted text-lg max-w-lg leading-relaxed mb-8">
              Real builds. Tool comparisons. Honest takes from a creative director who builds with AI every day.
            </p>
            <a
              href="https://youtube.com/@askmrai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-warm-white font-grotesk font-bold text-sm uppercase tracking-widest hover:bg-coral/90 transition-colors"
            >
              Subscribe on YouTube ↗
            </a>
          </AnimatedSection>
        </div>
      </section>

      <VideoGrid />
    </>
  )
}
