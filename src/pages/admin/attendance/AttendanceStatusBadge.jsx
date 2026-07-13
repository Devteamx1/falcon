const AttendanceStatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-700 border-green-300";

      case "Absent":
        return "bg-red-100 text-red-700 border-red-300";

      case "Late":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";

      case "Leave":
        return "bg-blue-100 text-blue-700 border-blue-300";

      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        border
        ${getStatusStyle()}
      `}
    >
      {status}
    </span>
  );
};

export default AttendanceStatusBadge;