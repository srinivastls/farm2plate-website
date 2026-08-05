"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Users,
  Sparkles,
  Tractor,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Promoting environmentally responsible farming and reducing food waste.",
  },
  {
    icon: HeartHandshake,
    title: "Trust",
    description:
      "Building long-term relationships between farmers and consumers.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Every product is traceable from farm to plate.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Supporting local farmers and empowering rural communities.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Using technology to transform agriculture and food commerce.",
  },
  {
    icon: Tractor,
    title: "Farmer First",
    description:
      "Helping farmers earn more while reducing unnecessary middlemen.",
  },
];

export default function Values() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Our Core Values
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            What Drives Farm2Plate
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>

                <h3 className="text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}