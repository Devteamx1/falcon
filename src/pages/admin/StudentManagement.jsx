import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaUsers, FaMoneyBillWave, FaUserCheck ,FaArrowLeft } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { openModal } from "../../redux/slice/studentSlice";
import StudentSearch from "../admin/students/StudentSearch";
import StudentFilter from "../admin/students/StudentFilter";
import StudentTable from "..//admin/students/StudentTable";
import StudentModal from "..//admin/students/StudentModal";
import StudentProfile from "..//admin/students/StudentProfile";
import DeleteStudentModal from "../admin/students/DeleteStudentModal";
import { useNavigate } from "react-router-dom";

const StudentManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { students } = useSelector((state) => state.students);

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const totalCollection = students.reduce(
    (sum, student) => sum + Number(student.paidFee),
    0
  );

  const pendingStudents = students.filter(
    (student) => student.feeStatus === "Pending"
  ).length;

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Students",
      value: activeStudents,
      icon: <FaUserCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Fees Collected",
      value: `₹${totalCollection.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Pending Fees",
      value: pendingStudents,
      icon: <MdPendingActions />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8 p-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">

        <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/admin")}
                className="w-25 h-25 rounded-xl bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 mr-5"
              >
                <FaArrowLeft />
              </button>

              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Student Management
                </h1>

                <p className="text-slate-500 mt-2">
                  Manage academy students, attendance and fee details.
                </p>
              </div>
            </div>

        <button
          onClick={() => dispatch(openModal())}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          <FaPlus />
          Add Student
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {item.value}
                </h2>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-r ${item.color} text-white flex items-center justify-center text-2xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col lg:flex-row gap-4 justify-between">

        <StudentSearch />

        <StudentFilter />

      </div>

      {/* Student Table */}

      <StudentTable />

      {/* Modals */}

      <StudentModal />

      <StudentProfile />

      <DeleteStudentModal />
      

    </div>
  );
};

export default StudentManagement;