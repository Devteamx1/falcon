import { useState } from "react";
import { motion } from "framer-motion";
import RippleButton from "./RippleButton.jsx";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // TODO: wire to backend /api/contact
    setTimeout(() => {
      setSent(true);
      setSending(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <section className="bg-bgLight py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Visit or Reach Out to Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg h-[300px] sm:h-[380px] lg:h-[420px]"
          >
            <iframe
              title="Falcon Swimming Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-xl w-full"
          >
            {sent && (
              <div className="bg-secondary/10 text-secondary text-sm px-4 py-3 rounded-2xl font-semibold mb-5">
                ✅ Message sent! We'll get back to you shortly.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text" name="name" placeholder="Your Name" value={form.name}
                onChange={handleChange} required
               className="w-full px-4 py-3 rounded-2xl border-2 border-bgLight focus:outline-none focus:border-primary transition"
              />
              <input
                type="tel" name="phone" placeholder="Phone Number" value={form.phone}
                onChange={handleChange} required
                className="px-4 py-3.5 rounded-2xl border-2 border-bgLight focus:outline-none focus:border-primary transition"
              />
            </div>

            <input
              type="email" name="email" placeholder="Email Address" value={form.email}
              onChange={handleChange} required
              className="w-full px-4 py-3.5 rounded-2xl border-2 border-bgLight focus:outline-none focus:border-primary transition mb-4"
            />

            <textarea
              name="message" placeholder="How can we help?" rows={5} value={form.message}
              onChange={handleChange} required
              className="w-full px-4 py-3.5 rounded-2xl border-2 border-bgLight focus:outline-none focus:border-primary transition mb-5"
            />

            <RippleButton
              as="button"
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-2xl bg-ocean-gradient text-white font-heading font-bold shadow-lg glow-hover disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </RippleButton>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-bgLight">
              {[
                // { icon: "📍", label: "Academy Street, City" },
                { icon: "📞", label: "+91 9344041859" },
                { icon: "✉️", label: "saranravi096@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-center sm:flex-col text-center gap-2">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <p className="text-xs sm:text-sm text-darkNavy/60 break-all">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;