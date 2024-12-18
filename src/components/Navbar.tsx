import React from 'react'
import { handleScroll } from '../lib/utils'

export default function Navbar() {
  return (
    // TODO: Fix mobile Navbar
    <header className="top-0 z-10 border-sky-700 bg-sky-900/90 md:sticky">
      <div className="container relative mx-auto flex flex-col items-center p-2 md:flex-row">
        <div className="mb-4 font-medium text-white md:mb-0">
          <button className="text-xl hover:text-rose-400 md:ml-3" onClick={() => handleScroll('hero')}>
            Melvin Lee
          </button>
        </div>
        <nav className="flex flex-wrap items-center justify-between text-base md:ml-4	md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
          <button className="mx-5 hover:text-rose-400 md:mr-5" onClick={() => handleScroll('about')}>
            About
          </button>
          <button className="mx-5 hover:text-rose-400 md:mr-5" onClick={() => handleScroll('projects')}>
            Projects
          </button>
        </nav>
        <button
          className="group relative m-1 cursor-pointer overflow-hidden rounded-md border-2 border-white px-3.5 py-2 font-medium "
          onClick={() => handleScroll('contact')}
        >
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-rose-400 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-white transition duration-300 group-hover:text-white">Contact Me</span>
        </button>
      </div>
    </header>
  )
}
