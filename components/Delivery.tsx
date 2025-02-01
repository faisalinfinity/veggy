"use client"

import { motion } from "framer-motion"
import { Clock, Truck, MapPin } from "lucide-react"

const deliveryInfo = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your veggies in just 1-2 hours",
  },
  {
    icon: Truck,
    title: "Local Fleet",
    description: "Our own delivery team ensures quality",
  },
  {
    icon: MapPin,
    title: "Jaunpur Coverage",
    description: "We deliver all across Jaunpur",
  },
]

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1,
    },
  },
}

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2,
    },
  },
}

export default function Delivery() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Lightning-Fast Delivery in Jaunpur</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {deliveryInfo.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <motion.div initial="hidden" animate="visible" variants={iconVariants} className="mb-4">
                <item.icon className="w-16 h-16 mx-auto text-primary" />
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={textVariants}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

