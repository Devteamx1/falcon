import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const levelColors = {
  Beginner: "bg-secondary/15 text-secondary",
  Intermediate: "bg-primary/15 text-primary",
  Advanced: "bg-accent/20 text-darkNavy",
  Competitive: "bg-darkNavy/10 text-darkNavy",
};

const levelEmoji = {
  Beginner: "🐣",
  Intermediate: "🏊",
  Advanced: "🚀",
  Competitive: "🏆",
};

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 bg-white"
    >
      <div className="w-full h-40 rounded-2xl bg-ocean-gradient mb-5 flex items-center justify-center text-5xl overflow-hidden">
        {levelEmoji[course.level] || "🏊"}
      </div>

      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${levelColors[course.level] || "bg-primary/15 text-primary"}`}>
        {course.level}
      </span>

      <h3 className="text-lg font-heading font-bold text-darkNavy mb-2">{course.title}</h3>
      <p className="text-sm text-darkNavy/50 mb-5 line-clamp-2">{course.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-primary font-heading font-extrabold text-lg">₹{course.fee}</span>
        <Link
          to="/register"
          className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition"
        >
          Enroll →
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;