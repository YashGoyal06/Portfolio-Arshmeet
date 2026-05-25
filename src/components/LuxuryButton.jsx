import { ArrowUpRight } from "lucide-react";

export default function LuxuryButton({ children, dark = false }) {
  return (
    <a
      href="#contact"
      className={`group inline-flex min-w-[240px] items-center justify-center gap-3 rounded-full border px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition duration-500 md:min-w-[280px] ${
        dark
          ? "border-soft/35 bg-soft text-burgundy hover:bg-beige"
          : "border-brown/25 bg-beige/80 text-brown hover:bg-red hover:text-soft"
      }`}
    >
      {children}
      <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
