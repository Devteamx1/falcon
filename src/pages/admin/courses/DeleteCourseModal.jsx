import { AnimatePresence, motion } from "framer-motion";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {deleteCourse, closeDeleteModal, clearSelectedCourse} from "../../../redux/slice/courseSlice";

const DeleteCourseModal = () => {
  const dispatch = useDispatch();

  const { isDeleteModalOpen, selectedCourse } = useSelector(
    (state) => state.courses
  );

  const handleDelete = () => {
    if (!selectedCourse) return;

    dispatch(deleteCourse(selectedCourse.id));

    toast.success("Course deleted successfully 🗑️");

    dispatch(closeDeleteModal());

    dispatch(clearSelectedCourse());
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => {
              dispatch(closeDeleteModal());
              dispatch(clearSelectedCourse());
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">

              {/* Header */}

              <div className="bg-linear-to-r from-red-500 to-red-600 p-6 text-white">

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <FaTrashAlt className="text-xl" />
                    </div>

                    <div>

                      <h2 className="text-xl font-bold">
                        Delete Course
                      </h2>

                      <p className="text-red-100 text-sm">
                        This action cannot be undone.
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={() => {
                      dispatch(closeDeleteModal());
                      dispatch(clearSelectedCourse());
                    }}
                    className="hover:bg-white/20 p-2 rounded-lg transition"
                  >
                    <FaTimes />
                  </button>

                </div>

              </div>

              {/* Body */}

              <div className="p-8">

                <div className="flex justify-center mb-6">

                  <img
                    src={selectedCourse?.image}
                    alt={selectedCourse?.name}
                    className="w-28 h-28 rounded-2xl object-cover border shadow"
                  />

                </div>

                <h3 className="text-2xl font-bold text-center text-slate-800">

                  {selectedCourse?.name}

                </h3>

                <p className="text-center text-gray-500 mt-2">

                  {selectedCourse?.trainer}

                </p>

                <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-4">

                  <p className="text-red-600 text-center font-medium">

                    Are you sure you want to permanently delete this course?

                  </p>

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => {
                      dispatch(closeDeleteModal());
                      dispatch(clearSelectedCourse());
                    }}
                    className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition font-semibold"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
                  >
                    Delete Course
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

export default DeleteCourseModal;