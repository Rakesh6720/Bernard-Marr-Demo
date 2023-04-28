"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const data = [
  {
    id: 1,
    title: "Influencer",
    text: "Bernard Marr is one of the world&apos;s most successful social media influencers at the intersection of business and technology",
  },
  {
    id: 2,
    title: "Keynote Speaker",
    text: "Bernard Marr is a popular keynote choice because of his vast practical experience with many of the world's best known companies and governments",
  },
  {
    id: 3,
    title: "Board Advisor",
    text: "Bernard Marr regularly advises boards and executive teams of many of the most successful companies and government organisations in the world",
  },
];

const HeroModal = () => {
  const [index, setIndex] = useState<number>(0);

  const onRightClickHandler = () => {
    if (index == data.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  const onLeftClickHandler = () => {
    if (index == 0) {
      setIndex(2);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <div className="lg:z-10 bg-[#c6ce00] lg:w-3/4 lg:-mr-20 p-10 lg:my-auto lg:flex-col lg:justify-center">
        <h3 className="text-white text-5xl py-5">{data[index].title}</h3>
        <p className="text-white text-lg">{data[index].text}</p>
        <button className="bg-black text-white px-8 py-3 mt-5 mb-5">
          <Link href="/services">VIEW MORE</Link>
        </button>
        <div className="flex bg-black h-8 w-full justify-between -mb-10">
          <button className="text-white px-10" onClick={onLeftClickHandler}>
            <IoIosArrowBack />
          </button>
          <button className="text-white px-10" onClick={onRightClickHandler}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroModal;
