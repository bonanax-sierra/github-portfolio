import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Experience</p>
        <h2 className="section-title mb-12">Work history.</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10" />

          <div className="flex flex-col gap-10">
            {experiences.map(({ id, role, context, company, period, description, tech }) => (
              <div key={id} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gray-900 dark:bg-gray-100 border-2 border-gray-50 dark:border-[#141414] ring-1 ring-gray-200 dark:ring-white/15 -translate-x-[5px]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{role}</h3>
                  <span className="text-xs text-gray-400 shrink-0">{period}</span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{context}</span>
                  {' — '}
                  {company}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
