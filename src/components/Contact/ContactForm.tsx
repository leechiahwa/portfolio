import React from 'react'
import swal from 'sweetalert'

function ContactForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://nodemailer-backend-nu.vercel.app/api/mailService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (response.ok) {
        swal('Sent!', 'Your message has been sent successfully!', 'success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        swal('Something went wrong!', 'The message could not be sent. Please try again.', 'error')
      }
    } catch (error) {
      swal('Something went wrong!', "The message could not be sent. Please wait while it's fixed.", 'error')
    }
    setLoading(false)
  }

  return (
    <div className="mt-8 flex w-full flex-col rounded-md bg-gray-900 md:ml-auto md:mt-0 md:w-1/2 md:p-8 lg:w-1/3">
      <h2 className="title-font mb-1 text-lg font-medium text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative mb-4">
          <label htmlFor="name" className="text-sm leading-7 text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="text-sm leading-7 text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="text-sm leading-7 text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Send
        </button>
        {loading && <p className="mt-2 text-sm text-gray-400">Sending... Please wait</p>}
      </form>
    </div>
  )
}

export default ContactForm
