import React from "react";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Newsletter from "./components/Newsletter";

function About() {
  return (
    <div>
      <Hero />
      <div className="mt-5">
        <section className="bg-black text-white h-16 justify-center flex items-center text-2xl mb-3">
          Amit Manghani, Brief Overview...
        </section>
        <Bio />
        <section>
          <article className="m-3">
            Amit Manghani was born near Hamburg in Germany, where he grew up. He
            then moved to Cambridge, England to complete his degrees in
            business, engineering and information technology. He then joined the
            Cambridge Judge Business School as a research fellow and later
            Cranfield School of Management. In 2006, Bernard left the business
            school world to focus on his own company Amit Manghani & Co.
            <br></br>
            <br></br>
            Today, Amit Manghani is one of the world’s most highly respected
            experts when it comes to future trends, strategy, business
            performance, digital transformation and the intelligent use of data
            and AI in business. In that capacity he has worked with and advised
            many of the world’s best-known organisations including Amazon,
            Google, Microsoft, Astra Zeneca, The Bank of England, BP, NVIDIA,
            Cisco, DHL, IBM, HPE, Ericsson, Jaguar Land Rover, Mars, The
            Ministry of Defence, NATO, The Home Office, NHS, Oracle, T-Mobile,
            Toyota, The Royal Air Force, Shell, The United Nations, Walgreens
            Alliance Boots, Walmart, among many others.
            <br></br>
            <br></br>
            He is the author of 20 books and hundreds of high profile reports
            and articles, including the international best-sellers ‘Business
            Trends in Practice’, ’Tech Trends in Practice’, ‘The Intelligence
            Revolution’, ‘Artificial Intelligence in Practice’, ‘Data Strategy’,
            ‘Extended Reality in Practice‘, ‘Big Data in Practice’, ‘Big Data‘,
            ‘Key Business Analytics‘, ‘Key Performance Indicators’, ‘The
            Intelligent Company’, ‘Managing and Delivering Performance’ and
            ‘Strategic Performance Management’. His books have been translated
            into over 20 languages and have earned numerous Amazon No 1
            bestselling positions, won the 2022 Business Book of the Year award,
            the CMI Management Book of the Year award, the Axiom book award and
            the WHSmith best business book award.
            <br></br>
            <br></br>
            Bernard is a major social media influencer with over 2 million
            social media followers, over 1.2 million newsletter subscribers, his
            popular content website, podcast, and regular Forbes column. He is
            generally seen as one of the world’s top business and technology
            influencers. Beyond that, his expert comments also regularly feature
            on TV and radio (e.g., BBC News, Sky News, and BBC World) as well as
            in high-profile publications such as The Times, The Guardian, The
            Financial Times, the CFO Magazine and the Wall Street Journal.
            <br></br>
            <br></br>
            Today, Bernard also enjoys teaching for Oxford University, Warwick
            Business School, the Irish Management Institute, and ICAEW. On top
            of that, Bernard serves as a non-executive director on the board of
            businesses.
            <br></br>
            <br></br>
            Away from his professional life, Bernard’s priority is being a good
            husband to his wife Claire and father to his three children Sophia,
            James, and Oliver. Together with them and their dog Millie, he lives
            in Milton Keynes, just north of London, England.
          </article>
        </section>
        <section>
          <Newsletter />
        </section>
      </div>
    </div>
  );
}

export default About;
