import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/watch', label: 'Watch' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://youtube.com/@askmrai', label: 'YouTube', external: true },
  { href: 'https://linkedin.com/in/davidfinnegan', label: 'LinkedIn', external: true },
  { href: 'https://askmrai.substack.com', label: 'Substack', external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-grotesk font-bold text-2xl text-warm-white tracking-tight">
                Ask<span className="text-acid-green">Mr</span>AI
              </span>
            </Link>
            <p className="font-inter text-sm text-muted leading-relaxed max-w-xs">
              Real builds. Honest takes. AI that actually works. With David Finnegan — 25 years creative, building with AI.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="label mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-muted hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="label mb-4">Find David</p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-muted hover:text-acid-green transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted tracking-wide">
            © {new Date().getFullYear()} Ask Mr AI · askmrai.ai
          </p>
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted/60 hover:text-muted transition-colors border border-white/10 px-3 py-1.5 hover:border-white/20"
          >
            Built with Claude Code ◆
          </a>
        </div>
      </div>
    </footer>
  )
}
