import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import AboutCollage from "./components/AboutCollage.jsx";
import Featured from "./components/Featured.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Experience from "./components/Experience.jsx";
import BrandWorksTeaser from "./components/BrandWorksTeaser.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const isBrandWorksPage = window.location.pathname.replace(/\/$/, "") === "/brand-works";

  if (isBrandWorksPage) {
    return (
      <>
        <Nav />
        <main>
          <BrandWorksTeaser />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <AboutCollage />
        <Featured />
        <Testimonial />
        <Experience />
        <Services />
        <Process />
      </main>
      <Footer />
    </>
  );
}
