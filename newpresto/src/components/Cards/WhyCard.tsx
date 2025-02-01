// components/HighQualityCard.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HighQualityCardProps {
  imageSrc: StaticImageData | string;
  altText: string;
  heading: string;
  description: string;
}

const WhyCard: React.FC<HighQualityCardProps> = ({ imageSrc, altText, heading, description }) => {
  return (
    <div className="flex gap-3 mb-5">
      <div className="w-30 h-30 rounded-full">
        <Image
          src={imageSrc}
          alt={altText}
          priority={true}
          className="w-full rounded-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="text-xl mb-2">{heading}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WhyCard;
