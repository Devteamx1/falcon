import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/9344041859?text=Hi!%20I'm%20interested%20in%20Falcon%20Swimming%20Academy"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center text-2xl"
      aria-label="Chat on WhatsApp"
    >
      💬
    </motion.a>
  );
};

export default WhatsAppButton;