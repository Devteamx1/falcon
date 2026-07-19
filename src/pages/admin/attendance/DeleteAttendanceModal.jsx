import { AnimatePresence, motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  closeDeleteModal,
  clearSelectedAttendance,
  deleteAttendance,
} from "../../../redux/slice/attendanceSlice";

const DeleteAttendanceModal = () => {
  const dispatch = useDispatch();

  const {
    isDeleteModalOpen,
    selectedAttendance,
  } = useSelector((state) => state.attendance);

  if (!selectedAttendance) return null;

  const handleDelete = () => {
    dispatch(deleteAttendance(selectedAttendance.id));

    toast.success("Attendance Deleted Successfully");

    dispatch(closeDeleteModal());
    dispatch(clearSelectedAttendance());
  };

  const handleClose = () => {
    dispatch(closeDeleteModal());
    dispatch(clearSelectedAttendance());
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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            transition={{ duration: .25 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden" >
              
            {/* Header */}

            <div className="bg-red-50 p-8 flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

                <FaExclamationTriangle className="text-red-600 text-4xl" />

              </div>

              <h2 className="text-2xl font-bold mt-5">
                Delete Attendance?
              </h2>

              <p className="text-gray-500 mt-2 text-center">
                This attendance record will be permanently deleted.
              </p>

            </div>

            {/* Student Info */}

            <div className="px-8 py-6">

              <div className="flex items-center gap-4">

                <img
                  src={selectedAttendance.profile}
                  alt={selectedAttendance.studentName}
                  className="w-16 h-16 rounded-full object-cover border"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {selectedAttendance.studentName}
                  </h3>

                  <p className="text-gray-500">
                    {selectedAttendance.studentId}
                  </p>

                  <small className="text-gray-400">
                    {selectedAttendance.date}
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
                  border-gray-300
                  hover:bg-gray-100
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

                Delete Attendance
              </button>

            </div>

          </motion.div>
</div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteAttendanceModal;