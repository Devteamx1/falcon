import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../services/api.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "", dob: "", phone: "", email: "", password: "",
    address: "", course: "", batchTiming: "", parentEmail: "",
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get("/courses");
        setCourses(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/register", form);
      login(data);
      navigate("/student/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition";
  return (
    <div className="bg-cloudSoft py-16 pt-32">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-5xl block mb-3">🏊‍♀️</span>
          <span className="text-coral font-bold text-sm uppercase tracking-wide">Join Falcon Academy</span>
          <h1 className="text-4xl font-display font-extrabold text-inkNavy mt-2">
            Let's Get You Started!
          </h1>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="friendly-card p-8 space-y-5"
        >
          {error && (
            <div className="bg-coral/10 text-coral text-sm px-4 py-3 rounded-2xl font-semibold">{error}</div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className={inputClass} />
            <input type="date" name="dob" value={form.dob} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className={inputClass} />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className={inputClass} />
          </div>

          <input type="password" name="password" placeholder="Create Password" value={form.password} onChange={handleChange} required minLength={6} className={inputClass} />

          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className={inputClass} />

          <div className="grid md:grid-cols-2 gap-4">
            <select name="course" value={form.course} onChange={handleChange} required className={inputClass}>
              <option value="">Select Course</option>
              {courses.map((c) => (
                <option key={c._id} value={c._id}>{c.title}</option>
              ))}
            </select>
            <select name="batchTiming" value={form.batchTiming} onChange={handleChange} className={inputClass}>
              <option value="">Preferred Batch Timing</option>
              <option value="Morning 6-8AM">Morning 6-8AM</option>
              <option value="Evening 4-6PM">Evening 4-6PM</option>
              <option value="Evening 6-8PM">Evening 6-8PM</option>
            </select>
          </div>

          <input
            type="email" name="parentEmail" placeholder="Parent Email (optional, for Parent Portal access)"
            value={form.parentEmail} onChange={handleChange} className={inputClass}
          />

          <button
            type="submit" disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-ocean-gradient text-white font-display font-bold shadow-md hover:bg-skyDark transition disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register Now 🎉"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Register;