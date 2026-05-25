import { Mail } from "lucide-react";
import LuxuryButton from "./LuxuryButton.jsx";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-brown/12 bg-beige px-6 py-14 text-brown md:py-16">
      <div className="grain opacity-30" />
      <div className="relative mx-auto max-w-[1260px]">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-serif text-5xl font-medium leading-[0.92] text-red md:text-7xl">
            Let’s Build Something Visually <em className="italic">Unforgettable.</em>
          </h2>
          <div className="shrink-0">
            <LuxuryButton>Start a Project</LuxuryButton>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brown/18 pt-6 md:flex-row md:items-end">
          <p className="font-serif text-3xl text-red">ARSHMEET</p>
          <div className="flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brown/68">
            <a href="https://instagram.com" className="hover:text-red">
              Instagram
            </a>
            <a href="https://behance.net" className="hover:text-red">
              Behance
            </a>
            <a href="https://linkedin.com" className="hover:text-red">
              LinkedIn
            </a>
            <a href="mailto:hello@arshmeet.design" className="inline-flex items-center gap-2 hover:text-red">
              <Mail size={13} /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
