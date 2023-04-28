import React from "react";
import Image from "next/image";

function Card({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div className="w-[425px] border flex-col-1 mb-5">
      <Image src={image} alt={title} width={500} height={300} />
      <h1 className="text-[#c6ce00] text-xl font-semibold mt-5">{title}</h1>
      <p className="leading-6 mt-5">{text}</p>
      <div className="bg-[#c6ce00] relative ml-60 py-3 mt-5 mb-5 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
