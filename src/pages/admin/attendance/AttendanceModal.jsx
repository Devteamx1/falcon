import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  addAttendance,
  updateAttendance,
  closeModal,
  clearSelectedAttendance,
} from "../../../redux/slice/attendanceSlice";

const AttendanceModal = () => {
  const dispatch = useDispatch();

  const {
    isModalOpen,
    selectedAttendance,
    attendance,
  } = useSelector((state) => state.attendance);

  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    coach: "",
    batch: "Morning Batch",
    date: "",
    checkIn: "",
    checkOut: "",
    session: "Morning",
    status: "Present",
    remarks: "",
    profile: "https://i.pravatar.cc/150",
  });

  useEffect(() => {
    if (selectedAttendance) {
      setFormData(selectedAttendance);
    } else {
      setFormData({
        studentName: "",
        studentId: "",
        coach: "",
        batch: "Morning Batch",
        date: "",
        checkIn: "",
        checkOut: "",
        session: "Morning",
        status: "Present",
        remarks: "",
        profile: "https://i.pravatar.cc/150",
      });
    }
  }, [selectedAttendance]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedAttendance) {
      dispatch(updateAttendance(formData));

      toast.success("Attendance Updated Successfully");
    } else {
      dispatch(
        addAttendance({
          ...formData,
          id: Date.now(),
        })
      );

      toast.success("Attendance Added Successfully");
    }

    dispatch(closeModal());
    dispatch(clearSelectedAttendance());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearSelectedAttendance());
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] xl:w-[40%] bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-8">
           <div className="sticky top-0 bg-white px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              {selectedAttendance ? "Edit attendance" : "Add attendance"}
            </h2>

            <p className="text-gray-500 mt-1">
              Swimming Academy Couse Form
            </p>
          </div>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
                toast("Cancelled");
              }}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                                {/* Student Name */}

                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Student Name"
                  className="w-full border rounded-xl p-3"
                  required
                />

                {/* Student ID */}

                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Student ID"
                  className="w-full border rounded-xl p-3"
                  required
                />

                {/* Coach */}

                <input
                  type="text"
                  name="coach"
                  value={formData.coach}
                  onChange={handleChange}
                  placeholder="Coach Name"
                  className="w-full border rounded-xl p-3"
                  required
                />

                {/* Batch */}

                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Morning Batch</option>
                  <option>Evening Batch</option>
                  <option>Kids Batch</option>
                  <option>Advanced Batch</option>
                </select>

                {/* Date */}

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />

                {/* Check In & Check Out */}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Check In
                    </label>
                    <input
                      type="time"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full border rounded-xl p-3"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 mb-2 block">
                      Check Out
                    </label>
                    <input
                      type="time"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full border rounded-xl p-3"
                    />
                  </div>
                </div>
                                {/* Session */}

                <select
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Kids</option>
                  <option>Advanced</option>
                </select>

                {/* Attendance Status */}

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                  <option>Leave</option>
                </select>

                {/* Remarks */}

                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Remarks..."
                  className="w-full border rounded-xl p-3 resize-none"
                />

                {/* Buttons */}

                <div className="flex gap-4 pt-4">

                  <button
                    type="submit"
                    className="
                      flex-1
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    {selectedAttendance
                      ? "Update Attendance"
                      : "Save Attendance"}
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="
                      flex-1
                      border
                      border-gray-300
                      hover:bg-gray-100
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
};

export default AttendanceModal;
   