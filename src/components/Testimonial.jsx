import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const feedback = [
  {
    quote: "“Arshmeet did not just design a logo; she built a whole editorial universe for Erabeauty. The depth, the shadows, the spacing — everything feels incredibly expensive.”",
    client: "Sophia L.",
    role: "Founder, Erabeauty",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "“She has a rare cinematic eye. The visual system she crafted for Looks captured our brand's soul perfectly. The pacing of the design is pure poetry.”",
    client: "Amelia R.",
    role: "Creative Director, Looks",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "“A masterclass in editorial design. Working with Arshmeet was effortless, and the outcome completely redefined how we present ourselves to the world.”",
    client: "Jessica M.",
    role: "Founder, The Oven Artist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
  }
];

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#4A1812] via-[#3B1510] to-[#2B1A14] px-6 py-24 text-soft md:py-32" id="testimonials">
      <div className="grain opacity-25" />
      
      <div className="mx-auto max-w-[1260px] relative z-10">
        {/* Section Header */}
        <Reveal className="mb-20 text-center">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.32em] text-beige">
            Client Feedbacks
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.02] text-cream">
            Client <em className="italic font-serif font-normal text-beige">Stories</em>
          </h2>
        </Reveal>

        {/* 3-Column Columns Stack: Circular image -> name -> feedback */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {feedback.map((item, index) => (
            <Reveal key={item.client} delay={index * 0.08} className="flex flex-col items-center text-center">
              {/* Circular Client Image */}
              <motion.div 
                className="relative shrink-0 mb-6"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="h-24 w-24 rounded-full object-cover border-[3px] border-beige shadow-paper"
                />
                <div className="absolute inset-0 rounded-full bg-burgundy/10 mix-blend-overlay animate-pulse" />
              </motion.div>

              {/* Client Name & Role */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-light text-beige">{item.client}</h3>
                <p className="mt-1 text-[7.5px] font-bold uppercase tracking-[0.24em] text-cream/55">
                  {item.role}
                </p>
              </div>

              {/* Feedback Quote */}
              <blockquote className="font-serif text-sm leading-relaxed text-cream/80 max-w-xs italic">
                {item.quote}
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
