'use client';

import { motion } from "framer-motion";

type Column = {
  key: string;
  label: string;
};

type Item = Record<string, string>;

type Props = {
  columns: Column[];
  rows: Item[];
};

export function DataTable({ columns, rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-950/70">
      <table className="min-w-full divide-y divide-slate-800 text-sm text-slate-200">
        <thead className="bg-slate-900/70">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-4 py-3 text-left font-semibold text-slate-200 uppercase tracking-wide text-xs"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-900">
          {rows.map((row, index) => (
            <motion.tr
              key={columns.map((column) => row[column.key]).join(":")}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.3 }}
              className="hover:bg-primary-500/5 transition-colors"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 align-top">
                  {row[column.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
