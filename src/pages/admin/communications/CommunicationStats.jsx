import {  FaPaperPlane,FaCheckCircle,FaClock,FaEnvelope} from "react-icons/fa";
import { useSelector } from "react-redux";

const CommunicationStats = () => {
  
  const { messages } = useSelector((state) => state.communication);

  const totalMessages = messages.length;

  const deliveredMessages = messages.filter(
    (msg) => msg.status === "Delivered"
  ).length;

  const pendingMessages = messages.filter(
    (msg) => msg.status === "Pending"
  ).length;

  const emailMessages = messages.filter(
    (msg) => msg.channel === "Email"
  ).length;

  const stats = [
    {
      title: "Total Messages",
      value: totalMessages,
      icon: <FaPaperPlane />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Delivered",
      value: deliveredMessages,
      icon: <FaCheckCircle />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Pending",
      value: pendingMessages,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Email Sent",
      value: emailMessages,
      icon: <FaEnvelope />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition duration-300"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-3 text-slate-800">
                {card.value}
              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-r ${card.color} text-white flex items-center justify-center text-2xl`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default CommunicationStats;