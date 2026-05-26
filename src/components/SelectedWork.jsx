import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Folder, FolderOpen, List, Grid, Search, X } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function SelectedWork({ activeProject, setActiveProject }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-cream px-6 py-28 text-ink md:py-36" id="projects">
      <div className="grain opacity-35" />
      
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header - Styled after "CLIENT LIBRARY" */}
        <Reveal className="mb-14 flex flex-col justify-between gap-6 border-b border-brown/15 pb-7 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Folder size={18} className="text-red/80" />
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red">
                Client Library
              </p>
            </div>
            <h2 className="font-serif text-3xl font-light tracking-[0.06em] text-chocolate uppercase md:text-4xl">
              Client Archive
            </h2>
            <p className="mt-1.5 text-[10px] text-brown/60 tracking-wider">
              Organized by brand · Personalized by strategy · Built for results
            </p>
          </div>

          {/* Search Bar & Switcher */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Input */}
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-3.5 text-brown/45" />
              <input
                type="text"
                placeholder="Search case files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full border border-brown/15 bg-cream/50 pl-9 pr-4 py-2 text-[10px] uppercase font-bold tracking-widest text-chocolate placeholder-brown/45 focus:border-red focus:outline-none w-[200px] transition-colors"
              />
            </div>
            {/* View Mode Toggle */}
            <div className="flex rounded-full border border-brown/15 bg-cream/35 p-1 select-none">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                  viewMode === "grid" ? "bg-red text-cream" : "text-brown/60 hover:text-chocolate"
                }`}
                aria-label="Grid view"
              >
                <Grid size={13} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                  viewMode === "list" ? "bg-red text-cream" : "text-brown/60 hover:text-chocolate"
                }`}
                aria-label="List view"
              >
                <List size={13} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Dynamic Folders Grid / List */}
        {filteredProjects.length > 0 ? (
          viewMode === "grid" ? (
            /* Grid View (Manila Closed Folders) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-8">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="group relative flex flex-col items-center w-full focus:outline-none"
                  >
                    {/* Folder Shape Container */}
                    <div className="relative w-full aspect-[1.38] max-w-[310px] mb-4">
                      {/* Manila Folder Tab */}
                      <div className="absolute left-0 -top-3.5 h-[16px] w-[84px] rounded-t-lg bg-[#E2D2BC] border-t border-x border-brown/12 group-hover:bg-[#D4C3AC] transition-colors duration-300" />
                      {/* Manila Folder Body */}
                      <div className="relative w-full h-full rounded-b-xl rounded-tr-xl bg-[#EADCC9] border border-brown/12 shadow-[0_8px_24px_rgba(43,26,20,0.06)] group-hover:bg-[#E2D2BC] group-hover:shadow-[0_12px_32px_rgba(43,26,20,0.12)] transition-all duration-300 flex flex-col justify-between p-5 overflow-hidden">
                        {/* Subtle inner lines representing document edges inside folder */}
                        <div className="absolute top-2.5 left-3 right-3 h-[2px] rounded bg-cream/40 opacity-80" />
                        <div className="absolute top-4.5 left-3 right-5 h-[1.5px] rounded bg-cream/30 opacity-70" />

                        {/* Monogram in center (Faint classic letter) */}
                        <div className="my-auto flex items-center justify-center">
                          <span className="font-serif text-[42px] font-light text-brown/10 uppercase select-none tracking-normal">
                            {project.name[0]}
                          </span>
                        </div>

                        {/* Archive Index Label */}
                        <div className="flex items-center justify-between text-brown/35 text-[6px] font-bold uppercase tracking-widest mt-auto border-t border-brown/5 pt-2.5">
                          <span>CASE NO. {project.number}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Directly Underneath Folder Shape */}
                    <div className="text-center mt-1">
                      <h3 className="font-serif text-lg font-medium tracking-[0.05em] text-chocolate uppercase group-hover:text-red transition duration-300">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-brown/50">
                        {project.category}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            /* List View (Minimal row list) */
            <div className="flex flex-col border-t border-brown/12 divide-y divide-brown/10">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.04}>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="group w-full py-5 flex items-center justify-between text-left hover:px-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-lg text-brown/35">0{project.number}</span>
                      <FolderOpen size={16} className="text-red/60 group-hover:text-red" />
                      <div>
                        <h3 className="font-serif text-xl font-medium uppercase text-chocolate group-hover:text-red transition duration-300">
                          {project.name}
                        </h3>
                        <p className="mt-0.5 text-[8px] font-bold uppercase tracking-widest text-brown/45">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-[9px] font-bold uppercase tracking-widest text-brown/55">
                      <span className="hidden sm:inline">{project.year}</span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/80 text-red border border-brown/10 group-hover:bg-red group-hover:text-cream transition-colors duration-300">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )
        ) : (
          /* Empty Search Result */
          <div className="py-20 text-center border-t border-brown/10">
            <p className="font-serif text-xl italic text-brown/50">No brand archives matched your search.</p>
          </div>
        )}
      </div>

      {/* Expanded Folder Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <BrandPopup project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function BrandPopup({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-chocolate/85 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="relative grid max-h-[90vh] w-full max-w-[1100px] overflow-y-auto border border-brown/20 bg-cream shadow-editorial md:grid-cols-[0.82fr_1.18fr] md:overflow-hidden rounded-[20px]"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full bg-cream text-red border border-brown/15 shadow-paper transition hover:bg-beige"
          aria-label="Close case file"
        >
          <X size={18} />
        </button>

        {/* Left Side: Editorial Image & Header */}
        <div className="relative min-h-[300px] overflow-hidden md:min-h-[600px] border-b md:border-b-0 md:border-r border-brown/10">
          <img 
            src={project.image} 
            alt={project.name} 
            className="h-full w-full object-cover filter grayscale-[10%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-black/10" />
          <div className="absolute bottom-8 left-8 right-8 text-cream">
            <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.32em] text-beige">{project.category}</p>
            <h3 className="font-serif text-4xl font-light leading-none md:text-6xl">{project.name}</h3>
            <div className="mt-6 flex gap-4 text-[8px] font-bold uppercase tracking-[0.2em] text-beige/70">
              <span>EST. {project.year}</span>
              <span>•</span>
              <span>CASE FILE NO. {project.number}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Case Details & Media Spreads */}
        <div className="px-6 py-8 text-ink sm:px-8 sm:py-10 md:overflow-y-auto md:px-12 md:py-12 flex flex-col justify-between">
          <div>
            <div className="mb-8 border-b border-brown/10 pb-5">
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-red">PROJECT SUMMARY & BRIEF</span>
            </div>
            
            <p className="font-serif text-2xl md:text-3xl font-light leading-snug text-red">
              {project.brief}
            </p>

            {/* Image Grid Spreads */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.media.map((imgUrl, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl border border-brown/10 bg-beige/35 shadow-paper aspect-[5/4]">
                  <img
                    src={imgUrl}
                    alt={`${project.name} gallery ${idx + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-10 pt-6 border-t border-brown/10">
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-red mb-4">DELIVERABLES</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.deliverables.map((item, idx) => (
                <div key={item} className="flex items-center gap-3 border-b border-brown/10 py-3">
                  <span className="font-serif text-lg text-brown/40">0{idx + 1}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brown/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
