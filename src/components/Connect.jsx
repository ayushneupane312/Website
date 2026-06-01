import { motion } from 'framer-motion'
import { site } from '../data/content'

export default function Connect() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const fromEmail = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = encodeURIComponent(`Portfolio — ${name || 'Hello'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\n${message}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="connect" className="relative z-10 border-t border-signal/5 px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            04 · Release
          </p>
          <h2 className="mb-6 text-3xl font-semibold text-white sm:text-5xl">
            Ready when you are
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-slate-400">
            Open to DevOps roles, freelance builds, and conversations about infrastructure that
            actually works. One message starts the briefing.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg bg-warmth px-8 py-4 font-mono text-sm font-medium text-void shadow-cta transition-transform hover:scale-[1.02]"
            >
              Open channel — Email
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-8 py-4 font-mono text-sm text-slate-300 ring-1 ring-slate-700 transition-colors hover:ring-signal/40 hover:text-signal"
            >
              GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-8 py-4 font-mono text-sm text-slate-300 ring-1 ring-slate-700 transition-colors hover:ring-depth/40 hover:text-depth"
            >
              LinkedIn
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel mx-auto max-w-md rounded-xl p-8 text-left"
          >
            <p className="mb-6 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Or compose via your mail client
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block font-mono text-xs text-slate-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded border border-signal/10 bg-void px-4 py-3 text-sm text-white outline-none focus:border-signal/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-mono text-xs text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded border border-signal/10 bg-void px-4 py-3 text-sm text-white outline-none focus:border-signal/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block font-mono text-xs text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded border border-signal/10 bg-void px-4 py-3 text-sm text-white outline-none focus:border-signal/40"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded py-3 font-mono text-sm text-signal ring-1 ring-signal/30 transition-all hover:bg-signal/10"
              >
                Transmit message →
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
