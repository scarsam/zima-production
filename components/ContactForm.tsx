import { useRef, useEffect, useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'

const ContactForm: React.FC = () => {
  const formRef = useRef(null)
  const [state, handleSubmit] = useForm('contactForm')
  const [showConfirmationText, setShowConfirmationText] = useState(false)

  useEffect(() => {
    formRef?.current?.reset()
    if (state.succeeded) {
      setShowConfirmationText(true)
      setTimeout(() => {
        setShowConfirmationText(false)
      }, 4000)
    }
  }, [state.succeeded])

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white px-10 pb-12 relative rounded-md mt-10 md:lg-0"
    >
      <div className="w-full bg-teal-500 -mt-8 mb-10 p-5 shadow-md rounded-md">
        <h2 className="text-center text-white text-xl">Kontakta oss</h2>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Ditt namn
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            name="name"
            type="text"
            required
          />
          <ValidationError field="name" prefix="Namn" errors={state.errors} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Din e-post
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <ValidationError field="email" prefix="Category" errors={state.errors} />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="category"
          >
            Ämne
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="category"
            name="category"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Ditt meddelande
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
            required
          />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className={`${showConfirmationText ? '' : 'md:w-1/3'}`}>
          <button
            className="shadow disabled:opacity-50 disabled:cursor-wait disabled:bg-teal-500 bg-teal-500 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-md flex items-center"
            type="submit"
            disabled={state.submitting && !showConfirmationText}
          >
            {showConfirmationText ? 'Ditt meddelande har skickats' : 'Skicka'}
            {state.submitting && !showConfirmationText && (
              <svg
                className="animate-spin ml-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
