import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import finalHeroImg from "../assets/arshmeet-hero-cutout.png";
import Reveal from "./Reveal.jsx";
import Magnetic from "./Magnetic.jsx";

export default function FinalCTA() {
  const containerRef = useRef(null);

  // Scroll parallax for the crop window frame
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 0.98]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-burgundy px-6 py-16 text-center text-cream md:py-20"
    >
      <div className="grain opacity-20" />
      
      {/* Wood panel dividers matching the Hero styling */}
      <div className="absolute inset-0 flex justify-around pointer-events-none select-none z-0">
        <div className="h-full w-px bg-black/10" />
        <div className="h-full w-px bg-black/10" />
        <div className="h-full w-px bg-black/10" />
        <div className="h-full w-px bg-black/10" />
        <div className="h-full w-px bg-black/10" />
      </div>

      <div className="mx-auto max-w-[1100px] relative z-10 flex flex-col items-center">
        {/* Compact Framed Cutout Image (Blends with burgundy) */}
        <Reveal className="relative mx-auto mb-10 overflow-hidden rounded-[18px] border-[4px] border-beige/25 bg-chocolate w-full max-w-lg aspect-[16/10] shadow-editorial">
          <motion.img
            style={{ scale: imgScale, y: imgY }}
            src={finalHeroImg}
            alt="Arshmeet cinematic transparent portrait"
            className="h-full w-full object-cover object-[center_28%] filter brightness-[0.9] contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </Reveal>

        {/* Proportioned Typography */}
        <div className="text-center">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-4xl font-light uppercase leading-[1.1] tracking-[0.16em] text-cream">
              BUILD <span className="font-serif text-beige/40 font-light">·</span> BREATHE <span className="font-serif text-beige/40 font-light">·</span> GROW
            </h2>
          </Reveal>
          
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-md font-sans text-[9px] font-semibold uppercase leading-5 tracking-[0.24em] text-beige/70">
              CREATING LUXURY VISUAL SYSTEMS WITH SOUL, CHARACTER, AND EDITORIAL DIRECTION FOR VISIONARY BRANDS.
            </p>
          </Reveal>

          {/* Action Button: Connects to Instagram */}
          <Reveal delay={0.2} className="mt-8">
            <Magnetic strength={0.2}>
              <a
                href="https://instagram.com/arshdesigns.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-[240px] items-center justify-center gap-3 rounded-full border border-beige bg-cream px-7 py-3 text-[9px] font-bold uppercase tracking-[0.22em] text-chocolate transition duration-500 hover:bg-transparent hover:text-cream hover:border-cream shadow-editorial"
              >
                Let's Work Together
                <span className="transition duration-500 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
