import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaUserTie, FaClock, FaUsers, FaSwimmingPool } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {closeProfile,clearSelectedCourse} from "../../../redux/slice/courseSlice";

const CourseProfile = () => {
  const dispatch = useDispatch();

  const { isProfileOpen, selectedCourse } = useSelector(
    (state) => state.courses
  );

  if (!selectedCourse) return null;

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedCourse());
  };

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
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white shadow-2xl z-[9999] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.name}
                className="h-52 w-full object-cover"
              />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">

              <h2 className="text-3xl font-bold text-slate-800">
                {selectedCourse.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {selectedCourse.description}
              </p>

              {/* Trainer */}

              <div className="mt-8 bg-slate-50 rounded-xl p-4">

                <h3 className="font-semibold text-lg mb-4">
                  Trainer Details
                </h3>

                <div className="flex items-center gap-4">

                  <img
                    src={selectedCourse.trainerImage}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <p className="font-semibold">
                      {selectedCourse.trainer}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {selectedCourse.experience}
                    </p>

                  </div>

                </div>

              </div>

              {/* Information */}

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-blue-50 rounded-xl p-4">
                  <FaClock className="text-blue-600 mb-2" />
                  <p className="text-gray-500 text-sm">Duration</p>
                  <h4 className="font-bold">
                    {selectedCourse.duration}
                  </h4>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <FaIndianRupeeSign className="text-green-600 mb-2" />
                  <p className="text-gray-500 text-sm">Monthly Fee</p>
                  <h4 className="font-bold">
                    ₹{selectedCourse.monthlyFee}
                  </h4>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <FaUsers className="text-purple-600 mb-2" />
                  <p className="text-gray-500 text-sm">Students</p>
                  <h4 className="font-bold">
                    {selectedCourse.students} / {selectedCourse.maxStudents}
                  </h4>
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  <FaSwimmingPool className="text-orange-600 mb-2" />
                  <p className="text-gray-500 text-sm">Pool</p>
                  <h4 className="font-bold">
                    {selectedCourse.pool}
                  </h4>
                </div>

              </div>

              {/* Additional Info */}

              <div className="mt-8 space-y-3">

                <div className="flex justify-between">
                  <span className="text-gray-500">Batch</span>
                  <span className="font-semibold">
                    {selectedCourse.batch}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Level</span>
                  <span className="font-semibold">
                    {selectedCourse.level}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCourse.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {selectedCourse.status}
                  </span>

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseProfile;