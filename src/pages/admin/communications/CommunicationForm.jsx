import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { addMessage } from "../../../redux/slice/communicationSlice";

const audienceOptions = [
  "All Students",
  "All Parents",
  "All Coaches",
  "Morning Batch",
  "Evening Batch",
];

const channelOptions = [
  "Email",
  "SMS",
  "WhatsApp",
];

const CommunicationForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    audience: "All Students",
    channel: "Email",
    subject: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");

 const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "subject") {
        // Only letters and spaces
        if (/^[A-Za-z\s]*$/.test(value)) {
          setFormData({ ...formData, [name]: value });
          setNameError("");
        } else {
          setNameError("Only letters are allowed.");
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

    const newMessage = {
      id: Date.now(),
      ...formData,
      sentBy: "Admin",
      status: "Delivered",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    dispatch(addMessage(newMessage));

    toast.success("Message Sent Successfully");

    setFormData({
      audience: "All Students",
      channel: "Email",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Compose Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Audience */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Audience
          </label>

          <select
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {audienceOptions.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Channel */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Channel
          </label>

          <select
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {channelOptions.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject..."
            required
            className={`w-full px-4 py-3.5 rounded-2xl border-2 border-cloudSoft focus:outline-none focus:border-sky transition ${
               nameError ? "border-red-500" : "border-cloudSoft focus:border-sky"}`}/>
              {nameError && (<p className="text-red-500 text-sm mt-2">{nameError}</p>)}
          
        </div>

        {/* Message */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
            className="w-full border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
        >
          <FaPaperPlane />

          Send Message
        </button>

      </form>
    </motion.div>
  );
};

export default CommunicationForm;