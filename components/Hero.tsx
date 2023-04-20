import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-red-600">
      <div className="flex">
        <div className="z-10 bg-yellow-500 w-1/2 h-100 h-1/2 mt-20 ml-10 -mr-10 px-10 py-10">
          <h3 className="text-white text-5xl py-5">Influencer</h3>
          <p className="text-white text-lg">
            Bernard Marr is one of the world&apos;s most successful social media
            influencers at the intersection of business and technology
          </p>
          <button className="bg-black text-white px-8 py-3 mt-5">
            VIEW MORE
          </button>
        </div>
        <Image
          className="md:w-3/4 md:block sm:hidden"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="Business man talking"
          width={700}
          height={100}
        />
      </div>
    </div>
  );
}
