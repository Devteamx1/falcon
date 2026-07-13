import { motion } from "framer-motion";
import RippleButton from "./RippleButton.jsx";
import gall from "../assets/images/about2.jpeg"
// Save matching images to frontend/public/images/gallery/
const previewImages = [
  { src: "/images/gallery/gallery-1.jpg", size: "row-span-2" },
  { src: "/images/gallery/gallery-2.jpg", size: "" },
  { src: "/images/gallery/gallery-3.jpg", size: "" },
  { src: "/images/gallery/gallery-4.jpg", size: "" },
  { src: "/images/gallery/gallery-5.jpg", size: "row-span-2" },
  { src: "/images/gallery/gallery-6.jpg", size: "" },
  { src: "/images/gallery/gallery-7.jpg", size: "" },
  { src: "/images/gallery/gallery-8.jpg", size: "" },
];

const GalleryPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Life at Falcon
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Moments Worth Diving Into
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px]">
          {previewImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden shadow-md cursor-pointer group ${img.size}`}
            >
              <img
                src={gall}
                alt={`Falcon Swimming Academy moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <RippleButton
            to="/gallery"
            className="inline-block px-8 py-3.5 rounded-full bg-ocean-gradient text-white font-bold shadow-lg glow-hover"
          >
            View Full Gallery
          </RippleButton>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;