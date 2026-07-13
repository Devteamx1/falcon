import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const AttendanceStatus = ({ status }) => {
  const statusConfig = {
    Present: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <FaCheckCircle />,
    },
    Absent: {
      bg: "bg-red-100",
      text: "text-red-700",
      icon: <FaTimesCircle />,
    },
    Late: {
      bg: "bg-orange-100",
      text: "text-orange-700",
      icon: <FaClock />,
    },
  };

  const config = statusConfig[status] || statusConfig.Present;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}
    >
      {config.icon}
      {status}
    </span>
  );
};

export default AttendanceStatus;