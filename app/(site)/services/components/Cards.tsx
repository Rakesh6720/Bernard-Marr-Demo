import React from "react";
import Card from "./Card";
let data = require("../data/data.json");

interface Object {
  title: string;
  text: string;
  image: string;
}
function Cards() {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10">
      {data.map((object: Object, index: number) => (
        <Card
          key={index}
          title={object.title}
          text={object.text}
          image={object.image}
        />
      ))}
      {data.map((object: Object, index: number) => {
        console.log(object.image);
      })}
    </div>
  );
}

export default Cards;
