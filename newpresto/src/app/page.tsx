import Image from "next/image";
import mainLogo from "../../public/logo.svg";

export default function Home() {
  return (
    <>
      <div className="border-b ">
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
                <div className="w-[2px] h-5 bg-gray-200"></div>
                <div className="">
                  <PiMagn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
