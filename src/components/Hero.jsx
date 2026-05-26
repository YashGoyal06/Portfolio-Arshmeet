import { motion, useScroll, useTransform } from "framer-motion";
import heroCutoutWebp from "../assets/arshmeet-professional-hero-cutout.webp";
import Magnetic from "./Magnetic.jsx";

export default function Hero() {
  // Scroll parallax (Subtle translations on scroll)
  const { scrollY } = useScroll();
  const imageScrollY = useTransform(scrollY, [0, 800], [0, 50]);
  const textScrollY = useTransform(scrollY, [0, 800], [0, -30]);
  
  // Slide-up animation variants for cinematic loading
  const lineVariants = {
    hidden: { y: "115%" },
    visible: {
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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

      {/* Centered Transparent Cutout Image */}
      <motion.div 
        style={{ y: imageScrollY }}
        className="relative z-10 w-full max-w-[850px] h-[82vh] md:h-[86vh] flex items-end justify-center overflow-visible pointer-events-none select-none"
      >
        <img
          src={heroCutoutWebp}
          alt="Arshmeet fashion editorial cutout"
          className="max-h-full w-auto object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)] scale-[1.08] md:scale-[1.12] origin-bottom"
        />
      </motion.div>

      {/* Gradient overlay to blend bottom edge of cutout - positioned at the section level on top of the image */}
      <div className="absolute inset-x-0 bottom-0 h-[18vh] bg-gradient-to-t from-[#4A1812] via-[#4A1812]/90 to-transparent z-15 pointer-events-none" />

      {/* Typography Overlay & Action Button grouped inside single container to guarantee no overlap */}
      <motion.div 
        style={{ y: textScrollY }}
        className="absolute left-6 right-6 bottom-[6%] md:left-[8%] md:bottom-[10%] z-20 max-w-[92%] sm:max-w-xl md:max-w-3xl text-left pointer-events-none flex flex-col gap-6 md:gap-8"
      >
        {/* Subtle blur overlay on mobile so text is legible regardless of image overlap */}
        <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/15 opacity-100 backdrop-blur-[1px] md:hidden" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <h1 className="font-serif text-[clamp(1.9rem,6.5vw,5.5rem)] font-light leading-[0.94] tracking-tight text-cream filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden inline-block w-full">
              <motion.span variants={lineVariants} className="block">
                BUILD <span className="font-serif italic font-normal text-beige">the</span> LIFE &
              </motion.span>
            </div>
            <div className="overflow-hidden inline-block w-full mt-1 sm:mt-2">
              <motion.span variants={lineVariants} className="block">
                BUSINESS YOU'VE BEEN
              </motion.span>
            </div>
            <div className="inline-block w-full mt-2 sm:mt-3">
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="pinyon-script-regular block text-[0.88em] font-light lowercase text-beige/95 normal-case tracking-normal"
              >
                Dreaming Of
              </motion.span>
            </div>
          </h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.95, delay: 0.5 } }
            }}
            className="pointer-events-auto mt-6 md:mt-8 flex justify-start"
          >
            <Magnetic strength={0.2}>
              <a
                href="https://instagram.com/arshdesigns.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-cream text-chocolate font-bold px-8 py-3.5 text-[9px] uppercase tracking-[0.24em] transition duration-300 hover:bg-beige hover:scale-[1.02] shadow-editorial"
              >
                Let's Work Together
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

