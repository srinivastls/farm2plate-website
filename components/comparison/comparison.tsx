"use client";

import { motion } from "framer-motion";
import {
  User,
  Store,
  Warehouse,
  Truck,
  ShoppingBasket,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            Why Farm2Plate?
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            A Better Way To
            <span className="text-green-600">
              {" "}Buy Fresh Produce
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Traditional supply chains involve multiple intermediaries,
            increasing costs and reducing freshness.
            Farm2Plate connects farms directly with consumers.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Traditional */}

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="rounded-3xl border bg-white p-10 shadow-sm"
          >

            <h3 className="text-3xl font-bold mb-10">
              Traditional Supply Chain
            </h3>

            <div className="space-y-5">

              <Step icon={<User size={26}/>} text="Farmer"/>

              <Arrow/>

              <Step icon={<Store size={26}/>} text="Agent"/>

              <Arrow/>

              <Step icon={<Warehouse size={26}/>} text="Wholesaler"/>

              <Arrow/>

              <Step icon={<Truck size={26}/>} text="Retailer"/>

              <Arrow/>

              <Step icon={<ShoppingBasket size={26}/>} text="Customer"/>

            </div>

            <div className="mt-10 space-y-3">

              <Negative text="Multiple Middlemen"/>

              <Negative text="Higher Prices"/>

              <Negative text="Less Transparency"/>

              <Negative text="Reduced Freshness"/>

            </div>

          </motion.div>

          {/* Farm2Plate */}

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="rounded-3xl bg-gradient-to-br from-green-600 to-green-700 text-white p-10 shadow-xl"
          >

            <h3 className="text-3xl font-bold mb-10">
              Farm2Plate
            </h3>

            <div className="space-y-5">

              <StepWhite
                icon={<User size={26}/>}
                text="Farmer"
              />

              <ArrowWhite/>

              <StepWhite
                icon={<LeafIcon/>}
                text="Farm2Plate"
              />

              <ArrowWhite/>

              <StepWhite
                icon={<ShoppingBasket size={26}/>}
                text="Customer"
              />

            </div>

            <div className="mt-10 space-y-3">

              <Positive text="Better Farmer Income"/>

              <Positive text="Fresh Harvest"/>

              <Positive text="Complete Traceability"/>

              <Positive text="Transparent Pricing"/>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Arrow(){
  return(
    <div className="flex justify-center">
      <ArrowRight className="text-gray-400"/>
    </div>
  )
}

function ArrowWhite(){
  return(
    <div className="flex justify-center">
      <ArrowRight className="text-green-200"/>
    </div>
  )
}

function Step({icon,text}:{icon:React.ReactNode,text:string}){
  return(
    <div className="flex items-center gap-4 rounded-xl bg-slate-100 p-4">
      {icon}
      <span className="font-semibold">{text}</span>
    </div>
  )
}

function StepWhite({icon,text}:{icon:React.ReactNode,text:string}){
  return(
    <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
      {icon}
      <span className="font-semibold">{text}</span>
    </div>
  )
}

function Positive({text}:{text:string}){
  return(
    <div className="flex items-center gap-3">
      <CheckCircle2 className="text-green-200"/>
      {text}
    </div>
  )
}

function Negative({text}:{text:string}){
  return(
    <div className="flex items-center gap-3">
      <XCircle className="text-red-500"/>
      {text}
    </div>
  )
}

function LeafIcon(){
  return(
    <div className="text-2xl">
      🌱
    </div>
  )
}