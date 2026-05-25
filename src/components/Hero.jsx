import { motion, useScroll, useTransform } from "framer-motion";
import heroCutout from "../assets/arshmeet-professional-hero-cutout.png";
import LuxuryButton from "./LuxuryButton.jsx";

export default function Hero() {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, 42]);
  const titleY = useTransform(scrollY, [0, 800], [0, -24]);
  const titleScale = useTransform(scrollY, [0, 800], [1, 1.035]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-cream px-2 py-2 text-ink">
      <div className="grain" />
      <div className="relative min-h-[calc(100vh-16px)] overflow-hidden rounded-[18px] border-[5px] border-ink bg-cream shadow-[0_24px_70px_rgba(59,43,40,0.2)]">
        <motion.div
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_22%,rgba(217,199,184,0.42),transparent_28%),linear-gradient(110deg,transparent_0%,rgba(246,240,232,0.32)_45%,transparent_68%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="cinematic-sweep absolute inset-y-0 -left-1/2 z-[1] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <motion.h1
          style={{ y: titleY, scale: titleScale }}
          className="absolute inset-x-0 top-[18%] z-0 mx-auto max-w-[1280px] px-5 text-center font-display text-[clamp(3rem,14vw,6.4rem)] font-bold uppercase leading-none text-red/95 md:top-[11%] md:px-10 md:text-[clamp(5.8rem,11vw,12.6rem)]"
          initial={{ opacity: 0, y: -18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative inline-block pl-[0.08em] tracking-[0.075em]">
            <motion.span
              className="pinyon-script-regular absolute left-[0.14em] top-[-0.38em] z-10 text-[0.18em] normal-case tracking-normal text-brown/90 md:text-[0.2em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Meet
            </motion.span>
            Arshmeet
          </span>
        </motion.h1>

        <motion.div
          className="absolute left-[6%] top-[37%] z-10 hidden w-[250px] text-left text-brown lg:block xl:left-[8.5%]"
          initial={{ opacity: 0, x: -34, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.34em] text-red">Brand Identity</p>
          <p className="font-serif text-[1.65rem] font-medium uppercase leading-[0.96] tracking-[0.065em] xl:text-[2.15rem]">
            Graphic
            <span className="block">Designer</span>
            <span className="block">For</span>
            <span className="block">Expressive</span>
            <span className="block">Brands</span>
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-16 bg-brown/24" />
            <span className="font-serif text-3xl italic leading-none text-brown/42">↝</span>
          </div>
          <p className="mt-5 max-w-[185px] text-[9px] font-semibold uppercase leading-5 tracking-[0.24em] text-brown/52">
            Visual systems with editorial emotion
          </p>
        </motion.div>

        <motion.div
          className="absolute right-[6%] top-[38%] z-10 hidden w-[245px] text-right text-brown lg:block xl:right-[8.5%]"
          initial={{ opacity: 0, x: 34, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.34em] text-red">Editorial Studio</p>
          <p className="font-serif text-[1.65rem] font-medium uppercase leading-[0.98] tracking-[0.07em] xl:text-[2.15rem]">
            Luxury
            <span className="block">Visuals</span>
            <span className="block">With Soul</span>
          </p>
          <div className="ml-auto mt-6 flex items-center justify-end gap-4">
            <span className="font-serif text-3xl italic leading-none text-brown/42">↜</span>
            <span className="h-px w-16 bg-brown/24" />
          </div>
          <p className="ml-auto mt-5 max-w-[175px] text-[9px] font-semibold uppercase leading-5 tracking-[0.24em] text-brown/52">
            Cinematic direction for modern brands
          </p>
        </motion.div>

        <motion.div
          className="absolute left-[31%] top-[56%] z-10 hidden font-serif text-4xl italic text-brown/24 xl:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.18, 0.38, 0.18], y: [0, -8, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        >
          ⌁
        </motion.div>
        <motion.div
          className="absolute right-[31%] top-[55%] z-10 hidden font-serif text-4xl italic text-brown/24 xl:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.16, 0.34, 0.16], y: [0, 7, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.35 }}
        >
          ⌁
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          className="absolute inset-x-0 bottom-[7vh] z-[5] mx-auto flex h-[72vh] max-w-[540px] items-end justify-center overflow-visible md:bottom-[2vh] md:h-[84vh] md:max-w-[880px] lg:bottom-[1vh] lg:h-[88vh] lg:max-w-[980px]"
          initial={{ opacity: 0, y: 54, scale: 0.965, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={heroCutout}
            alt="Generated editorial portrait cutout of Arshmeet"
            className="max-h-full w-auto max-w-[118%] scale-[1.08] object-contain object-bottom drop-shadow-[0_26px_38px_rgba(59,43,40,0.22)] md:max-w-[132%] md:scale-[1.15] lg:max-w-[138%] lg:scale-[1.2]"
          />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 z-[6] h-[16vh] bg-red"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-[4.7vh] z-20 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <LuxuryButton dark>Work With Me</LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}
