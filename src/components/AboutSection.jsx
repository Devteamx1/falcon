import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RippleButton from "./RippleButton.jsx";
import about1 from "../assets/images/about1.jpeg"
const highlights = [
  "Olympic-standard training methodology",
  "Certified lifeguards on every pool deck",
  "Individual progress tracking for every swimmer",
  "Flexible batches for kids, teens & adults",
];

const AboutSection = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src={about1}
              alt="Falcon Swimming Academy training session"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating stat badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 glass-card p-5 shadow-xl bg-white"
          >
            <h4 className="text-2xl font-heading font-extrabold text-primary">12+</h4>
            <p className="text-xs text-darkNavy/60 font-semibold">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-bold text-sm section-label uppercase">
            About the Academy
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3 mb-5">
            Where Champions Learn <br /> to <span className="text-primary">Swim</span>
          </h2>
          <p className="text-darkNavy/60 leading-relaxed mb-6">
            Since 2014, Falcon Swimming Academy has trained thousands of
            swimmers — from nervous first-timers to national medalists.
            Our philosophy is simple: world-class technique, delivered with
            genuine care, in a safe and structured environment.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm text-darkNavy/70 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <RippleButton
            to="/about"
            className="inline-block px-8 py-3.5 rounded-full bg-ocean-gradient text-white font-bold shadow-lg glow-hover"
          >
            Learn More About Us
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;