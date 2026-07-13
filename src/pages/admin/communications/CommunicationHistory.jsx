import { motion } from "framer-motion";
import {  FaEye,FaTrash,FaEnvelope,FaWhatsapp,FaSms} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedMessage,openProfile,openDeleteModal} from "../../../redux/slice/communicationSlice";

const CommunicationHistory = () => {
  const dispatch = useDispatch();

  const {
    messages,
    searchTerm,
    selectedAudience,
  } = useSelector((state) => state.communication);

  const filteredMessages = messages.filter((message) => {
    const matchSearch =
      message.subject
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      message.message
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchAudience =
      selectedAudience === "All" ||
      message.audience === selectedAudience;

    return matchSearch && matchAudience;
  });

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
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Recent Messages
      </h2>

      <div className="space-y-4">

        {filteredMessages.length === 0 ? (

          <div className="text-center py-10 text-gray-500">
            No Messages Found
          </div>

        ) : (

          filteredMessages.map((message, index) => (

            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .05 }}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-bold text-lg">
                    {message.subject}
                  </h3>

                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {message.message}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

                    <span>
                      👥 {message.audience}
                    </span>

                    <span className="flex items-center gap-1">
                      {getChannelIcon(message.channel)}

                      {message.channel}
                    </span>

                    <span>
                      📅 {message.date}
                    </span>

                    <span>
                      🕒 {message.time}
                    </span>

                  </div>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => {
                      dispatch(setSelectedMessage(message));
                      dispatch(openProfile());
                    }}
                    className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition flex items-center justify-center"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => {
                      dispatch(setSelectedMessage(message));
                      dispatch(openDeleteModal());
                    }}
                    className="w-10 h-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center justify-center"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </motion.div>

          ))

        )}

      </div>

    </div>
  );
};

export default CommunicationHistory;