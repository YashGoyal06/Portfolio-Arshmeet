import { images } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Testimonial() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden px-6 py-28 text-center text-soft">
      <img src={images.testimonial} alt="Cinematic editorial background placeholder" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/58 via-brown/68 to-burgundy/82" />
      <Reveal className="relative mx-auto flex min-h-[48vh] max-w-5xl flex-col items-center justify-center">
        <h2 className="font-serif text-5xl font-medium leading-[0.95] md:text-8xl">
          “Every project should feel like a visual experience — not just a design.”
        </h2>
        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-beige">
          Mira Kapoor, Founder at Maison Rue
        </p>
      </Reveal>
    </section>
  );
}
