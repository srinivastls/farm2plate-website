"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Calendar,
  ShieldCheck,
  Truck,
  QrCode,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    icon: MapPin,
    title: "Farm",
    value: "Green Valley Farm",
  },
  {
    icon: User,
    title: "Farmer",
    value: "Ramesh Kumar",
  },
  {
    icon: Calendar,
    title: "Harvest",
    value: "2 Aug 2026",
  },
  {
    icon: ShieldCheck,
    title: "Quality Check",
    value: "Passed",
  },
  {
    icon: Truck,
    title: "Delivery",
    value: "Out for Delivery",
  },
];

export default function ProductDemo() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-green-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Live Product Traceability
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Every Product
            <span className="text-green-600">
              {" "}Has a Story
            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Scan the QR code and discover the journey of your food from farm to plate.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <div className="rounded-3xl bg-white shadow-2xl border p-8">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-3xl font-bold">
                    🍅 Organic Tomato
                  </h3>

                  <p className="text-gray-500">
                    Lot ID: FP202600154
                  </p>

                </div>

                <div className="rounded-2xl bg-green-100 p-4">

                  <QrCode className="w-10 h-10 text-green-700"/>

                </div>

              </div>

              <div className="mt-10 space-y-5">

                {timeline.map((step,index)=>{

                  const Icon=step.icon;

                  return(

                    <motion.div

                      key={step.title}

                      initial={{
                        opacity:0,
                        x:-20
                      }}

                      whileInView={{
                        opacity:1,
                        x:0
                      }}

                      transition={{
                        delay:index*.15
                      }}

                      className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5"
                    >

                      <div className="rounded-xl bg-green-100 p-3">

                        <Icon className="text-green-700"/>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          {step.title}
                        </p>

                        <p className="font-semibold">
                          {step.value}
                        </p>

                      </div>

                    </motion.div>

                  )

                })}

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <h3 className="text-4xl font-bold leading-tight">

              Scan.

              <br/>

              Verify.

              <br/>

              Trust.

            </h3>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Farm2Plate enables complete transparency by recording every stage of the product lifecycle—from cultivation and harvesting to packaging and delivery.

            </p>

            <div className="mt-10 space-y-5">

              <Feature text="Verified Partner Farms"/>

              <Feature text="Harvest Date & Batch Information"/>

              <Feature text="Quality Inspection History"/>

              <Feature text="Delivery Tracking"/>

              <Feature text="Digital Product Passport"/>

            </div>

            <button className="mt-10 rounded-full bg-green-600 px-8 py-4 text-white flex items-center gap-3 hover:bg-green-700 transition">

              Explore Traceability

              <ArrowRight size={20}/>

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Feature({text}:{text:string}){

  return(

    <div className="flex items-center gap-4">

      <div className="h-3 w-3 rounded-full bg-green-600"/>

      <span className="text-lg">
        {text}
      </span>

    </div>

  )

}