"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 300) {
        setIsVisible(true)
        controls.start({ opacity: 1, y: 0 })
      } else {
        setIsVisible(false)
        controls.start({ opacity: 0, y: 20 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://veggy.mini.site" passHref>
        <motion.button
          className="bg-secondary text-primary-dark font-semibold py-2 px-4 rounded-full shadow-lg flex items-center space-x-2 transition-colors duration-300 hover:bg-secondary-dark"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Order Now</span>
        </motion.button>
      </Link>
    </motion.div>
  )
}

