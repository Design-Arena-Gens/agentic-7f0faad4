'use client';

import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  description: string;
  metrics?: string;
};

type Props = {
  items: TimelineItem[];
};

export function Timeline({ items }: Props) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-2 top-1 bottom-1 w-[2px] bg-slate-700" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative pl-6"
          >
            <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(255,163,26,0.25)]" />
            <h4 className="text-lg md:text-xl font-semibold text-primary-50">
              {item.title}
            </h4>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              {item.description}
            </p>
            {item.metrics ? (
              <p className="mt-2 text-xs uppercase tracking-widest text-accent-200">
                {item.metrics}
              </p>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
