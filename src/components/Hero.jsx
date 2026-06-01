import { motion } from 'framer-motion'
import { site } from '../data/content'

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center px-6 pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex flex-wrap gap-3">
            {site.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-signal/20 bg-signal/5 px-3 py-1 font-mono text-xs text-signal"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            Operational clarity · Nepal
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.headline.split(',').map((part, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  <>
                    <span className="text-gradient-signal">{part.trim()}</span>,
                  </>
                ) : (
                  <span className="text-slate-100">{part.trim()}</span>
                )}
              </span>
            ))}
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
            {site.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proof"
              className="inline-flex items-center gap-2 rounded bg-signal/10 px-6 py-3 font-mono text-sm text-signal ring-1 ring-signal/30 transition-all hover:bg-signal/20 hover:shadow-panel-hover"
            >
              View systems →
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded px-6 py-3 font-mono text-sm text-warmth ring-1 ring-warmth/40 transition-all hover:shadow-cta"
            >
              Initiate contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-signal/20 via-depth/10 to-transparent blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-2xl p-1">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-signal to-transparent opacity-60" />
            <img
              src={site.profileImage}
              alt={site.name}
              width={400}
              height={400}
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-void/80 px-4 py-3 font-mono text-xs backdrop-blur-md">
              <span className="text-slate-500">status</span>
              <span className="flex items-center gap-2 text-signal">
                <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
                operational
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-slate-600"
      >
        scroll to engage
      </motion.div>
    </section>
  )
}
