import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api.jsx";

const avatarColors = ["bg-sky", "bg-coral", "bg-mint", "bg-sunshine"];

const Trainers = () => {
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const { data } = await api.get("/coaches/public");
        setCoaches(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoaches();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 pt-32">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="text-coral font-bold text-sm uppercase tracking-wide">Our Team</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-inkNavy mt-2">
          Meet Your Coaches 🧑‍🏫
        </h1>
        <p className="text-inkNavy/50 mt-4 max-w-xl mx-auto">
          Certified, caring, and always ready with a smile — our coaches make
          every session safe, encouraging, and fun.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-inkNavy/40 py-10">Loading trainers...</p>
      ) : coaches.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-5xl block mb-4">🏊‍♂️</span>
          <p className="text-inkNavy/40">
            Trainer profiles will appear here once added from the admin dashboard.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <motion.div
              key={coach._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="friendly-card p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md flex items-center justify-center text-2xl text-white font-display font-bold"
                style={{ backgroundColor: "transparent" }}
              >
                {coach.profilePhoto ? (
                  <img
                    src={`${import.meta.env.VITE_UPLOADS_BASE_URL}${coach.profilePhoto}`}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${avatarColors[idx % avatarColors.length]}`}>
                    {coach.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="font-display font-bold text-inkNavy">{coach.name}</h3>
              <p className="text-xs text-sky font-semibold mt-1">
                {coach.specialization || "Swimming Coach"}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trainers;