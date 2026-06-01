import { motion } from 'framer-motion'
import { projects } from '../data/content'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
}

function ProjectCard({ project, index }) {
  const hasGithub = project.links.github
  const hasDemo = project.links.demo

  return (
    <motion.article
      {...fadeUp}
      transition={{ delay: index * 0.06 }}
      className="glass-panel group flex flex-col rounded-xl p-6 transition-all hover:shadow-panel-hover"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-wider text-depth">
          {project.category}
        </span>
        {project.featured && (
          <span className="rounded bg-warmth/10 px-2 py-0.5 font-mono text-[10px] text-warmth">
            flagship
          </span>
        )}
      </div>
      <h3 className="mb-3 text-xl font-medium text-white group-hover:text-signal transition-colors">
        {project.title}
      </h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded bg-void-200 px-2 py-1 font-mono text-[10px] text-slate-500"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 font-mono text-xs">
        {hasGithub && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-signal"
          >
            source →
          </a>
        )}
        {hasDemo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-warmth"
          >
            live →
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Systems() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="systems" className="relative z-10 border-t border-signal/5 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            02 · Systems
          </p>
          <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl">
            Deployed intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Production systems I have designed, built, and shipped — from full-stack platforms to
            pipelines and automation.
          </p>
        </motion.div>

        {featured && (
          <div className="mb-6">
            <ProjectCard project={featured} index={0} />
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
