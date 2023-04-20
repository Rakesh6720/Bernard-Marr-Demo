import Articles from "@/components/Articles";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import YouTube from "@/components/Youtube";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <YouTube />
      {/* @ts-expect-error Async Server Component */}
      <Articles />
      <Clients />
    </div>
  );
}
