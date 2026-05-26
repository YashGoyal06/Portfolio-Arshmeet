import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 text-center text-ink md:py-36" id="about">
      <div className="grain opacity-30" />
      
      {/* 3-Column Horizontal Row on Desktop, Stacked on Mobile */}
      <div className="mx-auto max-w-[1260px] grid items-center gap-12 md:grid-cols-[1fr_2fr_1fr] relative z-10">
        
        {/* Left Column: Vintage Telephone Vector */}
        <div className="flex justify-center md:justify-start">
          <Reveal>
            <svg 
              className="text-red/80 filter drop-shadow-sm transition-transform duration-300 hover:rotate-3" 
              width="100" 
              height="100" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2"
            >
              {/* Telephone base */}
              <path d="M25 65 C 25 50, 75 50, 75 65 C 75 82, 25 82, 25 65 Z" strokeLinejoin="round" />
              {/* Rotary Dial */}
              <circle cx="50" cy="66" r="10" />
              <circle cx="50" cy="66" r="3" fill="currentColor" />
              {/* Dial holes */}
              <circle cx="50" cy="59" r="1.5" fill="currentColor" />
              <circle cx="57" cy="62" r="1.5" fill="currentColor" />
              <circle cx="57" cy="69" r="1.5" fill="currentColor" />
              <circle cx="50" cy="73" r="1.5" fill="currentColor" />
              <circle cx="43" cy="70" r="1.5" fill="currentColor" />
              <circle cx="43" cy="62" r="1.5" fill="currentColor" />
              {/* Receiver cradle */}
              <path d="M42 50 L 42 44 M 58 44 L 58 50" />
              <path d="M37 44 L 47 44 M 53 44 L 63 44" />
              {/* Receiver handle */}
              <path d="M22 36 C 32 28, 68 28, 78 36" strokeWidth="1.8" />
              <path d="M18 32 L 26 39 M 74 39 L 82 32" strokeWidth="1.8" />
              {/* Cord */}
              <path d="M23 72 C 14 75, 12 69, 14 61" strokeWidth="0.8" strokeDasharray="3,3" />
            </svg>
          </Reveal>
        </div>

        {/* Center Column: Centered Luxury Typography & Script */}
        <div className="flex flex-col items-center">
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

        {/* Right Column: Decorative Vinyl Record */}
        <div className="flex justify-center md:justify-end">
          <Reveal delay={0.4}>
            <motion.div
              className="relative h-36 w-36 rounded-full bg-chocolate border-[4px] border-beige flex items-center justify-center shadow-editorial"
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
