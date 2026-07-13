import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Parent of Ishaan, Age 8",
    message: "My son went from being terrified of water to swimming full laps confidently in under a year. The coaches are incredibly patient and genuinely care about every child's progress.",
    avatar: "bg-primary",
  },
  {
    name: "Sneha Iyer",
    role: "Competitive Swimmer",
    message: "Training here changed my entire trajectory. The personalized coaching and structured progress tracking helped me qualify for state-level competitions within two seasons.",
    avatar: "bg-secondary",
  },
  {
    name: "Rohit Sharma",
    role: "Parent of Twins",
    message: "Best decision we made as a family. The academy's app makes tracking attendance and fees effortless, and both my kids look forward to every single session.",
    avatar: "bg-accent",
  },
  {
    name: "Priya Nair",
    role: "Adult Learner",
    message: "I joined at 34 having never learned to swim. Within three months I was swimming independently. Zero judgment, all encouragement — exactly what I needed.",
    avatar: "bg-darkNavy",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-dark-gradient py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-8xl text-white/5 font-heading">"</div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-secondary font-bold text-sm section-label uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mt-3">
            What Our Families Say
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-dark rounded-3xl p-10 text-center"
          >
            <div
              className={`w-16 h-16 rounded-full ${testimonials[active].avatar} mx-auto mb-5 flex items-center justify-center text-2xl text-white font-heading font-bold shadow-lg`}
            >
              {testimonials[active].name.charAt(0)}
            </div>
            <p className="text-white/85 text-lg leading-relaxed mb-6 italic">
              "{testimonials[active].message}"
            </p>
            <h4 className="font-heading font-bold text-white">{testimonials[active].name}</h4>
            <span className="text-secondary text-sm font-semibold">{testimonials[active].role}</span>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2 rounded-full transition-all ${
                active === idx ? "w-8 bg-secondary" : "w-2 bg-white/30"
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;