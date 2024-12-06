import React, { useEffect, useRef, useState } from 'react'
import { SkillCard } from './SkillCard'
import html from 'src/assets/icons/html.png'
import css from 'src/assets/icons/css.png'
import javascript from 'src/assets/icons/javascript.png'
import react from 'src/assets/icons/react.png'
import nodejs from 'src/assets/icons/nodejs.png'

function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }, // 0.5 means 50% of the element is visible
    )

    const currentElement = containerRef.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    if (currentElement && isVisible) {
      const children = currentElement.children
      Array.from(children).forEach((child, index) => {
        // eslint-disable-next-line prettier/prettier
        ;(child as HTMLElement).style.animationDelay = `${index * 0.2}s`
        child.classList.add('animate-fade-in')
      })
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="flex w-1/2 flex-wrap items-center justify-center gap-8 p-5">
      <SkillCard src={html} name="HTML" description="HyperText Markup Language" />
      <SkillCard src={css} name="CSS" description="Cascading Style Sheets" />
      <SkillCard src={javascript} name="JavaScript" description="JS" />
      <SkillCard src={react} name="React" description="React JS" />
      <SkillCard src={nodejs} name="Node.js" description="Node JS" />
    </div>
  )
}

export default Skills
