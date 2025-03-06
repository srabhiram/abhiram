import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact |Abhiram",
  description:
    "Get in touch with Abhiram via email.",
  openGraph: {
    title: "Abhiram's Contact",
    description:
      "Find and connect with Abhiram via email.",
    url: "https://abhiramsriramoji.vercel.app/contact",
    siteName: "Abhiram's Portfolio",
    images: [
      {
        url: "/contact_preview.png",
        height: 630,
        alt: "Abhiram's Contact",
      },
    ],
    type: "website",
  },
};
function ContactPage() {
  return (
    <section>
      <Contact />
    </section>
  )
}

export default ContactPage