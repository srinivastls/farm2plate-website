"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-green-700 to-green-600 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold leading-tight">

          Join the Future of
          <br />
          Farm-to-Consumer Commerce

        </h2>

        <p className="mt-8 text-xl text-green-100 leading-9">

          Whether you're a customer, farmer, partner,
          or simply passionate about sustainable agriculture,
          we'd love to have you as part of the Farm2Plate journey.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/download"
            className="rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Download App
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-700"
          >
            Contact Us

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}