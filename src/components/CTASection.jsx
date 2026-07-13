import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-sky-gradient overflow-hidden">
      <div className="absolute top-6 left-10 w-24 h-24 bg-white/15 blob-shape float-bob" />
      <div className="absolute bottom-6 right-10 w-32 h-32 bg-white/10 blob-shape float-bob" style={{ animationDelay: "1.2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <span className="text-5xl mb-4 inline-block wiggle-soft">🐬</span>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
          Ready to Make a Splash?
        </h2>
        <p className="text-white/85 mb-8 max-w-lg mx-auto">
          Join hundreds of happy families at Falcon Swimming Academy —
          where confidence, safety, and fun go hand in hand.
        </p>
        <Link
          to="/register"
          className="inline-block px-10 py-3.5 rounded-full bg-white text-sky font-display font-bold shadow-lg hover:shadow-xl transition"
        >
          Register Today 🎉
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;