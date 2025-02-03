import Image from "next/image";
import Link from "next/link";
import {
  PiMagnifyingGlassBold,
  PiPhoneCallFill,
  PiEnvelopeFill,
  
} from "react-icons/pi";
import mainLogo from "../../../../public/logo.svg";
import { IoHome } from "react-icons/io5";

const DesktopHeader: React.FC = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white text-white  border-b  xl:block  hidden  sticky top-0 z-20 ">
        <div className="container mx-auto p-1">
          <div className="flex items-center gap-14">
            <Image src={mainLogo} alt="logo" loading="lazy" />

            <div className="flex flex-1">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="placeholder:text-xs border border-gray-600 text-gray-600 placeholder:text-gray-600 w-full py-2 rounded-full px-5"
              />
              <div className="-ml-[20%] flex items-center">
                <div className="w-[2px] h-5 bg-gray-200 mr-2"></div>
                <div className="flex items-center gap-2 uppercase text-primaryColor font-semibold">
                  <PiMagnifyingGlassBold />
                  <p className="text-sm ">Search</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="bg-primaryColor px-5 py-2 rounded-md font-medium text-sm text-white "
              >
                Get a Quote
              </button>
              <ul className="flex flex-col gap-2 justify-end items-end">
                <li>
                  <Link href="tel:+919210903903" className="flex gap-2">
                    <PiPhoneCallFill className="text-lg text-primaryColor" />
                    <p className="text-gray-500 text-sm">+91 9210 903 903</p>
                  </Link>
                </li>

                <li>
                  <Link
                    href="mainto:info@prestogroup.com"
                    className="flex gap-2"
                  >
                    <PiEnvelopeFill className="text-lg text-primaryColor" />
                    <p className="text-gray-500 text-sm">
                      info@prestogroup.com
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pr-[15%] border-t drop-shadow-xl  ">
          <div className="flex items-center gap-10">
            <Link
              href="#"
              className="bg-gray-300/50 text-secondaryColor py-2 px-5 flex items-center gap-3"
            >
              <IoHome /> About Us
            </Link>
            <div className="flex flex-1 justify-between">
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Paper & Packaging
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Paint, Plating & Coating
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Plastic
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Environmental Chambers
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                PET & Preform
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Color Measurement
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Applications / Industry
              </Link>
              <Link
                href="#"
                className="text-primaryColor  text-xs font-medium py-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

   
    </>
  );
};

export default DesktopHeader;
