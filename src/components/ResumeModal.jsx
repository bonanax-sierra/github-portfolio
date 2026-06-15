import { useEffect } from 'react'

const RESUME_URL = `${import.meta.env.BASE_URL}Resume.pdf`

function CloseIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl flex flex-col overflow-hidden"
        style={{ height: 'min(90vh, 860px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10 shrink-0">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Resume — Adrian Lylle Bona
          </h2>
          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              download="Adrian_Lylle_Bona_Resume.pdf"
              className="btn-primary py-1.5 px-4 text-xs gap-1.5"
            >
              <DownloadIcon />
              Download
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              style={{ transition: 'color 150ms ease' }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <iframe
          src={RESUME_URL}
          title="Resume"
          className="flex-1 w-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}
