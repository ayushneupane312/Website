import { motion } from 'framer-motion'
import { experience, education } from '../data/content'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Proof() {
  return (
    <section id="proof" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            03 · Proof
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Trust, crystallized
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            A track record of shipping — academically, professionally, and in the open.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
              Experience
            </h3>
            <div className="space-y-10">
              {experience.map((job) => (
                <motion.article
                  key={job.id}
                  {...fadeUp}
                  className="relative border-l border-signal/20 pl-8"
                >
                  <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-signal" />
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-medium text-white">{job.role}</h4>
                    <span className="font-mono text-xs text-slate-500">{job.period}</span>
                  </div>
                  <p className="mb-1 font-mono text-sm text-depth">{job.company}</p>
                  <p className="mb-4 text-sm text-slate-400">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-slate-500">
                        <span className="text-signal">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp} className="glass-panel h-fit rounded-xl p-8">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
              Education
            </h3>
            <h4 className="mb-2 text-xl font-medium text-white">{education.degree}</h4>
            <p className="mb-1 font-mono text-sm text-signal">{education.institution}</p>
            <p className="mb-4 font-mono text-xs text-slate-500">{education.period}</p>
            <p className="text-sm leading-relaxed text-slate-400">{education.description}</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-signal/10 pt-8">
              {[
                { label: 'Focus', value: 'DevOps' },
                { label: 'FYP', value: 'PlayPal' },
                { label: 'Stack', value: 'MERN' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-[10px] uppercase text-slate-600">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
