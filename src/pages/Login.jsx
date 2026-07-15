import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const roles = [
  { label: "Student", value: "student", emoji: "🎓" },
  // { label: "Parent", value: "student", emoji: "👨‍👩‍👧" },
  { label: "Coach", value: "coach", emoji: "🧑‍🏫" },
  { label: "Admin", value: "admin", emoji: "🛠️" },
];

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeRole, setActiveRole] = useState("student");

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", { ...form, role: activeRole });
      login(data);
      if (data.role === "admin" || data.role === "coach") {
        window.location.href = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";
      } else {
        navigate("/student/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };
// if (data.role === "admin" || data.role === "coach") {
//   window.location.href = import.meta.env.VITE_ADMIN_URL;
// } else {
//   navigate("/student/dashboard");
// };

  return (
    <div className="bg-cloudSoft py-16 min-h-[80vh] flex items-center pt-32">
      <div className="max-w-md mx-auto px-6 w-full">
        <div className="text-center mb-8">
          <span className="text-5xl block ">🐬</span>
          <span className="text-coral font-bold text-sm uppercase tracking-wide">Welcome Back</span>
          <h1 className="text-4xl font-display font-extrabold text-inkNavy mt-2">Login</h1>
        </div>

        {/* Role Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6 ">
          {roles.map((r) => (
            <button
              key={r.label}
              type="button"
              onClick={() => setActiveRole(r.value)}
              className={`py-2.5 rounded-2xl text-xs font-bold transition flex flex-col items-center gap-1 ${
                activeRole === r.value
                  ? "bg-ocean-gradient text-white shadow-md"
                  : "bg-white text-inkNavy/50 border-2 border-cloudSoft"
              }`}
            >
              <span className="text-lg">{r.emoji}</span>
              {r.label}
            </button>
          ))}
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

          <input
            type="email" name="email" placeholder="Email Address" value={form.email}
            onChange={handleChange} required
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition"
          />
          <input
            type="password" name="password" placeholder="Password" value={form.password}
            onChange={handleChange} required
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition"
          />

          <button
            type="submit" disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-ocean-gradient text-white font-display font-bold shadow-md hover:bg-skyDark transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <p className="text-center text-sm text-inkNavy/50">
            New here?{" "}
            <Link to="/register" className="text-coral font-bold hover:underline">
              Join the family 🎉
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;