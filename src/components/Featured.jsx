import { motion } from "framer-motion";

const logos = ["Behance", "Dribbble", "Awwwards", "Forbes", "Creative Boom", "Vogue"];

export default function Featured() {
  return (
    <section className="relative overflow-hidden border-y border-brown/10 bg-soft py-8 text-brown">
      <motion.div
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-soft to-transparent z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-soft to-transparent z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="mx-auto mb-5 flex max-w-[1180px] items-center justify-center px-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[10px] uppercase tracking-[0.32em] text-brown/55">Featured in</span>
      </motion.div>
      <div className="featured-marquee flex whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <motion.span
            key={`${logo}-${index}`}
            className="mx-8 inline-flex items-center gap-8 font-serif text-2xl font-semibold tracking-tight text-brown md:text-3xl"
            whileHover={{ y: -4, color: "#6A1F1A" }}
            transition={{ duration: 0.35 }}
          >
            {logo}
            <span className="font-serif text-2xl italic text-red/35">⌁</span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
