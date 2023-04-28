import Footer from "@/components/Footer";
import "./globals.css";
import AppBarComponent from "@/components/AppBarComponent";

export const metadata = {
  title: "Next13-Sanity-Portfolio-Site",
  description: "Future. Business. Success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppBarComponent />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
