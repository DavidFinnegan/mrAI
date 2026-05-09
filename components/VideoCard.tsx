'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Video } from '@/lib/data'

const pillarColors: Record<string, string> = {
  'Build With Me': 'text-acid-green border-acid-green/30',
  'Tool-Off': 'text-coral border-coral/30',
  'Agency Operator': 'text-warm-white border-warm-white/20',
  'Veteran Take': 'text-acid-green border-acid-green/30',
}

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <motion.a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="block bg-surface border border-white/10 hover:border-acid-green/50 transition-colors duration-300 group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-bg/90 text-warm-white font-mono text-xs px-2 py-0.5">
          {video.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <span
          className={`label border px-2 py-0.5 text-[0.6rem] ${pillarColors[video.pillar] ?? 'text-muted border-white/20'}`}
        >
          {video.pillar}
        </span>
        <h3 className="font-grotesk font-bold text-base text-warm-white mt-3 leading-snug group-hover:text-acid-green transition-colors duration-200 line-clamp-2">
          {video.title}
        </h3>
      </div>
    </motion.a>
  )
}
