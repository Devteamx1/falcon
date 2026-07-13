import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} | Mobile: ${mobile}`);
    navigate('/admin')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}"
            />
          </div>
          <button type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-400"
          >
            Login
          </button>
         
        </form>
      </div>
    </div>
  );
}
