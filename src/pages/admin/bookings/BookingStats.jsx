import {
  FaCalendarCheck,
  FaCalendarDay,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const BookingStats = () => {
  const { bookings } = useSelector((state) => state.bookings);

  const today = new Date().toISOString().split("T")[0];

  const totalBookings = bookings.length;

  const todayBookings = bookings.filter(
    (booking) => booking.bookingDate === today
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.bookingStatus === "Confirmed"
  ).length;

  const totalRevenue = bookings
    .filter((booking) => booking.paymentStatus === "Paid")
    .reduce((sum, booking) => sum + Number(booking.amount), 0);

  const cards = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: <FaCalendarCheck />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Today's Bookings",
      value: todayBookings,
      icon: <FaCalendarDay />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Confirmed",
      value: confirmedBookings,
      icon: <FaCheckCircle />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl bg-linear-to-r ${card.color}
              flex items-center justify-center text-white text-2xl shadow-lg`}
            >
              {card.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BookingStats;