import { features } from '../data/landing';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platform features"
          title="Everything a cooperative needs to save, govern, and grow"
          description="SorobanCoop combines familiar savings group workflows with programmable trust, auditable records, and low-cost Stellar settlement."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard
                key={feature.title}
                className="group p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.09]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-purple-400/20 ring-1 ring-white/10 transition group-hover:scale-110">
                  <Icon className="h-7 w-7 text-cyan-200" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
