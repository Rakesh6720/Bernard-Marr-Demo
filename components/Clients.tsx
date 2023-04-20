import React from "react";
import Client from "./Client";
import GoogleImage from "../assets/Google-Slider.png";
import AdobeImage from "../assets/adobe-slider.png";
import AmazonImage from "../assets/amazon-slider.png";
import BarclaysImage from "../assets/barclays-slider.png";
import BpImage from "../assets/bp-slider.png";

const Clients = () => {
  return (
    <div className="flex-col mt-10 mb-5 mx-5">
      <div className="bg-black text-white h-16 justify-center flex items-center text-2xl">
        Clients
      </div>
      <div className="flex justify-between my-5">
        <Client image={GoogleImage} width={145} height={35} />
        <Client image={AdobeImage} width={35} height={35} />
        <Client image={AmazonImage} width={145} height={35} />
        <Client image={BarclaysImage} width={145} height={35} />
        <Client image={BpImage} width={35} height={35} />
      </div>
    </div>
  );
};

export default Clients;
