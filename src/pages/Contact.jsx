import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend /api/contact once contact route is built
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-cloudSoft pt-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info */}
        <div>
          <span className="text-coral font-bold text-sm uppercase tracking-wide">Get In Touch</span>
          <h1 className="text-4xl font-display font-extrabold text-inkNavy mt-2 mb-5">
            We'd Love to Hear From You 💌
          </h1>
          <p className="text-inkNavy/50 mb-8">
            Questions about programs, schedules, or joining the Falcon family?
            Reach out — we usually reply within a day.
          </p>

          <div className="space-y-4">
            {[
              { icon: "📍", label: "Academy Street, City" },
              { icon: "📞", label: "+91 98765 43210" },
              { icon: "✉️", label: "info@falconswim.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <span className="text-inkNavy/70 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 w-full aspect-video rounded-3xl bg-sky-gradient flex items-center justify-center text-6xl shadow-lg">
            🏊‍♀️
          </div>
        </div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="friendly-card p-8 space-y-5"
        >
          {sent && (
            <div className="bg-mint/15 text-mint text-sm px-4 py-3 rounded-2xl font-semibold">
              ✅ Message sent! We'll get back to you shortly.
            </div>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-ocean-gradient text-white font-display font-bold shadow-md hover:bg-skyDark transition"
          >
            Send Message 💌
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;