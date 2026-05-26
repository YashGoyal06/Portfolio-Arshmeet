import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import AboutCollage from "./components/AboutCollage.jsx";
import Featured from "./components/Featured.jsx";
import Testimonial from "./components/Testimonial.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <Nav setActiveProject={setActiveProject} />
      <main>
        <Hero />
        <Intro />
        <AboutCollage />
        <Featured />
        <Testimonial />
        <SelectedWork activeProject={activeProject} setActiveProject={setActiveProject} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
