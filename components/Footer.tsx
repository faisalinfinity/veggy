import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4">Veggy</h3>
            <p className="text-sm">
              Bringing fresh vegetables to your doorstep in Jaunpur, Uttar
              Pradesh.
            </p>
          </div>
          <div className="animate-fadeIn delay-100">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm hover:text-secondary transition-colors duration-300"
                >
                  About Veggy
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm hover:text-secondary transition-colors duration-300"
                >
                  How Veggy Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-sm hover:text-secondary transition-colors duration-300"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm hover:text-secondary transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn delay-200">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Station Road, Mandi Naseeb Khan, Jaunpur</li>
              <li>Uttar Pradesh, 222001</li>
              <li>Phone: +91 700-758-6561</li>
              <li>Email: veggy.jaunpur@gmail.com</li>
            </ul>
          </div>
          <div className="animate-fadeIn delay-300">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-sm mb-4">
              Follow us for updates, recipes, and more!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572478451042"
                className="hover:text-secondary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/veggy_jaunpur/#"
                className="hover:text-secondary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/917505574037" className="hover:text-secondary transition-colors duration-300">
              <FaWhatsapp className="text-xl" />
              </a>
              {/* <a href="#" className="hover:text-secondary transition-colors duration-300">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; 2025 Veggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
