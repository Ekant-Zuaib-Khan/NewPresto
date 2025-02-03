import Image, { StaticImageData } from "next/image";
import React from "react";
import { PiArrowRightFill } from "react-icons/pi";

interface CatCardProps {
  image: StaticImageData | string;
  title: string;
}

const CatCard: React.FC<CatCardProps> = ({ image, title }) => {
  return (
    <div className="bg-white shadow-md">
        
      <div className="relative w-full xl:h-56 h-36">
        <Image
          src={image}
          alt={title}
          loading="lazy"
          width={400}
          height={400}
          className="mx-auto block object-cover" 
          
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between text-tertoryColor mb-5">
          <h3 className="text-tertoryColor">{title}</h3>
          <PiArrowRightFill />
        </div>

        <button className="border rounded-full mx-auto block uppercase px-4 py-2 text-sm border-secondaryColor text-secondaryColor">
          Click for details
        </button>
      </div>
    </div>
  );
};

export default CatCard;
