import { AnimatePresence, motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {closeDeleteModal,clearSelectedMessage,deleteMessage} from "../../../redux/slice/communicationSlice";

const DeleteCommunicationModal = () => {
  const dispatch = useDispatch();

  const {
    isDeleteModalOpen,
    selectedMessage,
  } = useSelector((state) => state.communication);

  if (!selectedMessage) return null;

  const handleDelete = () => {
    dispatch(deleteMessage(selectedMessage.id));

    toast.success("Message Deleted Successfully");

    dispatch(closeDeleteModal());

    dispatch(clearSelectedMessage());
  };

  const handleClose = () => {
    dispatch(closeDeleteModal());

    dispatch(clearSelectedMessage());
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
              scale: .85,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .85,
              y: 50,
            }}
            transition={{ duration: .25 }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[95%]
              md:w-125
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              z-50
            "
          >
            {/* Header */}

            <div className="bg-red-50 p-8 flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

                <FaExclamationTriangle className="text-red-600 text-4xl" />

              </div>

              <h2 className="text-2xl font-bold mt-5">
                Delete Message?
              </h2>

              <p className="text-gray-500 mt-2 text-center">
                This action cannot be undone.
              </p>

            </div>

            {/* Message Details */}

            <div className="px-8 py-6">

              <h3 className="font-bold text-lg">
                {selectedMessage.subject}
              </h3>

              <p className="text-gray-500 mt-3 line-clamp-3">
                {selectedMessage.message}
              </p>

              <div className="flex justify-between mt-5 text-sm text-gray-400">

                <span>
                  👥 {selectedMessage.audience}
                </span>

                <span>
                  📧 {selectedMessage.channel}
                </span>

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

                Delete
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteCommunicationModal;