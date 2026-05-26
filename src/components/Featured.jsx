import Reveal from "./Reveal.jsx";

const brands = ["Erabeauty", "The Oven Artist", "Looks", "Social Noiz", "Fitii"];

export default function Featured() {
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative overflow-hidden bg-cream py-10 text-ink border-y border-brown/15">
      <div className="grain opacity-20" />
      <div className="mx-auto mb-4 max-w-[1260px] px-6 text-center">
        <Reveal>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-brown/50">
            Selected Collaborations & Brand Work
          </p>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden select-none">
        {/* Luxury edge gradient masks to fade the scrolling brands */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />

        <div className="featured-marquee flex items-center whitespace-nowrap">
          {marqueeBrands.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="mx-8 inline-flex items-center gap-6 font-serif text-xl font-light tracking-[0.06em] text-red transition-colors duration-300 hover:text-brown md:mx-12 md:text-2xl"
            >
              {brand}
              <span className="text-amber-900/20 font-serif italic text-xl select-none">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
