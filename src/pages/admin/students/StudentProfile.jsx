import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {clearSelectedStudent,closeProfile} from "../../../redux/slice/studentSlice";
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

  const handleClose = () => {
      dispatch(closeProfile());
      dispatch(clearSelectedStudent());
    };
  if (!selectedStudent) return null;

  return (
    <AnimatePresence>
      {isProfileOpen && selectedStudent && (
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
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: .3 }}
            className="fixed right-0 top-0 h-screen w-full max-w-xl bg-white shadow-2xl z-[9999] overflow-y-auto ">
         
              {/* Header */}

              <div className="sticky top-0 bg-white border-b px-6 py-5 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Student Profile
              </h2>

              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-500 hover:text-white transition"
              >
                <FaTimes className="mx-auto" />
              </button>

            </div>

            <div className="p-6">
              {/* Image */}

              <div className="mt-8 flex flex-col items-center">

                <img
                  src={selectedStudent.profile}
                  alt={selectedStudent.name}
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
  <div className="flex items-center justify-between border rounded-xl p-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
        {icon}
      </div>

      <span className="font-medium">
        {title}
      </span>
    </div>

    <span className="text-gray-600 text-right max-w-[180px] break-words">
      {value}
    </span>
  </div>
);

export default StudentProfile;