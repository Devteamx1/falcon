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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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