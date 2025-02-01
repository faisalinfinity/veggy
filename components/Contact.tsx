import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary animate-fadeIn">Contact Veggy</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-6 text-lg animate-slideUp">
            Have questions or need assistance? We&apos;re here to help! Reach out to our friendly Veggy customer support
            team.
          </p>
          <p className="mb-6 animate-slideUp delay-100">
            <strong>Phone:</strong> +91 700-758-6561
            <br />
            <strong>Email:</strong> veggy.jaunpur@gmail.com
            <br />
            <strong>Address:</strong> Mandi Naseeb Khan, Station Road, Jaunpur, Uttar Pradesh 222002
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-primary-dark hover:bg-opacity-90 transition-all duration-300 animate-slideUp delay-200"
          >
            {/* <a href="mailto:support@veggy-jaunpur.com">Send Us a Message</a> */}
          </Button>
        </div>
      </div>
    </section>
  )
}

