import { motion } from "framer-motion";
import {FaFilePdf,FaFileExcel,FaUserGraduate,FaCalendarCheck,FaMoneyBillWave,
    FaArrowLeft,FaBook,FaUserTie,FaClipboardList} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const reports = [
  {
    key: "students",
    title: "Student Report",
    icon: <FaUserGraduate className="text-blue-600 text-2xl" />,
  },
  {
    key: "attendance",
    title: "Attendance Report",
    icon: <FaCalendarCheck className="text-green-600 text-2xl" />,
  },
  {
    key: "fees",
    title: "Fee Report",
    icon: <FaMoneyBillWave className="text-yellow-600 text-2xl" />,
  },
  {
    key: "courses",
    title: "Course Report",
    icon: <FaBook className="text-purple-600 text-2xl" />,
  },
  {
    key: "coaches",
    title: "Coach Report",
    icon: <FaUserTie className="text-pink-600 text-2xl" />,
  },
  {
    key: "bookings",
    title: "Booking Report",
    icon: <FaClipboardList className="text-cyan-600 text-2xl" />,
  },
];

const Reports = () => {
  const navigate = useNavigate();

  const downloadReport = (type, format) => {
    alert(`${type} ${format} Download`);
  };

  return (
    <div className="space-y-4 p-10">
       <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin")}
            className="w-20 h-20 rounded-xl bg-white shadow border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
               Reports & Analytics
            </h1>
            <p className="text-slate-500 mt-1">
              Download academy reports in PDF or Excel format.
            </p>

          </div>

        </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {reports.map((report, index) => (

          <motion.div
            key={report.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .08 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                {report.icon}
              </div>

              <div>

                <h2 className="font-bold text-lg">
                  {report.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Download complete report
                </p>

              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  downloadReport(report.key, "PDF")
                }
                className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <FaFilePdf />

                PDF
              </button>

              <button
                onClick={() =>
                  downloadReport(report.key, "Excel")
                }
                className="flex-1 bg-green-50 hover:bg-green-100 text-green-600 py-3 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <FaFileExcel />

                Excel
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default Reports;