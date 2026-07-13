import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Mix of video and image slides — set type: "video" or "image"
const slides = [
  { type: "video", src: "/Carousel.mp4" },
  { type: "video", src: "/Carousel1.mp4" },
  { type: "video", src: "/Carousel2.mp4" },
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        {slides.map((slide, idx) =>
          idx === active ? (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-full object-cover opacity-50"
                />
              )}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-darkNavy/60 via-darkNavy/40 to-darkNavy/80" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-2 rounded-full transition-all ${
              active === idx ? "w-8 bg-secondary" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;