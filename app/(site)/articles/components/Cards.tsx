import { getArticles } from "@/sanity/sanity-utils";
import React from "react";
import Card from "./Card";

const Cards = async () => {
  const articles = await getArticles();
  return (
    <div className="m-3">
      <h2 className="text-3xl bg-black text-white text-center py-3 my-5">
        All Articles
      </h2>
      <div className="grid grid-cols-3">
        {articles.map((article) => (
          <Card key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
