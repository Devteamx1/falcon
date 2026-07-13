import { useDispatch, useSelector } from "react-redux";
import {FaEye, FaEdit, FaTrash, FaUsers} from "react-icons/fa";

import {  setSelectedCourse,  openProfile,  openModal,  openDeleteModal} from "../../../redux/slice/courseSlice";

const CourseTable = () => {
  const dispatch = useDispatch();

  const {
    courses,
    searchTerm,
    selectedLevel,
    selectedBatch,
  } = useSelector((state) => state.courses);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.trainer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel =
      selectedLevel === "All" ||
      course.level === selectedLevel;

    const matchesBatch =
      selectedBatch === "All" ||
      course.batch === selectedBatch;

    return matchesSearch && matchesLevel && matchesBatch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}

      <div className="p-6 border-b">

        <h2 className="text-xl font-bold text-slate-800">
          Course List
        </h2>

        <p className="text-gray-500 mt-1">
          Manage all swimming academy courses.
        </p>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr className="text-left">

              <th className="px-6 py-4">Course</th>

              <th className="px-6 py-4">Trainer</th>

              <th className="px-6 py-4">Duration</th>

              <th className="px-6 py-4">Fee</th>

              <th className="px-6 py-4">Students</th>

              <th className="px-6 py-4">Batch</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredCourses.map((course) => (

              <tr
                key={course.id}
                className="border-b hover:bg-slate-50 transition"
              >

                {/* Course */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {course.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {course.code}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Trainer */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={course.trainerImage}
                      alt={course.trainer}
                      className="w-10 h-10 rounded-full"
                    />

                    <div>

                      <p className="font-medium">
                        {course.trainer}
                      </p>

                      <p className="text-xs text-gray-500">
                        {course.experience}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Duration */}

                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">

                    {course.duration}

                  </span>

                </td>

                {/* Fee */}

                <td className="px-6 py-4 font-semibold text-green-600">

                  ₹{course.monthlyFee}

                </td>

                {/* Students */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">

                    <FaUsers />

                    {course.students}/{course.maxStudents}

                  </div>

                </td>

                {/* Batch */}

                <td className="px-6 py-4">

                  {course.batch}

                </td>

                {/* Status */}

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {course.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-5 text-lg">

                    {/* View */}

                    <button
                      onClick={() => {
                        dispatch(setSelectedCourse(course));
                        dispatch(openProfile());
                      }}
                      className="text-blue-600 hover:scale-110 transition"
                    >
                      <FaEye />
                    </button>

                    {/* Edit */}

                    <button
                      onClick={() => {
                        dispatch(setSelectedCourse(course));
                        dispatch(openModal());
                      }}
                      className="text-green-600 hover:scale-110 transition"
                    >
                      <FaEdit />
                    </button>

                    {/* Delete */}

                    <button
                      onClick={() => {
                        dispatch(setSelectedCourse(course));
                        dispatch(openDeleteModal());
                      }}
                      className="text-red-600 hover:scale-110 transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Empty State */}

      {filteredCourses.length === 0 && (

        <div className="text-center py-16 text-gray-500">

          No Courses Found

        </div>

      )}

    </div>
  );
};

export default CourseTable;