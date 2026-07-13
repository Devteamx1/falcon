import { useDispatch, useSelector } from "react-redux";
import {  setSelectedLevel,  setSelectedBatch,} from "../../../redux/slice/courseSlice";

const CourseFilter = () => {
  const dispatch = useDispatch();

  const { selectedLevel, selectedBatch } = useSelector(
    (state) => state.courses
  );
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* Level */}

      <select
        value={selectedLevel}
        onChange={(e) =>
          dispatch(setSelectedLevel(e.target.value))
        }
        className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Kids">Kids</option>
      </select>
      {/* Batch */}

      <select
        value={selectedBatch}
        onChange={(e) =>
          dispatch(setSelectedBatch(e.target.value))
        }
        className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="All">All Batches</option>
        <option value="Morning">Morning</option>
        <option value="Evening">Evening</option>
      </select>

    </div>
  );
};

export default CourseFilter;