import { FaMedal } from "react-icons/fa";

const ExperienceBadge = ({ experience }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">

      <FaMedal />

      {experience} Years

    </div>
  );
};

export default ExperienceBadge;