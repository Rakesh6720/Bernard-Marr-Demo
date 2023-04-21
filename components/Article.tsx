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
  return (
    <div className="flex-col w-96 h-600px border border-black">
      <Link href={`/articles/${slug}`}>
        <Image src={image} alt={title} width={400} height={300} />
        <div className="p-5">
          <h1 className="text-xl">
            The Evolution of AI: Transforming The World One Algorithm At a Time
          </h1>
          <p>
            The field of artificial intelligence (AI) has come a long way since
            its inception, evolving from the realm of science fiction into an
            increasingly indispensable technology that&apos;s transforming
            industries and lives worldwide.[...]
          </p>
          <div className="bg-[#c6ce00] relative ml-60 py-3 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
