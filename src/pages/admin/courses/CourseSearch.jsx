import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../redux/slice/courseSlice";

const CourseSearch = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.courses);

  return (
    <div className="relative w-full md:w-96">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search Course or Trainer..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>
  );
};

export default CourseSearch;