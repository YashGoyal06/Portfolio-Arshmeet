import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Film, Folder, FolderOpen, Image, Play, X } from "lucide-react";
import { brandWorks } from "../data/content.js";
import Reveal from "./Reveal.jsx";

const brandSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function BrandWorksTeaser() {
  const [activeBrand, setActiveBrand] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedBrand = params.get("brand");
    return brandWorks.find((brand) => brandSlug(brand.name) === requestedBrand) || null;
  });

  return (
    <section id="brand-works" className="relative min-h-screen overflow-hidden bg-cream px-4 pb-20 pt-32 text-ink sm:px-6 md:pb-32 md:pt-40">
      <div className="grain opacity-30" />
      <div className="relative mx-auto max-w-[1260px]">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 border-b border-brown/14 pb-7 md:flex-row md:items-end">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-tl-2xl rounded-tr-md border border-brown/18 bg-soft text-red shadow-paper sm:h-16 sm:w-16">
              <Folder size={30} strokeWidth={1.4} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red sm:text-[10px] sm:tracking-[0.34em]">
                Brand Directory
              </p>
              <p className="mt-2 font-serif text-3xl italic leading-none text-brown md:text-4xl">case files</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-brown/68">
            Open a folder to view the identity mood, deliverables, and visual direction for each brand.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {brandWorks.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 0.08}>
              <button
                type="button"
                onClick={() => setActiveBrand(brand)}
                className="group relative block min-h-[430px] w-full overflow-visible pt-10 text-left transition duration-700 hover:-translate-y-2 sm:min-h-[480px]"
              >
                <div
                  className="absolute left-0 top-0 z-30 flex h-16 w-[48%] min-w-40 items-center gap-3 rounded-t-[1.75rem] border-x border-t border-brown/14 bg-soft px-6 text-red shadow-[0_-10px_28px_rgba(59,43,40,0.06)]"
                  style={{ color: brand.accent }}
                >
                  <FolderOpen size={20} strokeWidth={1.4} />
                  <span className="text-[8px] font-bold uppercase tracking-[0.24em]">Case File</span>
                </div>
                <div className="relative min-h-[430px] overflow-hidden rounded-b-[1.75rem] rounded-tr-[1.75rem] border border-brown/14 bg-soft shadow-paper sm:min-h-[480px]">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-soft/92 px-6 py-5 backdrop-blur-sm">
                    <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-red">Archive</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brown/58">{brand.year}</span>
                  </div>
                  <img
                    src={brand.image}
                    alt={`${brand.name} brand work preview`}
                    className="absolute inset-0 h-full w-full object-cover opacity-86 grayscale-[10%] transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-cream/34 via-transparent to-burgundy/48" />
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-burgundy px-6 pb-6 pt-7 text-soft">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="max-w-[70%] text-[8px] font-bold uppercase tracking-[0.26em] text-beige">{brand.category}</p>
                      <span className="h-px flex-1 bg-beige/26" />
                    </div>
                    <div className="flex items-end justify-between gap-5">
                      <h3 className="font-serif text-4xl leading-[0.9] sm:text-5xl md:text-[3.25rem]">{brand.name}</h3>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-soft text-red transition group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                    <p className="mt-4 max-w-xs text-[9px] uppercase leading-5 tracking-[0.22em] text-beige/78">{brand.mood}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeBrand && <BrandPopup brand={activeBrand} onClose={() => setActiveBrand(null)} />}
      </AnimatePresence>
    </section>
  );
}

function BrandPopup({ brand, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy/78 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="relative grid max-h-[92vh] w-full max-w-[1180px] overflow-y-auto border border-brown/20 bg-cream shadow-editorial md:grid-cols-[0.72fr_1.28fr] md:overflow-hidden"
        initial={{ opacity: 0, y: 42, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.97 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-soft text-red transition hover:bg-beige"
          aria-label="Close brand work popup"
        >
          <X size={18} />
        </button>

        <div className="relative min-h-[310px] overflow-hidden sm:min-h-[360px] md:min-h-[720px]">
          <img src={brand.image} alt={`${brand.name} expanded brand work`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/75 via-transparent to-cream/12" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.32em] text-beige">{brand.category}</p>
            <h3 className="font-serif text-5xl leading-[0.86] text-soft sm:text-6xl md:text-7xl">{brand.name}</h3>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-soft/18 pt-4 text-soft/72">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Graphics</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Videos</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Assets</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 text-brown sm:px-7 sm:py-10 md:overflow-y-auto md:px-10 md:py-12">
          <div className="mb-8 flex flex-col gap-3 border-b border-brown/15 pb-5 sm:flex-row sm:items-center sm:justify-between md:mb-10">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red">{brand.year}</span>
            <span className="font-serif text-2xl italic" style={{ color: brand.accent }}>
              {brand.mood}
            </span>
          </div>

          <p className="font-serif text-3xl leading-[1] text-red sm:text-4xl md:text-5xl">{brand.brief}</p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {brand.media.map((item, index) => (
              <MediaTile key={`${item.title}-${index}`} item={item} accent={brand.accent} />
            ))}
          </div>

          <div className="mt-10 grid gap-3">
            {brand.deliverables.map((item, index) => (
              <div key={item} className="flex items-center justify-between gap-4 border-b border-brown/12 py-4">
                <span className="font-serif text-3xl text-brown/35">0{index + 1}</span>
                <span className="text-right text-[10px] font-bold uppercase tracking-[0.24em] text-brown/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function MediaTile({ item, accent }) {
  const isVideo = item.type === "video";
  const aspectClass =
    item.ratio === "portrait" ? "aspect-[4/5]" : item.ratio === "story" ? "aspect-[9/14]" : "aspect-[5/4]";

  return (
    <div className="group overflow-hidden border border-brown/12 bg-soft">
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-soft text-red">
          {isVideo ? <Film size={16} /> : <Image size={16} />}
        </div>
        {isVideo && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-soft/40 bg-burgundy/60 text-soft backdrop-blur-sm">
              <Play size={19} fill="currentColor" />
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-soft">
          <p className="font-serif text-3xl leading-none">{item.title}</p>
          {isVideo && <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{item.duration}</span>}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-brown/58">{item.type}</span>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    </div>
  );
}
