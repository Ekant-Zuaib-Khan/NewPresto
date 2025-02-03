import Image, { StaticImageData } from "next/image";
import heroBanner from "../assets/images/home-banner.webp";
import CatCard from "@/components/Cards/CatCard";
import FirstCat from "../assets/images/firstCat.jpg";
import PaintCat from "../assets/images/paint.jpg";
import PlasticCat from "../assets/images/plastic.jpg";
import EnvCat from "../assets/images/env.jpg";
import BotCat from "../assets/images/bot.jpg";
import PlasticPlaCat from "../assets/images/plasticPart.jpg";
import FirstLogo from "../assets/images/msme.svg";
import SecLogo from "../assets/images/nabl.svg";
import ThirdLogo from "../assets/images/zed_gold.svg";
import whyImg from "../assets/images/high.jpg";
import WhyCard from "@/components/Cards/WhyCard";
import CostIcon from "../assets/images/cost.jpg";
import ExpertiseIcon from "../assets/images/experties.jpg";
import HighlyIcon from "../assets/images/team.jpg";
import partnerLogo from "../assets/images/partnerLogos/partLogo1.png";
import partnerLogoSec from "../assets/images/partnerLogos/partLogo2.png";
import partnerLogoThi from "../assets/images/partnerLogos/partLogo3.png";
import partnerLogoFour from "../assets/images/partnerLogos/partLogo4.png";
import partnerLogoFive from "../assets/images/partnerLogos/partLogo5.png";
import partnerLogosix from "../assets/images/partnerLogos/partLogo6.png";
import partnerLogosev from "../assets/images/partnerLogos/partLogo7.png";
import partnerLogoEig from "../assets/images/partnerLogos/partLogo8.png";
import partnerLogoNin from "../assets/images/partnerLogos/partLogo9.png";
import partnerLogoTen from "../assets/images/partnerLogos/partLogo10.png";
import partnerLogoEle from "../assets/images/partnerLogos/partLogo11.png";
import partnerLogoTwel from "../assets/images/partnerLogos/partLogo12.png";
import partnerLogoThir from "../assets/images/partnerLogos/partLogo13.png";
import partnerLogoFourt from "../assets/images/partnerLogos/partLogo14.png";
import partnerLogoFif from "../assets/images/partnerLogos/partLogo15.png";
import partnerLogoSixt from "../assets/images/partnerLogos/partLogo16.png";
import partnerLogoSeve from "../assets/images/partnerLogos/partLogo17.png";
import partnerLogoEigh from "../assets/images/partnerLogos/partLogo18.png";
import partnerLogoNint from "../assets/images/partnerLogos/partLogo19.png";
import partnerLogoTwe from "../assets/images/partnerLogos/partLogo20.png";
import partnerLogoTweon from "../assets/images/partnerLogos/partLogo21.png";
import partnerLogoTwetwo from "../assets/images/partnerLogos/partLogo22.png";
import partnerLogoTwethr from "../assets/images/partnerLogos/partLogo23.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CatImg from "../assets/images/catalogue.webp";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import Logo from "../../public/logo.svg";
import FirstSign from "../assets/images/sign1.png";
import SecSign from "../assets/images/sign2.png";
import DirImg from "../assets/images/dir.webp";
interface Category {
  image: StaticImageData | string;
  title: string;
}

interface WhyCardData {
  imageSrc: StaticImageData | string;
  altText: string;
  heading: string;
  description: string;
}

interface partnerLogoData {
  id: number;
  image: StaticImageData | string;
}

const categories: Category[] = [
  { image: FirstCat, title: "Paper & Packaging Testing Instruments" },
  { image: PaintCat, title: "Paint, Plating & Coating Testing Instruments" },
  { image: PlasticCat, title: "Plastic & Polymer Testing Instruments" },
  { image: EnvCat, title: "Plastic & Polymer Testing Instruments" },
  { image: BotCat, title: "Plastic & Polymer Testing Instruments" },
  { image: PlasticPlaCat, title: "Plastic & Polymer Testing Instruments" },
];

const whyCardData: WhyCardData[] = [
  {
    imageSrc: whyImg,
    altText: "High Quality",
    heading: "High Quality & Perfection",
    description:
      "We are National Quality Award winners from the Government of India. All our products are unmatched in quality and design.",
  },
  {
    imageSrc: CostIcon,
    altText: "High Quality 2",
    heading: "Cost Benefit",
    description:
      "All our Products are manufactured in our 2 state of the art factories. They are standardised using CNC machines to provide long term cost benifits to customers.",
  },
  {
    imageSrc: ExpertiseIcon,
    altText: "Expertise & Adaptability",
    heading: "Expertise & Adaptability",
    description:
      "40+ years of experience in providing testing solutions to the world.",
  },

  {
    imageSrc: HighlyIcon,
    altText: "Expertise & Adaptability",
    heading: "Highly Motivated Team",
    description:
      "180+ Team members to provide best services PAN India and globally.",
  },
];

