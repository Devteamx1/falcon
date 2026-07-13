import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCreditCard,
  FaBook,
  FaUserGraduate,
  FaStickyNote,
  FaHashtag,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  closeProfile,
  clearSelectedPayment,
} from "../../../redux/slice/paymentSlice";

const PaymentProfile = () => {
  const dispatch = useDispatch();

  const {
    isProfileOpen,
    selectedPayment,
  } = useSelector((state) => state.payments);

  if (!selectedPayment) return null;

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedPayment());
  };

  const statusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Overdue":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .3 }}
            className="
              fixed
              top-0
              right-0
              h-full
              w-full
              md:w-112.5
              bg-white
              shadow-2xl
              z-50
              overflow-y-auto
            "
          >
            {/* Header */}

            <div className="bg-green-600 text-white p-6">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  Payment Details
                </h2>

                <button
                  onClick={handleClose}
                  className="text-2xl"
                >
                  <FaTimes />
                </button>

              </div>

            </div>

            {/* Profile */}

            <div className="p-6">

              <div className="flex flex-col items-center">

                <img
                  src={selectedPayment.profile}
                  alt={selectedPayment.studentName}
                  className="w-28 h-28 rounded-full object-cover border-4 border-green-200"
                />

                <h3 className="mt-4 text-2xl font-bold">
                  {selectedPayment.studentName}
                </h3>

                <span
                  className={`mt-3 px-4 py-2 rounded-full text-sm font-semibold ${statusColor(
                    selectedPayment.status
                  )}`}
                >
                  {selectedPayment.status}
                </span>

              </div>

              {/* Details */}

              <div className="mt-8 space-y-5">

                <Info
                  icon={<FaBook />}
                  label="Course"
                  value={selectedPayment.course}
                />

                <Info
                  icon={<FaUserGraduate />}
                  label="Batch"
                  value={selectedPayment.batch}
                />

                <Info
                  icon={<FaMoneyBillWave />}
                  label="Amount"
                  value={`₹${selectedPayment.amount}`}
                />

                <Info
                  icon={<FaCreditCard />}
                  label="Payment Method"
                  value={selectedPayment.paymentMethod}
                />

                <Info
                  icon={<FaCalendarAlt />}
                  label="Payment Date"
                  value={selectedPayment.paymentDate}
                />

                <Info
                  icon={<FaHashtag />}
                  label="Reference No"
                  value={selectedPayment.referenceNo}
                />

                <Info
                  icon={<FaStickyNote />}
                  label="Notes"
                  value={selectedPayment.notes}
                />

              </div>

            </div>

          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">

    <div className="text-green-600 text-xl mt-1">
      {icon}
    </div>

    <div>

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h4 className="font-semibold text-slate-700">
        {value}
      </h4>

    </div>

  </div>
);

export default PaymentProfile;