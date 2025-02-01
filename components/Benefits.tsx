import { Check } from "lucide-react"

export default function Benefits() {
  const benefits = [
    "Fresh, locally sourced vegetables",
    "Convenient home delivery in Jaunpur",
    "Support for local farmers",
    "Wide variety of seasonal produce",
    "Contactless delivery options",
    "Customizable vegetable boxes",
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeIn">Why Choose Veggy?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Check className="text-secondary mr-2" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

