import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  closeProfile,
  clearSelectedAttendance,
} from "../../../redux/slice/attendanceSlice";

import AttendanceStatusBadge from "./AttendanceStatusBadge";
import SessionBadge from "./SessionBadge";

const AttendanceProfile = () => {
  const dispatch = useDispatch();

  const {
    isProfileOpen,
    selectedAttendance,
  } = useSelector((state) => state.attendance);

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedAttendance());
  };

  if (!selectedAttendance) return null;

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: .3 }}
            className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white shadow-2xl z-[9999] overflow-y-auto p-2"
          >
            {/* Header */}

            <div className="bg-blue-600 text-white p-6 flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Attendance Details
              </h2>

              <button
                onClick={handleClose}
                className="text-2xl"
              >
                <FaTimes />
              </button>

            </div>

            {/* Profile */}

            <div className="p-8 flex flex-col items-center">

              <img
                src={selectedAttendance.profile}
                alt={selectedAttendance.studentName}
                className="w-28 h-28 rounded-full border-4 border-blue-200 object-cover"
              />

              <h2 className="text-2xl font-bold mt-5">
                {selectedAttendance.studentName}
              </h2>

              <p className="text-gray-500">
                {selectedAttendance.studentId}
              </p>

              <div className="mt-4">

                <AttendanceStatusBadge
                  status={selectedAttendance.status}
                />

              </div>

            </div>

            {/* Information */}

            <div className="px-8 pb-8 space-y-5">
                              {/* Coach */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Coach
                </span>

                <span className="font-semibold text-slate-700">
                  {selectedAttendance.coach}
                </span>
              </div>

              {/* Batch */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Batch
                </span>

                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                  {selectedAttendance.batch}
                </span>
              </div>

              {/* Date */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Date
                </span>

                <span className="font-semibold">
                  {selectedAttendance.date}
                </span>
              </div>

              {/* Check In */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Check In
                </span>

                <span className="text-green-600 font-semibold">
                  {selectedAttendance.checkIn}
                </span>
              </div>

              {/* Check Out */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Check Out
                </span>

                <span className="text-red-600 font-semibold">
                  {selectedAttendance.checkOut}
                </span>
              </div>

              {/* Session */}

              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-500 font-medium">
                  Session
                </span>

                <SessionBadge
                  session={selectedAttendance.session}
                />
              </div>

              {/* Remarks */}

              <div>

                <h3 className="font-semibold text-slate-700 mb-2">
                  Remarks
                </h3>

                <div className="bg-slate-100 rounded-xl p-4 text-slate-600">
                  {selectedAttendance.remarks || "No Remarks"}
                </div>

              </div>

              {/* Close Button */}

              <button
                onClick={handleClose}
                className="
                  w-full
                  mt-6
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  transition
                "
              >
                Close
              </button>

            </div>
          </motion.div>
           </>
      )}
       </AnimatePresence>
       );
};

export default AttendanceProfile;