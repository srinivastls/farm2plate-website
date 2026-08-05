"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >

          <span className="text-green-600 font-semibold uppercase">
            Our Story
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Why We Started Farm2Plate
          </h2>

        </motion.div>

        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >

          <p className="text-lg leading-9 text-slate-600">

            Fresh produce often passes through multiple intermediaries
            before reaching consumers.

            This reduces freshness,
            increases costs,
            and makes it difficult to know where food actually comes from.

          </p>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Farm2Plate is designed to bridge this gap by enabling direct
            connections between farmers and consumers through technology,
            transparency, and complete product traceability.

          </p>

        </motion.div>

      </div>

    </section>
  );
}