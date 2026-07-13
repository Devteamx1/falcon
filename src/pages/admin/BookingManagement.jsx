import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarCheck, FaCheckCircle, FaClock, FaMoneyBillWave, FaPlus,} from "react-icons/fa";
import { openModal } from "../../redux/slice/bookingSlice";
import BookingSearch from "../../pages/admin/bookings/BookingSearch";
import BookingFilter from "../../pages/admin/bookings/BookingFilter";
import BookingTable from "../../pages/admin/bookings/BookingTable";
import BookingModal from "../../pages/admin/bookings/BookingModal";
import BookingProfile from "../../pages/admin/bookings/BookingProfile";
import DeleteBookingModal from "../../pages/admin/bookings/DeleteBookingModal";

const BookingManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bookings } = useSelector((state) => state.bookings);

  const totalBookings = bookings.length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.bookingStatus === "Confirmed"
  ).length;

  const pendingBookings = bookings.filter(
    (booking) => booking.bookingStatus === "Pending"
  ).length;

  const totalRevenue = bookings
    .filter((booking) => booking.paymentStatus === "Paid")
    .reduce((sum, booking) => sum + Number(booking.amount), 0);

  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: <FaCalendarCheck />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Confirmed",
      value: confirmedBookings,
      icon: <FaCheckCircle />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Pending",
      value: pendingBookings,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8 p-10">

      {/* ================= HEADER ================= */}

      <div className="flex justify-between items-center flex-wrap gap-4">

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/admin")}
            className=" w-15 h-15 rounded-xl bg-white shadow border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Booking Management
            </h1>

            <p className="text-slate-500 mt-1">
              Manage swimming class bookings and schedules.
            </p>

          </div>

        </div>

        <button
          onClick={() => dispatch(openModal())}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          <FaPlus />
          Add Booking
        </button>

      </div>

      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition"
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {item.value}
                </h2>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-r ${item.color} text-white flex items-center justify-center text-2xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ================= SEARCH & FILTER ================= */}

      <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col lg:flex-row justify-between gap-4">

        <BookingSearch />

        {/* <BookingFilter /> */}

      </div>

      {/* ================= TABLE ================= */}

      <BookingTable />

      {/* ================= MODALS ================= */}

      <BookingModal />

      <BookingProfile />

      <DeleteBookingModal />

    </div>
  );
};

export default BookingManagement;