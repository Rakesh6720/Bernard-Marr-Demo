import React from "react";
import { Article } from "@/types/Article";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface Props {
  article: Article;
}

const Card = ({ article }: Props) => {
  const excerpt = article.content.slice(0, 1);

  return (
    <div className="flex-col w-[435px] border-slate-400 border my-5 justify-center items-center">
      <div id="image">
        <Image
          src={article.image}
          alt={article.title}
          width={435}
          height={300}
        />
      </div>
      <div className="p-5">
        <div id="title" className="text-slate-700 font-semibold text-2xl">
          {article.title}
        </div>
        <div id="summary" className="">
          <PortableText value={excerpt} />
        </div>
        <div
          id="view-article"
          className="bg-slate-700 text-center rounded-sm text-white"
        >
          <Link href={`/articles/${article.slug}`}>View Article</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
