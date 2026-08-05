"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  MapPin,
  User,
  Calendar,
  BadgeCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

const timeline = [
  {
    icon: MapPin,
    title: "Farm",
    value: "Green Valley Farm, Vijayawada",
  },
  {
    icon: User,
    title: "Farmer",
    value: "Ramesh Kumar",
  },
  {
    icon: Calendar,
    title: "Harvest Date",
    value: "2 August 2026",
  },
  {
    icon: BadgeCheck,
    title: "Quality Check",
    value: "Passed",
  },
  {
    icon: Truck,
    title: "Current Status",
    value: "Out for Delivery",
  },
  {
    icon: PackageCheck,
    title: "Estimated Delivery",
    value: "Today • 5:30 PM",
  },
];

export default function Traceability() {
  return (
    <section
      id="traceability"
      className="bg-gradient-to-b from-green-50 to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Complete Product Transparency
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Scan. Track. Trust.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every product on Farm2Plate comes with complete
            traceability, allowing customers to know exactly
            where their food comes from.
          </p>

        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl border bg-white p-8 shadow-xl">

              <div className="mb-8 flex items-center gap-4">

                <div className="rounded-2xl bg-green-100 p-4">

                  <QrCode className="h-8 w-8 text-green-700" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Organic Tomato
                  </h3>

                  <p className="text-gray-500">
                    Lot ID : FP-2026-000184
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                {timeline.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5"
                    >

                      <div className="rounded-xl bg-green-100 p-3">

                        <Icon className="h-6 w-6 text-green-700" />

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          {item.title}
                        </p>

                        <p className="font-semibold">
                          {item.value}
                        </p>

                      </div>

                    </div>

                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold">
              Every Product Has a Story.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Farm2Plate records every important milestone
              from harvesting to delivery, giving consumers
              confidence in the freshness and authenticity
              of their food.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h4 className="font-semibold">
                  🌱 Farm Verified
                </h4>

                <p className="mt-2 text-gray-600">
                  Only trusted partner farms are onboarded.
                </p>

              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h4 className="font-semibold">
                  📦 Harvest Tracking
                </h4>

                <p className="mt-2 text-gray-600">
                  Know the exact harvest date and batch.
                </p>

              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h4 className="font-semibold">
                  🚚 Live Delivery Updates
                </h4>

                <p className="mt-2 text-gray-600">
                  Stay informed from warehouse to doorstep.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}