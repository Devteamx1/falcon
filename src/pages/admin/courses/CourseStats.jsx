import { FaBook, FaUsers, FaMoneyBillWave, FaChalkboardTeacher,} from "react-icons/fa";
import { useSelector } from "react-redux";

const CourseStats = () => {
  const { courses } = useSelector((state) => state.courses);

  const totalCourses = courses.length;

  const totalStudents = courses.reduce(
    (sum, c) => sum + c.students,
    0
  );

  const totalRevenue = courses.reduce(
    (sum, c) => sum + c.students * c.monthlyFee,
    0
  );

  const activeCourses = courses.filter(
    (c) => c.status === "Active"
  ).length;

  const cards = [
    {
      title: "Courses",
      value: totalCourses,
      icon: <FaBook />,
      color: "bg-blue-500",
    },
    {
      title: "Students",
      value: totalStudents,
      icon: <FaUsers />,
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "bg-orange-500",
    },
    {
      title: "Active",
      value: activeCourses,
      icon: <FaChalkboardTeacher />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center text-xl`}
            >
              {card.icon}
            </div>

          </div>
        </div>

      ))}

    </div>
  );
};

export default CourseStats;