import { motion } from 'framer-motion';
import type { ComponentProps, ReactNode } from 'react';

type GlassCardProps = ComponentProps<typeof motion.div> & {
  children: ReactNode;
};

export function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-cyan-950/20 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
