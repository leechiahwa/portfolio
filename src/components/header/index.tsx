import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY // Get the vertical scroll position
    // Adjust the threshold (e.g., 100) based on when you want the header to appear
    if (scrollPosition > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // Add event listener
    return () => {
      window.removeEventListener('scroll', handleScroll) // Cleanup
    }
  }, [])

  return (
    <div
      className={`fixed left-0 top-0 flex w-full items-center justify-between border-b border-sky-700 bg-sky-900/70 px-4 py-4 shadow-lg transition-opacity duration-300 md:px-12 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <a href="/" className="text-xs text-sky-100 md:text-base">
        M
      </a>
      <div className="flex items-center gap-4">
        <Button size={'icon'} asChild className="rounded-full">
          <a href="https://github.com/leechiahwa" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      </div>
    </div>
  )
}
