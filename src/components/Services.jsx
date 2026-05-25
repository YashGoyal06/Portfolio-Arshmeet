import { services } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section className="bg-soft px-6 py-16 text-ink md:py-20" id="services">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-10">
          <h2 className="font-serif text-5xl font-medium leading-none text-red md:text-7xl">Services</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(([title, copy], index) => (
            <Reveal
              key={title}
              delay={index * 0.08}
              className="border border-brown/14 bg-cream px-7 py-8 transition duration-500 hover:-translate-y-2 hover:shadow-paper"
            >
              <p className="mb-8 font-serif text-4xl text-red/35">0{index + 1}</p>
              <h3 className="font-serif text-3xl text-red md:text-4xl">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-brown/70">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
