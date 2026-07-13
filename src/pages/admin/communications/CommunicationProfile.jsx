import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaEnvelope,
  FaWhatsapp,
  FaSms,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closeProfile,
  clearSelectedMessage,
} from "../../../redux/slice/communicationSlice";

const CommunicationProfile = () => {

  const dispatch = useDispatch();

  const {
    isProfileOpen,
    selectedMessage,
  } = useSelector((state) => state.communication);

  if (!selectedMessage) return null;

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedMessage());
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case "Email":
        return <FaEnvelope className="text-blue-600" />;

      case "WhatsApp":
        return <FaWhatsapp className="text-green-600" />;

      case "SMS":
        return <FaSms className="text-orange-500" />;

      default:
        return null;
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
              right-0
              top-0
              h-screen
              w-full
              md:w-120
              bg-white
              shadow-2xl
              z-50
              overflow-y-auto
            "
          >

            {/* Header */}

            <div className="bg-blue-600 text-white p-6 flex justify-between items-center">

              <div>

                <h2 className="text-2xl font-bold">
                  Message Details
                </h2>

                <p className="text-blue-100 mt-1">
                  Communication Information
                </p>

              </div>

              <button
                onClick={handleClose}
                className="text-2xl"
              >
                <FaTimes />
              </button>

            </div>

            {/* Body */}

            <div className="p-6 space-y-6">

              <div>

                <h3 className="text-sm text-gray-500">
                  Subject
                </h3>

                <p className="font-bold text-xl mt-1">
                  {selectedMessage.subject}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-gray-500 mb-2">
                  Message
                </h3>

                <div className="bg-gray-50 rounded-xl p-4 leading-7">
                  {selectedMessage.message}
                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <p className="text-gray-500 text-sm">
                    Audience
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <FaUser className="text-blue-600" />

                    <span>
                      {selectedMessage.audience}
                    </span>

                  </div>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Channel
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    {getChannelIcon(selectedMessage.channel)}

                    <span>
                      {selectedMessage.channel}
                    </span>

                  </div>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Date
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <FaCalendarAlt className="text-green-600" />

                    {selectedMessage.date}

                  </div>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Time
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <FaClock className="text-orange-500" />

                    {selectedMessage.time}

                  </div>

                </div>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Sent By
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <FaPaperPlane className="text-purple-600" />

                  {selectedMessage.sentBy}

                </div>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Status
                </p>

                <span
                  className={`
                    inline-block
                    mt-2
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    ${
                      selectedMessage.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : selectedMessage.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {selectedMessage.status}
                </span>

              </div>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
};

export default CommunicationProfile;