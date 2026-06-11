import { motion } from 'framer-motion';
import { Landmark, Users, Vote, Wallet } from 'lucide-react';

const orbitNodes = [
  { label: 'Members', icon: Users, className: 'left-4 top-8 sm:left-8' },
  { label: 'Treasury', icon: Landmark, className: 'right-4 top-10 sm:right-8' },
  { label: 'Voting', icon: Vote, className: 'bottom-12 left-6 sm:left-12' },
  { label: 'Wallets', icon: Wallet, className: 'bottom-8 right-6 sm:right-12' },
] as const;

export function HeroIllustration() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      aria-label="Illustration of connected community finance nodes on a blockchain network"
      role="img"
    >
      <div className="absolute inset-6 rounded-full border border-cyan-300/20 bg-cyan-300/[0.03]" />
      <div className="absolute inset-16 rounded-full border border-purple-300/20 bg-purple-300/[0.03]" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-b from-transparent via-purple-300/50 to-transparent" />
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-white/15 bg-slate-900/80 p-6 text-center shadow-2xl shadow-cyan-500/20 backdrop-blur-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-purple-500">
          <span className="h-5 w-5 rounded-full bg-white" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Soroban</p>
        <p className="mt-2 text-lg font-bold text-white">Coop Vault</p>
      </motion.div>
      {orbitNodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`absolute ${node.className} rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-xl shadow-purple-950/20 backdrop-blur-xl`}
            animate={{ y: [0, index % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon className="h-7 w-7 text-cyan-200" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold text-white">{node.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
