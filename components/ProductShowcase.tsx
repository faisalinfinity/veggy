import Image from "next/image"

export default function ProductShowcase() {
  const products = [
    { name: "Fresh Tomatoes", image: "/tomato.jpg" },
    { name: "Organic Potatoes", image: "/potatoes.jpg" },
    { name: "Local Lemons", image: "/lemon.jpg" },
    { name: "Sweet Carrots", image: "/carrot.jpg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeIn">Our Fresh Vegetables</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={1000}
                height={1000}
                className="rounded-xl overflow-hidden mb-4 mx-auto hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

