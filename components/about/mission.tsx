"use client";

import { Target, Eye } from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <Target className="h-12 w-12 text-green-600"/>

          <h3 className="mt-6 text-3xl font-bold">

            Our Mission

          </h3>

          <p className="mt-6 leading-8 text-slate-600">

            Make fresh,
            transparent,
            and trusted farm products
            accessible to every family.

          </p>

        </div>

        <div className="rounded-3xl bg-green-600 p-10 text-white">

          <Eye className="h-12 w-12"/>

          <h3 className="mt-6 text-3xl font-bold">

            Our Vision

          </h3>

          <p className="mt-6 leading-8">

            Build India's most trusted
            digital farm-to-consumer ecosystem
            powered by technology,
            sustainability,
            and transparency.

          </p>

        </div>

      </div>

    </section>
  );
}