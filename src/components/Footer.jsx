import { useState, useEffect } from 'react'

function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-gray-100 dark:border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-400 dark:text-gray-500">© 2025 Adrian Lylle Bona</p>
          <p className="text-sm text-gray-300 dark:text-gray-600 hidden sm:block">Built with React + Tailwind CSS</p>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-9 h-9 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-300 shadow-md"
          style={{ transition: 'background-color 150ms ease, color 150ms ease' }}
        >
          <ChevronUpIcon />
        </button>
      )}
    </>
  )
}
