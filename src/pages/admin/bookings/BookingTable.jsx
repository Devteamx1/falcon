import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEdit, FaTrash, FaCalendarAlt,} from "react-icons/fa";
import CoachBadge from "./CoachBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";
import BookingStatusBadge from "./StatusBadge";
import { setSelectedBooking, openModal, openProfile, openDeleteModal} from "../../../redux/slice/bookingSlice";

const BookingTable = () => {
  const dispatch = useDispatch();

  const {bookings,searchTerm,selectedStatus,selectedPayment} = useSelector((state) => state.bookings);

  const filteredBookings = bookings.filter((booking) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      booking.studentName.toLowerCase().includes(search) ||
      booking.phone.includes(search) ||
      booking.course.toLowerCase().includes(search) ||
      booking.coach.toLowerCase().includes(search);

    const matchesStatus =selectedStatus === "All" || booking.bookingStatus === selectedStatus;
    const matchesPayment =selectedPayment === "All" || booking.paymentStatus === selectedPayment;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b">

        <h2 className="text-xl font-bold text-slate-800">
          Booking List
        </h2>

        <span className="text-sm text-gray-500">
          {filteredBookings.length} Bookings
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4">Student</th>

              <th className="px-6 py-4">Course</th>

              <th className="px-6 py-4">Coach</th>

              <th className="px-6 py-4">Batch</th>

              <th className="px-6 py-4">Date</th>

              <th className="px-6 py-4">Payment</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  {/* Student */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <img
                        src={booking.profile}
                        alt={booking.studentName}
                        className="w-14 h-12 rounded-full object-cover"
                      />

                      <div>

                        <h4 className="font-semibold">
                          {booking.studentName}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {booking.phone}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Course */}

                  <td className="px-6 py-5">

                    <div>

                      <h4 className="font-medium">
                        {booking.course}
                      </h4>

                      <p className="text-xs text-gray-500">
                        {booking.pool}
                      </p>

                    </div>

                  </td>

                  {/* Coach */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <img src={booking.coachImage} className="w-10 h-10 rounded-full"/>
                      <span>{booking.coach}</span>
                    </div>

                  </td>

                  {/* Batch */}

                  <td className="px-6 py-5">

                    {booking.batch}

                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaCalendarAlt className="text-blue-500" />

                      <div>

                        <p>{booking.bookingDate}</p>

                        <small className="text-gray-500">
                          {booking.time}
                        </small>

                      </div>

                    </div>

                  </td>

                  {/* Payment */}

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.bookingStatus === "Confirmed"
                          ? "bg-blue-100 text-blue-700"
                          : booking.bookingStatus === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.bookingStatus}
                       </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-4">

                      <button
                        onClick={() => {
                          dispatch(setSelectedBooking(booking));
                          dispatch(openProfile());
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          dispatch(setSelectedBooking(booking));
                          dispatch(openModal());
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => {
                          dispatch(setSelectedBooking(booking));
                          dispatch(openDeleteModal());
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (
              <tr>

                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
                >
                  No bookings found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default BookingTable;