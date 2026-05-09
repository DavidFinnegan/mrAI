import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TheShow from '@/components/TheShow'
import AboutTeaser from '@/components/AboutTeaser'
import LatestBlog from '@/components/LatestBlog'
import ConsultingCTA from '@/components/ConsultingCTA'

export const metadata: Metadata = {
  title: 'Ask Mr AI — Real builds. Honest takes.',
  description:
    'David Finnegan — AI consultant, creative director, and YouTube host. 25 years creative. AI that actually works.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheShow />
      <AboutTeaser />
      <LatestBlog />
      <ConsultingCTA />
    </>
  )
}
