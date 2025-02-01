export default function Testimonials() {
    const testimonials = [
      {
        name: "Priya Sharma",
        quote: "Veggy has transformed how I shop for vegetables. The quality and convenience are unmatched!",
      },
      {
        name: "Amit Patel",
        quote: "I love supporting local farmers through Veggy. The vegetables are always fresh and delicious.",
      },
      {
        name: "Sunita Gupta",
        quote:
          "The variety of seasonal vegetables from Veggy is amazing. It's like having a farmers market delivered to my door.",
      },
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeIn">
            What Our Customers Say About Veggy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  