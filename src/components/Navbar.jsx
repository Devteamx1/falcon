import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext.jsx";
import RippleButton from "./RippleButton.jsx";
import { useLocation } from "react-router-dom";
// import Login from "../pages/Login.jsx"
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Programs", path: "/courses" },
  // { name: "Coaches", path: "/trainers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Schedule", path: "/schedule" },
  { name: "Contact", path: "/contact" },
  // { name: "Demo", path: "/demo" }

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    className={`w-full px-6 py-4 transition-all duration-500 ${
    isHomePage
      ? scrolled
        ? "bg-slate-900/95 shadow-2xl backdrop-blur-2xl"
        : "bg-white/3 backdrop-blur-xl"
      : "bg-slate-900 shadow-2xl"
  }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/public/logo.png"
            alt="Falcon Swimming Academy"
            className="h-11 w-11 object-contain"
          />
          <span className="text-xl font-heading font-bold text-white tracking-wide leading-tight">
            Falcon <span className="text-secondary block text-[10px] font-semibold tracking-widest -mt-1">SWIMMING ACADEMY</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
         <NavLink
            key={link.name}
            to={link.path}
            onClick={() => {
              // Already on Home page
              if (link.path === "/" && location.pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }

              setIsOpen(false);
            }}
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-secondary"
                  : "text-white/85 hover:text-secondary"
              }`
            }
          >
            {link.name}
          </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Link
                to={user.role === "student" ? "/student/dashboard" : "/parent/dashboard"}
                className="text-white/85 text-sm font-semibold hover:text-secondary"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-5 py-2 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white/85 text-sm font-semibold hover:text-secondary">
                Login
              </Link>
              <RippleButton
                to="/register"
                className="px-6 py-2.5 rounded-full bg-ocean-gradient text-white text-sm font-bold shadow-lg glow-hover"
              >
                Book Free Trial
              </RippleButton>
            </>
          )}
        </div>

        <button className="lg:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden  px-6 pb-6 mt-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-white/90 text-sm font-semibold">
              {link.name}
            </NavLink>
          ))}
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-white/90 text-sm font-semibold">Login</Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 rounded-full bg-ocean-gradient text-white text-sm font-bold text-center"
          >
            Book Free Trial
          </Link>
        </motion.div>
      )}
    </motion.nav>
    </header>
  );
};

export default Navbar;