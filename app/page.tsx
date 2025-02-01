
import Hero from "../components/Hero"
import About from "../components/About"
import Benefits from "../components/Benefits"
import ProductShowcase from "../components/ProductShowcase"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "@/components/Testimonial"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Delivery from "@/components/Delivery"

export default function Home() {
  return (
    <>
   
      <main className="font-sans">
        <Hero />
        <About />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <Delivery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

