import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter.jsx";

const stats = [
  { target: 3000, suffix: "+", label: "Happy Students", icon: "🎓" },
  { target: 25, suffix: "+", label: "Expert Coaches", icon: "🧑‍🏫" },
  { target: 12, suffix: "+", label: "Years of Experience", icon: "🏆" },
  { target: 98, suffix: "%", label: "Success Rate", icon: "📈" },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-1 bg-bgLight py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 text-center glow-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-xs md:text-sm text-darkNavy/60 font-semibold mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;