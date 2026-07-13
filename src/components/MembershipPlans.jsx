import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RippleButton from "./RippleButton.jsx";

const plans = [
  {
    name: "Starter",
    price: "2,500",
    period: "/month",
    desc: "Perfect for beginners dipping their toes in.",
    features: [
      "2 sessions per week",
      "Group coaching (1:8 ratio)",
      "Basic progress tracking",
      "Access to kids' pool",
    ],
    highlight: false,
  },
  {
    name: "Pro Swimmer",
    price: "4,500",
    period: "/month",
    desc: "Our most popular plan for consistent growth.",
    features: [
      "4 sessions per week",
      "Small group coaching (1:5 ratio)",
      "Detailed progress reports",
      "Access to all pools",
      "1 free makeup class/month",
    ],
    highlight: true,
  },
  {
    name: "Competitive",
    price: "7,500",
    period: "/month",
    desc: "For serious swimmers training toward competition.",
    features: [
      "6 sessions per week",
      "1:3 personalized coaching",
      "Dryland strength training",
      "Competition entry support",
      "Priority batch scheduling",
    ],
    highlight: false,
  },
];

const MembershipPlans = () => {
  return (
    <section className="bg-bgLight py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Membership Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-darkNavy/50 mt-4 max-w-xl mx-auto">
            Choose the plan that fits your swimmer's goals — upgrade or
            switch anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-dark-gradient text-white shadow-2xl md:-translate-y-4"
                  : "glass-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-darkNavy text-xs font-bold shadow-md">
                  MOST POPULAR
                </span>
              )}

              <h3 className={`font-heading font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-darkNavy"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-darkNavy/50"}`}>
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-heading font-extrabold ${plan.highlight ? "text-secondary" : "text-primary"}`}>
                  ₹{plan.price}
                </span>
                <span className={plan.highlight ? "text-white/50" : "text-darkNavy/40"}>{plan.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      plan.highlight ? "bg-secondary/20 text-secondary" : "bg-primary/10 text-primary"
                    }`}>
                      ✓
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-darkNavy/65"}`}>{f}</span>
                  </div>
                ))}
              </div>

              <RippleButton
                to="/register"
                className={`block text-center py-3 rounded-full font-bold transition ${
                  plan.highlight
                    ? "bg-ocean-gradient text-white shadow-lg glow-hover"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Choose {plan.name}
              </RippleButton>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-darkNavy/40 text-sm mt-10">
          Need a custom plan? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for family or group discounts.
        </p>
      </div>
    </section>
  );
};

export default MembershipPlans;