/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

interface IProps {
  setShowModal: (showModal: boolean) => void
  image: JSX.Element
  title: string
}

const Modal: React.FC<IProps> = ({ setShowModal, image, title }: IProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-between p-5 border-b border-solid border-gray-300 rounded-t items-center">
              <h3 className="text-1xl font-semibold">{title}</h3>
              <button
                className="shadow bg-teal-500 hover:bg-teal-200 focus:shadow-outline py-1 px-1 rounded-md ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none leading-5">
                  ×
                </span>
              </button>
            </div>
            <div className="relative flex-auto h-48 w-4/5 my-4 mx-auto p-6">{image}</div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal
