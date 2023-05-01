import { getArticle, getService } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { service: string };
};

export default async function Service({ params }: Props) {
  const slug = params.service;
  const service = await getService(slug);

  return (
    <div className="mx-5">
      <header>
        <h1 className="text-5xl my-5">{service.title}</h1>
      </header>
      <hr />
      <main>
        <Image
          src={service.image}
          alt={service.title}
          width={1200}
          height={100}
          className="my-3"
        />
        <PortableText value={service.content} />
      </main>
    </div>
  );
}
