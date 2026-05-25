import { Mail } from "lucide-react";
import LuxuryButton from "./LuxuryButton.jsx";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-red px-6 py-20 text-soft md:py-28">
      <div className="grain" />
      <div className="relative mx-auto max-w-[1260px]">
        <Reveal>
          <h2 className="max-w-5xl font-serif text-6xl font-medium leading-[0.9] md:text-9xl">
            Let’s Build Something Visually <em className="italic">Unforgettable.</em>
          </h2>
          <div className="mt-10">
            <LuxuryButton dark>Start a Project</LuxuryButton>
          </div>
        </Reveal>
        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-soft/18 pt-8 md:flex-row md:items-end">
          <p className="font-serif text-3xl">ARSHMEET</p>
          <div className="flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-soft/72">
            <a href="https://instagram.com" className="hover:text-soft">
              Instagram
            </a>
            <a href="https://behance.net" className="hover:text-soft">
              Behance
            </a>
            <a href="https://linkedin.com" className="hover:text-soft">
              LinkedIn
            </a>
            <a href="mailto:hello@arshmeet.design" className="inline-flex items-center gap-2 hover:text-soft">
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
