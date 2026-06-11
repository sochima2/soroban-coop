import { roadmap } from '../data/landing';
import { SectionHeading } from './SectionHeading';

export function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Roadmap"
          title="From contribution primitives to mainnet cooperative finance"
          description="The SorobanCoop roadmap prioritizes secure foundations first, then expands into governance, wallets, and launch readiness."
        />
        <div className="mt-16 space-y-5">
          {roadmap.map((item, index) => (
            <div key={item.phase} className="grid gap-4 md:grid-cols-[10rem_1fr] md:items-center">
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">{item.phase}</div>
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <div className="absolute -left-[5.55rem] top-1/2 hidden h-px w-16 bg-cyan-300/30 md:block" />
                <div className="flex items-center gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-purple-500 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
