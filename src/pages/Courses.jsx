import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard.jsx";
import api from "../services/api.jsx";

const levels = ["All", "Beginner", "Intermediate", "Advanced", "Competitive"];

const levelEmoji = {
  All: "🌈",
  Beginner: "🐣",
  Intermediate: "🏊",
  Advanced: "🚀",
  Competitive: "🏆",
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get("/courses");
        setCourses(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses =
    filter === "All" ? courses : courses.filter((c) => c.level === filter);

  return (
    <div className="bg-cloudSoft pt-20 min-h-screen">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <span className="text-coral font-bold text-sm uppercase tracking-wide">Programs</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-inkNavy mt-2">
          Find Your Perfect Splash 🏊
        </h1>
        <p className="text-inkNavy/50 mt-4 max-w-xl mx-auto">
          From first-time floaters to competitive racers — there's a joyful
          program here for every age and skill level.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilter(lvl)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
                filter === lvl
                  ? "bg-sky text-white shadow-md"
                  : "bg-white text-inkNavy/60 border-2 border-cloudSoft hover:border-sky"
              }`}
            >
              {levelEmoji[lvl]} {lvl}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-inkNavy/40 py-10">Loading courses...</p>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">🐠</span>
            <p className="text-inkNavy/40">
              No courses found here yet. Check back soon or explore another category!
            </p>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;