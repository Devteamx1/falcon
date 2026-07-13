import { motion } from "framer-motion";
import {  FaBoxOpen,  FaUsers,  FaShoppingCart,  FaMoneyBillWave,} from "react-icons/fa";

const stats = [
  {
    title: "Total Students",
    value: "1,250",
    icon: <FaShoppingCart />,
    color: "bg-blue-500",
  },
  {
    title: "Students",
    value: "860",
    icon: <FaUsers />,
    color: "bg-green-500",
  },
  {
    title: "Batches",
    value: "320",
    icon: <FaBoxOpen />,
    color: "bg-orange-500",
  },
  {
    title: "Revenue",
    value: "₹1,25,000",
    icon: <FaMoneyBillWave />,
    color: "bg-purple-500",
  },
];

const orders = [
  {
    id: "#1001",
    customer: "Arun",
    product: "Morning",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Rahul",
    product: "Afternoon",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Kumar",
    product: "Morning",
    status: "Completed",
  },
  {
    id: "#1004",
    customer: "Vicky",
    product: "Eveniing",
    status: "Processing",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back 👋 Here's what's happening today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`${item.color} text-white text-2xl p-4 rounded-xl`}
              >
                {item.icon}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          Revenue Overview
        </h2>

        <div className="h-64 flex items-center justify-center rounded-xl bg-linear-to-r from-blue-100 to-cyan-100">
          <p className="text-slate-600 text-lg">
            📈 Revenue Chart (Coming Next)
          </p>
        </div>
      </motion.div>

      {/* Recent Orders */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold">
            Total Students
          </h2>

          <button className="text-blue-600 hover:underline">
            View All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Student ID
                </th>

                <th className="text-left py-3">
                  Student
                </th>

                <th className="text-left py-3">
                  Batch
                </th>

                <th className="text-left py-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="py-4">{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.product}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        order.status === "Completed"
                          ? "bg-green-500"
                          : order.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </div>
  );
};

export default Dashboard;