import { motion } from "framer-motion";
import gall3 from "../assets/images/about3.jpeg"
// Placeholder gallery — swap emoji tiles for real <img> photos when available
const galleryItems = [
  { emoji: "🏊‍♀️", color: "bg-sky" },
  { emoji: "🐬", color: "bg-mint" },
  { emoji: "🏅", color: "bg-sunshine" },
  { emoji: "🤿", color: "bg-coral" },
  { emoji: "🏊‍♂️", color: "bg-sky" },
  { emoji: "🎉", color: "bg-mint" },
  { emoji: "🏆", color: "bg-sunshine" },
  { emoji: "🌊", color: "bg-coral" },
  { emoji: "👨‍👩‍👧", color: "bg-sky" },
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 pt-32">
      <div className="text-center mb-14">
        <span className="text-coral font-bold text-sm uppercase tracking-wide">Moments</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-inkNavy mt-2">
          Splashes We Love 📸
        </h1>
        <p className="text-inkNavy/50 mt-4 max-w-xl mx-auto">
          A peek into training days, celebrations, and proud family moments
          at Falcon Swimming Academy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            className={`aspect-square rounded-3xl ${item.color} flex items-center justify-center text-5xl shadow-md cursor-pointer`}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <p className="text-center text-inkNavy/30 text-sm mt-10">
        📷 Real academy photos coming soon — swap these tiles once your media library is ready.
      </p>
    </div>
  );
};

export default Gallery;