import Article from "./Article";
import { getArticles } from "@/sanity/sanity-utils";

export default async function Articles() {
  const articles = await getArticles();
  return (
    <div className="flex-col mt-10 mb-5 mx-5">
      <div className="bg-black text-white h-16 justify-center flex items-center text-2xl">
        Recent Articles
      </div>
      <div className="flex justify-between my-5">
        {articles.map((article) => (
          <Article
            key={article._id}
            id={article._id}
            createdAt={article._createdAt}
            title={article.title}
            slug={article.slug}
            image={article.image}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
}
