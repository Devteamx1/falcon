import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What age can my child start swimming lessons?",
    a: "We welcome swimmers as young as 3 years old in our Parent-Toddler program. From age 5 onward, kids join our structured Beginner track with dedicated kids' coaches.",
  },
  {
    q: "Do I need to know how to swim to join as an adult?",
    a: "Not at all! Our Adult Learners program is designed specifically for complete beginners. Many of our adult students join with zero prior swimming experience.",
  },
  {
    q: "What if my child misses a class?",
    a: "Pro Swimmer and Competitive plan members get free makeup class credits. Starter plan members can request a makeup class for a small additional fee, subject to batch availability.",
  },
  {
    q: "Are the pools safe and supervised?",
    a: "Yes — every session is supervised by certified lifeguards in addition to your assigned coach. We maintain strict safety protocols and small batch sizes for close supervision.",
  },
  {
    q: "How do I track my child's progress?",
    a: "Every enrolled student gets access to our Student Portal, where parents can view attendance, fee status, and skill milestones in real time.",
  },
  {
    q: "Can I switch membership plans later?",
    a: "Absolutely. You can upgrade, downgrade, or pause your plan anytime by speaking with our front desk or through the parent dashboard.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-heading font-bold text-darkNavy pr-6">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-darkNavy/60 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-sm section-label uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkNavy mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;