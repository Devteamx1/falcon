import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../services/api.jsx";

const ParentDashboard = () => {
  const { user } = useAuth();
  const [child, setChild] = useState(null);
  const [attendance, setAttendance] = useState({ percentage: 0, records: [] });
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [childRes, attendanceRes, feesRes] = await Promise.all([
          api.get(`/students/${user._id}`),
          api.get(`/attendance/student/${user._id}`),
          api.get(`/fees/student/${user._id}`),
        ]);
        setChild(childRes.data);
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
        <p className="text-inkNavy/40">Loading dashboard... 👨‍👩‍👧</p>
      </div>
    );
  }

  const feeStatusStyle =
    child?.fees?.status === "Paid"
      ? "bg-mint/15 text-mint"
      : child?.fees?.status === "Partial Paid"
      ? "bg-sunshine/20 text-inkNavy"
      : "bg-coral/15 text-coral";

  return (
    <div className="bg-cloudSoft min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-display font-extrabold text-inkNavy">Parent Portal 👨‍👩‍👧</h1>
          <p className="text-inkNavy/50 mt-1">
            Keeping an eye on <span className="font-bold text-sky">{child?.name}</span>'s progress
          </p>
        </motion.div>

        {/* Child Overview Card */}
        <div className="friendly-card p-6 mb-8 flex items-center gap-6 flex-wrap">
          <div className="w-20 h-20 rounded-full bg-sky-gradient flex items-center justify-center text-white text-3xl font-display font-bold shadow-md">
            {child?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-display font-bold text-inkNavy">{child?.name}</h3>
            <p className="text-sm text-inkNavy/50">{child?.course?.title || "No course assigned"}</p>
            <p className="text-sm text-inkNavy/50">Batch: {child?.batchTiming || "—"}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-bold ${feeStatusStyle}`}>
            Fees: {child?.fees?.status}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Attendance Summary */}
          <div className="friendly-card p-6 md:col-span-1 text-center">
            <h3 className="font-display font-bold text-inkNavy mb-4">Attendance 📅</h3>
            <div className="py-4">
              <span className="text-4xl font-display font-extrabold text-sky">
                {attendance.percentage}%
              </span>
              <p className="text-xs text-inkNavy/50 mt-2">Overall Attendance Rate</p>
            </div>
          </div>

          {/* Fee Details */}
          <div className="friendly-card p-6 md:col-span-2">
            <h3 className="font-display font-bold text-inkNavy mb-4">Fee Payment History 💳</h3>
            {fees.length === 0 ? (
              <p className="text-sm text-inkNavy/40">No fee records yet.</p>
            ) : (
              <div className="space-y-3">
                {fees.map((fee) => (
                  <div key={fee._id} className="flex items-center justify-between text-sm bg-cloudSoft/60 rounded-xl px-4 py-2.5">
                    <span className="text-inkNavy/60">
                      ₹{fee.amountPaid} / ₹{fee.amount} — {fee.paymentMode}
                    </span>
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

        {/* Recent Attendance Log */}
        <div className="friendly-card p-6 mt-6">
          <h3 className="font-display font-bold text-inkNavy mb-4">Recent Attendance Log 📋</h3>
          {attendance.records.length === 0 ? (
            <p className="text-sm text-inkNavy/40">No records yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-3">
              {attendance.records.slice(0, 6).map((rec) => (
                <div key={rec._id} className="flex items-center justify-between text-sm bg-cloudSoft/60 rounded-xl px-4 py-2.5">
                  <span className="text-inkNavy/60">{new Date(rec.date).toLocaleDateString()}</span>
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
      </div>
    </div>
  );
};

export default ParentDashboard;