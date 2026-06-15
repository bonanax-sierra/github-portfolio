import profileImage from '../assets/images/profile.JPG'

const STATS = [
  { value: '3+', label: 'Years Exp.' },
  { value: '20+', label: 'Projects' },
  { value: '5+', label: 'Technologies' },
  { value: '2', label: 'Live Apps' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile image */}
          <div className="flex justify-center md:justify-start">
            <div
              className="rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 shadow-sm"
              style={{ width: '240px', height: '288px' }}
            >
              <img
                src={profileImage}
                alt="Adrian Lylle Bona"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title mb-6">
              Full-stack dev based in<br />Negros Occidental, PH.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              I specialize in building web applications, WordPress themes, UI/UX
              interfaces, and AI-powered solutions. From PHP backends to modern
              React frontends, I keep things clean, functional, and fast.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-10">
              I also work with prompt engineering and AI tooling to build smarter
              workflows. Whether it's a custom theme, a SaaS product, or an
              analytics system, I ship things that work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 tabular-nums">{value}</div>
                  <div className="text-xs text-gray-400 mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
