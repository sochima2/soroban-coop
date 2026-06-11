import { sorobanBenefits } from '../data/landing';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';

export function WhySoroban() {
  return (
    <section id="why-soroban" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-80 -translate-y-1/2 bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-purple-600/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Soroban"
          title="Built on rails that make cooperative finance accessible"
          description="Soroban gives SorobanCoop the speed, economics, and programmability communities need to coordinate shared funds at scale."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {sorobanBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <GlassCard
                key={benefit.title}
                className="p-6 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-blue-500/20">
                  <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
