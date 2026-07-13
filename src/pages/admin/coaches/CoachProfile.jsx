import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaSwimmer,
  FaUsers,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaVenusMars,
  FaBirthdayCake,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closeProfile,
  clearSelectedCoach,
} from "../../../redux/slice/coachSlice";

import CoachStatusBadge from "./CoachStatusBadge";
import ExperienceBadge from "./ExperienceBadge";

const CoachProfile = () => {
  const dispatch = useDispatch();

  const {
    isProfileOpen,
    selectedCoach,
  } = useSelector((state) => state.coaches);

  const handleClose = () => {
    dispatch(closeProfile());
    dispatch(clearSelectedCoach());
  };

  if (!selectedCoach) return null;

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
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-120 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}

            <div className="sticky top-0 bg-white border-b px-6 py-5 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Coach Profile
              </h2>

              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-500 hover:text-white transition"
              >
                <FaTimes className="mx-auto" />
              </button>

            </div>

            {/* Body */}

            <div className="p-6">

              {/* Profile */}

              <div className="flex flex-col items-center">

                <img
                  src={selectedCoach.profile}
                  alt={selectedCoach.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                />

                <h2 className="text-2xl font-bold mt-4">
                  {selectedCoach.name}
                </h2>

                <p className="text-gray-500">
                  {selectedCoach.qualification}
                </p>

                <div className="mt-4">
                  <CoachStatusBadge
                    status={selectedCoach.status}
                  />
                </div>

              </div>

              {/* Information */}

              <div className="mt-8 space-y-5">

                <InfoRow
                  icon={<FaPhone />}
                  label="Phone"
                  value={selectedCoach.phone}
                />

                <InfoRow
                  icon={<FaEnvelope />}
                  label="Email"
                  value={selectedCoach.email}
                />

                <InfoRow
                  icon={<FaGraduationCap />}
                  label="Qualification"
                  value={selectedCoach.qualification}
                />

                <InfoRow
                  icon={<FaSwimmer />}
                  label="Specialization"
                  value={selectedCoach.specialization}
                />

                <InfoRow
                  icon={<FaUsers />}
                  label="Assigned Students"
                  value={selectedCoach.students}
                />

                <InfoRow
                  icon={<FaMoneyBillWave />}
                  label="Monthly Salary"
                  value={`₹${selectedCoach.salary.toLocaleString()}`}
                />

                <InfoRow
                  icon={<FaCalendarAlt />}
                  label="Joining Date"
                  value={selectedCoach.joiningDate}
                />

                <InfoRow
                  icon={<FaBirthdayCake />}
                  label="Age"
                  value={selectedCoach.age}
                />

                <InfoRow
                  icon={<FaVenusMars />}
                  label="Gender"
                  value={selectedCoach.gender}
                />

              </div>

              {/* Experience */}

              <div className="mt-8 flex justify-center">

                <ExperienceBadge
                  experience={selectedCoach.experience}
                />

              </div>

            </div>

          </motion.div>
        </>
      )}

    </AnimatePresence>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center justify-between border rounded-xl p-4">

    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">

        {icon}

      </div>

      <span className="font-medium">
        {label}
      </span>

    </div>

    <span className="text-gray-600 text-right">
      {value}
    </span>

  </div>
);

export default CoachProfile;