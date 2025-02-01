import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



interface TestimonialCardProps {
  title: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, content }) => {
  return (
    <div className="shadow border p-3 h-full relative ">
      <FaQuoteLeft size={25} className="text-primaryColor absolute top-3 left-3" />
      <div className="p-5 py-10">
        <h6 className="text-primaryColor font-medium mb-3 text-xl">{title}</h6>
        <p className="leading-7 text-gray-700 font-medium">{content}</p>
      </div>
      <div className="flex justify-end mt-auto absolute bottom-3 right-3">
        <FaQuoteRight size={25} className="text-primaryColor self-end" />
      </div>
    </div>
  );
};

export default TestimonialCard;
