import Image from "next/image";
import Logo from "../../assets/images/logo-trans.png";
import { PiEnvelopeFill, PiPhoneCallFill } from "react-icons/pi";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { TiSocialPinterest } from "react-icons/ti";
import LogoFir from "../../assets/images/fLogo1.jpg";
import LogoSec from "../../assets/images/fLogo2.jpg";
import LogoThi from "../../assets/images/fLogo3.jpg";
import LogoFor from "../../assets/images/fLogo4.jpg";
interface PopularLinks {
  text: string;
  href: string;
}

interface PopularSecLinks {
  text: string;
  href: string;
}

interface AboutLink {
  text: string;
  href: string;
}
const PopularLinks = [
  { text: "Paint, Plating & Coating", href: "#" },
  { text: "Environmental Chambers", href: "#" },
  { text: "Color Measurement", href: "#" },
  { text: "UTM Machine", href: "#" },
  { text: "Humidity Chamber", href: "#" },
  { text: "Box Compression Tester", href: "#" },
  { text: "Top Load Tester", href: "#" },
  { text: "Bursting Strength Tester", href: "#" },
  { text: "View Entire Range", href: "#" },
];
const PopularSecLinks = [
  { text: "Paint, Plating & Coating", href: "#" },
  { text: "Environmental Chambers", href: "#" },
  { text: "Color Measurement", href: "#" },
  { text: "UTM Machine", href: "#" },
  { text: "Humidity Chamber", href: "#" },
  { text: "Box Compression Tester", href: "#" },
  { text: "Top Load Tester", href: "#" },
  { text: "Bursting Strength Tester", href: "#" },
  { text: "View Entire Range", href: "#" },
];
const AboutLink = [
  { text: "Our Story", href: "#" },
  { text: "Why Presto?", href: "#" },
  { text: "Our Team", href: "#" },
  { text: "Corporate Video", href: "#" },
  { text: "Dealership Enquiry", href: "#" },
  { text: "Contact Details", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Quick Quote", href: "#" },
 
];
const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="bg-grayColor  text-white py-10 ">
          <div className="container mx-auto">
            <div className="xl:grid grid-cols-3  gap-3 flex flex-col justify-center items-center">
              <div>
                <Image src={Logo} alt="logo" loading="lazy" />
                <p className="text-white">
                  Asia Premier Testing Instruments Manufacturing Company
                </p>

                <ul className="mt-2 flex items-center gap-7">
                  <li>
                    <Link
                      href="tel:+919210903903"
                      className="flex items-center gap-2"
                    >
                      <PiPhoneCallFill className="text-lg text-primaryColor" />
                      +91 9210 903 903
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="tel:+919210903903"
                      className="flex items-center gap-2"
                    >
                      <PiEnvelopeFill className="text-lg text-primaryColor" />
                      info@prestogroup.com
                    </Link>
                  </li>
                </ul>

                <ul className="mt-5 flex items-center justify-center justify-content-md-start gap-3">
                  <li>
                    <Link
                      href="#"
                      className="w-8  h-8 rounded-full border flex items-center justify-center"
                    >
                      <BiLogoFacebook size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="w-8  h-8 rounded-full border flex items-center justify-center"
                    >
                      <BiLogoTwitter size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="w-8  h-8 rounded-full border flex items-center justify-center"
                    >
                      <TiSocialPinterest size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="w-8  h-8 rounded-full border flex items-center justify-center"
                    >
                      <BiLogoLinkedin size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="w-8  h-8 rounded-full border flex items-center justify-center"
                    >
                      <BiLogoYoutube size={20} />
                    </Link>
                  </li>
                </ul>

                <ul className="mt-3 flex items-center gap-5">
                  <Image
                    src={LogoFir}
                    alt="f-logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <Image
                    src={LogoSec}
                    alt="f-logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <Image
                    src={LogoThi}
                    alt="f-logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <Image
                    src={LogoFor}
                    alt="f-logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </ul>
              </div>
              <div className="col-span-2 xl:grid grid-cols-4 hidden gap-3">
                <div className="">
                  <h3 className="text-primaryColor font-semibold mb-2">
                    POPULAR INSTRUMENTS
                  </h3>
                  <div className="flex flex-col gap-1">
                    {PopularLinks.map((link, index) => (
                      <Link key={index} href={link.href} className="text-sm">
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="">
                  <h3 className="text-primaryColor font-semibold mb-2 invisible">
                    POPULAR INSTRUMENTS
                  </h3>
                  <div className="flex flex-col gap-2">
                    {PopularSecLinks.map((link, index) => (
                      <Link key={index} href={link.href} className="text-sm">
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="">
                  <h3 className="text-primaryColor font-semibold mb-2  uppercase">
                    About
                  </h3>
                  <div className="flex flex-col gap-1">
                    {AboutLink.map((link, index) => (
                      <Link key={index} href={link.href} className="text-sm">
                        {link.text}
                      </Link>
                    ))}
                  
                  </div>
                </div>

                <div className="">
                  <h3 className="text-primaryColor font-semibold mb-2  uppercase">
                    SUPPORT
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Link href="#" className="text-sm">
                      Technical Support
                    </Link>
                    <Link href="#" className="text-sm">
                      Execution Support
                    </Link>
                    <Link href="#" className="text-sm">
                      Training lab video
                    </Link>
                    <Link href="#" className="text-sm">
                      Relocation Assistance
                    </Link>
                    <Link href="#" className="text-sm">
                      Maintenance Support
                    </Link>
                    <Link href="#" className="text-sm">
                      Training Service
                    </Link>
                    <Link href="#" className="text-sm">
                      Repair & Parts
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 xl:flex items-center hidden gap-8">
              <p className="text-base">Office Locations in Different Cities:</p>
              <div className="flex  gap-1 justify-between w-[70%]">
                <Link href="#" className="text-sm">
                  Faridabad
                </Link>
                <Link href="#" className="text-sm">
                  Kolkata
                </Link>
                <Link href="#" className="text-sm">
                  Mumbai
                </Link>
                <Link href="#" className="text-sm">
                  Pune
                </Link>
                <Link href="#" className="text-sm">
                  Ahmedabad
                </Link>
                <Link href="#" className="text-sm">
                  Chennai
                </Link>
                <Link href="#" className="text-sm">
                  Bangalore
                </Link>
                <Link href="#" className="text-sm">
                  Sonipat
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#666]  py-3">
          <div className="container mx-auto flex items-center gap-10">
            <p className="text-xs text-lightGrayColor">
              Copyright © 2023-24 Presto Group
            </p>
            <div className="xl:flex justify-between w-[70%] hidden">
              <Link href="#" className="text-xs text-lightGrayColor">
                About
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Contact
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                International
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Exhibitions
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Blog
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Articles
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Media
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                FAQs
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Sitemap
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Privacy Policy
              </Link>

              <Link href="#" className="text-xs text-lightGrayColor">
                Copyright
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
