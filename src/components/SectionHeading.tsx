import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}
