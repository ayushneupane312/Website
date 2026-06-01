import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-signal/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {site.name} · {site.siteUrl.replace('https://', '')}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-700">
          Tech Forward · Built with React + Vite
        </p>
      </div>
    </footer>
  )
}
