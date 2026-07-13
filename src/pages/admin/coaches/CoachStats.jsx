import {
  FaUsers,
  FaUserCheck,
  FaMoneyBillWave,
  FaSwimmer,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const CoachStats = () => {
  const { coaches } = useSelector((state) => state.coaches);

  const totalCoaches = coaches.length;

  const activeCoaches = coaches.filter(
    (coach) => coach.status === "Active"
  ).length;

  const totalStudents = coaches.reduce(
    (sum, coach) => sum + coach.students,
    0
  );

  const totalSalary = coaches.reduce(
    (sum, coach) => sum + coach.salary,
    0
  );

  const stats = [
    {
      title: "Total Coaches",
      value: totalCoaches,
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Coaches",
      value: activeCoaches,
      icon: <FaUserCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Students",
      value: totalStudents,
      icon: <FaSwimmer />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Monthly Salary",
      value: `₹${totalSalary.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {card.value}
              </h2>
            </div>

            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-r ${card.color} text-white flex items-center justify-center text-2xl`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoachStats;