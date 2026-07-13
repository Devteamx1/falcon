import { motion } from "framer-motion";
import RippleButton from "./RippleButton.jsx";
import HeroCarousel from "./HeroCarousel.jsx";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-dark-gradient">
      <HeroCarousel />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full glass-dark text-secondary text-xs font-bold section-label uppercase mb-6"
        >
          🏆 India's Premium Swimming Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
        >
          Master the Water.<br />
          <span className="text-secondary">Master Your Life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/75 text-lg mb-10 max-w-xl mx-auto"
        >
          World-class coaching, Olympic-standard facilities, and a proven
          training system trusted by 3000+ swimmers across the country.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <RippleButton
            to="/register"
            className="px-8 py-3.5 rounded-full bg-ocean-gradient text-white font-bold shadow-xl glow-hover"
          >
            Book Free Trial
          </RippleButton>
          <RippleButton
            to="/courses"
            className="px-8 py-3.5 rounded-full glass-dark text-white font-bold border border-white/20 hover:bg-white/10 transition"
          >
            Explore Programs
          </RippleButton>
        </motion.div>
      </div>

      {/* Animated Wave Divider */}
      <div className="wave-divider z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            className="wave-path-2"
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            style={{ fill: "#00C2FF", opacity: 0.15 }}
          />
          <path
            className="wave-path-1 shape-fill"
            d="M0,80 C300,20 900,140 1200,80 L1200,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;