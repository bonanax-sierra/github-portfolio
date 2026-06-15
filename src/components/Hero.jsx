import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'Full-Stack Developer',
  'WordPress Developer',
  'UI/UX Designer',
  'AI Specialist',
  'Prompt Engineer',
]

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const SOCIALS = [
  { href: 'https://github.com/bonanax-sierra', icon: <GithubIcon />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/adrian-lylle-bona-540a3a242/', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'mailto:bonanaxbona@gmail.com', icon: <EmailIcon />, label: 'Email' },
]

export default function Hero() {
  const text = useTypewriter(ROLES)

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14">
      <div className="max-w-xl mx-auto">
        <p className="section-label mb-8">Portfolio</p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-5">
          Adrian Lylle Bona
        </h1>

        {/* Typewriter */}
        <div className="h-8 flex items-center justify-center mb-5">
          <span className="text-lg text-gray-500 dark:text-gray-400 font-medium">{text}</span>
          <span className="ml-0.5 inline-block w-px h-5 bg-gray-900 dark:bg-gray-100 animate-blink" />
        </div>

        <p className="text-gray-400 dark:text-gray-500 text-base md:text-lg leading-relaxed mb-10">
          Building clean digital experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Contact Me
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5">
          {SOCIALS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              style={{ transition: 'color 150ms ease' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
