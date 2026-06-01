import { motion } from 'framer-motion'
import { about, devOpsSkills, techStack, site } from '../data/content'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function Signal() {
  return (
    <section id="signal" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            01 · Signal
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            The mind behind the infrastructure
          </h2>
        </motion.div>

        <p className="mb-12 max-w-3xl border-l-2 border-warmth/50 pl-6 font-serif text-lg italic leading-relaxed text-slate-300">
          {site.humanLine}
        </p>

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {about.highlights.map((item, i) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass-panel group rounded-xl p-6 transition-shadow hover:shadow-panel-hover"
            >
              <span className="mb-4 block font-mono text-xs text-depth">
                0{i + 1}
              </span>
              <h3 className="mb-3 text-lg font-medium text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className="glass-panel mb-16 rounded-xl p-8 md:p-10">
          <div className="space-y-5 text-slate-400 leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            Telemetry · Core competencies
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {devOpsSkills.map((skill) => (
              <div key={skill.name} className="rounded-lg border border-signal/10 bg-void-50 p-4">
                <div className="mb-2 flex justify-between font-mono text-xs">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-signal">{skill.level}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-void-200">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-signal to-depth"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded border border-depth/20 bg-depth/5 px-3 py-1.5 font-mono text-xs text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
