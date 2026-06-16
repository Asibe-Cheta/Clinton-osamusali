import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import About from "@/components/About";
import PhotoPreview from "@/components/PhotoPreview";
import Videos from "@/components/Videos";
import Press from "@/components/Press";
import Shows from "@/components/Shows";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Music />
      <About />
      <PhotoPreview />
      <Videos />
      <Press />
      <Shows />
      <Gallery />
      <Footer />
    </main>
  );
}
