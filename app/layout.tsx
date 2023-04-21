import NavBar from "@/components/Navbar";
import "./globals.css";

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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
