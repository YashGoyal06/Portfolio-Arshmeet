import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-cream px-6 py-10 text-ink border-t border-brown/15">
      <div className="grain opacity-20" />
      
      <div className="relative mx-auto max-w-[1260px] flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
        {/* Left Side: Minimal Branding */}
        <Reveal>
          <div>
            <h2 className="font-serif text-lg font-light uppercase tracking-[0.14em] text-red leading-none mb-1">
              ARSHMEET
            </h2>
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-brown/50">
              Graphic Design & Editorial Art Direction
            </p>
          </div>
        </Reveal>

        {/* Right Side: Horizontal Navigation & Social Links */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-brown/70">
            <a href="#home" className="hover:text-red transition">Home</a>
            <a href="#about" className="hover:text-red transition">About</a>
            <a href="#projects" className="hover:text-red transition">Portfolio</a>
            <a href="https://instagram.com/arshdesigns.in" target="_blank" rel="noopener noreferrer" className="hover:text-red transition">Instagram</a>
            <a href="mailto:hello@arshmeet.design" className="hover:text-red transition lowercase tracking-normal text-[10px] font-medium">hello@arshmeet.design</a>
          </div>
        </Reveal>
      </div>

      {/* Understated Copyright line */}
      <div className="relative mx-auto max-w-[1260px] mt-6 border-t border-brown/10 pt-4 flex flex-col sm:flex-row sm:justify-between gap-2.5 text-center text-[7.5px] font-bold uppercase tracking-widest text-brown/40">
        <Reveal delay={0.15}>
          <span>© {new Date().getFullYear()} Arshmeet. All Rights Reserved.</span>
        </Reveal>
        <Reveal delay={0.2}>
          <span>Visual systems for expressive brands.</span>
        </Reveal>
      </div>
    </footer>
  );
}
