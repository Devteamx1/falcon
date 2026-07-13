import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-ocean-gradient text-white shadow-lg flex items-center justify-center glow-hover"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;