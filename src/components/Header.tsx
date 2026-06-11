import { Github, Menu } from 'lucide-react';
import { navItems } from '../data/landing';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="SorobanCoop home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20">
            <span className="h-4 w-4 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">SorobanCoop</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/"
          className="hidden items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 md:inline-flex"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none rounded-full border border-white/10 p-2 text-slate-200 marker:hidden" aria-label="Open navigation menu">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-200">
                {item.label}
              </a>
            ))}
            <a href="https://github.com/" className="mt-2 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
