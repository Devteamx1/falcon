import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {closeDeleteModal,deleteStudent,clearSelectedStudent,} from "../../../redux/slice/studentSlice";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
const DeleteStudentModal = () => {
  const dispatch = useDispatch();

  const { isDeleteModalOpen, selectedStudent } = useSelector(
    (state) => state.students
  );

  const handleDelete = () => {
    if (!selectedStudent) return;
    toast.success("Student Deleted Successfully 🗑️");
    dispatch(closeDeleteModal());
    dispatch(clearSelectedStudent());
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
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => dispatch(closeDeleteModal())}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-5"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">

              {/* Header */}

              <div className="flex justify-between items-center p-6 border-b">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    <FaTrashAlt />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      Delete Student
                    </h2>

                    <p className="text-sm text-gray-500">
                      This action cannot be undone.
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    dispatch(closeDeleteModal())
                  }
                >
                  <FaTimes />
                </button>

              </div>

              {/* Body */}

              <div className="p-6">

                <p className="text-gray-600 leading-7">
                  Are you sure you want to delete
                  <span className="font-bold text-red-600">
                    {" "}
                    {selectedStudent?.name}
                  </span>
                  ?
                </p>

                <div className="mt-8 flex justify-end gap-4">

                  <button
                    onClick={() =>
                      dispatch(closeDeleteModal())
                    }
                    className="px-6 py-3 rounded-xl border"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteStudentModal;