import Articles from "@/components/Articles";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import YouTube from "@/components/Youtube";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <YouTube />
      {/* @ts-expect-error Async Server Component */}
      <Articles />
    </div>
  );
}
