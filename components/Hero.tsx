import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex">
      <div className="lg:z-10 bg-[#c6ce00] lg:w-3/4 lg:-mr-20 p-10 lg:my-auto lg:flex-col lg:justify-center">
        <h3 className="text-white text-5xl py-5">Influencer</h3>
        <p className="text-white text-lg">
          Bernard Marr is one of the world&apos;s most successful social media
          influencers at the intersection of business and technology
        </p>
        <button className="bg-black text-white px-8 py-3 mt-5">
          <Link href="/services">VIEW MORE</Link>
        </button>
      </div>
      <Image
        className="hidden lg:block lg:w-3/4 grayscale"
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="Business man talking"
        width={700}
        height={100}
      />
    </div>
  );
}
