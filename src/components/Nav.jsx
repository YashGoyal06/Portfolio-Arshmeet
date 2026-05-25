import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { brandWorks, navItems } from "../data/content.js";

const brandSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const isBrandWorksPage = window.location.pathname.replace(/\/$/, "") === "/brand-works";
  const sectionHref = (item) => `${isBrandWorksPage ? "/" : ""}#${item.toLowerCase()}`;
  const contactHref = isBrandWorksPage ? "/#contact" : "#contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto max-w-[1420px] rounded-[1.75rem] border border-soft/15 bg-burgundy/50 px-4 py-3 text-soft shadow-[0_14px_50px_rgba(20,5,5,0.2)] backdrop-blur-md md:rounded-full md:px-6">
        <div className="flex items-center justify-between">
          <a href={isBrandWorksPage ? "/" : "#home"} className="font-serif text-xl uppercase tracking-[0.06em]" onClick={() => setOpen(false)}>
            ARSHMEET
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={sectionHref(item)}
                className="text-[9px] font-semibold uppercase tracking-[0.24em] text-soft/80 transition hover:text-soft"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="group relative">
              <a
                href="/brand-works"
                className="inline-flex rounded-full border border-soft/25 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-soft transition hover:bg-soft hover:text-burgundy"
              >
                Brand Works
              </a>
              <div className="invisible absolute right-0 top-full z-50 w-80 pt-3 opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">
                <motion.div
                  className="overflow-hidden rounded-tl-[1.75rem] rounded-tr-md border border-brown/14 bg-cream p-2 text-brown shadow-editorial"
                  initial={{ y: 10, scale: 0.98 }}
                  whileHover={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-2 flex items-center justify-between rounded-tl-[1.25rem] rounded-tr-md bg-burgundy px-4 py-3 text-soft">
                    <p className="text-[8px] font-bold uppercase tracking-[0.28em]">Open Brand File</p>
                    <span className="font-serif text-2xl leading-none">⌁</span>
                  </div>
                  {brandWorks.map((brand) => (
                    <a
                      key={brand.name}
                      href={`/brand-works?brand=${brandSlug(brand.name)}`}
                      className="group/file relative flex items-center justify-between overflow-hidden rounded-full px-4 py-3 text-brown transition hover:bg-burgundy hover:text-soft"
                    >
                      <span className="absolute inset-y-2 left-3 w-0 rounded-full bg-burgundy/8 transition-all duration-500 group-hover/file:w-[calc(100%-1.5rem)]" />
                      <span className="relative flex items-center gap-3">
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-brown/18 text-[10px] group-hover/file:border-soft/30">
                          {brand.name.slice(0, 1)}
                        </span>
                        <span className="font-serif text-xl">{brand.name}</span>
                      </span>
                      <span className="relative text-[8px] font-bold uppercase tracking-[0.2em]">{brand.year}</span>
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
            <a
              href={contactHref}
              className="rounded-full bg-soft px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-burgundy transition hover:bg-beige md:px-5"
            >
              Book a Call
            </a>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-soft text-burgundy md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className={`${open ? "grid" : "hidden"} gap-2 pb-2 pt-5 md:hidden`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={sectionHref(item)}
              className="border-t border-soft/12 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-soft/82"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/brand-works"
            className="border-t border-soft/12 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-soft/82"
            onClick={() => setOpen(false)}
          >
            Brand Works
          </a>
          {brandWorks.map((brand) => (
            <a
              key={brand.name}
              href={`/brand-works?brand=${brandSlug(brand.name)}`}
              className="pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-soft/62"
              onClick={() => setOpen(false)}
            >
              {brand.name}
            </a>
          ))}
          <a
            href={contactHref}
            className="mt-2 rounded-full bg-soft px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
}
