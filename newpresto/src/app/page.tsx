import Image from "next/image";
import mainLogo from "../../public/logo.svg";
import {
  PiEnvelopeFill,
  PiMagnifyingGlassBold,
  PiPhoneCallFill,
} from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="border-b p-1 ">
        <div className="container mx-auto">
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
                  <Link href="" className="flex gap-2">
                    <PiPhoneCallFill className="text-lg text-primaryColor" />
                    <p className="text-gray-500 text-sm">+91 9210 903 903</p>
                  </Link>
                </li>

                <li>
                  <Link href="" className="flex gap-2">
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
      </div>

      <section className="bg-[url(../../src/assets/images/home-banner.webp)] h-[68vh] bg-contain bg-no-repeat bg-center"></section>
      <section className="py-[50px]">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <h1 className="text-4xl font-bold mb-3">Our Product Range</h1>
              <p>
                Our testing instruments help you examine the constraints and are
                available in following range...
              </p>
            </div>

            <button className="border rounded-full  uppercase px-4 py-2 text-sm">
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
