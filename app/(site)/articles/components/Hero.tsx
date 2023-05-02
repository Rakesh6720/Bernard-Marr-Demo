import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex">
      <div className="z-10 bg-slate-700 lg:w-3/4 -mr-20 p-10 lg:my-auto lg:flex-col lg:justify-center">
        <h3 className="text-white text-5xl py-5">Articles</h3>
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
