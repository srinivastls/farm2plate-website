"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const screens = [
  {
    image: "/screenshots/home.png",
    title: "Discover Fresh Produce",
    subtitle:
      "Browse vegetables, fruits and farm products from trusted farmers.",
  },
  {
    image: "/screenshots/product.png",
    title: "Product Details",
    subtitle:
      "See pricing, quantity, farm details and freshness information.",
  },
  {
    image: "/screenshots/traceability.png",
    title: "Complete Traceability",
    subtitle:
      "Track every product from harvest to delivery.",
  },
  {
    image: "/screenshots/cart.jpeg",
    title: "Smart Cart",
    subtitle:
      "Simple checkout with quantity management.",
  },
  {
    image: "/screenshots/checkout.jpeg",
    title: "Secure Checkout",
    subtitle:
      "Fast online payment and address management.",
  },
  {
    image: "/screenshots/orders.jpeg",
    title: "Order Tracking",
    subtitle:
      "Track your orders and download invoices.",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700">
            Mobile Experience
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Experience
            <span className="text-green-600">
              {" "}Farm2Plate
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">

            Built with Flutter to provide a fast,
            beautiful and seamless shopping experience.

          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {screens.map((screen, index) => (

            <motion.div

              key={screen.title}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*0.1
              }}

              whileHover={{
                y:-10
              }}

              className="rounded-3xl border bg-slate-50 p-6 shadow-sm hover:shadow-xl transition-all"
            >

              <div className="mx-auto w-[240px] overflow-hidden rounded-[36px] border-8 border-slate-900 shadow-2xl">

                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={240}
                  height={520}
                  className="w-full h-auto"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {screen.title}

              </h3>

              <p className="mt-3 text-gray-600 leading-7">

                {screen.subtitle}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}