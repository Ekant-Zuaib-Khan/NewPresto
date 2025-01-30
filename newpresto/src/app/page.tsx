import Image from "next/image";
import firstCat from "../assets/images/firstCat.jpg";
import { PiArrowRightFill } from "react-icons/pi";
import heroBanner from "../assets/images/home-banner.webp"
export default function Home() {
  return (
    <>
      <section>
        <Image src={heroBanner} alt="first Category" priority={true} />

      </section>
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

            <button className="border rounded-full  uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-7">
            <div className="bg-white shadow-md ">
              <Image src={firstCat} alt="first Category" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center justify-between text-tertoryColor mb-5">
                  <h3 className="text-tertoryColor">
                    Paper & Packaging Testing Instruments{" "}
                  </h3>
                  <PiArrowRightFill />
                </div>

                <button className="border rounded-full mx-auto block  uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
                  Click for details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md ">
              <Image src={firstCat} alt="first Category" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center justify-between text-tertoryColor mb-5">
                  <h3 className="text-tertoryColor">
                    Paper & Packaging Testing Instruments{" "}
                  </h3>
                  <PiArrowRightFill />
                </div>

                <button className="border rounded-full mx-auto block  uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
                  Click for details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md ">
              <Image src={firstCat} alt="first Category" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center justify-between text-tertoryColor mb-5">
                  <h3 className="text-tertoryColor">
                    Paper & Packaging Testing Instruments{" "}
                  </h3>
                  <PiArrowRightFill />
                </div>

                <button className="border rounded-full mx-auto block  uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
                  Click for details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
