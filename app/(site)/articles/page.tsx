import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function Articles() {
  return (
    <div>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Cards />
    </div>
  );
}

export default Articles;
