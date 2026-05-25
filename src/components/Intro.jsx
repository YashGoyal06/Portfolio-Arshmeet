import { Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 text-center text-ink md:py-32" id="about">
      <div className="grain opacity-40" />
      <div className="absolute right-8 top-1/2 hidden h-36 w-36 -translate-y-1/2 rounded-full border border-red/20 md:block">
        <div className="absolute inset-6 rounded-full bg-beige/45" />
      </div>
      <Reveal className="mx-auto max-w-4xl">
        <Sparkles className="mx-auto mb-7 text-red" size={30} strokeWidth={1.2} />
        <h2 className="font-serif text-5xl font-medium leading-[0.9] text-red md:text-7xl">
          Crafting bold visual identities with emotion, clarity, and editorial elegance.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-brown/78 md:text-base">
          A refined design practice for founders, studios, and cultural brands seeking a visual world with feeling,
          restraint, and unmistakable presence.
        </p>
        <p className="mt-7 font-serif text-3xl italic text-red/80">little details, lasting impressions</p>
      </Reveal>
    </section>
  );
}
