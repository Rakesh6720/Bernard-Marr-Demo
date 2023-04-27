import "./globals.css";
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
      <body>
        <AppBarComponent />
        {children}
      </body>
    </html>
  );
}
