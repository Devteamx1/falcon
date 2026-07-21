import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, updateCourse, closeModal,} from "../../../redux/slice/courseSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialForm = {
  image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400",
  name: "",
  code: "",
  trainer: "",
  trainerImage: "https://i.pravatar.cc/150",
  experience: "",
  phone: "",
  email: "",
  duration: "",
  monthlyFee: "",
  admissionFee: "",
  students: 0,
  maxStudents: "",
  level: "Beginner",
  batch: "Morning",
  pool: "Pool A",
  status: "Active",
  description: "",
};

const CourseModal = () => {
  const dispatch = useDispatch();

  const { isModalOpen, selectedCourse } = useSelector((state) => state.courses);
  const [nameError, setNameError] = useState("");
  const [trainerError, setTrainerError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (selectedCourse) {
      setFormData(selectedCourse);
    } else {
      setFormData(initialForm);
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "name") {
        // Only letters and spaces
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setNameError("");
        } else {
          setNameError("Only letters are allowed.");
        }
        return;
      }
      if (name  === "trainer") {
        // Only letters and spaces
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setTrainerError("");
        } else {
          setTrainerError("Only letters are allowed.");
        }
        return;
      }
       // Phone Validation
      if (name === "phone") {
        // Numbers only & max 10 digits
        if (/^\d{0,10}$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setPhoneError("")
        }
        else{
          setPhoneError("Only numbers are allowed. ( 1 - 10)")
        }
        return;
      }
        // mail-validations
        if (name === "email") {
        setFormData({ ...formData, [name]: value });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "" || emailRegex.test(value)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email address.");
        }
        return;
      }
    setFormData({ ...formData, [name]: value });
   }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.code ||
      !formData.trainer ||
      !formData.duration
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (selectedCourse) {
      dispatch(updateCourse(formData));
      toast.success("Course Updated Successfully");
    } else {
      dispatch(
        addCourse({
          ...formData,
          id: Date.now(),
          students: 0,
        })
      );

      toast.success("Course Added Successfully");
    }

    dispatch(closeModal());
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={() => dispatch(closeModal())}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] xl:w-[40%] bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-8">
         <div className="sticky top-0 bg-white px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              {selectedCourse ? "Edit Course" : "Add Course"}
            </h2>

            <p className="text-gray-500 mt-1">
              Swimming Academy Couse Form
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
            {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5" >
                {/* Name */}
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" EnterCourse Name"
                    required
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
                      nameError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
                        />
                        {nameError && (<p className="text-red-500 text-sm mt-2">{nameError}</p>)}
                    {/* Course Code */}
                    <input
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="Course Code"
                    className="w-full border rounded-xl p-3"
                    />
                  {/* Trainer Name */}
                    <input
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleChange}
                    placeholder="Trainer Name"
                    required
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
                      trainerError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}
                        />
                      {trainerError && (<p className="text-red-500 text-sm mt-2">{trainerError}</p>)}

                    <input
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="Trainer Experience"
                    className="w-full border rounded-xl p-3"
                    />

                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Trainer Phone"
                    required
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                        phoneError
                          ? "border-red-500"
                          : "border-cloudSoft focus:border-sky"
                      }`}
                      />
                      {phoneError && (<p className="text-red-500 text-sm mt-2">{phoneError}</p>)}

                    <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Trainer Email"
                    required
                    className={`w-full px-4 py-3.5 rounded-2xl border-2 focus:outline-none transition ${
                        emailError
                          ? "border-red-500"
                          : "border-cloudSoft focus:border-sky"
                      }`}
                      />
                  {emailError && (<p className="text-red-500 text-sm mt-2">{emailError}</p>)}

                    <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                    className="w-full border rounded-xl p-3"
                    />

                    <input
                    type="number"
                    name="monthlyFee"
                    value={formData.monthlyFee}
                    onChange={handleChange}
                    placeholder="Monthly Fee"
                    className="w-full border rounded-xl p-3"
                    />

                    <input
                    type="number"
                    name="admissionFee"
                    value={formData.admissionFee}
                    onChange={handleChange}
                    placeholder="Admission Fee"
                    className="w-full border rounded-xl p-3"
                    />

                    <input
                    type="number"
                    name="maxStudents"
                    value={formData.maxStudents}
                    onChange={handleChange}
                    placeholder="Maximum Students"
                    className="w-full border rounded-xl p-3"
                    />
             
               
            

            {/* /DropDowns */}
            <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Kids</option>
                    </select>

                    <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    >
                    <option>Morning</option>
                    <option>Evening</option>
                    </select>

                    <select
                    name="pool"
                    value={formData.pool}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    >
                    <option>Pool A</option>
                    <option>Pool B</option>
                    <option>Kids Pool</option>
                    <option>Olympic Pool</option>
                    </select>

                    <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    >
                    <option>Active</option>
                    <option>Inactive</option>
                    </select>

                    <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Course Description"
                    className="w-full border rounded-xl p-3 resize-none"
                    />

                    {/* Butons */}

                <div className="flex gap-4 pt-2">
                <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3"
                >
                    {selectedCourse ? "Update Course" : "Save Course"}
                </button>

                <button
                    type="button"
                    onClick={() => dispatch(closeModal())}
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

                export default CourseModal;