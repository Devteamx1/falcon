import { FaCheckCircle, FaClock, FaExclamationCircle } from "react-icons/fa";

const FeeStatusBadge = ({ status }) => {
  const statusConfig = {
    Paid: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <FaCheckCircle />,
    },
    Pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      icon: <FaClock />,
    },
    Overdue: {
      bg: "bg-red-100",
      text: "text-red-700",
      icon: <FaExclamationCircle />,
    },
  };

  const config = statusConfig[status] || statusConfig.Pending;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}
    >
      {config.icon}
      {status}
    </span>
  );
};

export default FeeStatusBadge;