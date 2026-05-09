import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Ask David a question',
  description:
    'Got an AI conundrum? David Finnegan works with creative leaders, CMOs, and agency owners. Get in touch.',
  openGraph: {
    title: 'Contact | Ask Mr AI',
    description: "Got an AI conundrum? Let's talk.",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10 relative">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
          style={{ background: '#b8ff00' }}
        />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <p className="label mb-6">/ Contact</p>
            <h1
              className="font-grotesk font-bold text-warm-white leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
            >
              Ask Mr AI<br />
              <span className="text-acid-green">something.</span>
            </h1>
            <p className="font-inter text-muted text-lg leading-relaxed max-w-lg">
              Got an AI question, a conundrum, or want to work together? David reads every message.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
