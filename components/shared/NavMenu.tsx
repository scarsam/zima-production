import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { useClickOutside } from 'react-click-outside-hook'
import { SupplierType } from 'types/allTypes'

const NavMenu: React.FC<{ suppliers: SupplierType[] }> = ({ suppliers }) => {
  console.log('hy', suppliers)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [dropdownRef, hasClickedOutside] = useClickOutside()

  useEffect(() => {
    hasClickedOutside && setShowDropdown(false)
  }, [hasClickedOutside])

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 flex-1">
            <a href="#" className="font-bold text-xl text-gray-500">
              Zima produktion
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setShowMobileMenu((showMobileMenu) => !showMobileMenu)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">Startsida</a>
            </Link>
            <div className="relative" ref={dropdownRef}>
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
                type="button"
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Våra produkter</span>
                {/* <!--
                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                 --> */}
                <svg
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <Transition
                show={showDropdown}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen md:w-80 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {suppliers &&
                          suppliers.map((supplier) => (
                            <Link key={supplier.slug} href={`/suppliers/${supplier.slug}`}>
                              <a className="text-base font-medium text-gray-900">
                                {supplier.title}
                              </a>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </div>

            <Link href="/hyra-utrustning">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Hyra utrustning
              </a>
            </Link>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU  */}

      <Transition
        show={showMobileMenu}
        enter="duration-200 ease-out"
        enterFrom="duration-200 ease-out"
        enterTo="duration-200 ease-out"
        leave="duration-200 ease-out"
        leaveFrom="duration-200 ease-out"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden z-10"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <a href="#" className="font-bold text-xl text-gray-500">
                    Zima produktion
                  </a>{' '}
                  <div className="-mr-2">
                    <button
                      onClick={() => setShowMobileMenu((showMobileMenu) => !showMobileMenu)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: x --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a href="#" className="-m-3 p-3 flex items-center hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
                    </a>

                    <div className="relative" ref={dropdownRef}>
                      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                      <button
                        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
                        type="button"
                        className="group bg-white text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <div className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Våra produkter
                          </span>
                        </div>{' '}
                        {/* <!--
                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                 --> */}
                        <svg
                          className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <Transition
                        show={showDropdown}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        {(ref) => (
                          <div
                            ref={ref}
                            className="z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {suppliers &&
                                  suppliers.map((supplier) => (
                                    <Link key={supplier.slug} href={`/suppliers/${supplier.slug}`}>
                                      {supplier.title}
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </Transition>
                    </div>

                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Security</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default NavMenu
