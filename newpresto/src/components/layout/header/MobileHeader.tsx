"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PiMagnifyingGlassBold,
  PiPhoneCallFill,
  PiEnvelopeFill,
  PiListBold,
  PiSubtractBold,
  PiPlusBold,
} from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import mainLogo from "../../../../public/logo.svg";

const MobileHeader: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  // Toggle dropdown state based on key
  const toggleDropdown = (key: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle only the clicked dropdown
    }));
  };

  return (
    <>
      <header className="sticky top-0 bg-white z-20 shadow-2xl xl:hidden block">
        <div className="bg-secondaryColor p-2">
          <div className="container mx-auto flex justify-between">
            <Link
              href="tel:+919210903903"
              className="flex items-center gap-2 text-sm text-white"
            >
              <PiPhoneCallFill className="text-white" size={17} />
              +91 9210 903 903
            </Link>
            <Link
              href="mailto:info@prestogroup.com"
              className="flex items-center gap-2 text-sm text-white"
            >
              <PiEnvelopeFill className="text-white" size={17} />
              info@prestogroup.com
            </Link>
          </div>
        </div>

        <div className="flex items-center p-3">
          <Image
            src={mainLogo}
            alt="logo"
            loading="lazy"
            className="w-5/12 md:w-1/4"
          />
          <div className="flex flex-1 justify-end gap-5">
            <PiMagnifyingGlassBold size={25} />
            <PiListBold
              size={25}
              className="text-primaryColor cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-xl transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src={mainLogo}
            alt="logo"
            loading="lazy"
            className="w-5/12 md:w-1/4"
          />
          <IoClose
            size={25}
            className="cursor-pointer text-gray-600"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <div
                className="flex justify-between items-center text-gray-700 cursor-pointer"
                onClick={() => toggleDropdown("products1")}
              >
                <span>Testing Instruments</span>
                {dropdownStates["products1"] ? (
                  <PiSubtractBold size={20} className="text-primaryColor" />
                ) : (
                  <PiPlusBold size={20} className="text-primaryColor" />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  dropdownStates["products1"]
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Paper & Packaging
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Paint, Plating & Coating
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Plastic
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Environmental Chambers
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <hr />
            </li>

            <li>
              <div
                className="flex justify-between items-center text-gray-700 cursor-pointer"
                onClick={() => toggleDropdown("products2")}
              >
                <span>About</span>
                {dropdownStates["products2"] ? (
                  <PiSubtractBold size={20} className="text-primaryColor" />
                ) : (
                  <PiPlusBold size={20} className="text-primaryColor" />
                )}
              </div>

              {/* Dropdown Items */}
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  dropdownStates["products2"]
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Our Story
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Why Presto?
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Our Team
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Dealership Enquiry
                  </Link>
                </li>

                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Contact Details
                  </Link>
                </li>

                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Careers
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <hr />
            </li>
            <li>
              <div
                className="flex justify-between items-center text-gray-700 cursor-pointer"
                onClick={() => toggleDropdown("products3")}
              >
                <span>Support</span>
                {dropdownStates["products3"] ? (
                  <PiSubtractBold size={20} className="text-primaryColor" />
                ) : (
                  <PiPlusBold size={20} className="text-primaryColor" />
                )}
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  dropdownStates["products3"]
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                    Technical Support
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Execution Support
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Relocation Assistance
                  </Link>
                </li>
                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Maintenance Support
                  </Link>
                </li>

                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Training Service
                  </Link>
                </li>

                <li className="pl-4 mt-2">
                  <Link href="#" className="text-gray-500 block">
                  Repair & Parts
                  </Link>
                </li>
              </ul>
            </li>

            <li>
                <button type="button" className="py-2 px-3 bg-primaryColor w-full text-white  rounded-md font-semibold">
                    Contact Us
                     </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default MobileHeader;
