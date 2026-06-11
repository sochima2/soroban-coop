import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { HeroIllustration } from './HeroIllustration';

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-6 pt-32 pb-24 sm:pt-40 lg:px-8 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.22),transparent_32%),linear-gradient(180deg,#020617_0%,#07112d_45%,#020617_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20">
            Decentralized cooperative savings on Stellar Soroban
          </p>
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Community Savings Powered by{' '}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-transparent">Soroban</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Create cooperative groups, save together, vote transparently, and manage shared funds securely on Stellar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#community"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Get Started
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:border-purple-200/50 hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              View GitHub
            </a>
          </div>
        </motion.div>
        <HeroIllustration />
      </div>
    </section>
  );
}
