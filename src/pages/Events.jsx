import { motion } from "framer-motion";

const events = [
  { title: "Inter-Academy Swim Meet", date: "Aug 15, 2026", location: "Main Pool Arena", emoji: "🏆", color: "bg-sunshine/20" },
  { title: "Beginner Splash Day", date: "Aug 28, 2026", location: "Training Pool B", emoji: "🐣", color: "bg-mint/20" },
  { title: "Annual Awards Ceremony", date: "Sep 10, 2026", location: "Academy Hall", emoji: "🎉", color: "bg-coral/20" },
];

const Events = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <span className="text-coral font-bold text-sm uppercase tracking-wide">Upcoming</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-inkNavy mt-2">
          Academy Events 🗓️
        </h1>
        <p className="text-inkNavy/50 mt-4">
          Mark your calendars — fun and milestones await!
        </p>
      </div>

      <div className="space-y-6">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="friendly-card p-6 flex items-center gap-5"
          >
            <div className={`w-16 h-16 rounded-2xl ${event.color} flex items-center justify-center text-3xl flex-shrink-0`}>
              {event.emoji}
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-inkNavy text-lg">{event.title}</h3>
              <p className="text-sm text-inkNavy/50 mt-1">📍 {event.location}</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-sky text-white text-sm font-bold whitespace-nowrap">
              {event.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;