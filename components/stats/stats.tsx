"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {
  Users,
  ShoppingCart,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    title: "Farmers",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: 25000,
    suffix: "+",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Products",
    value: 150,
    suffix: "+",
    icon: Leaf,
    color: "text-emerald-600",
  },
  {
    title: "Traceability",
    value: 98,
    suffix: "%",
    icon: ShieldCheck,
    color: "text-orange-600",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold">
            Growing Together
          </h2>

          <p className="mt-4 text-gray-500">
            Building trust between
            farmers and consumers.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * .1,
                }}

                whileHover={{
                  y: -8,
                }}

                className="rounded-3xl border bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >

                <Icon
                  className={`mb-6 h-10 w-10 ${item.color}`}
                />

                <h3 className="text-5xl font-black">

                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2}
                    />
                  )}

                  {item.suffix}

                </h3>

                <p className="mt-3 text-gray-500">
                  {item.title}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}