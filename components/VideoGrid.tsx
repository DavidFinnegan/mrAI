'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import VideoCard from './VideoCard'
import { videos, type VideoPillar } from '@/lib/data'

const pillars: ('All' | VideoPillar)[] = [
  'All',
  'Build With Me',
  'Tool-Off',
  'Agency Operator',
  'Veteran Take',
]

export default function VideoGrid() {
  const [active, setActive] = useState<'All' | VideoPillar>('All')
  const filtered = active === 'All' ? videos : videos.filter((v) => v.pillar === active)

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-bg/95 backdrop-blur-sm border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-2">
            {pillars.map((pillar) => (
              <button
                key={pillar}
                onClick={() => setActive(pillar)}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                  active === pillar
                    ? 'bg-acid-green text-bg border-acid-green'
                    : 'border-white/20 text-muted hover:border-white/40 hover:text-warm-white'
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-sm text-muted">No episodes yet in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((video, i) => (
                <AnimatedSection key={video.id} delay={i * 0.06}>
                  <VideoCard video={video} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
