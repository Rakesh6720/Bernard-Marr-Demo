import React from "react";
import Card from "./Card";
import { getServices } from "@/sanity/sanity-utils";
import { Service } from "@/types/Service";
let data = require("../data/data.json");

const Cards = async () => {
  const services = await getServices();
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10">
      {services.map((service: Service) => (
        <Card key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Cards;
