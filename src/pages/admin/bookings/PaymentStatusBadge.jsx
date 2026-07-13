import { FaCheckCircle, FaClock } from "react-icons/fa";

const PaymentStatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
        status === "Paid"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status === "Paid" ? (
        <FaCheckCircle />
      ) : (
        <FaClock />
      )}

      {status}
    </span>
  );
};

export default PaymentStatusBadge;