'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { BlogPost } from '@/lib/data'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`block border border-white/10 hover:border-acid-green/40 transition-colors duration-300 p-6 md:p-8 bg-surface group ${
          featured ? 'md:p-12' : ''
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="label text-acid-green">{post.category}</span>
          <span className="text-muted font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted">{post.readTime} read</span>
        </div>

        <h3
          className={`font-grotesk font-bold text-warm-white leading-tight group-hover:text-acid-green transition-colors duration-200 ${
            featured ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'
          }`}
        >
          {post.title}
        </h3>

        <p className="font-inter text-muted text-sm leading-relaxed mt-3 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
          <span className="font-mono text-xs text-acid-green opacity-0 group-hover:opacity-100 transition-opacity">
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
