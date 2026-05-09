import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import BlogCard from './BlogCard'
import { blogPosts } from '@/lib/data'

export default function LatestBlog() {
  const recent = blogPosts.slice(0, 3)

  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="label mb-4">/ Latest Writing</p>
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-warm-white leading-none">
              Honest takes.<br />No fluff.
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-sm text-acid-green hover:text-warm-white transition-colors whitespace-nowrap"
          >
            All posts →
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {recent.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
