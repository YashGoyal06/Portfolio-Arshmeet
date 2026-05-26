import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Magnetic from "./Magnetic.jsx";

export default function AboutCollage() {
  const { scrollY } = useScroll();

  // Gentle parallax floats for the Polaroid layers
  const polaroid1Y = useTransform(scrollY, [300, 1600], [0, -36]);
  const polaroid2Y = useTransform(scrollY, [300, 1600], [0, 24]);

  // Cinematic scroll zoom inside the frames
  const imageScale = useTransform(scrollY, [300, 1800], [1.1, 1.0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#5A1E16] via-[#4A1812] to-[#2B1A14] px-6 py-20 md:py-28 flex items-center justify-center text-soft" id="designer">
      <div className="grain opacity-25" />
      
      {/* Split Grid Layout: Photos on Left, About Text on Right */}
      <div className="mx-auto w-full max-w-[1260px] grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center text-left relative z-10">
        
        {/* Left Column: Overlapping Polaroid & Film Strip - Expanded to fill screen height */}
        <Reveal className="relative w-full max-w-[440px] sm:max-w-[500px] h-[105vw] sm:h-[520px] md:h-[620px] select-none mx-auto md:mx-0">
          {/* Main Polaroid Frame (Square Photo, Taped at Top) - Now in Foreground (z-20) */}
          <motion.div 
            style={{ y: polaroid1Y, rotate: -10 }}
            className="absolute left-0 top-12 w-[68%] bg-[#FAF8F5] p-3.5 pb-12 shadow-polaroid border border-black/5 z-20"
            whileHover={{ rotate: -4, zIndex: 30, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Matte Tape Effect */}
            <div 
              style={{ transform: "rotate(1deg)" }}
              className="absolute -top-3 left-[28%] h-6.5 w-24 bg-beige/35 backdrop-blur-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border-t border-b border-cream/20" 
            />
            <div className="overflow-hidden w-full aspect-[1/1] rounded-sm">
              <motion.img 
                style={{ scale: imageScale }}
                src={images.aboutMain} 
                alt="Arshmeet main portrait" 
                className="w-full h-full object-cover grayscale-[10%]" 
              />
            </div>
            <div className="pinyon-script-regular text-center mt-3 text-red/60 text-2xl leading-none">arshmeet</div>
          </motion.div>

          {/* Overlapped Triple Photo Strip Frame (Tilted on top) - Now in Background (z-10) */}
          <motion.div 
            style={{ y: polaroid2Y, rotate: 14 }}
            className="absolute right-0 top-4 w-[43%] bg-[#FAF8F5] p-2.5 pb-8 shadow-polaroid border border-black/5 z-10 flex flex-col gap-2"
            whileHover={{ rotate: 8, zIndex: 30, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Matte Tape Effect */}
            <div 
              style={{ transform: "rotate(-3deg)" }}
              className="absolute -top-3 right-[20%] h-6 w-16 bg-beige/35 backdrop-blur-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] border-t border-b border-cream/20" 
            />
            
            {/* 3 booth-style vertical images with slight inner overflow container */}
            <div className="overflow-hidden w-full aspect-[4/5] rounded-sm">
              <motion.img 
                style={{ scale: imageScale }}
                src={images.aboutStrip} 
                alt="Booth snapshot 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="overflow-hidden w-full aspect-[4/5] rounded-sm">
              <motion.img 
                style={{ scale: imageScale }}
                src={images.aboutSmall} 
                alt="Booth snapshot 2" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="overflow-hidden w-full aspect-[4/5] rounded-sm">
              <motion.img 
                style={{ scale: imageScale }}
                src={images.workA} 
                alt="Booth snapshot 3" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="font-serif text-[8px] text-center mt-1 text-chocolate/50 tracking-[0.1em] uppercase leading-none">mood board</div>
          </motion.div>
        </Reveal>

        {/* Right Column: About Me Text Details */}
        <div className="flex flex-col items-start px-2 sm:px-4 md:px-0">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none text-cream">
              MEET <span className="pinyon-script-regular text-[1.15em] tracking-normal font-light lowercase text-beige">your</span> COACH
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-col gap-6 text-xs md:text-sm leading-7 tracking-[0.05em] text-soft/85">
            <p>
              Graphic Designer. Art Director. Brand Strategist. Here to help you step into your next level.
            </p>
            <p>
              After building multiple premium design systems without sacrificing depth or soul, Arshmeet discovered what most founders never learn:
            </p>
            <p className="font-serif italic text-beige text-base leading-relaxed md:text-lg">
              Success doesn't require noise — it requires alignment, strategy, and a visual world built for sustainability.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="inline-flex rounded-full bg-beige text-chocolate font-bold px-8 py-3.5 text-[9px] uppercase tracking-[0.24em] transition duration-300 hover:bg-cream hover:scale-[1.02] shadow-paper"
              >
                Meet Me
              </a>
            </Magnetic>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
