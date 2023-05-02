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
    text: "Amit Manghani is one of the world&apos;s most successful social media influencers at the intersection of business and technology",
  },
  {
    id: 2,
    title: "Keynote Speaker",
    text: "Amit Manghani is a popular keynote choice because of his vast practical experience with many of the world's best known companies and governments",
  },
  {
    id: 3,
    title: "Board Advisor",
    text: "Amit Manghani regularly advises boards and executive teams of many of the most successful companies and government organisations in the world",
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
    <div className="lg:bg-none bg-[url('https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] bg-cover relative lg:my-auto">
      <div className="bg-[#c6ce00] pb-10 px-5 w-3/4 mx-auto z-10 top-11 sm:relative lg:w-[700px] lg:h-[300px] lg:-mr-20 sm:ml-24 relative">
        <h3 className="text-white text-4xl py-5">{data[index].title}</h3>
        <p className="text-white text-md">{data[index].text}</p>
        <button className="bg-black text-white px-8 py-3 mt-5 mb-5">
          <Link href="/services">VIEW MORE</Link>
        </button>
        <div className="flex bg-black h-8 w-full justify-between z-10 top-10 relative">
          <button className="text-white px-10" onClick={onLeftClickHandler}>
            <IoIosArrowBack />
          </button>
          <button className="text-white px-10" onClick={onRightClickHandler}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
