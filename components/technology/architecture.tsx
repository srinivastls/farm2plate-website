"use client";

import {
  Smartphone,
  Server,
  Database,
  Cloud,
  ArrowDown,
} from "lucide-react";

const layers = [
  {
    icon: Smartphone,
    title: "Flutter App",
    desc: "Consumer & Farmer Applications",
  },
  {
    icon: Server,
    title: "NestJS API",
    desc: "REST APIs & Business Logic",
  },
  {
    icon: Database,
    title: "Prisma + PostgreSQL",
    desc: "Reliable Data Layer",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Deployment & Scalability",
  },
];

export default function Architecture() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">
            System Architecture
          </h2>

        </div>

        <div className="space-y-6">

          {layers.map((layer, index) => {

            const Icon = layer.icon;

            return (
              <div key={layer.title}>

                <div className="rounded-3xl border p-8 flex items-center gap-6 shadow-sm">

                  <div className="rounded-2xl bg-green-100 p-5">

                    <Icon className="text-green-700"/>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {layer.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {layer.desc}
                    </p>

                  </div>

                </div>

                {index !== layers.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowDown className="text-green-600"/>
                  </div>
                )}

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}