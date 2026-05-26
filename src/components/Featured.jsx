import Reveal from "./Reveal.jsx";

const brands = ["Erabeauty", "The Oven Artist", "Looks", "Social Noiz", "Fitii"];

export default function Featured() {
  return (
    <section className="relative bg-cream py-14 text-ink border-y border-brown/15">
      <div className="grain opacity-20" />
      <div className="mx-auto max-w-[1260px] px-6 text-center">
        {/* Strip Header */}
        <Reveal className="mb-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-brown/60">
            Selected Collaborations & Brand Work
          </p>
        </Reveal>

        {/* Brands List */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-14">
            {brands.map((brand, index) => (
              <div key={brand} className="flex items-center">
                <span className="font-serif text-xl font-light tracking-[0.06em] text-red transition duration-300 hover:text-brown md:text-2xl">
                  {brand}
                </span>
                {index < brands.length - 1 && (
                  <span className="ml-8 text-amber-900/25 font-light text-xl md:ml-14 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
