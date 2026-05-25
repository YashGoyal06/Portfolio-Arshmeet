import { images } from "../data/content.js";
import LuxuryButton from "./LuxuryButton.jsx";
import Reveal from "./Reveal.jsx";

export default function AboutCollage() {
  return (
    <section className="overflow-hidden bg-red px-6 py-24 text-soft md:py-32" id="designer">
      <div className="mx-auto grid max-w-[1260px] items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="relative min-h-[530px]">
          <div className="absolute left-0 top-12 w-[62%] rotate-[-7deg] bg-soft p-4 shadow-editorial">
            <span className="absolute -top-4 left-12 h-8 w-28 rotate-[-3deg] bg-beige/70" />
            <img src={images.aboutMain} alt="Layered portrait placeholder" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute left-[48%] top-4 w-[32%] rotate-[10deg] bg-soft p-3 shadow-paper">
            <img src={images.aboutStrip} alt="Editorial detail placeholder" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute bottom-2 left-[35%] w-[30%] rotate-[6deg] bg-soft p-3 shadow-paper">
            <img src={images.aboutSmall} alt="Vintage fashion placeholder" className="aspect-[3/4] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-beige">Meet your designer</p>
          <h2 className="font-serif text-6xl font-medium leading-[0.9] md:text-8xl">
            Meet Your <em className="italic">Designer</em>
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-7 text-soft/78 md:text-base">
            ARSHMEET builds visual identities with the eye of an art director and the discipline of a brand strategist.
            Her work blends cinematic imagery, quiet luxury, and editorial composition into design systems that feel
            personal, elevated, and enduring.
          </p>
          <div className="mt-9">
            <LuxuryButton dark>Work With Me</LuxuryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
