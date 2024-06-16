"use client";

import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  className="w-auto h-14 filter invert"
                  src={Logo}
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden relative z-100">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
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
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10 relative z-100">
              <div className="relative">
                <button
                  type="button"
                  className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                    "
                  onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                >
                  <span>Games for fun</span>
                  <svg
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
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
                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Item 0
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Item 1
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Item 2
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Item 3
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                >
                  <span>More</span>
                  <svg
                    className={
                      flyerTwo === true
                        ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
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
                </button>{" "}
                <div
                  onMouseLeave={() => setFlyerTwo(false)}
                  className={
                    flyerTwo
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Item 0
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                AI Methodology
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 z-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="w-auto h-14 filter invert"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
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
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8 relative">
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMenu("fun")}
                    className="flex justify-between w-full text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Games for Fun
                    <svg
                      className={`transform ${
                        openMenu === "fun" ? "rotate-180" : "rotate-0"
                      } transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500`}
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
                  {openMenu === "fun" && (
                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Item 0
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Item 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Item 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Item 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => toggleMenu("education")}
                    className="flex justify-between w-full text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Games for Education
                    <svg
                      className={`transform ${
                        openMenu === "education" ? "rotate-180" : "rotate-0"
                      } transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500`}
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
                  {openMenu === "education" && (
                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Item 0
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  AI Methodology
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
