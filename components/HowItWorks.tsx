export default function HowItWorks() {
    const steps = [
      {
        title: "Choose Your Veggies",
        description: "Browse our selection of fresh, locally-sourced vegetables on the Veggy app or website.",
      },
      {
        title: "Place Your Order",
        description: "Select your desired items and complete your purchase online with Veggy.",
      },
      { title: "We Prepare Your Box", description: "Our Veggy team carefully selects and packs your vegetables." },
      {
        title: "Doorstep Delivery",
        description: "Receive your farm-fresh vegetables right at your doorstep in Jaunpur from Veggy.",
      },
    ]
  
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeIn">How Veggy Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-secondary text-primary-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  