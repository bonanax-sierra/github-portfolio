export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Education</p>
        <h2 className="section-title mb-12">Academic background.</h2>

        <div
          className="border border-gray-200 dark:border-white/10 rounded-xl p-8 bg-white dark:bg-[#1a1a1a] hover:border-gray-300 dark:hover:border-white/20"
          style={{ transition: 'border-color 150ms ease' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                State University of Northern Negros
              </p>

              {/* Thesis */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border-l-2 border-gray-900 dark:border-gray-400">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                  Thesis
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  "Risk Analytic System for Early Detection of Adolescent
                  Behavioral and Emotional Problems"
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-white/8 text-xs font-medium text-gray-600 dark:text-gray-400">
                BS Information Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
