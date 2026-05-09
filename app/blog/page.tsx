import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog — Honest takes on AI',
  description:
    'David Finnegan writes about AI for creative leaders — honest takes, real builds, no hype.',
  openGraph: {
    title: 'Blog | Ask Mr AI',
    description: 'Honest takes on AI for creative leaders.',
  },
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10 relative">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
          style={{ background: '#b8ff00' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <p className="label mb-6">/ Writing</p>
            <h1
              className="font-grotesk font-bold text-warm-white leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
            >
              Honest takes.<br />
              <span className="text-acid-green">No fluff.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-12 md:py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <AnimatedSection>
              <p className="label mb-6">/ Featured</p>
              <BlogCard post={featured} featured />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Rest — asymmetric 2-col grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-10">
            <p className="label">/ All Posts</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {rest.map((post, i) => {
              const isWide = i % 3 === 0
              return (
                <AnimatedSection
                  key={post.slug}
                  delay={i * 0.1}
                  className={isWide ? 'md:col-span-2' : ''}
                >
                  <BlogCard post={post} featured={isWide} />
                </AnimatedSection>
              )
            })}
          </div>

          {/* Empty state / more coming */}
          <AnimatedSection className="mt-16 border border-white/10 p-8 text-center" delay={0.3}>
            <p className="font-mono text-sm text-muted mb-2">More posts coming soon.</p>
            <a
              href="https://askmrai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-acid-green hover:text-warm-white transition-colors"
            >
              Subscribe on Substack to get them first →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
