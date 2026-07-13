import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {clearSelectedStudent} from "../../../redux/slice/studentSlice";

import {
  FaUserGraduate,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSwimmer,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

const StudentProfile = () => {
  const dispatch = useDispatch();

      const { selectedStudent, isProfileOpen } = useSelector((state) => state.students);

  return (
    <AnimatePresence>
      {isProfileOpen && selectedStudent && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeProfile())}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: .3 }}
            className="fixed top-0 right-0 h-screen w-full md:w-105 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">

              {/* Header */}

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  Student Profile
                </h2>

                <button
                  onClick={() =>
                    dispatch(clearSelectedStudent())
                  }
                >
                  <FaTimes />
                </button>

              </div>

              {/* Image */}

              <div className="mt-8 flex flex-col items-center">

                <img
                  src={selectedStudent.profile}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />

                <h3 className="mt-4 text-2xl font-bold">
                  {selectedStudent.name}
                </h3>

                <p className="text-gray-500">
                  Swimming Student
                </p>

              </div>

              {/* Details */}

              <div className="mt-8 space-y-5">

                <Info
                  icon={<FaPhone />}
                  title="Phone"
                  value={selectedStudent.phone}
                />

                <Info
                  icon={<FaEnvelope />}
                  title="Email"
                  value={selectedStudent.email}
                />

                <Info
                  icon={<FaMapMarkerAlt />}
                  title="Address"
                  value={selectedStudent.address}
                />

                <Info
                  icon={<FaUserGraduate />}
                  title="Coach"
                  value={selectedStudent.coach}
                />

                <Info
                  icon={<FaSwimmer />}
                  title="Batch"
                  value={selectedStudent.batch}
                />

                <Info
                  icon={<FaCalendarAlt />}
                  title="Joining Date"
                  value={selectedStudent.joiningDate}
                />

                <Info
                  icon={<FaMoneyBillWave />}
                  title="Fee"
                  value={`₹${selectedStudent.paidFee} / ₹${selectedStudent.totalFee}`}
                />

              </div>

              {/* Progress */}

              <div className="mt-10">

                <h4 className="font-semibold mb-3">
                  Fee Progress
                </h4>

                <div className="w-full h-4 rounded-full bg-gray-200">

                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{
                      width: `${
                        (selectedStudent.paidFee /
                          selectedStudent.totalFee) *
                        100
                      }%`,
                    }}
                  />

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Info = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">

    <div className="text-blue-600 text-xl">
      {icon}
    </div>

    <div>

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h4 className="font-semibold">
        {value}
      </h4>

    </div>

  </div>
);

export default StudentProfile;