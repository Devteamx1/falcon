import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {closeProfile,clearSelectedBooking} from "../../../redux/slice/bookingSlice";
import {FaTimes,FaPhone,FaEnvelope,FaCalendarAlt,FaClock,FaSwimmingPool,FaUserTie,FaBookOpen} from "react-icons/fa";

const BookingProfile = () => {
  const dispatch = useDispatch();
  const { isProfileOpen, selectedBooking } = useSelector((state) => state.bookings);

  if (!selectedBooking) return null;

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedBooking());
  };

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white shadow-2xl z-[9999] overflow-y-auto ">
            {/* Header */}

            <div className="relative">
              <div className="h-36 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600"></div>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition"
              >
                <FaTimes className="mx-auto" />
              </button>
              <div className="absolute left-1/2 -bottom-14 -translate-x-1/2">
                <img
                  src={selectedBooking.profile}
                  alt=""
                  className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="pt-20 px-6 pb-8">

              {/* Student */}

              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-800">{selectedBooking.studentName}</h2>
                <p className="text-slate-500">Swimming Student</p>
              </div>

              {/* Contact */}

              <div className="mt-8 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <FaPhone className="text-blue-600" />

                    <span>{selectedBooking.phone}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaEnvelope className="text-blue-600" />

                    <span>{selectedBooking.email}</span>

                  </div>

                </div>

              </div>

              {/* Course */}

              <div className="mt-6 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold mb-4">
                  Course Details
                </h3>

                <div className="space-y-4">

                  <div className="flex justify-between">

                    <span className="flex items-center gap-2">
                      <FaBookOpen />
                      Course
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.course}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="flex items-center gap-2">
                      <FaUserTie />
                      Coach
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.coach}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="flex items-center gap-2">
                      <FaSwimmingPool />
                      Pool
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.pool}
                    </span>

                  </div>

                </div>

              </div>
                            {/* ==============================
                  Booking Information
              ============================== */}

              <div className="mt-6 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold mb-5">
                  Booking Information
                </h3>

                <div className="space-y-4">

                  <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-slate-600">
                      <FaCalendarAlt />
                      Booking Date
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.bookingDate}
                    </span>

                  </div>

                  <div className="flex justify-between items-center">

                    <span className="flex items-center gap-2 text-slate-600">
                      <FaClock />
                      Time Slot
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.time}
                    </span>

                  </div>

                  <div className="flex justify-between items-center">

                    <span className="text-slate-600">
                      Batch
                    </span>

                    <span className="font-semibold">
                      {selectedBooking.batch}
                    </span>

                  </div>

                </div>

              </div>

              {/* ==============================
                  Payment Details
              ============================== */}

              <div className="mt-6 rounded-2xl bg-linear-to-r from-green-500 to-emerald-600 p-5 text-white shadow-lg">

                <h3 className="font-semibold text-lg">
                  Payment Details
                </h3>

                <div className="mt-5 flex justify-between">

                  <div>

                    <p className="text-green-100 text-sm">
                      Amount
                    </p>

                    <h2 className="text-3xl font-bold">
                      ₹{selectedBooking.amount}
                    </h2>

                  </div>

                  <div>

                    <p className="text-green-100 text-sm">
                      Payment
                    </p>

                    <span
                      className={`inline-flex mt-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        selectedBooking.paymentStatus === "Paid"
                          ? "bg-white text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {selectedBooking.paymentStatus}
                    </span>

                  </div>

                </div>

              </div>

              {/* ==============================
                  Booking Status
              ============================== */}

              <div className="mt-6 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold mb-4">
                  Booking Status
                </h3>

                <span
                  className={`inline-flex px-5 py-2 rounded-full text-sm font-semibold
                  ${
                    selectedBooking.bookingStatus === "Confirmed"
                      ? "bg-blue-100 text-blue-700"
                      : selectedBooking.bookingStatus === "Completed"
                      ? "bg-green-100 text-green-700"
                      : selectedBooking.bookingStatus === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedBooking.bookingStatus}
                </span>

              </div>

              {/* ==============================
                  Remarks
              ============================== */}

              <div className="mt-6 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold mb-4">
                  Remarks
                </h3>

                <p className="text-slate-600 leading-7">

                  {selectedBooking.remarks
                    ? selectedBooking.remarks
                    : "No remarks available."}

                </p>

              </div>

              {/* ==============================
                  Close Button
              ============================== */}

              <button
                onClick={handleClose}
                className="
                  mt-8
                  w-full
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  transition
                "
              >
                Close Profile
              </button>

            </div>

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
};

export default BookingProfile;