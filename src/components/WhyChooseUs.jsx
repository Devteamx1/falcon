import { motion } from "framer-motion";

const features = [
  {
    icon: "🏅",
    title: "Certified Coaches",
    desc: "Every trainer is nationally certified with years of competitive and teaching experience.",
  },
  {
    icon: "🛟",
    title: "Safety First",
    desc: "Lifeguard-supervised pools, strict protocols, and small batch sizes for maximum attention.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Real-time attendance, skill milestones, and performance reports for every swimmer.",
  },
  {
    icon: "🏊",
    title: "Olympic-Standard Pools",
    desc: "Temperature-controlled, professionally maintained pools built for serious training.",
  },
  {
    icon: "🎯",
    title: "Personalized Plans",
    desc: "Training tailored to each swimmer's pace — from first splash to competitive racing.",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    desc: "180+ medals won by our students at state and national-level competitions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-sm section-label uppercase">
          Why Choose Falcon
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
          Built for Excellence, <span className="text-primary">Every Stroke</span>
        </h2>
        <p className="text-darkNavy/50 mt-4 max-w-xl mx-auto">
          We combine world-class training methods with genuine care —
          producing confident swimmers and proud parents.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-card p-8 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-ocean-gradient flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="font-heading font-bold text-lg text-darkNavy mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-darkNavy/55 leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;