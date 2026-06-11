import { ArrowRight } from 'lucide-react';
import { communityCards } from '../data/landing';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';

export function Community() {
  return (
    <section id="community" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Community"
          title="Open-source builders and cooperative leaders are welcome"
          description="Join the ecosystem to improve smart contracts, build interfaces, write docs, and help communities unlock transparent savings."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {communityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlassCard
                key={card.title}
                className="p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Icon className="h-9 w-9 text-cyan-200" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-14 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/10 via-blue-500/10 to-purple-500/10 p-8 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-12">
          <h3 className="text-3xl font-black text-white">Start Building With Us</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Bring cooperative finance to more communities by contributing code, documentation, audits, product feedback, or local pilot ideas.
          </p>
          <a
            href="https://github.com/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-950 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Start Building With Us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
