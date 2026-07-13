import { useDispatch, useSelector } from "react-redux";
import {FaEye,FaEdit,FaTrash,FaPhone,FaUsers,FaMoneyBillWave} from "react-icons/fa";
import {setSelectedCoach,openProfile,openModal,openDeleteModal} from "../../../redux/slice/coachSlice";
import CoachStatusBadge from "./CoachStatusBadge";
import ExperienceBadge from "./ExperienceBadge";

const CoachTable = () => {
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

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b">

        <h2 className="text-xl font-bold text-slate-800">
          Coach List
        </h2>

        <span className="text-gray-500">
          {filteredCoaches.length} Coaches
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Coach
              </th>

              <th className="px-6 py-4 text-left">
                Contact
              </th>

              <th className="px-6 py-4 text-left">
                Specialization
              </th>

              <th className="px-6 py-4 text-left">
                Experience
              </th>

              <th className="px-6 py-4 text-left">
                Batch
              </th>

              <th className="px-6 py-4 text-left">
                Students
              </th>

              <th className="px-6 py-4 text-left">
                Salary
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredCoaches.length > 0 ? (
              filteredCoaches.map((coach) => (
                <tr
                  key={coach.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  {/* Coach */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <img
                        src={coach.profile}
                        alt={coach.name}
                        className="w-12 h-12 rounded-full object-cover border"
                      />

                      <div>

                        <h4 className="font-semibold">
                          {coach.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {coach.qualification}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Contact */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaPhone className="text-blue-500" />

                      {coach.phone}

                    </div>

                  </td>

                  {/* Specialization */}

                  <td className="px-6 py-5">

                    {coach.specialization}

                  </td>

                  {/* Experience */}

                  <td className="px-6 py-5">

                    <ExperienceBadge
                      experience={coach.experience}
                    />

                  </td>

                  {/* Batch */}

                  <td className="px-6 py-5">

                    {coach.batch}

                  </td>

                  {/* Students */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaUsers className="text-indigo-500" />

                      {coach.students}

                    </div>

                  </td>

                  {/* Salary */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaMoneyBillWave className="text-green-600" />

                      ₹{coach.salary.toLocaleString()}

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <CoachStatusBadge
                      status={coach.status}
                    />

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-4">

                      <button
                        onClick={() => {
                          dispatch(setSelectedCoach(coach));
                          dispatch(openProfile());
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          dispatch(setSelectedCoach(coach));
                          dispatch(openModal());
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => {
                          dispatch(setSelectedCoach(coach));
                          dispatch(openDeleteModal());
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
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
                  No coaches found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CoachTable;