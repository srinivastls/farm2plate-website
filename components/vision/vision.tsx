"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Sprout,
  Globe2,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    description:
      "India's agriculture and fresh food sector continues to expand as consumers demand better quality and transparency.",
  },
  {
    icon: Users,
    title: "Connecting People",
    description:
      "Building stronger relationships between farmers, consumers and local communities.",
  },
  {
    icon: Sprout,
    title: "Empowering Farmers",
    description:
      "Providing technology that helps farmers reach customers more directly.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Supply Chain",
    description:
      "End-to-end traceability builds trust and confidence in every purchase.",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    description:
      "Built with modern cloud technologies and designed for future AI-powered capabilities.",
  },
  {
    icon: Globe2,
    title: "Built to Scale",
    description:
      "Designed to support expansion across regions while maintaining quality and transparency.",
  },
];

export default function Vision() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Why Farm2Plate
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Building the Future of
            <span className="text-green-600">
              {" "}Farm Commerce
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Farm2Plate is creating a digital platform that helps
            farmers connect with customers through transparency,
            quality, and technology.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl bg-white p-8 shadow-sm border hover:shadow-xl transition-all"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-700"/>
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}