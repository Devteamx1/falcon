import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  clearSearch,
} from "../../../redux/slice/attendanceSlice";

const AttendanceSearch = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector(
    (state) => state.attendance
  );

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="relative w-full lg:w-96">

      {/* Search Icon */}

      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      {/* Input */}

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by Student, ID or Coach..."
        className="
          w-full
          pl-11
          pr-12
          py-3
          border
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
        "
      />

      {/* Clear Button */}

      {searchTerm && (
        <button
          onClick={handleClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-red-500
            font-bold
          "
        >
          ✕
        </button>
      )}

    </div>
  );
};

export default AttendanceSearch;