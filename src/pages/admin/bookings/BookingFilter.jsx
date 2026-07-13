import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../redux/slice/bookingSlice";

const BookingSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.bookings);
  return (
    <div className="relative w-full md:w-100">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search student, phone, coach or course..."
        onChange={(e) =>
          dispatch(setSearchTerm(e.target.value))
        }
        className=" w-full pl-12 pr-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-4  focus:ring-blue-100 focus:border-blue-500 transition-all"/>
    </div>
  );
};

export default BookingSearch;