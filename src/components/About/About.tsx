import React, { useRef, useState, useEffect } from 'react'
import Skills from './Skills'
import melvinLeePhoto from 'src/assets/img/melvinlee.jpeg'

function About() {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }, // 0.1 means 10% of the element is visible
    )

    const currentElement = elementRef.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-950 to-sky-600"
    >
      <h2 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">About</h2>
      <div className="flex">
        <div
          className={`m-5 flex w-1/2 flex-col items-center justify-center ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0'
          }`}
        >
          <img
            src={melvinLeePhoto}
            alt="Photo of Melvin"
            ref={elementRef}
            className={`sm:h-128 sm:w-128 } h-96 w-96 rounded-md
            object-cover`}
          />
          <p className="m-10 text-center">
            With a passion for creating innovative and efficient software solutions, I thrive on turning ideas into
            reality. Whether it&apos;s crafting seamless applications, optimizing systems, or developing cutting-edge
            technology, I&apos;m dedicated to delivering excellence and value in every project.
          </p>
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default About
