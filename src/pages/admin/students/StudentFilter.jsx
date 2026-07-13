import { useDispatch, useSelector } from "react-redux";
import { setSelectedBatch } from "../../../redux/slice/studentSlice";
const StudentFilter = () => {
  const dispatch = useDispatch();

  const { selectedBatch } = useSelector((state) => state.students);

  const batches = [
    "All",
    "Morning Batch",
    "Evening Batch",
    "Kids Batch",
    "Advanced Batch",
  ];

  return (
    <select
      value={selectedBatch}
      onChange={(e) => dispatch(setSelectedBatch(e.target.value))}
      className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      {batches.map((batch) => (
        <option key={batch}>{batch}</option>
      ))}
    </select>
  );
};

export default StudentFilter;