import { FaClock } from "react-icons/fa";

const DurationBadge = ({ duration }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
      <FaClock className="text-xs" />
      {duration}
    </div>
  );
};

export default DurationBadge;