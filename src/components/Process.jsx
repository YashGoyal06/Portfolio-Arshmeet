import { motion } from "framer-motion";
import { processSteps } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-burgundy px-6 py-16 text-soft md:py-20" id="process">
      <motion.div
        className="absolute left-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-red/35 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, 18, 0], opacity: [0.28, 0.48, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-35%] right-[-12%] h-[460px] w-[460px] rounded-full bg-beige/10 blur-3xl"
        animate={{ x: [0, -34, 0], y: [0, -22, 0], opacity: [0.14, 0.26, 0.14] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-beige">Process</p>
            <h2 className="font-serif text-5xl font-medium leading-none md:text-7xl">How it flows</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-soft/68">
            A focused path from first mood to final brand world.
          </p>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-4">
          {processSteps.map(([title, copy], index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden border border-soft/14 bg-red/35 p-6"
              initial={{ opacity: 0, y: 34, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, backgroundColor: "rgba(106,31,26,0.68)", transition: { duration: 0.35 } }}
            >
              <motion.span
                className="absolute right-5 top-4 font-serif text-7xl leading-none text-soft/5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                0{index + 1}
              </motion.span>
              <span className="relative font-serif text-4xl leading-none text-beige transition duration-500 group-hover:text-soft">
                0{index + 1}
              </span>
              <h3 className="relative mt-8 font-serif text-3xl">{title}</h3>
              <p className="mt-4 text-xs leading-6 text-soft/68">{copy}</p>
              <motion.span
                className="absolute bottom-0 left-0 h-px bg-beige"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
