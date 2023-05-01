import Image from "next/image";
import React from "react";
import BernardBio from "../../../../assets/Bernard-bio.jpg";

function Newsletter() {
  return (
    <div className="md:flex md:flex-col-2 sm:flex-col-1 mt-7">
      <section className="md:w-1/3">
        <Image src={BernardBio} height={300} width={400} alt="newsletter pic" />
      </section>
      <section className="md:w-3/4 bg-gray-200 px-5 py-10">
        <div className="flex-col-1">
          <h1 className="text-xl font-semibold mb-3">Stay up-to-date</h1>
          <ul className="list-disc ml-5">
            <li>Get updates straight to your inbox</li>
            <li>Join my 1 million newsletter subscribers</li>
            <li>Never miss any new content</li>
          </ul>
          <div className="flex-col flex lg:justify-around lg:flex-row mt-3">
            <input className="py-5 px-5" placeholder="Email" type="text" />
            <input className="py-5 px-5" placeholder="Name" type="text" />
            <button className="bg-[#c6ce00] text-white px-7">Sign-up</button>
          </div>
          <div className="flex flex-row mt-3">
            <input type="checkbox" />
            <p className="ml-5">
              I have read and agree to your terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
