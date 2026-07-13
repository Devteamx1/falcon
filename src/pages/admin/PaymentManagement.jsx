import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PaymentStats from "../../pages/admin/payments/PaymentStats";
import PaymentTable from "../../pages/admin/payments/PaymentTable";
import PaymentModal from "../../pages/admin/payments/PaymentModal";
import PaymentProfile from "../../pages/admin/payments/PaymentProfile";
import DeletePaymentModal from "../../pages/admin/payments/DeletePaymentModal";

const PaymentManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin")}
            className="w-15 h-15 rounded-xl bg-white shadow-md border flex items-center justify-center hover:bg-blue-600  hover:text-white transition ">
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Payment Management</h1>
            <p className="text-gray-500 mt-1"> Manage student payments, revenue, pending fees and payment history.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <PaymentStats />
      {/* Table */}
      <PaymentTable />
      {/* Modals */}
      <PaymentModal />
      <PaymentProfile />
      <DeletePaymentModal />
    </div>
  );
};

export default PaymentManagement;