import { FaIndianRupeeSign } from "react-icons/fa6";

const FeeBadge = ({ monthlyFee, admissionFee }) => {
  return (
    <div className="space-y-1">

      <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

        <FaIndianRupeeSign />

        {monthlyFee}/Month

      </div>

      <p className="text-xs text-gray-500">
        Admission ₹{admissionFee}
      </p>

    </div>
  );
};

export default FeeBadge;