"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-36">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#86efac_0%,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700"
        >
          About Farm2Plate
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-6xl font-black leading-tight text-slate-900"
        >
          Connecting
          <span className="text-green-600"> Farmers</span>,
          <br />
          Technology &
          <br />
          Families.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600"
        >
          Farm2Plate is building a transparent farm-to-consumer ecosystem
          where every product can be traced, every farmer is empowered,
          and every customer shops with confidence.
        </motion.p>

      </div>

    </section>
  );
}