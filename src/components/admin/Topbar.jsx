import { useState } from "react";
import {FaBars,FaBell,FaSearch,FaMoon,FaSun,FaUserCircle,FaChevronDown} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Topbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate()
  const handleLogout =()=>{
    alert("log-out Succesfully Intiated")
    navigate("/")
  }
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-2xl text-slate-700"
          >
            <FaBars />
          </button>
          {/* Search */}
          {/* <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-80">
            <FaSearch className="text-slate-500 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div> */}
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Dark Mode */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
          </button> */}

          {/* Notification */}
          <button className="relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <FaBell className="text-slate-700" />

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 hover:bg-slate-100 px-3 py-2 rounded-xl transition"
            >
              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className="hidden md:block text-left">
                <h4 className="font-semibold text-slate-800">
                  Arun
                </h4>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>

              <FaChevronDown />
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: .25 }}
                  className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border overflow-hidden"
                >
                  <button className="w-full text-left px-5 py-3 hover:bg-slate-100">
                    👤 My Profile
                  </button>

                  <button className="w-full text-left px-5 py-3 hover:bg-slate-100">
                    ⚙ Settings
                  </button>

                  <button className="w-full text-left px-5 py-3 hover:bg-slate-100">
                    🔔 Notifications
                  </button>

                  <hr />

                  <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50">
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Topbar;