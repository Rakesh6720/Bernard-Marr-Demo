import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center h-16">
      <Link href="/">
        <div className="">
          <h1 className="text-black w-80 text-2xl">Bernard Marr & Co.</h1>
          <h3 className="text-md leading-3">Future . Business . Success</h3>
        </div>
      </Link>
      <div className="space-x-6 inline-flex items-center ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <button className="cursor-pointer text-3xl">&#9776;</button>
      </div>
    </div>
  );
}
