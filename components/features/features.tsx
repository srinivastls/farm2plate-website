"use client";

import { motion } from "framer-motion";

import {
  Leaf,
  Truck,
  MapPinned,
  ShieldCheck,
  Wallet,
  Sprout,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Harvest",
    description:
      "Harvested and delivered with freshness in mind.",
  },
  {
    icon: MapPinned,
    title: "Complete Traceability",
    description:
      "Know exactly where your food comes from.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Farms",
    description:
      "Partner farms are verified for quality and transparency.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick delivery from farm to your doorstep.",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description:
      "Safe online payments with trusted gateways.",
  },
  {
    icon: Sprout,
    title: "Sustainable Farming",
    description:
      "Supporting farmers while reducing environmental impact.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">

            Why Choose
            <span className="text-green-600">
              {" "}Farm2Plate?
            </span>

          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Built to empower farmers,
            delight consumers,
            and promote sustainable agriculture.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * .1,
                }}

                whileHover={{
                  scale: 1.03,
                }}

                className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <Icon
                    className="h-8 w-8 text-green-600"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-500">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}