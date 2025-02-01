import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Veggy: Fresh Vegetables Delivered to Your Doorstep in Jaunpur
          </h1>
          <p className="text-xl mb-8 animate-slideUp">
            Experience the convenience of farm-fresh produce delivered straight to your home in Jaunpur, Uttar Pradesh
            with Veggy.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary rounded-full text-primary-dark hover:bg-opacity-90 transition-all duration-300"
          >
            <Link href="https://veggy.mini.site">Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

