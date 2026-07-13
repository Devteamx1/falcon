import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaClock,
  FaChartPie,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const AttendanceStats = () => {
  const { attendance } = useSelector((state) => state.attendance);

  const totalStudents = attendance.length;

  const presentStudents = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absentStudents = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const lateStudents = attendance.filter(
    (item) => item.status === "Late"
  ).length;

  const attendancePercentage =
    totalStudents === 0
      ? 0
      : Math.round((presentStudents / totalStudents) * 100);

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Present Today",
      value: presentStudents,
      icon: <FaUserCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Absent Today",
      value: absentStudents,
      icon: <FaUserTimes />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Late Students",
      value: lateStudents,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Attendance %",
      value: `${attendancePercentage}%`,
      icon: <FaChartPie />,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition duration-300"
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {card.value}
              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-r ${card.color} text-white flex items-center justify-center text-2xl shadow-lg`}
            >
              {card.icon}
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};

export default AttendanceStats;