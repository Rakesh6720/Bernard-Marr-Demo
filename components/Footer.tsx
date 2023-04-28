import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between border-t-2 border-black mt-5">
      <div className="py-5 px-5">
        <div className="flex-col ">
          <div className="py-3">
            &copy; Bernard Marr {new Date().getFullYear()}
          </div>
          <div className="py-3">
            Web, SEO & Social Media by 123 Internet Group
          </div>
        </div>
      </div>
      <div className="py-5 px-5">
        <div className="py-3">Terms & Conditions</div>
        <div className="py-3">Privacy Policy</div>
      </div>
      <div className="py-10">
        <h1 className="text-black w-80 text-2xl">Bernard Marr & Co.</h1>
        <h3 className="text-md leading-3 text-black">
          Future . Business . Success
        </h3>
      </div>
    </div>
  );
};

export default Footer;
