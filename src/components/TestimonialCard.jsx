import { motion } from "framer-motion";

const avatarColors = ["bg-sky", "bg-coral", "bg-mint", "bg-sunshine"];

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="friendly-card p-6 text-center relative"
    >
      <div className="absolute top-4 right-6 text-3xl text-sky/20 font-display">"</div>
      <div
        className={`w-16 h-16 rounded-full ${avatarColors[index % avatarColors.length]} mx-auto mb-4 flex items-center justify-center text-2xl text-white font-display font-bold shadow-md`}
      >
        {testimonial.name.charAt(0)}
      </div>
      <p className="text-inkNavy/60 text-sm mb-4 leading-relaxed">{testimonial.message}</p>
      <h4 className="font-display font-bold text-inkNavy">{testimonial.name}</h4>
      <span className="text-xs text-sky font-semibold">{testimonial.role}</span>
    </motion.div>
  );
};

export default TestimonialCard;