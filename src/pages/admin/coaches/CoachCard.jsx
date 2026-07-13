import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPhone,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  setSelectedCoach,
  openProfile,
  openModal,
  openDeleteModal,
} from "../../../redux/slice/coachSlice";

import CoachStatusBadge from "./CoachStatusBadge";
import ExperienceBadge from "./ExperienceBadge";

const CoachCard = () => {
  const dispatch = useDispatch();

  const {
    coaches,
    searchTerm,
    selectedBatch,
  } = useSelector((state) => state.coaches);

  const filteredCoaches = coaches.filter((coach) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      coach.name.toLowerCase().includes(search) ||
      coach.phone.includes(search) ||
      coach.email.toLowerCase().includes(search) ||
      coach.specialization.toLowerCase().includes(search);

    const matchesBatch =
      selectedBatch === "All" ||
      coach.batch === selectedBatch;

    return matchesSearch && matchesBatch;
  });

  if (filteredCoaches.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-10 text-center text-gray-500">
        No Coaches Found
      </div>
    );
  }

  return (
    <div className="grid gap-5">

      {filteredCoaches.map((coach) => (

        <div
          key={coach.id}
          className="bg-white rounded-3xl shadow-md p-6"
        >

          {/* Header */}

          <div className="flex items-center gap-4">

            <img
              src={coach.profile}
              alt={coach.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
            />

            <div className="flex-1">

              <h2 className="text-lg font-bold">
                {coach.name}
              </h2>

              <p className="text-gray-500">
                {coach.qualification}
              </p>

              <div className="mt-2">

                <CoachStatusBadge
                  status={coach.status}
                />

              </div>

            </div>

          </div>

          {/* Information */}

          <div className="mt-6 space-y-4 text-sm">

            <div className="flex justify-between">

              <span className="text-gray-500">
                Phone
              </span>

              <div className="flex items-center gap-2">

                <FaPhone className="text-blue-500" />

                {coach.phone}

              </div>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Specialization
              </span>

              <span>
                {coach.specialization}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Experience
              </span>

              <ExperienceBadge
                experience={coach.experience}
              />

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Students
              </span>

              <div className="flex items-center gap-2">

                <FaUsers className="text-indigo-500" />

                {coach.students}

              </div>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Salary
              </span>

              <div className="flex items-center gap-2">

                <FaMoneyBillWave className="text-green-600" />

                ₹{coach.salary.toLocaleString()}

              </div>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Batch
              </span>

              <span>
                {coach.batch}
              </span>

            </div>

          </div>

          {/* Actions */}

          <div className="mt-6 grid grid-cols-3 gap-3">

            <button
              onClick={() => {
                dispatch(setSelectedCoach(coach));
                dispatch(openProfile());
              }}
              className="py-3 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition flex justify-center"
            >
              <FaEye />
            </button>

            <button
              onClick={() => {
                dispatch(setSelectedCoach(coach));
                dispatch(openModal());
              }}
              className="py-3 rounded-xl bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition flex justify-center"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => {
                dispatch(setSelectedCoach(coach));
                dispatch(openDeleteModal());
              }}
              className="py-3 rounded-xl bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition flex justify-center"
            >
              <FaTrash />
            </button>

          </div>

        </div>

      ))}

    </div>
  );
};

export default CoachCard;