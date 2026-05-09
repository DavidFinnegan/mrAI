import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function ConsultingCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-full h-0.5 bg-acid-green"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
        style={{ background: '#b8ff00' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="label mb-6">/ The Conundrum</p>
            <h2 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-warm-white leading-none mb-6">
              Got an AI<br />
              <span className="text-acid-green">conundrum?</span>
            </h2>
            <p className="font-inter text-muted text-lg leading-relaxed mb-10 max-w-xl">
              David works with creative leaders, CMOs and agency owners navigating AI. Whether you&apos;re building an internal workflow, evaluating tools, or trying to get your team onboard — let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-acid-green text-bg font-grotesk font-bold text-base uppercase tracking-widest hover:bg-acid-green/90 active:scale-95 transition-all"
            >
              Book a free 15-min call
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-acid-green/20"
        aria-hidden="true"
      />
    </section>
  )
}
