import React from 'react'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container mx-auto flex flex-wrap px-5 py-10 sm:flex-nowrap">
        <ContactMap />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
