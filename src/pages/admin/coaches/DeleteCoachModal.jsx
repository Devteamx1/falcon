import { AnimatePresence, motion } from "framer-motion";
import { FaExclamationTriangle, FaTrash, FaTimes,} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { closeDeleteModal, clearSelectedCoach, deleteCoach,} from "../../../redux/slice/coachSlice";

const DeleteCoachModal = () => {
  const dispatch = useDispatch();

  const {isDeleteModalOpen,selectedCoach} = useSelector((state) => state.coaches);

  if (!selectedCoach) return null;

  const handleDelete = () => {
    dispatch(deleteCoach(selectedCoach.id));

    toast.success("Coach Deleted Successfully");

    dispatch(closeDeleteModal());

    dispatch(clearSelectedCoach());
  };

  const handleClose = () => {
    dispatch(closeDeleteModal());

    dispatch(clearSelectedCoach());
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
              scale: 0.85,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 60,
            }}
            transition={{ duration: .25 }}
           className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-125 bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

            {/* Header */}

            <div className="bg-red-50 p-8 flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

                <FaExclamationTriangle className="text-red-600 text-4xl" />

              </div>

              <h2 className="text-2xl font-bold mt-5">
                Delete Coach?
              </h2>

              <p className="text-gray-500 mt-2 text-center">
                This action cannot be undone.
              </p>

            </div>

            {/* Coach Info */}

            <div className="px-8 py-6">

              <div className="flex items-center gap-4">

                <img
                  src={selectedCoach.profile}
                  alt={selectedCoach.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {selectedCoach.name}
                  </h3>

                  <p className="text-gray-500">
                    {selectedCoach.specialization}
                  </p>

                  <small className="text-gray-400">
                    {selectedCoach.phone}
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

                Delete Coach
              </button>

            </div>

          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteCoachModal;