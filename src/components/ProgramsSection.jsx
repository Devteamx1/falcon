import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard.jsx";
import RippleButton from "./RippleButton.jsx";
import api from "../services/api.jsx";

const ProgramsSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get("/courses");
        setCourses(data.slice(0, 3));
      } catch (error) {
        console.log("Courses not loaded yet:", error.message);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="bg-bgLight py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-primary font-bold text-sm section-label uppercase">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
              Training for Every Stage
            </h2>
          </div>
          <RippleButton
            to="/courses"
            className="hidden md:inline-block px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition"
          >
            View All Programs
          </RippleButton>
        </div>

        {courses.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card">
            <p className="text-darkNavy/40">
              Programs will appear here once added from the admin dashboard.
            </p>
          </div>
        )}

        <div className="text-center mt-10 md:hidden">
          <Link to="/courses" className="text-primary font-bold text-sm">
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;