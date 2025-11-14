'use client';

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type Pillar = {
  heading: string;
  icon: ReactNode;
  bullets: string[];
};

type Props = {
  pillars: Pillar[];
};

export function PillarGrid({ pillars }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {pillars.map((pillar, idx) => (
        <motion.div
          key={pillar.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{pillar.icon}</span>
            <h3 className="text-lg font-semibold text-primary-100">
              {pillar.heading}
            </h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {pillar.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-accent-400">✦</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
