import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  setSelectedAttendance,
  openProfile,
  openModal,
  openDeleteModal,
} from "../../../redux/slice/attendanceSlice";

import AttendanceStatusBadge from "./AttendanceStatusBadge";
import SessionBadge from "./SessionBadge";

const AttendanceTable = () => {
  const dispatch = useDispatch();

  const {
    attendance,
    searchTerm,
    selectedBatch,
    selectedStatus,
    selectedDate,
  } = useSelector((state) => state.attendance);

  const filteredAttendance = attendance.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.studentName.toLowerCase().includes(search) ||
      item.studentId.toLowerCase().includes(search) ||
      item.coach.toLowerCase().includes(search);

    const matchesBatch =
      selectedBatch === "All" ||
      item.batch === selectedBatch;

    const matchesStatus =
      selectedStatus === "All" ||
      item.status === selectedStatus;

    const matchesDate =
      selectedDate === "" ||
      item.date === selectedDate;

    return (
      matchesSearch &&
      matchesBatch &&
      matchesStatus &&
      matchesDate
    );
  });

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left">
                Student
              </th>

              <th className="px-5 py-4 text-left">
                Coach
              </th>

              <th className="px-5 py-4 text-left">
                Batch
              </th>

              <th className="px-5 py-4 text-left">
                Date
              </th>

              <th className="px-5 py-4 text-left">
                Check In
              </th>

              <th className="px-5 py-4 text-left">
                Check Out
              </th>

              <th className="px-5 py-4 text-left">
                Session
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>
                        {filteredAttendance.length > 0 ? (
              filteredAttendance.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  {/* Student */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.profile}
                        alt={item.studentName}
                        className="w-12 h-12 rounded-full object-cover border"
                      />

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {item.studentName}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {item.studentId}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Coach */}

                  <td className="px-5 py-4 text-slate-700">
                    {item.coach}
                  </td>

                  {/* Batch */}

                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
                      {item.batch}
                    </span>
                  </td>

                  {/* Date */}

                  <td className="px-5 py-4">
                    {item.date}
                  </td>

                  {/* Check In */}

                  <td className="px-5 py-4 font-medium text-green-600">
                    {item.checkIn}
                  </td>

                  {/* Check Out */}

                  <td className="px-5 py-4 font-medium text-red-500">
                    {item.checkOut}
                  </td>

                  {/* Session */}

                  <td className="px-5 py-4">
                    <SessionBadge
                      session={item.session}
                    />
                  </td>

                  {/* Status */}

                  <td className="px-5 py-4">
                    <AttendanceStatusBadge
                      status={item.status}
                    />
                  </td>

                  {/* Actions */}

                  <td className="px-5 py-4">

                    <div className="flex items-center justify-center gap-3">

                      {/* View */}

                      <button
                        onClick={() => {
                          dispatch(setSelectedAttendance(item));
                          dispatch(openProfile());
                        }}
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-blue-100
                          text-blue-600
                          hover:bg-blue-600
                          hover:text-white
                          transition
                        "
                      >
                        <FaEye className="mx-auto" />
                      </button>

                      {/* Edit */}

                      <button
                        onClick={() => {
                          dispatch(setSelectedAttendance(item));
                          dispatch(openModal());
                        }}
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-green-100
                          text-green-600
                          hover:bg-green-600
                          hover:text-white
                          transition
                        "
                      >
                        <FaEdit className="mx-auto" />
                      </button>

                      {/* Delete */}

                      <button
                        onClick={() => {
                          dispatch(setSelectedAttendance(item));
                          dispatch(openDeleteModal());
                        }}
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-red-100
                          text-red-600
                          hover:bg-red-600
                          hover:text-white
                          transition
                        "
                      >
                        <FaTrash className="mx-auto" />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (
              <tr>

                <td
                  colSpan="9"
                  className="text-center py-12 text-gray-500"
                >
                  No attendance records found.
                </td>

              </tr>
            )}
          </tbody>
        </table>

      </div>

      {/* Footer */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-6 py-4 border-t bg-slate-50">

        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredAttendance.length}
          </span>{" "}
          Attendance Records
        </p>

        <div className="flex items-center gap-2">

          <button
            className="
              px-4
              py-2
              rounded-lg
              border
              hover:bg-slate-100
              transition
            "
          >
            Previous
          </button>

          <button
            className="
              px-4
              py-2
              rounded-lg
              bg-blue-600
              text-white
            "
          >
            1
          </button>

          <button
            className="
              px-4
              py-2
              rounded-lg
              border
              hover:bg-slate-100
              transition
            "
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

export default AttendanceTable;