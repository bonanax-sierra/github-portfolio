import { useState } from 'react'

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@bonanax-sierra',
    href: 'https://github.com/bonanax-sierra',
  },
  {
    label: 'LinkedIn',
    handle: 'Adrian Lylle Bona',
    href: 'https://www.linkedin.com/in/adrian-lylle-bona-540a3a242/',
  },
  {
    label: 'Email',
    handle: 'bonanaxbona@gmail.com',
    href: 'mailto:bonanaxbona@gmail.com',
  },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const set = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Adrian,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:bonanaxbona@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Contact</p>
        <h2 className="section-title mb-2">Let's connect.</h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-12">
          Open to opportunities, freelance projects, and AI integration work.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Your name"
                className="input-field"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="your@email.com"
                className="input-field"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="input-field resize-none"
              />
              {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
            </div>

            <div>
              <button type="submit" className="btn-primary">Send Message</button>
            </div>

            {/* Social links — below form */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                Also find me on
              </p>
              <div className="flex flex-col gap-2.5">
                {SOCIALS.map(({ label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/15 hover:bg-gray-50 dark:hover:bg-white/5 group"
                    style={{ transition: 'border-color 150ms ease, background-color 150ms ease' }}
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</span>
                      <span className="text-xs text-gray-400 ml-2">{handle}</span>
                    </div>
                    <span className="text-gray-300 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                      style={{ transition: 'color 150ms ease' }}>
                      <ArrowRightIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </form>

          {/* Right — contact info */}
          <div className="flex flex-col justify-start pt-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">Direct contact</p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/8 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
                  <MailIcon />
                </span>
                <a
                  href="mailto:bonanaxbona@gmail.com"
                  className="hover:text-gray-900 dark:hover:text-gray-100"
                  style={{ transition: 'color 150ms ease' }}
                >
                  bonanaxbona@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/8 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
                  <PhoneIcon />
                </span>
                <a
                  href="tel:+639761554495"
                  className="hover:text-gray-900 dark:hover:text-gray-100"
                  style={{ transition: 'color 150ms ease' }}
                >
                  +63 976 155 4495
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Available for work</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Open to full-time roles, freelance contracts, and AI integration
                projects. Based in Negros Occidental, PH — remote-friendly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
