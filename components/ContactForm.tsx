'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

const socials = [
  {
    label: 'YouTube',
    handle: '@askmrai',
    href: 'https://youtube.com/@askmrai',
  },
  {
    label: 'LinkedIn',
    handle: 'David Finnegan',
    href: 'https://linkedin.com/in/davidfinnegan',
  },
  {
    label: 'Substack',
    handle: 'askmrai.substack.com',
    href: 'https://askmrai.substack.com',
  },
  {
    label: 'Email',
    handle: 'hello@askmrai.ai',
    href: 'mailto:hello@askmrai.ai',
  },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // [PLACEHOLDER] Wire up to Formspree, Resend, or your preferred form backend.
    // Example with Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
    await new Promise((res) => setTimeout(res, 1200))
    setStatus('sent')
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {status === 'sent' ? (
          <AnimatedSection>
            <div className="border border-acid-green/30 bg-acid-green/5 p-12 text-center">
              <p className="font-grotesk font-bold text-3xl text-acid-green mb-4">
                Message sent.
              </p>
              <p className="font-inter text-muted">
                David will get back to you — usually within a couple of days.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-surface border border-white/15 text-warm-white font-inter text-base px-5 py-4 placeholder:text-muted/50 focus:outline-none focus:border-acid-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="label block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-white/15 text-warm-white font-inter text-base px-5 py-4 placeholder:text-muted/50 focus:outline-none focus:border-acid-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="label block mb-2">
                  What&apos;s your conundrum?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell David what you're wrestling with..."
                  className="w-full bg-surface border border-white/15 text-warm-white font-inter text-base px-5 py-4 placeholder:text-muted/50 focus:outline-none focus:border-acid-green transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-acid-green text-bg font-grotesk font-bold text-sm uppercase tracking-widest hover:bg-acid-green/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  'Send →'
                )}
              </motion.button>

              {status === 'error' && (
                <p className="font-mono text-sm text-coral mt-2">
                  Something went wrong. Try emailing directly.
                </p>
              )}
            </form>
          </AnimatedSection>
        )}

        {/* Direct links */}
        <AnimatedSection delay={0.2} className="mt-16 pt-12 border-t border-white/10">
          <p className="label mb-8">/ Find David directly</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-white/10 px-6 py-4 hover:border-acid-green/40 hover:bg-surface transition-all group"
              >
                <div>
                  <p className="font-grotesk font-bold text-sm text-warm-white">{s.label}</p>
                  <p className="font-mono text-xs text-muted mt-0.5">{s.handle}</p>
                </div>
                <span className="text-muted group-hover:text-acid-green transition-colors">↗</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
