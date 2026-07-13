import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const PaymentStats = () => {
  const { payments } = useSelector((state) => state.payments);

  const totalRevenue = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const paidPayments = payments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  const overduePayments = payments.filter(
    (payment) => payment.status === "Overdue"
  ).length;

  const stats = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Paid",
      value: paidPayments,
      icon: <FaCheckCircle />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Pending",
      value: pendingPayments,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Overdue",
      value: overduePayments,
      icon: <FaExclamationTriangle />,
      color: "from-red-500 to-rose-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-3">
                {card.value}
              </h2>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl bg-linear-to-r ${card.color} text-white flex items-center justify-center text-2xl shadow-lg`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentStats;