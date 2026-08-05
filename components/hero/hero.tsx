"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">

      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex-1"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2">

            <Leaf className="h-4 w-4 text-green-700" />

            <span className="text-sm font-medium text-green-700">
              India's Smart Farm-to-Consumer Platform
            </span>

          </div>

          <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-7xl">

            Fresh from
            <span className="block text-green-600">
              Farm.
            </span>

            Trusted at
            <span className="block">
              Every Plate.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

            Farm2Plate connects farmers directly to families
            with complete product traceability,
            transparent sourcing,
            secure payments
            and sustainable agriculture.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button
              size="lg"
              className="rounded-full px-8"
            >
              Download App

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Explore Platform
            </Button>

          </div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-2">

              <ShieldCheck className="text-green-600" />

              <span>Verified Farms</span>

            </div>

            <div className="flex items-center gap-2">

              <Truck className="text-green-600" />

              <span>Fast Delivery</span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className="relative flex flex-1 items-center justify-center"
        >

          <div className="relative overflow-hidden">

            {/* Phone */}

            <div className="h-[650px] w-[320px] rounded-[40px] border-8 border-slate-900 bg-white shadow-2xl">

              <div className="h-full overflow-hidden rounded-[32px]">

                <img
                  src="/screenshots/home.png"
                  alt="Farm2Plate App"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            {/* Floating Card */}

            <motion.div

              animate={{
                y: [-8, 8, -8],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

              className="absolute -left-20 top-20 rounded-2xl bg-white p-5 shadow-xl"
            >

              <p className="text-sm text-gray-500">
                Harvested
              </p>

              <p className="text-xl font-bold">
                Today 🌱
              </p>

            </motion.div>

            <motion.div

              animate={{
                y: [8, -8, 8],
              }}

              transition={{
                repeat: Infinity,
                duration: 5,
              }}

              className="absolute -right-16 bottom-24 rounded-2xl bg-white p-5 shadow-xl"
            >

              <p className="text-sm text-gray-500">
                Traceability
              </p>

              <p className="text-xl font-bold">
                98%
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}