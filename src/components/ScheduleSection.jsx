import { useState } from "react";
import { motion } from "framer-motion";


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const scheduleData = {
  Mon: [
    { time: "6:00 - 7:00 AM", program: "Beginner Kids", coach: "Coach Riya" },
    { time: "4:00 - 5:30 PM", program: "Competitive Squad", coach: "Coach Arjun" },
    { time: "6:00 - 7:00 PM", program: "Adult Learners", coach: "Coach Meera" },
  ],
  Tue: [
    { time: "6:00 - 7:00 AM", program: "Intermediate Kids", coach: "Coach Riya" },
    { time: "5:00 - 6:30 PM", program: "Teen Advanced", coach: "Coach Arjun" },
  ],
  Wed: [
    { time: "6:00 - 7:00 AM", program: "Beginner Kids", coach: "Coach Riya" },
    { time: "4:00 - 5:30 PM", program: "Competitive Squad", coach: "Coach Arjun" },
    { time: "6:00 - 7:00 PM", program: "Adult Learners", coach: "Coach Meera" },
  ],
  Thu: [
    { time: "6:00 - 7:00 AM", program: "Intermediate Kids", coach: "Coach Riya" },
    { time: "5:00 - 6:30 PM", program: "Teen Advanced", coach: "Coach Arjun" },
  ],
  Fri: [
    { time: "6:00 - 7:00 AM", program: "Beginner Kids", coach: "Coach Riya" },
    { time: "4:00 - 5:30 PM", program: "Competitive Squad", coach: "Coach Arjun" },
    { time: "6:00 - 7:00 PM", program: "Adult Learners", coach: "Coach Meera" },
  ],
  Sat: [
    { time: "8:00 - 9:30 AM", program: "Family Splash Hour", coach: "All Coaches" },
    { time: "10:00 - 11:30 AM", program: "Competitive Squad", coach: "Coach Arjun" },
  ],
  Sun: [
    { time: "9:00 - 10:30 AM", program: "Open Practice", coach: "Coach Meera" },
  ],
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Weekly Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Find Your Perfect Time Slot
          </h2>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
                activeDay === day
                  ? "bg-ocean-gradient text-white shadow-md"
                  : "bg-bgLight text-darkNavy/60 hover:bg-primary/10"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Sessions */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {scheduleData[activeDay]?.length > 0 ? (
            scheduleData[activeDay].map((session, idx) => (
              <div key={idx} className="glass-card p-5 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ocean-gradient flex items-center justify-center text-white text-lg">
                    🏊
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-darkNavy">{session.program}</h4>
                    <p className="text-xs text-darkNavy/50">{session.coach}</p>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  {session.time}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-darkNavy/40 py-10">No sessions scheduled this day.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;