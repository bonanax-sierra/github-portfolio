import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-title mb-12">What I work with.</h2>

        <div className="space-y-10">
          {skillGroups.map(({ id, label, skills }) => (
            <div key={id}>
              <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
