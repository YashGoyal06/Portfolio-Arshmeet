import { experienceItems } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="bg-soft px-6 py-16 text-ink md:py-20">
      <div className="mx-auto grid max-w-[1180px] items-start gap-10 md:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-brown/55">Experience</p>
          <h2 className="max-w-[520px] font-serif text-5xl font-medium leading-[0.94] text-red md:text-7xl">
            Editorial eye, brand-first thinking.
          </h2>
        </Reveal>
        <div className="divide-y divide-brown/14 border-y border-brown/14">
          {experienceItems.map(([year, title, copy], index) => (
            <Reveal key={title} delay={index * 0.06} className="grid gap-3 py-5 md:grid-cols-[100px_1fr] md:items-center">
              <span className="font-serif text-3xl italic text-red">{year}</span>
              <div>
                <h3 className="font-serif text-3xl text-brown md:text-[2.15rem]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brown/70">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
