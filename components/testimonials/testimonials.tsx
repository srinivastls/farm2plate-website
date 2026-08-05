"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Customer",
    text: "The freshness is amazing. Knowing exactly where my vegetables come from gives me confidence in every order.",
  },
  {
    name: "Ramesh Kumar",
    role: "Farmer",
    text: "Farm2Plate helps me reach customers directly and build long-term relationships with them.",
  },
  {
    name: "Ananya Rao",
    role: "Working Professional",
    text: "Ordering fresh vegetables has never been this simple. The traceability feature is my favorite.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Loved by Customers & Farmers
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Building trust through transparency.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.15}}
              viewport={{once:true}}
              className="rounded-3xl border p-8 bg-white shadow-sm hover:shadow-xl"
            >

              <div className="flex mb-5">

                {[...Array(5)].map((_,i)=>(
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-gray-600">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}