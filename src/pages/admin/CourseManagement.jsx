import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBook, FaPlus, FaUsers, FaChalkboardTeacher, FaMoneyBillWave,} from "react-icons/fa";
import { openModal } from "../../redux/slice/courseSlice";
import CourseSearch from "../../pages/admin/courses/CourseSearch";
import CourseFilter from "../../pages/admin/courses/CourseFilter";
import CourseTable from "../../pages/admin/courses/CourseTable";
import CourseModal from "../../pages/admin/courses/CourseModal";
import CourseProfile from "../../pages/admin/courses/CourseProfile";
import DeleteCourseModal from "../../pages/admin/courses/DeleteCourseModal";

const CourseManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);

  const totalCourses = courses.length;

  const activeCourses = courses.filter(
    (course) => course.status === "Active"
  ).length;

  const totalStudents = courses.reduce(
    (sum, course) => sum + course.students,
    0
  );

  const totalRevenue = courses.reduce(
    (sum, course) => sum + course.monthlyFee * course.students,
    0
  );

  const stats = [
    {
      title: "Total Courses",
      value: totalCourses,
      icon: <FaBook />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Courses",
      value: activeCourses,
      icon: <FaChalkboardTeacher />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Enrolled Students",
      value: totalStudents,
      icon: <FaUsers />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Monthly Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-4 p-10">

      {/* Header */}

      <div className="flex justify-between items-center flex-wrap gap-4">

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/admin")}
            className="w-20 h-20 rounded-xl bg-white shadow-md border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Course Management
            </h1>

            <p className="text-slate-500 mt-1">
              Manage swimming courses, trainers and fee details.
            </p>
          </div>

        </div>

        <button
          onClick={() => dispatch(openModal())}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          <FaPlus />
          Add Course
        </button>

      </div>

      {/* Statistics */}

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

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col lg:flex-row justify-between gap-4">

        <CourseSearch />

        <CourseFilter />

      </div>

      {/* Table */}

      <CourseTable />

      {/* Drawers & Modals */}

      <CourseModal />

      <CourseProfile />

      <DeleteCourseModal />

    </div>
  );
};

export default CourseManagement;