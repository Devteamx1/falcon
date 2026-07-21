import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaMoneyBillWave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  addPayment,
  updatePayment,
  closeModal,
  clearSelectedPayment,
} from "../../../redux/slice/paymentSlice";

const PaymentModal = () => {
  const dispatch = useDispatch();

  const {isModalOpen,selectedPayment} = useSelector((state) => state.payments);

  const [nameError, setNameError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    profile: "",
    course: "",
    batch: "",
    amount: "",
    paymentMethod: "Cash",
    paymentDate: "",
    status: "Paid",
    referenceNo: "",
    notes: "",
  });

  useEffect(() => {
    if (selectedPayment) {
      setFormData(selectedPayment);
    } else {
      setFormData({
        studentName: "",
        profile: "",
        course: "",
        batch: "",
        amount: "",
        paymentMethod: "Cash",
        paymentDate: "",
        status: "Paid",
        referenceNo: "",
        notes: "",
      });
    }
  }, [selectedPayment]);

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
        if (name === "course") {
        // Only letters and spaces
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setCourseError("");
        } else {
          setCourseError("Only letters are allowed.");
        }
        return;
      }
       // Phone Validation
      // if (name === "phone") {
      //   // Numbers only & max 10 digits
      //   if (/^\d{0,10}$/.test(value)) {
      //     setFormData({ ...formData, [name]: value });
      //     setPhoneError("")
      //   }
      //   else{
      //     setPhoneError("Only numbers are allowed. ( 1 - 10)")
      //   }
      //   return;
      // }
        // mail-validations
      //   if (name === "email") {
      //   setFormData({ ...formData, [name]: value });
      //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //   if (value === "" || emailRegex.test(value)) {
      //     setEmailError("");
      //   } else {
      //     setEmailError("Please enter a valid email address.");
      //   }
      //   return;
      // }
    setFormData({ ...formData, [name]: value });
   }

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearSelectedPayment());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPayment) {
      dispatch(
        updatePayment({
          ...formData,
          id: selectedPayment.id,
        })
      );

      toast.success("Payment Updated Successfully");
    } else {
      dispatch(
        addPayment({
          ...formData,
          id: Date.now(),
        })
      );

      toast.success("Payment Added Successfully");
    }

    handleClose();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}

            <div className="bg-green-600 text-white px-6 py-5 flex justify-between items-center">

              <div className="flex items-center gap-3">

                <FaMoneyBillWave className="text-2xl" />

                <div>

                  <h2 className="text-2xl font-bold">

                    {selectedPayment
                      ? "Edit Payment"
                      : "Add Payment"}

                  </h2>

                  <p className="text-green-100 text-sm">
                    Payment Information
                  </p>

                </div>

              </div>

              <button
                onClick={handleClose}
                className="text-xl"
              >
                <FaTimes />
              </button>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5 max-h-[70vh] overflow-y-auto"
            >
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Student Name"
                  required
                  className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
                     nameError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
                      />
                      {nameError && (<p className="text-red-500 text-sm mt-2">{nameError}</p>)}

                <input
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  className="border rounded-xl p-3"
                />

                <input
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Course"
                  required
                     className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
                     courseError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
                      />
                      {courseError && (<p className="text-red-500 text-sm mt-2">{courseError}</p>)}

                <input
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  placeholder="Batch"
                  className="border rounded-xl p-3"
                  required
                />

                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="border rounded-xl p-3"
                  required
                />

                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                  className="border rounded-xl p-3"
                  required
                />

                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="border rounded-xl p-3"
                >
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Card</option>
                  <option>Net Banking</option>
                </select>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border rounded-xl p-3"
                >
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>

                <input
                  name="referenceNo"
                  value={formData.referenceNo}
                  onChange={handleChange}
                  placeholder="Reference Number"
                  className="border rounded-xl p-3 md:col-span-2"
                />

                <textarea
                  rows="4"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Notes..."
                  className="border rounded-xl p-3 md:col-span-2 resize-none"
                />

              </div>

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl"
                >
                  {selectedPayment ? "Update Payment" : "Add Payment"}
                </button>

              </div>

            </form>

          </motion.div>
          </div>
        </>
      
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;