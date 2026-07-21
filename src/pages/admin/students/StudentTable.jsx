import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {  FaEdit,FaTrash,FaEye} from "react-icons/fa";
import { setSelectedStudent, openModal, openDeleteModal,openProfile,closeProfile,clearSelectedStudent} from "../../../redux/slice/studentSlice";
import AttendanceStatus from "./AttendanceStatus";
import FeeStatusBadge from "./FeeStatusBadge";

const StudentTable = () => {
  const dispatch = useDispatch();

  const { students, searchTerm, selectedBatch } = useSelector(
    (state) => state.students
  );

  const filteredStudents = students.filter((student) => {
    const searchMatch =
      student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm);

    const batchMatch =selectedBatch === "All" ? true : student.batch === selectedBatch;

    return searchMatch && batchMatch;
    const handleClose = () => {
          dispatch(closeProfile());
          dispatch(clearSelectedStudent());
        };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"  >
      <div className="overflow-x-auto">

        <table className="w-full p-5">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Photo</th>

              <th className="p-4 text-left">Student</th>

              <th className="p-4 text-left">Coach</th>

              <th className="p-4 text-left">Batch</th>

              <th className="p-4 text-left">Attendance</th>

              <th className="p-4 text-left">Fees</th>

              <th className="p-4 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-blue-50 transition"
              >

                <td className="p-4">
                  <img
                    src={student.profile}
                    alt={student.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="p-4">
                  <h3 className="font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {student.phone}
                  </p>
                </td>

                <td className="p-4">
                  {student.coach}
                </td>

                <td className="p-4">
                  {student.batch}
                </td>

                <td className="p-4">
                  <AttendanceStatus
                    status={student.attendance}
                  />
                </td>

                <td className="p-4">
                  <FeeStatusBadge
                    status={student.feeStatus}
                  />
                </td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <button
                    onClick={() => {
                      dispatch(setSelectedStudent(student));
                      dispatch(openProfile());
                    }}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>

                    <button
                      onClick={() => {
                        dispatch(setSelectedStudent(student));
                        dispatch(openModal());
                      }}
                      className="text-green-600 hover:text-green-700"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => {
                        dispatch(setSelectedStudent(student));
                        dispatch(openDeleteModal());
                      }}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </motion.div>
  );
};

export default StudentTable;