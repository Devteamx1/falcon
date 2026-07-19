import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {  closeModal, addStudent, updateStudent} from "../../../redux/slice/studentSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const StudentModal = () => {
  const dispatch = useDispatch();

  const { isModalOpen, selectedStudent, students } = useSelector(
    (state) => state.students
  );

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    address: "",
    coach: "",
    batch: "",
    totalFee: "",
    joiningDate: "",
    attendance: "Present",
    feeStatus: "Pending",
    status: "Active",
    profile: "https://i.pravatar.cc/150",
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    } else {
      setFormData({
        name: "",
        age: "",
        gender: "Male",
        phone: "",
        email: "",
        address: "",
        coach: "",
        batch: "",
        totalFee: "",
        joiningDate: "",
        attendance: "Present",
        feeStatus: "Pending",
        status: "Active",
        profile: "https://i.pravatar.cc/150",
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Validation
  if (
    !formData.name ||
    !formData.phone ||
    !formData.batch ||
    !formData.coach
  ) {
    toast.error("Please fill all required fields!");
    return;
  }

  if (selectedStudent) {
    dispatch(updateStudent(formData));

    toast.success("Student Updated Successfully 🎉");
  } else {
    dispatch(
      addStudent({
        ...formData,
        id: Date.now(),
        paidFee: 0,
        pendingFee: Number(formData.totalFee),
      })
    );

    toast.success("Student Added Successfully 🎉");
  }

  dispatch(closeModal());
};

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}
          <motion.div
              onClick={() => {dispatch(closeModal());toast("Cancelled");
}}            initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: .3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] xl:w-[40%] bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-10">
           <div className="sticky top-0 bg-white px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              {selectedStudent ? "Edit Student" : "Add Student"}
            </h2>

            <p className="text-gray-500 mt-1">
              Swimming Academy Student Form
            </p>
          </div>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
                toast("Cancelled");
              }}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Student Name"
                  className="w-full border rounded-xl p-3"
                  required
                />

                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="w-full border rounded-xl p-3"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="coach"
                  value={formData.coach}
                  onChange={handleChange}
                  placeholder="Coach Name"
                  className="w-full border rounded-xl p-3"
                />

                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Morning Batch</option>
                  <option>Evening Batch</option>
                  <option>Kids Batch</option>
                  <option>Advanced Batch</option>
                </select>

                <input
                  name="totalFee"
                  type="number"
                  value={formData.totalFee}
                  onChange={handleChange}
                  placeholder="Total Fee"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <div className="flex gap-4">

                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700"
                  >
                    Save Student
                  </button>

                  <button
                    type="button"
                    onClick={() => {dispatch(closeModal());toast("Cancelled");}}
                    className="flex-1 border rounded-xl py-3"
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StudentModal;