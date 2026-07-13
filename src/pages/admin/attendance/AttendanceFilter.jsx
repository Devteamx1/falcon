import { useDispatch, useSelector } from "react-redux";

import {
  setSelectedBatch,
  setSelectedStatus,
  setSelectedDate,
  clearFilters,
} from "../../../redux/slice/attendanceSlice";

const AttendanceFilter = () => {
  const dispatch = useDispatch();

  const {
    selectedBatch,
    selectedStatus,
    selectedDate,
  } = useSelector((state) => state.attendance);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">

      {/* Batch */}

      <select
        value={selectedBatch}
        onChange={(e) =>
          dispatch(setSelectedBatch(e.target.value))
        }
        className="border rounded-xl px-4 py-3 w-full lg:w-56"
      >
        <option value="All">All Batches</option>
        <option value="Morning Batch">Morning Batch</option>
        <option value="Evening Batch">Evening Batch</option>
        <option value="Kids Batch">Kids Batch</option>
        <option value="Advanced Batch">Advanced Batch</option>
      </select>

      {/* Status */}

      <select
        value={selectedStatus}
        onChange={(e) =>
          dispatch(setSelectedStatus(e.target.value))
        }
        className="border rounded-xl px-4 py-3 w-full lg:w-52"
      >
        <option value="All">All Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Late">Late</option>
        <option value="Leave">Leave</option>
      </select>

      {/* Date */}

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          dispatch(setSelectedDate(e.target.value))
        }
        className="border rounded-xl px-4 py-3 w-full lg:w-52"
      />

      {/* Clear */}

      <button
        onClick={() => dispatch(clearFilters())}
        className="
          bg-red-500
          hover:bg-red-600
          text-white
          px-6
          rounded-xl
          transition
        "
      >
        Clear Filters
      </button>

    </div>
  );
};

export default AttendanceFilter;