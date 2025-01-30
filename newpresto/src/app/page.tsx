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
import HighlyIcon from "../assets/images/team.jpg"

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
    description: "We are National Quality Award winners from the Government of India. All our products are unmatched in quality and design.",
  },
  {
    imageSrc: CostIcon,
    altText: "High Quality 2",
    heading: "Cost Benefit",
    description: "All our Products are manufactured in our 2 state of the art factories. They are standardised using CNC machines to provide long term cost benifits to customers.",
  },
  {
    imageSrc: ExpertiseIcon,
    altText: "Expertise & Adaptability",
    heading: "Expertise & Adaptability",
    description: "40+ years of experience in providing testing solutions to the world.",
  },

  {
    imageSrc: HighlyIcon,
    altText: "Expertise & Adaptability",
    heading: "Highly Motivated Team",
    description: "180+ Team members to provide best services PAN India and globally.",
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
        />
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <h1 className="text-4xl font-bold mb-3">Our Product Range</h1>
              <p>
                Our testing instruments help you examine the constraints and are
                available in the following range...
              </p>
            </div>

            <button className="border rounded-full uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-7">
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

      <section className="py-20 bg-dotPattern">
        <div className="container mx-auto">
          <div className="grid grid-cols-7 gap-5">
            <div />
            <div className="col-span-5 grid grid-cols-2 gap-10 ">
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
            <div />
          </div>
        </div>
      </section>
 

      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-3">Why Presto ?</h1>
          <p >
            Because over 11,436 customers across the globe have put their faith
            in us and we have surpassed their expectations. And, because we
            ensure...
          </p>

          <div className="grid grid-cols-7 gap-5 mt-16">
            <div />
            <div className="col-span-5 grid grid-cols-2 gap-10 ">
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
            <div />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-tertoryColor text-center text-xl">Trusted by the brands you trust</h3>
        </div>
      </section>
    </>
  );
}
