import { ArrowUpRight } from "lucide-react";
import { works } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function SelectedWork() {
  return (
    <section className="bg-cream px-6 py-24 text-ink md:py-32" id="projects">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-6xl font-medium leading-none text-red md:text-8xl">Selected Work</h2>
          <p className="max-w-sm text-sm leading-7 text-brown/70">
            Magazine-paced identities, image systems, and brand worlds composed with atmosphere and precision.
          </p>
        </Reveal>
        <div className="grid gap-9 md:grid-cols-12 md:gap-12">
          {works.map(([name, category, image, span], index) => (
            <Reveal key={name} delay={index * 0.05} className={`group ${span}`}>
              <a href="#contact" className="block">
                <div className="relative overflow-hidden bg-beige shadow-paper">
                  <img
                    src={image}
                    alt={`${name} project placeholder`}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 md:aspect-[16/11]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/35 to-transparent opacity-70" />
                </div>
                <div className="mt-5 flex items-end justify-between border-b border-brown/15 pb-5">
                  <div>
                    <h3 className="font-serif text-4xl text-red">{name}</h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brown/58">{category}</p>
                  </div>
                  <ArrowUpRight className="text-red transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
