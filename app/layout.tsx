import NavBar from "@/components/Navbar";
import "./globals.css";
import Navigation from "@/components/Navigaton";
import AppBarComponent from "@/components/AppBarComponent";

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
      <body className="bg-[#ffffff]">
        {/* <NavBar>
          <Navigation />
        </NavBar> */}
        <AppBarComponent />
        {children}
      </body>
    </html>
  );
}
