import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchTerm,
  clearSearch,
} from "../../../redux/slice/coachSlice";

const CoachSearch = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector(
    (state) => state.coaches
  );

  return (
    <div className="flex items-center gap-4 flex-1">

      {/* Search Box */}

      <div className="relative w-half md:w-1/3">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

        <input type="text"  placeholder="Search coach by name, phone, email or specialization..."
          value={searchTerm}
          onChange={(e) =>
            dispatch(setSearchTerm(e.target.value))
          }
          className="
            w-full
            pl-12
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

        {searchTerm && (
          <button
            onClick={() => dispatch(clearSearch())}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
          >
            <FaTimes />
          </button>
        )}

      </div>

    </div>
  );
};

export default CoachSearch;