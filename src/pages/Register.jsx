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
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [parentEmailError, setParentEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

  // const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
          if (!passwordRegex.test(form.password)) {
            setPasswordError(
              "Password must be 6-8 characters with uppercase, lowercase, number & special character."
            );
            setLoading(false);
            return;
          }
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
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "name") {
    // Only letters and spaces
    if (/^[A-Za-z\s]*$/.test(value)) {
      setForm({ ...form, [name]: value });
      setNameError("");
    } else {
      setNameError("Only letters are allowed.");
    }
    return;
  }
  // mail-validations
  if (name === "email") {
  setForm({ ...form, [name]: value });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "" || emailRegex.test(value)) {
    setEmailError("");
  } else {
    setEmailError("Please enter a valid email address.");
  }
  return;
}
// Parent Email Validation
if (name === "parentEmail") {
  setForm({ ...form, [name]: value });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Parent email optional
  if (value === "" || emailRegex.test(value)) {
    setParentEmailError("");
  } else {
    setParentEmailError("Please enter a valid parent email address.");
  }

  return;
}
  // Phone Validation
  if (name === "phone") {
    // Numbers only & max 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setForm({ ...form, [name]: value });
      setPhoneError("")
    }
    else{
      setPhoneError("Only numbers are allowed.")
    }
    return;
  }

  // passwords validation

  if (name === "password") {
    setForm({ ...form, password: value });

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;

    if (value === "") {
      setPasswordError("");
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be 6-8 characters with uppercase, lowercase, number & special character."
      );
    } else {
      setPasswordError("");
    }

    return;
  }


  setForm({ ...form, [name]: value });
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
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
              nameError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
          />
           {nameError && (<p className="text-red-500 text-sm mt-2">{nameError}</p>)}
            <input type="date" name="dob" value={form.dob} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number"
            value={form.phone} 
            onChange={handleChange} 
            maxLength={10}
            required
             className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                phoneError
                  ? "border-red-500"
                  : "border-cloudSoft focus:border-sky"
              }`}
              />
              {phoneError && (<p className="text-red-500 text-sm mt-2">{phoneError}</p>)} 
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                    emailError
                      ? "border-red-500"
                      : "border-cloudSoft focus:border-sky"
                  }`}
                  />
                  {emailError && (<p className="text-red-500 text-sm mt-2">{emailError}</p>)}
          </div>

           <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              maxLength={8}
              className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                passwordError
                  ? "border-red-500"
                  : "border-cloudSoft focus:border-sky"
              }`}
            />

            {passwordError && (
              <p className="text-red-500 text-sm mt-2">
                {passwordError}
              </p>
            )}

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
            type="email"
            name="parentEmail"
            placeholder="Parent Email (optional, for Parent Portal access)"
            value={form.parentEmail}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
              parentEmailError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
              />
             {parentEmailError && (<p className="text-red-500 text-sm mt-2">{parentEmailError}</p>)}                 
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