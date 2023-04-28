import { getArticles } from "@/sanity/sanity-utils";
import React from "react";
import Card from "./Card";

const Cards = async () => {
  const articles = await getArticles();
  return (
    <div>
      <h2 className="text-3xl bg-black text-white text-center py-3 my-5">
        All Articles
      </h2>
      <div className="lg:grid-cols-3 lg:grid sm:flex sm:flex-col sm:place-items-center">
        {articles.map((article) => (
          <Card key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
