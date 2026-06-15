import { projects } from '../data/portfolio'

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="11" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Projects</p>
        <h2 className="section-title mb-12">Deployed products.</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(({ id, title, description, tech, image, liveUrl, githubUrl }) => (
            <article
              key={id}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col hover:border-gray-300 dark:hover:border-white/20"
              style={{ transition: 'border-color 150ms ease' }}
            >
              {/* Screenshot */}
              <div className="aspect-video bg-gray-100 dark:bg-white/5 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 300ms ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-4 text-xs gap-1.5"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                  {githubUrl ? (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline py-2 px-4 text-xs"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      <LockIcon />
                      Private Repo
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
