import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../services/api.jsx";

const avatarColors = ["bg-sky", "bg-coral", "bg-mint", "bg-sunshine"];

const StudentDashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [attendance, setAttendance] = useState({ percentage: 0, records: [] });
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, attendanceRes, feesRes] = await Promise.all([
          api.get(`/students/${user._id}`),
          api.get(`/attendance/student/${user._id}`),
          api.get(`/fees/student/${user._id}`),
        ]);
        setProfile(profileRes.data);
        setAttendance(attendanceRes.data);
        setFees(feesRes.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (user?._id) fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="bg-cloudSoft min-h-[60vh] flex items-center justify-center">
        <p className="text-inkNavy/40">Loading your dashboard... 🏊</p>
      </div>
    );
  }

  return (
    <div className="bg-cloudSoft min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <h1 className="text-3xl font-display font-extrabold text-inkNavy">
              Hey {profile?.name?.split(" ")[0] || user?.name}! 👋
            </h1>
            <p className="text-inkNavy/50 mt-1">Here's how your swimming journey is going.</p>
          </div>
          <div className={`w-16 h-16 rounded-full ${avatarColors[0]} flex items-center justify-center text-white text-2xl font-display font-bold shadow-md`}>
            {(profile?.name || user?.name || "S").charAt(0)}
          </div>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-4 gap-5 mb-10">
          {[
            { label: "Attendance", value: `${attendance.percentage}%`, icon: "📅", color: "bg-sky/10" },
            { label: "Course", value: profile?.course?.title || "—", icon: "🏊", color: "bg-mint/10" },
            { label: "Batch", value: profile?.batchTiming || "—", icon: "⏰", color: "bg-sunshine/15" },
            { label: "Fee Status", value: profile?.fees?.status || "—", icon: "💳", color: "bg-coral/10" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="friendly-card p-5"
            >
              <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center text-xl mb-3`}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-inkNavy">{stat.value}</h3>
              <p className="text-xs text-inkNavy/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Attendance */}
          <div className="friendly-card p-6">
            <h3 className="font-display font-bold text-inkNavy mb-4">Recent Attendance 📅</h3>
            {attendance.records.length === 0 ? (
              <p className="text-sm text-inkNavy/40">No attendance records yet.</p>
            ) : (
              <div className="space-y-3">
                {attendance.records.slice(0, 5).map((rec) => (
                  <div key={rec._id} className="flex items-center justify-between text-sm bg-cloudSoft/60 rounded-xl px-4 py-2.5">
                    <span className="text-inkNavy/60">
                      {new Date(rec.date).toLocaleDateString()}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        rec.status === "Present"
                          ? "bg-mint/15 text-mint"
                          : rec.status === "Absent"
                          ? "bg-coral/15 text-coral"
                          : "bg-sunshine/20 text-inkNavy"
                      }`}
                    >
                      {rec.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Fee History */}
          <div className="friendly-card p-6">
            <h3 className="font-display font-bold text-inkNavy mb-4">Fee Payment History 💳</h3>
            {fees.length === 0 ? (
              <p className="text-sm text-inkNavy/40">No fee records yet.</p>
            ) : (
              <div className="space-y-3">
                {fees.map((fee) => (
                  <div key={fee._id} className="flex items-center justify-between text-sm bg-cloudSoft/60 rounded-xl px-4 py-2.5">
                    <span className="text-inkNavy/60">₹{fee.amountPaid} / ₹{fee.amount}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        fee.status === "Paid"
                          ? "bg-mint/15 text-mint"
                          : fee.status === "Partial Paid"
                          ? "bg-sunshine/20 text-inkNavy"
                          : "bg-coral/15 text-coral"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;