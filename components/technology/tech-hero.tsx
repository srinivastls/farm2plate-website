"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function TechHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-36">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#16a34a33,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-5 py-2"
        >
          <Cpu className="h-5 w-5 text-green-400"/>
          Modern Architecture
        </motion.div>

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
          className="mt-8 text-6xl font-black"
        >
          Technology
          <span className="block text-green-400">
            Behind Farm2Plate
          </span>
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.4}}
          className="mx-auto mt-8 max-w-3xl text-xl text-slate-300 leading-9"
        >
          Built using modern technologies for performance,
          scalability, security and future AI integration.
        </motion.p>

      </div>

    </section>
  );
}