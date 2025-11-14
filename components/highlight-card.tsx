'use client';

import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  title: string;
  icon: ReactNode;
  accent?: "blue" | "amber";
}>;

const accentMap = {
  blue: "from-primary-500/20 to-primary-400/10 border-primary-400/40",
  amber: "from-accent-500/20 to-accent-300/10 border-accent-400/40"
};

export function HighlightCard({ title, icon, accent = "blue", children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`rounded-3xl border grid gap-4 p-6 bg-gradient-to-br ${accentMap[accent]} shadow-glow`}
    >
      <div className="flex items-center gap-3 text-primary-100">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-primary-50">{title}</h3>
      </div>
      <div className="text-sm md:text-base text-slate-200 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
