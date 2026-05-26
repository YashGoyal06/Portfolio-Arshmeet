import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import vintageTelephone from "../assets/vintage-telephone.png";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 text-center text-ink md:py-36" id="about">
      <div className="grain opacity-30" />
      
      {/* 3-Column Horizontal Row on Desktop, Stacked on Mobile */}
      <div className="mx-auto max-w-[1040px] grid gap-6 md:gap-8 md:grid-cols-[1fr_2.8fr_1fr] items-stretch relative z-10">
        
        {/* Left Column: Enhanced Vintage Telephone Image - Aligned to side of "BUILD" */}
        <div className="flex justify-center md:justify-end items-start pt-2 md:pt-2 md:-mr-4 md:-mt-8">
          <Reveal>
            <motion.img 
              src={vintageTelephone} 
              alt="Vintage rotary telephone" 
              className="w-32 sm:w-36 md:w-40 h-auto object-contain filter drop-shadow-md select-none rotate-[-12deg]"
              whileHover={{ scale: 1.05, rotate: -8 }}
              transition={{ duration: 0.3 }}
            />
          </Reveal>
        </div>

        {/* Center Column: Centered Luxury Typography & Script */}
        <div className="flex flex-col items-center justify-center">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,4.2rem)] font-light leading-[1.04] tracking-tight text-red max-w-2xl">
              BUILD A 6-Figure BUSINESS IN 90 Days <span className="font-serif italic font-normal text-amber-900/60 block md:inline">– WITHOUT BURNOUT</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-7 tracking-[0.05em] text-brown/80 md:text-sm">
              I help ambitious women scale with clarity, confidence, and ease. No hustle. No overwhelm. Just a simple, strategic path to consistent income and a business that feels like freedom.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="pinyon-script-regular mt-6 text-4xl text-brown/70 italic">
              Let's start today
            </p>
          </Reveal>
        </div>

        {/* Right Column: Decorative Vinyl Record - Aligned to Bottom-Right */}
        <div className="flex justify-center md:justify-end items-end pb-6 md:pb-12 md:self-end">
          <Reveal delay={0.4}>
            <motion.div
              className="relative h-28 w-28 md:h-32 md:w-32 rounded-full bg-chocolate border-[4px] border-beige flex items-center justify-center shadow-editorial"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Vinyl Grooves */}
              <div className="absolute inset-1.5 rounded-full border border-cream/5" />
              <div className="absolute inset-3.5 rounded-full border border-cream/5" />
              <div className="absolute inset-6 rounded-full border border-cream/5" />
              <div className="absolute inset-9 rounded-full border border-cream/5" />
              <div className="absolute inset-12 rounded-full border border-cream/5" />
              
              {/* Center Label */}
              <div className="h-10 w-10 rounded-full bg-[#E5D5C0] border border-chocolate flex items-center justify-center shadow-inner">
                <div className="h-2 w-2 rounded-full bg-chocolate" />
              </div>
            </motion.div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
