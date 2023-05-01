import { getArticle } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { article: string };
};

export default async function Article({ params }: Props) {
  const slug = params.article;
  const article = await getArticle(slug);
  const date = `${new Date(article._createdAt).getMonth()}/${new Date(
    article._createdAt
  ).getDate()}/${new Date(article._createdAt).getFullYear()}`;

  return (
    <div className="mx-5">
      <header>
        <h1 className="text-5xl my-5">{article.title}</h1>
        <h3 className="my-3">{date}</h3>
      </header>
      <hr />
      <main>
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={100}
          className="my-3"
        />
        <PortableText value={article.content} />
      </main>
    </div>
  );
}
