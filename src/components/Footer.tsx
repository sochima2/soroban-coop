import { footerLinks } from '../data/landing';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-bold text-white">SorobanCoop</p>
          <p className="mt-2">© {new Date().getFullYear()} SorobanCoop. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
