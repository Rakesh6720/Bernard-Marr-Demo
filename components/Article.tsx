import { PortableText } from "@portabletext/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "sanity";

type Props = {
  id: string;
  createdAt: Date;
  title: string;
  slug: string;
  image: string;

  content: PortableTextBlock[];
};

export default function Article({
  id,
  createdAt,
  title,
  slug,
  image,
  content,
}: Props) {
  const excerpt = content.splice(0, 1);
  return (
    <div className="flex-col w-96 h-600px border border-black">
      <Link href={`/articles/${slug}`}>
        <Image src={image} alt={title} width={400} height={300} />
        <div className="p-5">
          <h1 className="text-2xl mb-2 text-[#c6ce00] font-semibold">
            {title}
          </h1>

          <PortableText value={excerpt} />

          <div className="bg-[#c6ce00] relative ml-60 py-3 mt-5">
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
      </Link>
    </div>
  );
}
