'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-16">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: '#b8ff00' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"
        style={{ background: '#ff3d2e' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="relative">
          {/* Headshot — off-grid, editorial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 md:right-8 top-0 md:-top-8 w-48 md:w-72 lg:w-96 z-10 opacity-80 mix-blend-luminosity md:mix-blend-normal"
          >
            {/* [PLACEHOLDER] Replace with David's actual headshot */}
            <div className="relative aspect-[3/4] bg-surface border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-acid-green/20 border border-acid-green/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-grotesk font-bold text-2xl text-acid-green">DF</span>
                  </div>
                  <p className="font-mono text-xs text-muted px-4">[PLACEHOLDER<br/>David's headshot]</p>
                </div>
              </div>
              {/* editorial overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
            {/* decorative corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-acid-green" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-acid-green" />
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-0"
          >
            <motion.div variants={lineVariants}>
              <span className="block font-grotesk font-bold leading-none text-acid-green"
                style={{ fontSize: 'clamp(5rem, 18vw, 16rem)', letterSpacing: '-0.04em', lineHeight: '0.88' }}>
                ASK
              </span>
            </motion.div>
            <motion.div variants={lineVariants}>
              <span className="block font-grotesk font-bold leading-none text-warm-white"
                style={{ fontSize: 'clamp(5rem, 18vw, 16rem)', letterSpacing: '-0.04em', lineHeight: '0.88' }}>
                MR AI
              </span>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={lineVariants}
              className="font-inter text-base md:text-xl text-muted mt-8 md:mt-10 max-w-md leading-relaxed"
            >
              Real builds. Honest takes. AI that actually works.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={lineVariants}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-acid-green text-bg font-grotesk font-bold text-sm uppercase tracking-widest hover:bg-acid-green/90 transition-colors"
              >
                Watch the Show →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-warm-white/30 text-warm-white font-grotesk font-bold text-sm uppercase tracking-widest hover:border-warm-white hover:bg-warm-white/5 transition-all"
              >
                Ask David
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-0 left-0 hidden md:flex items-center gap-3 mt-16 pt-16"
          >
            <div className="w-8 h-px bg-acid-green/40" />
            <span className="label text-muted">Scroll to explore</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid-green/20 to-transparent" />
    </section>
  )
}
