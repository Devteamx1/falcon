import { motion } from "framer-motion";
import {FaTachometerAlt,FaBoxOpen,FaUsers,FaImages,FaChartBar,FaCog,FaUserCircle,FaClipboardList,FaTags,
  FaBell,FaSignOutAlt,FaChevronLeft,FaChevronRight,FaUserShield,FaCalendarCheck,FaClipboardCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/images/logo1.jpeg";
// import logo1 from "../../assets/img/logo1.jpeg"
const menuItems = [
  {
    name: "Dashboard",
    icon: <FaTachometerAlt />,
    path: "/admin",
  },
    {
    name: "Coaches",
    icon: <FaUserShield />,
    path: "/admin/coaches",
  },
  {
    name: "Students",
    icon: <FaUsers />,
    path: "/admin/students",
  },
  {
    name: "Courses",
    icon: <FaBoxOpen />,
    path: "/admin/courses",
  },
  {
    name: "Attendance",
    icon: <FaClipboardCheck />,
    path: "/admin/attendance",
  },
  {
    name: "Payments",
    icon: <FaTags />,
    path: "/admin/payments",
  },
  {
    name: "Bookings",
    icon: <FaCalendarCheck  />,
    path: "/admin/bookings",
  },
  { 
    name: "Report&Analytics",
    icon: <FaChartBar />,
    path: "/admin/reports",
  },
  {
    name: "Communication",
    icon: <FaBell />,
    path: "/admin/communications",
  },
  // {
  //   name: "Settings",
  //   icon: <FaCog />,
  //   path: "/admin/settings",
  // },
  // {
  //   name: "Profile",
  //   icon: <FaUserCircle />,
  //   path: "/admin/profile",
  // },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <motion.aside
      animate={{
        width: isSidebarOpen ? 260 : 90,
      }}
      transition={{ duration: 0.3 }}
      className="hidden lg:flex flex-col bg-slate-900 text-white h-screen sticky top-0 shadow-xl"
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-xl">
            <img src={logo1} alt="Logo" className="w-full h-full rounded-xl" />
          </div>

          {isSidebarOpen && (
            <div>
              <h1 className="font-bold text-lg">Falcon</h1>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-slate-300 hover:text-white"
        >
          {isSidebarOpen ? (
            <FaChevronLeft />
          ) : (
            <FaChevronRight />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            {isSidebarOpen && (
              <span className="font-medium">{item.name}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      {/* <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="w-11 h-11 rounded-full border-2 border-blue-500"
          />

          {isSidebarOpen && (
            <div className="flex-1">
              <h2 className="font-semibold">Admin</h2>
              <p className="text-xs text-slate-400">
                administrator
              </p>
            </div>
          )}
        </div>

        <button
          className="mt-5 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition"
        >
          <FaSignOutAlt />
          {isSidebarOpen && "Logout"}
        </button>
      </div> */}
    </motion.aside>
  );
};

export default Sidebar;