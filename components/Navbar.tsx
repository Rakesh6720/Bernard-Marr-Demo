import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center bg-pink-400 h-16">
      <Link href="/">
        <div className="ml-5">
          <h1 className="text-black w-80 text-2xl">Bernard Marr & Co.</h1>
          <h3 className="text-md leading-3">Future . Business . Success</h3>
        </div>
      </Link>
      <div className="space-x-12 inline-flex ml-auto mr-40">
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
        <button className="cursor-pointer">&#9776;</button>
        <select name="languages" id="languages" className="rounded-sm">
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
}
