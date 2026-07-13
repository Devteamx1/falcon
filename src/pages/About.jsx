import { motion } from "framer-motion";
import RippleButton from "../components/RippleButton.jsx";

const values = [
  { icon: "🎯", title: "Our Mission", desc: "To make every individual a confident, safe swimmer — regardless of age or starting ability." },
  { icon: "🌟", title: "Our Vision", desc: "To be the most trusted swimming academy in the country, known for safety and results." },
  { icon: "🤝", title: "Our Values", desc: "Safety, discipline, encouragement, and genuine care for every swimmer's journey." },
];

const timeline = [
  { year: "2014", event: "Falcon Swimming Academy founded with a single training pool." },
  { year: "2017", event: "Expanded to 3 pools and launched our competitive training squad." },
  { year: "2020", event: "Introduced digital progress tracking for all students and parents." },
  { year: "2023", event: "Crossed 3000+ trained swimmers and 180+ competition medals." },
];

const About = () => {
  return (
    <div className="pt-32">
      <section className="max-w-5xl mx-auto px-6 text-center pb-16">
        <span className="text-primary font-bold text-sm section-label uppercase">About Us</span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-darkNavy mt-3 mb-5">
          Our Story of Passion & Precision
        </h1>
        <p className="text-darkNavy/55 max-w-2xl mx-auto">
          For over a decade, Falcon Swimming Academy has been building
          confident, capable swimmers through expert coaching and genuine care.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-heading font-bold text-lg text-darkNavy mb-2">{v.title}</h3>
              <p className="text-sm text-darkNavy/55">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-bgLight py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-sm section-label uppercase">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
              Milestones Along the Way
            </h2>
          </div>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex items-center gap-6"
              >
                <span className="text-2xl font-heading font-extrabold text-primary flex-shrink-0 w-20">
                  {item.year}
                </span>
                <p className="text-sm text-darkNavy/65">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-darkNavy mb-6">
          Ready to start your swimming journey?
        </h2>
        <RippleButton
          to="/register"
          className="inline-block px-8 py-3.5 rounded-full bg-ocean-gradient text-white font-bold shadow-lg glow-hover"
        >
          Book Free Trial
        </RippleButton>
      </section>
    </div>
  );
};

export default About;