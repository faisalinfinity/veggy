import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import StickyOrderButton from "@/components/StickyOrderButton"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Veggy - Fresh Vegetable Home Delivery in Jaunpur | Farm to Door",
  icons: {
    icon: "/veggy.jpg",
  },

  description:
    "Veggy brings fresh, locally sourced vegetables straight to your doorstep in Jaunpur, Uttar Pradesh. Enjoy farm-fresh produce with our convenient home delivery service.",
  keywords: [
    "Veggy",
    "vegetable delivery",
    "Jaunpur",
    "Uttar Pradesh",
    "fresh produce",
    "home delivery",
    "local farmers",
  ],
  authors: [{ name: "Veggy Team" }],
  creator: "Veggy",
  publisher: "Veggy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Veggy - Fresh Vegetable Home Delivery in Jaunpur",
    description:
      "Veggy brings fresh, locally sourced vegetables straight to your doorstep in Jaunpur, Uttar Pradesh. Enjoy farm-fresh produce with our convenient home delivery service.",
    url: "https://www.veggy-jaunpur.com",
    siteName: "Veggy",
    images: [
      {
        url: "/veggy.jpg",
        width: 1200,
        height: 630,
        alt: "Veggy - Fresh Vegetable Delivery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veggy - Fresh Vegetable Home Delivery in Jaunpur",
    description:
      "Veggy brings fresh, locally sourced vegetables straight to your doorstep in Jaunpur, Uttar Pradesh. Enjoy farm-fresh produce with our convenient home delivery service.",
    images: ["/veggy.jpg"],
    creator: "@veggy_jaunpur",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.veggy-jaunpur.com",
 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={poppins.className}>{children}
      <StickyOrderButton />
      </body>
    </html>
  )
}

