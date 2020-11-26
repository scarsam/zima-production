import { useRef, useEffect } from 'react';
import { ValidationError, useForm } from '@formspree/react';

const ContactForm: React.FC = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm('contactForm');

  useEffect(() => {
    formRef?.current?.reset();
  }, [state.succeeded]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white px-10 pb-12 relative rounded-md mt-10 md:lg-0"
    >
      <div className="w-full bg-teal-700 -mt-8 mb-10 p-5 shadow-md rounded-md">
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
            required
          />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow disabled:opacity-50 disabled:cursor-wait disabled:bg-teal-700 bg-teal-700 hover:bg-teal-800 focus:shadow-outline focus:outline-none text-white py-3 px-6 rounded-md"
            type="submit"
            disabled={state.submitting}
          >
            Skicka
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
