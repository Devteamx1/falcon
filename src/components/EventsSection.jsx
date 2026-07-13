import { motion } from "framer-motion";
import RippleButton from "./RippleButton.jsx";

const events = [
  {
    title: "Inter-Academy Swim Meet",
    date: "15",
    month: "AUG",
    location: "Main Pool Arena",
    tag: "Competition",
    color: "bg-accent/20 text-darkNavy",
  },
  {
    title: "Beginner Splash Day",
    date: "28",
    month: "AUG",
    location: "Training Pool B",
    tag: "Open Day",
    color: "bg-secondary/15 text-secondary",
  },
  {
    title: "Annual Awards Ceremony",
    date: "10",
    month: "SEP",
    location: "Academy Hall",
    tag: "Celebration",
    color: "bg-primary/15 text-primary",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-bgLight py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Upcoming Events
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-ocean-gradient text-white flex flex-col items-center justify-center shadow-md">
                <span className="text-xl font-heading font-extrabold leading-none">{event.date}</span>
                <span className="text-[10px] font-bold tracking-wide">{event.month}</span>
              </div>
              <div>
                <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full mb-2 ${event.color}`}>
                  {event.tag}
                </span>
                <h3 className="font-heading font-bold text-darkNavy leading-snug">
                  {event.title}
                </h3>
                <p className="text-xs text-darkNavy/50 mt-1">📍 {event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <RippleButton
            to="/events"
            className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition"
          >
            View All Events
          </RippleButton>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;