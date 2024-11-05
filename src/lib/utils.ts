import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleScroll = (sectionId: string) => {
  const aboutSection = document.getElementById(sectionId)
  aboutSection?.scrollIntoView({ behavior: 'smooth' })
}
