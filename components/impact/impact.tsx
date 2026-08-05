"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  Leaf,
  Droplets,
  Users,
  ShoppingBasket,
  TrendingUp,
  Globe2,
} from "lucide-react";

const impacts = [
  {
    title: "CO₂ Reduced",
    value: 15,
    suffix: " Tons",
    icon: Leaf,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Water Saved",
    value: 540,
    suffix: "K L",
    icon: Droplets,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Farmers Connected",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Orders Delivered",
    value: 25000,
    suffix: "+",
    icon: ShoppingBasket,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Farmer Income",
    value: 27,
    suffix: "% ↑",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Communities Served",
    value: 120,
    suffix: "+",
    icon: Globe2,
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function Impact() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (

    <section
      ref={ref}
      className="bg-slate-900 py-28 text-white"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-green-300">
            Sustainability Impact
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Every Order Creates Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Farm2Plate helps farmers earn more,
            reduces food waste,
            improves transparency,
            and promotes sustainable agriculture.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {impacts.map((item, index) => {

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
                  scale: 1.04,
                }}

                className="rounded-3xl border border-slate-700 bg-slate-800 p-8"
              >

                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>

                  <Icon className="h-8 w-8"/>

                </div>

                <h3 className="text-5xl font-black">

                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2}
                    />
                  )}

                  {item.suffix}

                </h3>

                <p className="mt-4 text-slate-300">
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