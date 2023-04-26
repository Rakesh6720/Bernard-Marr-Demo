import Image from "next/image";
import BernardBio from "../../../../assets/Bernard-bio.jpg";
import React from "react";

function Bio() {
  return (
    <>
      <div className="flex flex-col-2 mt-7">
        <section className="w-1/3">
          <Image
            src={BernardBio}
            height={462}
            width={534}
            alt="bio pic"
            className="mx-auto"
          />
        </section>
        <section className="bg-gray-200 w-3/4 my-auto">
          <p className="py-10 px-20">
            Bernard Marr is a world-renowned futurist, influencer and thought
            leader in the fields of business and technology, with a passion for
            using technology for the good of humanity. He is a best-selling
            author of 21 books, writes a regular column for Forbes and advises
            and coaches many of the world’s best-known organisations.
            <br></br>
            <br></br>
            He has over 2 million social media followers, over 1.2 million
            newsletter subscribers and was ranked by LinkedIn as one of the top
            5 business influencers in the world and the No 1 influencer in the
            UK.
          </p>
        </section>
      </div>
      
    </>
  );
}

export default Bio;