const partnerLogoData: partnerLogoData[] = [
  { id: 1, image: partnerLogo },
  { id: 2, image: partnerLogoSec },
  { id: 3, image: partnerLogoThi },
  { id: 4, image: partnerLogoFour },
  { id: 5, image: partnerLogoFive },
  { id: 6, image: partnerLogosix },
  { id: 7, image: partnerLogosev },
  { id: 8, image: partnerLogoEig },
  { id: 9, image: partnerLogoNin },
  { id: 10, image: partnerLogoTen },
  { id: 11, image: partnerLogoEle },
  { id: 12, image: partnerLogoTwel },
  { id: 13, image: partnerLogoThir },
  { id: 14, image: partnerLogoFourt },
  { id: 15, image: partnerLogoFif },
  { id: 16, image: partnerLogoSixt },
  { id: 17, image: partnerLogoSeve },
  { id: 18, image: partnerLogoEigh },
  { id: 19, image: partnerLogoNint },
  { id: 20, image: partnerLogoTwe },
  { id: 21, image: partnerLogoTweon },
  { id: 22, image: partnerLogoTwetwo },
  { id: 23, image: partnerLogoTwethr },
];

const testimonials = [
  {
    title: "Pepsico!",
    content:
      "A representative from Presto Stantest is regularly visiting our plant and ensuring that our all instrument are always operational. He has explained us about new equipments developed by his company Presto Stantest Pvt. Ltd. He has taken extra pain to explain us about proper use of equipment. By his regular Feedback and Training all our equipments are giving the proper results. His regular visit to our plant helps us to maintain our equipments in right condition.",
  },
  {
    title: "Kellogg India!",
    content:
      "Thanks for your Service and Support in completing the installation and training at our Facility. This marks a key role of Presto in the new QA Lab for our Facility at Sricity which is operationalized.Hope PRESTO will continue good &amp; immediate services as and when required in future too.",
  },
  {
    title: "JCB!",
    content:
      "We want to compliment you for the products and services you offer. Your responsiveness to the customer queries is commendable and the way you conduct business is an example of customer driven approach. Thank you for your excellent and continued support. We wish you all the best. We highly recommend your products and services to others in the industry.",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <Image
          src={heroBanner}
          alt="Hero Banner"
          priority={true}
          className="w-full"
          // width={1200}
          // height={600}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
        />
      </section>

      <section className="py-20 px-5 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <h1 className="text-40 font-[900] text-[#333]  mb-3">
                Our Product Range
              </h1>
              <p>
                Our testing instruments help you examine the constraints and are
                available in the following range...
              </p>
            </div>

            <button className="border rounded-full uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-7">
            {categories?.map((category, index) => (
              <CatCard
                key={index}
                image={category.image}
                title={category.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-dotPattern">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-7 gap-5">
            <div className="xl:block hidden" />
            <div className="xl:col-span-5 grid md:grid-cols-2 grid-cols-1 gap-10 ">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl">
                  Please take a moment to fill <br /> in the details and our
                  team shall <br />
                  get in touch with you.
                </h2>

                <p className="text-base text-gray-700">
                  Generally we respond within one working <br /> days.
                </p>

                <div className="w-28 h-1 bg-primaryColor rounded-full" />
                <div className="grid grid-cols-3 gap-3">
                  <Image
                    src={FirstLogo}
                    alt="firstLogo"
                    loading="lazy"
                    className="border rounded-md p-1 border-black"
                  />
                  <Image
                    src={SecLogo}
                    alt="firstLogo"
                    loading="lazy"
                    className="border rounded-md p-1 border-black"
                  />
                  <Image
                    src={ThirdLogo}
                    alt="firstLogo"
                    loading="lazy"
                    className="border rounded-md p-1 border-black"
                  />
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-5">
                <h4 className="text-xl text-center mb-3">Contact Us</h4>
                <input
                  type="text"
                  placeholder="Name"
                  className="contactInput"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="contactInput"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="contactInput"
                />
                <textarea
                  rows={3}
                  placeholder="Name"
                  className="contactInput !mb-1"
                />
                <button className="bg-primaryColor text-white w-full rounded-md py-2">
                  submit
                </button>
              </div>
            </div>
            <div className="xl:block hidden" />
          </div>
        </div>
      </section>

      <section className="pt-10 px-5">
        <div className="container mx-auto">
          <hr />

          <h2 className="text-40 font-[900] text-[#333]  mt-5">Why Presto ?</h2>
          <p>
            Because over 11,436 customers across the globe have put their faith
            in us and we have surpassed their expectations. And, because we
            ensure...
          </p>

          <div className="grid xl:grid-cols-7 grid-cols-1 gap-5 mt-16">
            <div className="xl:block hidden" />
            <div className="xl:col-span-5 grid xl:grid-cols-2 gap-10 ">
              {whyCardData.map((item, index) => (
                <WhyCard
                  key={index}
                  imageSrc={item.imageSrc}
                  altText={item.altText}
                  heading={item.heading}
                  description={item.description}
                />
              ))}
            </div>
            <div className="xl:block hidden" />
          </div>
        </div>
      </section>

      <section className="py-10 px-5">
        <div className="container mx-auto">
          <hr />
          <h3 className="mt-14 text-tertoryColor text-center text-2xl mb-7">
            Trusted by the brands you trust
          </h3>
          <div className="grid xl:grid-cols-8 grid-cols-3 ">
            {partnerLogoData.map((item) => (
              <div
                className="px-5 justify-center flex
              "
                key={item.id}
              >
                <Image src={item.image} alt="partner-logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-secondaryColor">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <h2 className="text-40 font-[900]   text-white">
                Catalogue 2023
              </h2>
              <p className="text-white capitalize">
                Our latest product catalogue cum company profile is now <br />
                available to download. Where should we send your FREE copy?
              </p>
              <div className="my-8 flex">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-full rounded-sm py-2 px-3 placeholder:text-gray-600 text-gray-600"
                />
                <button
                  type="button"
                  className="bg-primaryColor -ml-4 px-4 uppercase flex items-center gap-2 text-white font-bold"
                >
                  Download <MdOutlineArrowRightAlt size={30} />
                </button>
              </div>

              <p className="text-secondaryLightColor text-xs">
                VIEW IT ON YOUR MAC, PC, IPAD OR ANY SMARTPHONE WITH PDF VIEWER.
              </p>
            </div>
            <Image src={CatImg} alt="Catalogue" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="py-10 px-5">
        <div className="container mx-auto">
          <h2 className="text-40 font-[900]   text-[#333] mb-5 ">
            What Our Customers Think About Us
          </h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center grid-cols-1 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                title={testimonial.title}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-secondaryDark px-5 xl:px-0">
        <Image
          src={DirImg}
          alt="logo"
          className="xl:block hidden"
          loading="lazy"
        />

        <div className="container !py-5 mx-auto flex justify-end xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 ">
          <div className="bg-white xl:basis-[47%] flex flex-col  relative">
            <div className="p-5">
              <div className="flex justify-end items-end">
                <Image
                  src={Logo}
                  alt="logo"
                  width={150}
                  height={150}
                  loading="lazy"
                />
              </div>
              <p className="italic">
                PRESTO - Redefining the Art of Quality Testing
              </p>
              <p className="my-2">Dear friends,</p>

              <p className="my-5">
                Welcome to the world of Quality Testing Instruments.
              </p>
              <p>
                From a humble beginning in 1983, Presto Stantest Private Limited
                has become one of the leading Testing Instrument Manufacturers
                in the Indian Subcontinent. Besides having branches all across
                India, the company is proud to have a commendable global
                presence. <br />
                <br />
                Our long tradition of reaching our valued customers and
                providing them with the best & most economical solution is a
                rich legacy we have been carrying for more than 40 years.
                <br />
                <br />
                We, at Presto Stantest, present to you a unique fusion -
                advanced features and precision testing rolled into
                state-of-the-art testing solutions. Testing the quality of your
                products has never been easier. Make our experience, your
                advantage!
                <br />
                <br />
                Bests,
              </p>

              <div className="grid grid-cols-2">
                <div className="">
                  <Image src={FirstSign} alt="sign" />
                  <p className="mb-2">Mr. Vishal Malhotra</p>
                  <p className="text-gray-400 text-sm">
                    Managing Director, Presto Group
                  </p>
                </div>

                <div className="">
                  <Image src={SecSign} alt="sign" />
                  <p className="mb-2">Mr. Gaurav Malhotra</p>
                  <p className="text-gray-400 text-sm">CEO, Presto Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
