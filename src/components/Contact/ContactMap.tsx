import React from 'react'

function ContactMap() {
  return (
    <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-900 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0 hidden lg:block"
        style={{ filter: 'opacity(0.7)' }}
        src="https://www.google.com/maps/embed/v1/search?q=penang&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      />
      <div className="relative flex flex-wrap rounded bg-gray-900 py-6 shadow-md">
        <div className="px-6 lg:w-1/2">
          <h2 className="title-font text-xs font-semibold tracking-widest text-white">ADDRESS</h2>
          <p className="mt-1">
            Penang,
            <br />
            Malaysia
          </p>
          <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-white">EMAIL</h2>
          <a className="leading-relaxed text-indigo-400">leechiahwa99@hotmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default ContactMap
