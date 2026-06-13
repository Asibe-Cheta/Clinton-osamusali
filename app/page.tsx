import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Shows from "@/components/Shows";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Music />
      <About />
      <Videos />
      <Shows />
      <Footer />
    </main>
  );
}
