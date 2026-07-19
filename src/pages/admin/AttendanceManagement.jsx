import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaArrowLeft,FaClipboardCheck,FaUserCheck,FaUserTimes,FaClock,FaPlus} from "react-icons/fa";
import { openModal } from "../../redux/slice/attendanceSlice";
import AttendanceStats from "../admin/attendance/AttendanceStats";
import AttendanceSearch from "../admin/attendance/AttendanceSearch";
import AttendanceFilter from "../admin/attendance/AttendanceFilter";
import AttendanceTable from "../admin/attendance/AttendanceTable";
import AttendanceCard from "../admin/attendance/AttendanceCard";
import AttendanceModal from "../admin/attendance/AttendanceModal";
import AttendanceProfile from "../admin/attendance/AttendanceProfile";
import DeleteAttendanceModal from "../admin/attendance/DeleteAttendanceModal";

const AttendanceManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { attendance } = useSelector((state) => state.attendance);

  const total = attendance.length;

  const present = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const late = attendance.filter(
    (item) => item.status === "Late"
  ).length;

  const stats = [
    {
      title: "Total Records",
      value: total,
      icon: <FaClipboardCheck />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Present",
      value: present,
      icon: <FaUserCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Absent",
      value: absent,
      icon: <FaUserTimes />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Late",
      value: late,
      icon: <FaClock />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-4 p-10">

      {/* Header */}

      <div className="flex justify-between items-center flex-wrap gap-4">

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin")}
            className="w-20 h-20 rounded-xl bg-white shadow border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Attendance Management
            </h1>
            <p className="text-slate-500 mt-1">
              Track daily student attendance and session details.
            </p>

          </div>

        </div>

        <button
          onClick={() => dispatch(openModal())}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          <FaPlus />

          Mark Attendance
        </button>

      </div>

      {/* Top Statistics */}

      <AttendanceStats />

      {/* Summary Cards */}

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

        <AttendanceSearch />

        <AttendanceFilter />

      </div>

      {/* Desktop Table */}

      <div className="hidden lg:block">
        <AttendanceTable />
      </div>

      {/* Mobile Card */}

      <div className="lg:hidden">
        <AttendanceCard />
      </div>

      {/* Drawer & Modals */}

      <AttendanceModal />

      <AttendanceProfile />

      <DeleteAttendanceModal />

    </div>
  );
};

export default AttendanceManagement;