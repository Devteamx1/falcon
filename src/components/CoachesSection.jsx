import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RippleButton from "./RippleButton.jsx";
import api from "../services/api.jsx";

const CoachesSection = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const { data } = await api.get("/coaches/public");
        setCoaches(data.slice(0, 4));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCoaches();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Meet Our Expert Coaches
          </h2>
          <p className="text-darkNavy/50 mt-4 max-w-xl mx-auto">
            Nationally certified trainers who bring discipline, patience,
            and genuine passion to every session.
          </p>
        </div>

        {coaches.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, idx) => (
              <motion.div
                key={coach._id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden bg-ocean-gradient">
                  {coach.profilePhoto ? (
                    <img
                      src={`${import.meta.env.VITE_UPLOADS_BASE_URL}${coach.profilePhoto}`}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl text-white font-heading font-bold">
                      {coach.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-darkNavy">{coach.name}</h3>
                  <p className="text-xs text-primary font-semibold mt-1">
                    {coach.specialization || "Swimming Coach"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card">
            <p className="text-darkNavy/40">
              Coach profiles will appear here once added from the admin dashboard.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <RippleButton
            to="/trainers"
            className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition"
          >
            Meet the Full Team
          </RippleButton>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;