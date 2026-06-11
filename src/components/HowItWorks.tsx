import { steps } from '../data/landing';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="A simple flow for community-owned finance"
          description="From group creation to member-approved fund management, every step is built for clarity and collective trust."
        />
        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <GlassCard
                key={step.title}
                className="relative p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-purple-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-purple-200">
                    {step.eyebrow}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-200/20">
                    <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{step.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
