import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { closeModal, addBooking, updateBooking,} from "../../../redux/slice/bookingSlice";

const BookingModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, selectedBooking } = useSelector((state) => state.bookings);

  const initialForm = {
    studentName: "",
    profile: "https://i.pravatar.cc/150",

    phone: "",
    email: "",

    course: "",
    coach: "",
    coachImage: "https://i.pravatar.cc/150",

    batch: "",
    pool: "",

    bookingDate: "",
    time: "",

    amount: "",

    paymentStatus: "Pending",

    bookingStatus: "Pending",

    remarks: "",
  };

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (selectedBooking) {
      setFormData(selectedBooking);
    } else {
      setFormData(initialForm);
    }
  }, [selectedBooking]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "studentName") {
        // Only letters and spaces
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setNameError("");
        } else {
          setNameError("Only letters are allowed.");
        }
        return;
      }
       // Phone Validation
      if (name === "phone") {
        // Numbers only & max 10 digits
        if (/^\d{0,10}$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setPhoneError("")
        }
        else{
          setPhoneError("Only numbers are allowed. ( 1 - 10)")
        }
        return;
      }
        // mail-validations
        if (name === "email") {
        setFormData({ ...formData, [name]: value });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "" || emailRegex.test(value)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email address.");
        }
        return;
      }
    setFormData({ ...formData, [name]: value });
   }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeModal())}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: 600 }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] xl:w-[40%] bg-white shadow-2xl z-50 overflow-y-auto">

            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-5 flex justify-between items-center z-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {selectedBooking
                    ? "Edit Booking"
                    : "New Booking"}
                </h2>
                <p className="text-sm text-gray-500 mt-1"> Swimming Academy Booking Form </p>
              </div>

              <button onClick={() => dispatch(closeModal())} className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-500 hover:text-white transition">
                <FaTimes className="mx-auto" />
              </button>
            </div>
            {/* Form */}
            <form className="p-6 space-y-6">
              <div className="space-y-5">
                <h3 className="font-semibold text-lg text-slate-700  pb-2">Student Information</h3>
                {/* Student Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Enter student name"
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
                     nameError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
                      />
                      {nameError && (<p className="text-red-500 text-sm mt-2">{nameError}</p>)}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                        emailError
                          ? "border-red-500"
                          : "border-cloudSoft focus:border-sky"
                      }`}
                      />
                  {emailError && (<p className="text-red-500 text-sm mt-2">{emailError}</p>)}
                  
                </div>
              </div>


            <div className="space-y-5">
              <h3 className="font-semibold text-lg text-slate-700 border-b pb-2">Course Information</h3>
              {/* Course */}
              <div>
                <label className="block text-sm font-medium mb-2">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Course</option>
                  <option>Beginner Swimming</option>
                  <option>Intermediate Swimming</option>
                  <option>Advanced Swimming</option>
                  <option>Kids Swimming</option>
                  <option>Women's Swimming</option>
                </select>
              </div>
              {/* Coach */}
              <div>
                <label className="block text-sm font-medium mb-2"> Coach </label>
                <select
                  name="coach"
                  value={formData.coach}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Coach</option>
                  <option>Rahul Sharma</option>
                  <option>Karthik</option>
                  <option>Sathish</option>
                  <option>Vignesh</option>
                  <option>Arjun</option>
                </select>
              </div>
              {/* Batch */}
              <div>
                <label className="block text-sm font-medium mb-2">Batch</label>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Batch</option>
                  <option>Morning Batch</option>
                  <option>Evening Batch</option>
                  <option>Kids Batch</option>
                  <option>Advanced Batch</option>
                </select>
              </div>
              {/* Pool */}
              <div>
                <label className="block text-sm font-medium mb-2">Pool</label>
                <select
                  name="pool"
                  value={formData.pool}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Pool</option>
                  <option>Pool A</option>
                  <option>Pool B</option>
                  <option>Olympic Pool</option>
                  <option>Kids Pool</option>
                </select>
              </div>
            </div>

          <div className="space-y-5">
             <h3 className="font-semibold text-lg text-slate-700 border-b pb-2">Booking Details</h3>

                {/* Booking Date */}
                <div>
                  <label className="block text-sm font-medium mb-2">Booking Date</label>
                  <input
                    type="date"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium mb-2">Time Slot</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Time</option>
                  <option>05:00 AM - 06:00 AM</option>
                  <option>06:00 AM - 07:00 AM</option>
                  <option>07:00 AM - 08:00 AM</option>
                  <option>08:00 AM - 09:00 AM</option>
                  <option>05:00 PM - 06:00 PM</option>
                  <option>06:00 PM - 07:00 PM</option>
                  <option>07:00 PM - 08:00 PM</option>
                </select>
              </div>
        </div>


            <div className="space-y-5">
              <h3 className="font-semibold text-lg text-slate-700 border-b pb-2">Payment Information</h3>

            {/* Amount */}
            <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

        {/* Payment Status */}
            <div>
                <label className="block text-sm font-medium mb-2">Payment Status</label>

                <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" >
                <option value="">Select Payment Status</option>
                <option>Paid</option>
                <option>Pending</option>
                </select>
              </div>
            </div>

            <div className="space-y-5">
               <h3 className="font-semibold text-lg text-slate-700 border-b pb-2">Booking Status</h3>
            <div>
                <label className="block text-sm font-medium mb-2">Booking Status</label>
                <select
                name="bookingStatus"
                value={formData.bookingStatus}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Cancelled</option>
                </select>
            </div>
            </div>

          <div>
            <label className="block text-sm font-medium mb-2">Remarks</label>
            <textarea
              rows={4}
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter remarks..."
              className="w-full border rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          <div className="flex gap-4 pt-6">
            <button type="button"
                onClick={() => {
                dispatch(closeModal());
                setFormData(initialForm);
              }}
              className="flex-1 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition">Cancel</button>

            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
              {selectedBooking ? "Update Booking" : "Add Booking"}
            </button>
          </div>

            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;