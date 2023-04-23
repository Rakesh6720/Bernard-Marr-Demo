import NavBar from "@/components/Navbar";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "Bernard Marr & Co",
  description: "Future. Business. Success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] m-10">
        <NavBar>
          <SearchBar />
          <NavMenu />
        </NavBar>
        {children}
      </body>
    </html>
  );
}
