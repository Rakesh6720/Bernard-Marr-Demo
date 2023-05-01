import React from "react";
import Image from "next/image";
import { Service } from "@/types/Service";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface Props {
  service: Service;
}

function Card({ service }: Props) {
  const excerpt = service.content.slice(0, 1);
  return (
    <div className="w-[425px] border flex-col-1 mb-5">
      <Image src={service.image} alt={service.title} width={500} height={300} />
      <h1 className="text-[#c6ce00] text-xl font-semibold mt-5">
        {service.title}
      </h1>
      <div id="summary" className="leading-6 mt-5">
        <PortableText value={excerpt} />
      </div>
      <div className="bg-[#c6ce00] relative ml-60 py-3 mt-5 mb-5 rounded">
        <Link href={`/services/${service.slug}`}>
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
        </Link>
      </div>
    </div>
  );
}

export default Card;
