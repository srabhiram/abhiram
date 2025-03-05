import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact | Abhiram",
  description: "Contact",
}
function ContactPage() {
  return (
    <section>
      <Contact />
    </section>
  )
}

export default ContactPage