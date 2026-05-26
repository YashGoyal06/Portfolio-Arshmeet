import { motion, useScroll, useTransform } from "framer-motion";
import heroCutoutWebp from "../assets/arshmeet-professional-hero-cutout.webp";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax subtle translations
  const imageY = useTransform(scrollY, [0, 800], [0, 50]);
  const textY = useTransform(scrollY, [0, 800], [0, -30]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-[#4A1812] px-6 text-cream flex items-end justify-center"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px)",
        backgroundSize: "80px 100%"
      }}
    >
      <div className="grain opacity-20" />

      {/* Vertical wood panels background helper */}
      <div className="absolute inset-0 flex justify-around pointer-events-none select-none z-0">
        <div className="h-full w-px bg-black/20" />
        <div className="h-full w-px bg-black/20" />
        <div className="h-full w-px bg-black/20" />
        <div className="h-full w-px bg-black/20" />
        <div className="h-full w-px bg-black/20" />
      </div>

      {/* Centered Transparent Cutout Image (Covering the center area, extending from bottom) */}
      <motion.div 
        style={{ y: imageY }}
        className="relative z-10 w-full max-w-[850px] h-[82vh] md:h-[86vh] flex items-end justify-center overflow-visible pointer-events-none select-none"
      >
        <img
          src={heroCutoutWebp}
          alt="Arshmeet fashion editorial cutout"
          className="max-h-full w-auto object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)] scale-[1.08] md:scale-[1.12]"
        />
        {/* Subtle shadow gradient overlay to blend bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-[10vh] bg-gradient-to-t from-[#4A1812] to-transparent" />
      </motion.div>


      {/* Typography Overlay (Directly over left side, overlapping cutout) */}
      <motion.div 
        style={{ y: textY }}
        className="absolute left-[5%] bottom-[18%] md:left-[8%] md:bottom-[22%] z-20 max-w-3xl text-left pointer-events-none select-none"
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <h1 className="font-serif text-[clamp(2.4rem,7vw,6.4rem)] font-light leading-[0.92] tracking-tight text-cream filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
          BUILD <span className="font-serif italic font-normal text-beige">the</span> LIFE &
          <span className="block mt-2">BUSINESS YOU'VE BEEN</span>
          <span className="pinyon-script-regular block mt-3.5 text-[0.88em] font-light lowercase text-beige/95 normal-case tracking-normal">Dreaming Of</span>
        </h1>
      </motion.div>

      {/* Let's Work Together Action Button (Bottom-left overlay) */}
      <motion.div
        className="absolute left-[5%] bottom-[8%] md:left-[8%] md:bottom-[10%] z-30 pointer-events-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <a
          href="https://instagram.com/arshdesigns.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-cream text-chocolate font-bold px-8 py-3.5 text-[9px] uppercase tracking-[0.24em] transition duration-300 hover:bg-beige hover:scale-[1.02] shadow-editorial"
        >
          Let's Work Together
        </a>
      </motion.div>
    </section>
  );
}
