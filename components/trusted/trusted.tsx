"use client";

import { motion } from "framer-motion";

const companies = [
  "AgriTech",
  "Innovation",
  "Sustainability",
  "Traceability",
  "Smart Farming",
];

export default function Trusted() {
  return (
    <section className="border-y bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Building the Future of Agriculture
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">

          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * .1 }}
              className="flex h-20 items-center justify-center rounded-2xl border bg-slate-50 font-semibold text-slate-700"
            >
              {company}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}