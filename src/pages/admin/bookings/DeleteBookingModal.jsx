import { AnimatePresence, motion } from "framer-motion";
import { FaExclamationTriangle, FaTrash, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  closeDeleteModal,
  clearSelectedBooking,
  deleteBooking,
} from "../../../redux/slice/bookingSlice";

const DeleteBookingModal = () => {
  const dispatch = useDispatch();

  const {
    isDeleteModalOpen,
    selectedBooking,
  } = useSelector((state) => state.bookings);

  if (!selectedBooking) return null;

  const handleDelete = () => {
    dispatch(deleteBooking(selectedBooking.id));

    toast.success("Booking Deleted Successfully");

    dispatch(closeDeleteModal());
    dispatch(clearSelectedBooking());
  };

  const handleClose = () => {
    dispatch(closeDeleteModal());
    dispatch(clearSelectedBooking());
  };

  return (
    <AnimatePresence>
      {isDeleteModalOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              bg-white
              rounded-3xl
              shadow-2xl
              w-[95%]
              md:w-125
              z-50
              overflow-hidden
            "
          >
            {/* Header */}

            <div className="bg-red-50 p-8 flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

                <FaExclamationTriangle
                  className="text-red-600 text-4xl"
                />

              </div>

              <h2 className="text-2xl font-bold mt-5 text-slate-800">
                Delete Booking?
              </h2>

              <p className="text-slate-500 text-center mt-2">
                This action cannot be undone.
              </p>

            </div>

            {/* Student */}

            <div className="px-8 py-6">

              <div className="flex items-center gap-4">

                <img
                  src={selectedBooking.profile}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">

                    {selectedBooking.studentName}

                  </h3>

                  <p className="text-slate-500">

                    {selectedBooking.course}

                  </p>

                  <small className="text-slate-400">

                    {selectedBooking.bookingDate}

                  </small>

                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="flex gap-4 p-6 border-t">

              <button
                onClick={handleClose}
                className="
                  flex-1
                  py-3
                  rounded-xl
                  border
                  border-slate-300
                  hover:bg-slate-100
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FaTimes />
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="
                  flex-1
                  py-3
                  rounded-xl
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FaTrash />
                Delete Booking
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteBookingModal;