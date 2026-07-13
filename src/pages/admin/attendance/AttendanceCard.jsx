import {
  FaEye,
  FaEdit,
  FaTrash,
  FaClock,
  FaCalendarAlt,
  FaUserTie,
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

const AttendanceCard = () => {
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

  if (filteredAttendance.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-10 text-center text-gray-500">
        No Attendance Records Found
      </div>
    );
  }

  return (
    <div className="grid gap-5">

      {filteredAttendance.map((item) => (

        <div
          key={item.id}
          className="bg-white rounded-3xl shadow-md p-6"
        >

          {/* Student */}

          <div className="flex items-center gap-4">

            <img
              src={item.profile}
              alt={item.studentName}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
            />

            <div className="flex-1">

              <h2 className="text-lg font-bold">
                {item.studentName}
              </h2>

              <p className="text-gray-500">
                {item.studentId}
              </p>

              <div className="mt-2">

                <AttendanceStatusBadge
                  status={item.status}
                />

              </div>

            </div>

          </div>

          {/* Information */}

          <div className="mt-6 space-y-4 text-sm">
                        {/* Coach */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Coach
              </span>

              <div className="flex items-center gap-2">

                <FaUserTie className="text-blue-600" />

                <span className="font-medium">
                  {item.coach}
                </span>

              </div>

            </div>

            {/* Batch */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Batch
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold">
                {item.batch}
              </span>

            </div>

            {/* Date */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Date
              </span>

              <div className="flex items-center gap-2">

                <FaCalendarAlt className="text-indigo-500" />

                <span>
                  {item.date}
                </span>

              </div>

            </div>

            {/* Check In */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Check In
              </span>

              <div className="flex items-center gap-2">

                <FaClock className="text-green-500" />

                <span className="font-medium text-green-600">
                  {item.checkIn}
                </span>

              </div>

            </div>

            {/* Check Out */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Check Out
              </span>

              <div className="flex items-center gap-2">

                <FaClock className="text-red-500" />

                <span className="font-medium text-red-600">
                  {item.checkOut}
                </span>

              </div>

            </div>

            {/* Session */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                Session
              </span>

              <SessionBadge
                session={item.session}
              />

            </div>

          </div>

          {/* Actions */}

          <div className="mt-6 grid grid-cols-3 gap-3">
                        {/* View */}

            <button
              onClick={() => {
                dispatch(setSelectedAttendance(item));
                dispatch(openProfile());
              }}
              className=" py-3 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600  hover:text-white transition flex justify-center items-center">
              <FaEye />
            </button>

            {/* Edit */}

            <button
              onClick={() => {
                dispatch(setSelectedAttendance(item));
                dispatch(openModal());
              }}
              className=" py-3 rounded-xl bg-green-100 text-green-600 hover:bg-green-600  hover:text-white transition flex justify-center items-center">
              <FaEdit />
            </button>

            {/* Delete */}

            <button
              onClick={() => {
                dispatch(setSelectedAttendance(item));
                dispatch(openDeleteModal());
              }}
              className=" py-3 rounded-xl bg-red-100 text-red-600 hover:bg-red-600  hover:text-white transition flex justify-center items-center">
              <FaTrash />
            </button>

          </div>

        </div>

      ))}

    </div>
  );
};

export default AttendanceCard;
                