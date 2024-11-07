import React, { useState, useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'
import FooterLinks from './FooterLinks'

function Footer() {
  const [showScroll, setShowScroll] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  // Observe if page is at footer section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setShowScroll(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const currentElement = footerRef.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      id="footer"
      ref={footerRef}
      className="relative flex flex-col items-center justify-center bg-sky-950 bg-gradient-to-b p-6 text-white"
    >
      <div className="mb-4 flex space-x-4">
        <FooterLinks />
      </div>
      <p className="text-xs">Made by Melvin @2024</p>
      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 animate-fade-in-bottom rounded-full bg-sky-600 p-3 text-white shadow-lg hover:bg-sky-700 focus:outline-none"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  )
}

export default Footer
