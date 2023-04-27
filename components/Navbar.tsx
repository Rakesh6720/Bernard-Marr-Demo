import Link from "next/link";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center h-16">
        <Link href="/">
          <div className="">
            <h1 className="text-black w-80 text-2xl">Bernard Marr & Co.</h1>
            <h3 className="text-md leading-3">Future . Business . Success</h3>
          </div>
        </Link>
        {children}
      </div>
    </>
  );
}
