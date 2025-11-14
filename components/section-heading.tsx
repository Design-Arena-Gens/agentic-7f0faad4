'use client';

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: Props) {
  return (
    <div
      className={clsx(
        "space-y-4 max-w-4xl",
        align === "center" ? "text-center mx-auto" : "text-left"
      )}
    >
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-sm uppercase tracking-[0.4em] text-accent-300"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl md:text-4xl font-heading text-primary-50 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-base md:text-lg text-slate-300 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
