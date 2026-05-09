import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Pull quote */}
          <AnimatedSection>
            <div className="relative">
              {/* decorative */}
              <span className="label text-acid-green/40 mb-6 block">" "</span>
              <blockquote className="font-grotesk font-bold text-3xl md:text-4xl lg:text-5xl text-warm-white leading-tight">
                I&apos;ve been in creative for 25 years. I build with AI for a living.
              </blockquote>
              <div className="mt-8 w-16 h-0.5 bg-acid-green" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.15}>
            <p className="font-inter text-muted text-base md:text-lg leading-relaxed mb-4">
              David Finnegan is a creative director, AI consultant, and the host of Ask Mr AI — a YouTube show for people who want to understand AI through the lens of real creative work.
            </p>
            <p className="font-inter text-muted text-base leading-relaxed mb-4">
              After 25 years leading creative across agencies and brands, David now helps CMOs, agency owners, and creative leaders navigate the AI transition without losing their edge.
            </p>
            <p className="font-inter text-muted text-base leading-relaxed mb-8">
              [PLACEHOLDER — add 1 more line about David's current focus or consulting work with Lution]
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-sm text-acid-green hover:text-warm-white transition-colors group"
            >
              More about David
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
