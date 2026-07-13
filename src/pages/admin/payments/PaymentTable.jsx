import { FaPlus, FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchTerm,
  setSelectedStatus,
  setSelectedPayment,
  openModal,
  openProfile,
  openDeleteModal,
} from "../../../redux/slice/paymentSlice";

const PaymentTable = () => {
  const dispatch = useDispatch();

  const {
    payments,
    searchTerm,
    selectedStatus,
  } = useSelector((state) => state.payments);

  const filteredPayments = payments.filter((payment) => {
    const matchSearch =
      payment.studentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      payment.course
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchStatus =
      selectedStatus === "All" ||
      payment.status === selectedStatus;

    return matchSearch && matchStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Overdue":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-6">

        <div className="relative w-full lg:w-80">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Student..."
            value={searchTerm}
            onChange={(e) =>
              dispatch(setSearchTerm(e.target.value))
            }
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="flex gap-3">

          <select
            value={selectedStatus}
            onChange={(e) =>
              dispatch(setSelectedStatus(e.target.value))
            }
            className="border rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>

          <button
            onClick={() => dispatch(openModal())}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl flex items-center gap-2"
          >
            <FaPlus />

            Add Payment
          </button>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="text-left p-4">Student</th>

              <th className="text-left p-4">Course</th>

              <th className="text-left p-4">Amount</th>

              <th className="text-left p-4">Method</th>

              <th className="text-left p-4">Date</th>

              <th className="text-left p-4">Status</th>

              <th className="text-center p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredPayments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={payment.profile}
                      alt={payment.studentName}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {payment.studentName}
                      </h3>

                      <small className="text-gray-500">
                        {payment.batch}
                      </small>

                    </div>

                  </div>

                </td>

                <td className="p-4">
                  {payment.course}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  ₹{payment.amount}
                </td>

                <td className="p-4">
                  {payment.paymentMethod}
                </td>

                <td className="p-4">
                  {payment.paymentDate}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-5 text-lg">

                    <button
                      onClick={() => {
                        dispatch(setSelectedPayment(payment));
                        dispatch(openProfile());
                      }}
                      className="text-blue-600 hover:scale-110 transition"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => {
                        dispatch(setSelectedPayment(payment));
                        dispatch(openModal());
                      }}
                      className="text-green-600 hover:scale-110 transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => {
                        dispatch(setSelectedPayment(payment));
                        dispatch(openDeleteModal());
                      }}
                        className="text-red-600 hover:scale-110 transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PaymentTable;