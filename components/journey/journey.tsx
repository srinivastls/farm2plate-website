"use client";

import { motion } from "framer-motion";

import {
  Sprout,
  Tractor,
  Wheat,
  Factory,
  Package,
  Truck,
  Utensils,
} from "lucide-react";

const journey = [
  {
    icon: Sprout,
    title: "Seed",
    description:
      "Every journey begins with carefully selected seeds.",
  },
  {
    icon: Tractor,
    title: "Farmer",
    description:
      "Partner farmers cultivate crops using sustainable practices.",
  },
  {
    icon: Wheat,
    title: "Harvest",
    description:
      "Fresh produce is harvested at the right maturity stage.",
  },
  {
    icon: Factory,
    title: "Processing",
    description:
      "Quality checks and hygienic processing ensure food safety.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Eco-friendly packaging preserves freshness and quality.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Real-time logistics ensure timely doorstep delivery.",
  },
  {
    icon: Utensils,
    title: "Your Plate",
    description:
      "Fresh, transparent, and trusted food reaches your family.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Farm2Plate Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            From Seed to Plate
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every product follows a transparent journey that
            customers can verify through Farm2Plate's
            traceability system.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Timeline */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-green-200 lg:block"></div>

          <div className="space-y-12">

            {journey.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}

                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: .6,
                  }}

                  className="relative flex items-start gap-8"
                >

                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl">

                    <Icon className="h-8 w-8" />

                  </div>

                  <div className="flex-1 rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                    <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-600">
                      Step {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}