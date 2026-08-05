"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roadmap = [
  "Idea & Research",
  "Consumer Mobile App",
  "Marketing Website",
  "Admin Portal",
  "Farmer Portal",
  "AI Features",
  "Expansion Across India",
];

export default function Timeline() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Roadmap
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Our Journey
          </h2>

        </div>

        <div className="relative overflow-hidden">

          <div className="absolute left-5 top-0 h-full w-1 rounded bg-green-200"></div>

          <div className="space-y-10">

            {roadmap.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >

                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">

                  <CheckCircle2 size={20} />

                </div>

                <div>

                  <p className="text-sm text-green-600 font-semibold">
                    Phase {index + 1}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {item}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}