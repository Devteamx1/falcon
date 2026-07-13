import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gradient pt-20 pb-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 w-full pb-14 border-b border-white/10">
    {/* Brand */}
      <div className="col-span-2 md:col-span-2">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-2xl">🌊</span>
          <span className="text-xl font-heading font-bold text-white">
            Falcon <span className="text-secondary">Swim</span>
          </span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
          Premium swimming academy delivering world-class coaching,
          safety-first training, and proven results for swimmers of
          every age and level.
        </p>

        <div className="flex gap-4">
          {["📘", "📸", "🐦", "▶️"].map((icon, idx) => (
            <a key={idx} href="#">
              {icon}
            </a>
          ))}
        </div>
      </div>
  {/* Explore */}
  <div>
    <h4 className="font-heading font-bold text-white mb-5">Explore</h4>
    <ul className="space-y-3 text-sm text-white/50">
      <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
      <li><Link to="/courses" className="hover:text-secondary transition">Programs</Link></li>
      <li><Link to="/trainers" className="hover:text-secondary transition">Coaches</Link></li>
      <li><Link to="/gallery" className="hover:text-secondary transition">Gallery</Link></li>
      <li><Link to="/schedule" className="hover:text-secondary transition">Schedule</Link></li>
    </ul>
  </div>
  {/* Portals */}
  <div>
    <h4 className="font-heading font-bold text-white mb-5">Portals</h4>
    <ul className="space-y-3 text-sm text-white/50">
      <li><Link to="/login" className="hover:text-secondary transition">Student Login</Link></li>
      <li><Link to="/login" className="hover:text-secondary transition">Parent Login</Link></li>
      <li><Link to="/register" className="hover:text-secondary transition">Enroll Now</Link></li>
      <li><Link to="/pricing" className="hover:text-secondary transition">Membership Plans</Link></li>
    </ul>
  </div>
  {/* Contact */}
  <div className="col-span-2 md:col-span-1 mr-2">
    <h4 className="font-heading font-bold text-white mb-5">Contact</h4>
    <ul className="space-y-3 text-sm text-white/50">
      <li className="flex items-start gap-2">📍 <span>Academy Street, City, 560001</span></li>
      <li className="flex items-start gap-2">📞 <span>+91 98765 43210</span></li>
      <li className="flex items-start gap-2">✉️ <span>info@falconswim.com</span></li>
      <li className="flex items-start gap-2">🕐 <span>Mon–Sun: 6AM – 8PM</span></li>
    </ul>
  </div>
</div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Falcon Swimming Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;