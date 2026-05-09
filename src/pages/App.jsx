import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroMain from "../components/HeroMain";
// import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import AllProjects from "../components/AllProjects";

// ── Home page (all your existing sections) ──
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroMain />
        {/* <Hero /> */}
        <Experience />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </>
  );
}

// ── Root app with router ──
export default function App() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}