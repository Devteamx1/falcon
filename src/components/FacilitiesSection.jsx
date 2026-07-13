import { motion } from "framer-motion";
import fact from "../assets/images/about1.jpeg"
const facilities = [
  { img: "/images/facility-pool.jpg", title: "Olympic-Standard Pool", desc: "Temperature-controlled, professionally maintained." },
  { img: "/images/facility-kids.jpg", title: "Kids Training Zone", desc: "Shallow, safe pools designed for young beginners." },
  { img: "/images/facility-gym.jpg", title: "Dryland Training Area", desc: "Strength and conditioning for competitive swimmers." },
  { img: "/images/facility-locker.jpg", title: "Locker & Changing Rooms", desc: "Clean, secure facilities for every visit." },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-bgLight py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Our Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Built for Serious Training
          </h2>
          <p className="text-darkNavy/50 mt-4 max-w-xl mx-auto">
            Every corner of our academy is designed with safety, comfort,
            and performance in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl overflow-hidden shadow-lg group aspect-[3/4]"
            >
              <img
                src={fact}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/90 via-darkNavy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  {facility.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;