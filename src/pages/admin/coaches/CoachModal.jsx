import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import {
  closeModal,
  addCoach,
  updateCoach,
} from "../../../redux/slice/coachSlice";

const CoachModal = () => {
  const dispatch = useDispatch();

  const { isModalOpen, selectedCoach } = useSelector(
    (state) => state.coaches
  );

  const initialForm = {
    name: "",
    age: "",
    gender: "Male",

    phone: "",
    email: "",

    qualification: "",

    specialization: "",

    experience: "",

    batch: "",

    students: 0,

    salary: "",

    joiningDate: "",

    status: "Active",

    profile: "https://i.pravatar.cc/150",
  };

  const [formData, setFormData] = useState(initialForm);

  // ==========================
  // Edit Coach
  // ==========================

  useEffect(() => {
    if (selectedCoach) {
      setFormData(selectedCoach);
    } else {
      setFormData(initialForm);
    }
  }, [selectedCoach]);

  // ==========================
  // Handle Change
  // ==========================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // ==========================
// Submit Form
// ==========================

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.specialization ||
    !formData.batch
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  if (selectedCoach) {
    dispatch(
      updateCoach({
        ...formData,
        age: Number(formData.age),
        experience: Number(formData.experience),
        students: Number(formData.students),
        salary: Number(formData.salary),
      })
    );

    toast.success("Coach Updated Successfully");
  } else {
    dispatch(
      addCoach({
        ...formData,
        id: Date.now(),
        age: Number(formData.age),
        experience: Number(formData.experience),
        students: Number(formData.students),
        salary: Number(formData.salary),
      })
    );

    toast.success("Coach Added Successfully");
  }

  dispatch(closeModal());

  setFormData(initialForm);
};

  return (
    <AnimatePresence>

      {isModalOpen && (

        <>

          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeModal())}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: .3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] xl:w-[40%] bg-white shadow-2xl z-50 overflow-y-auto">

            {/* Header */}

            <div className="sticky top-0 bg-white px-6 py-5 flex justify-between items-center">

              <div>

                <h2 className="text-2xl font-bold">

                  {selectedCoach
                    ? "Edit Coach"
                    : "Add Coach"}

                </h2>

                <p className="text-gray-500 mt-1">
                  Swimming Academy Coach Form
                </p>

              </div>

              <button
                onClick={() => dispatch(closeModal())}
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-500 hover:text-white transition"
              >
                <FaTimes className="mx-auto" />
              </button>

            </div>

            {/* Form */}

            <form  onSubmit={handleSubmit} className="p-6 space-y-6">

              {/* =======================
                  Personal Information
              ======================= */}

              <div className="space-y-5">

                <h3 className="font-semibold text-lg border-b pb-2">
                  Personal Information
                </h3>

                {/* Name */}

                <div>

                  <label className="block mb-2 font-medium">
                    Coach Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter coach name"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

                {/* Age */}

                <div>

                  <label className="block mb-2 font-medium">
                    Age
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

                {/* Gender */}

                <div>

                  <label className="block mb-2 font-medium">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                </div>

                {/* Phone */}

                <div>

                  <label className="block mb-2 font-medium">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="coach@gmail.com"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                </div>

              </div>

             {/* =======================
    Professional Information
======================= */}

                <div className="space-y-5">

                <h3 className="font-semibold text-lg border-b pb-2">
                    Professional Information
                </h3>

                {/* Qualification */}

                <div>

                    <label className="block mb-2 font-medium">
                    Qualification
                    </label>

                    <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="NIS Certified"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                {/* Specialization */}

                <div>

                    <label className="block mb-2 font-medium">
                    Specialization
                    </label>

                    <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                    >
                    <option value="">Select Specialization</option>
                    <option>Freestyle</option>
                    <option>Backstroke</option>
                    <option>Breaststroke</option>
                    <option>Butterfly</option>
                    <option>Kids Training</option>
                    <option>Advanced Swimming</option>
                    </select>

                </div>

                {/* Experience */}

                <div>

                    <label className="block mb-2 font-medium">
                    Experience (Years)
                    </label>

                    <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="5"
                    className="w-full border rounded-xl px-4 py-3"
                    />

                </div>

                {/* Assigned Batch */}

                <div>

                    <label className="block mb-2 font-medium">
                    Assigned Batch
                    </label>

                    <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                    >
                    <option value="">Select Batch</option>
                    <option>Morning Batch</option>
                    <option>Evening Batch</option>
                    <option>Kids Batch</option>
                    <option>Advanced Batch</option>
                    </select>

                </div>

                {/* Students */}

                <div>

                    <label className="block mb-2 font-medium">
                    Assigned Students
                    </label>

                    <input
                    type="number"
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    placeholder="30"
                    className="w-full border rounded-xl px-4 py-3"
                    />

                </div>

                {/* Salary */}

                <div>

                    <label className="block mb-2 font-medium">
                    Monthly Salary
                    </label>

                    <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="30000"
                    className="w-full border rounded-xl px-4 py-3"
                    />

                </div>

                {/* Joining Date */}

                <div>

                    <label className="block mb-2 font-medium">
                    Joining Date
                    </label>

                    <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                    />

                </div>

                {/* Status */}

                <div>

                    <label className="block mb-2 font-medium">
                    Coach Status
                    </label>

                    <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                    >
                    <option>Active</option>
                    <option>Leave</option>
                    <option>Inactive</option>
                    </select>

                </div>

                </div>

                 {/* Buttons */}

                        <div className="flex gap-4 pt-6 border-t">

                        <button
                            type="submit"
                            className="
                            flex-1
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            py-3
                            rounded-xl
                            font-semibold
                            transition
                            "
                        >
                            {selectedCoach ? "Update Coach" : "Save Coach"}
                        </button>

                        <button
                            type="button"
                            onClick={() => dispatch(closeModal())}
                            className="
                            flex-1
                            border
                            border-gray-300
                            hover:bg-gray-100
                            py-3
                            rounded-xl
                            font-semibold
                            transition
                            "
                        >
                            Cancel
                        </button>

                        </div>

            </form>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
};

export default CoachModal;