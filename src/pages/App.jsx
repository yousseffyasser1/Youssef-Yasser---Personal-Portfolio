import Navbar from "../components/Navbar";
import HeroMain from "../components/HeroMain";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

export default function App() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen text-white">
      <Navbar />
      <main>
        <HeroMain />
        <Hero />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </div>
  );
}
