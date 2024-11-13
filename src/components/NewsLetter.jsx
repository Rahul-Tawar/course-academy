import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert("Form submitted! We'll get back to you as soon as possible.")

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <div className="max-w-md mx-auto md:ml-8 p-6">
      <div className='mb-8'>
      <h2 className="text-5xl text-center font-bebasneue w-min border-t-2 border-[#f8b31d] pt-2">Join</h2>
      <h2 className='font-cursive text-5xl text-[#f8b31d] font-bold'>Our Newsletter</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 md:w-[45vw]">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            required 
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f8b31d] focus:border-[#f8b31d] sm:text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f8b31d] focus:border-[#f8b31d] sm:text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f8b31d] focus:border-[#f8b31d] sm:text-sm"
          />
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 font-oswald text-xl border-2 border-black bg-[#f8b31d] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
