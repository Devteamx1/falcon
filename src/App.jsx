import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Trainers from "./pages/Trainers.jsx";
import Gallery from "./pages/Gallery.jsx";
import Schedule from "./pages/Schedule.jsx";
import Pricing from "./pages/Pricing.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import StudentDashboard from "./portal/StudentDashboard.jsx";
import ParentDashboard from "./portal/ParentDashboard.jsx";
// import Demo from "./pages/dashboard/Demo.jsx"
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./utils/Login";
// import Signup from "./utils/SignUp";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import StudentManagement from "./pages/admin/StudentManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import BookingManagement from "./pages/admin/BookingManagement";
import CoachManagement from "./pages/admin/CoachManagement";
import AttendanceManagement from "./pages/admin/AttendanceManagement"
import ReportsManagement from "./pages/admin/ReportsManagement";
import CommunicationManagement from "./pages/admin/CommunicationManagement";
import PaymentManagement from "./pages/admin/PaymentManagement";
import ScrollTop from "./components/ScrollTop.jsx";
function App() { 
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <div className="min-h-screen bg-bgLight">
      {/* Website */}
      <LoadingScreen />
         {!isAdminRoute && <Navbar />}
         {/* Website */}
         <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/demo" element={<Demo />} /> */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
     {/* Admin Panel */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/admin/students" element={<StudentManagement />} />
      <Route path="/admin/courses" element={<CourseManagement/>}/>
      <Route path="/admin/bookings" element={<BookingManagement />}/>
      <Route path="/admin/coaches" element={<CoachManagement />}/>
      <Route path="/admin/attendance" element={<AttendanceManagement />}/>
      <Route path="/admin/reports" element={<ReportsManagement />}/>
      <Route path="/admin/communications" element={<CommunicationManagement />}/>
      <Route path="/admin/payments" element={<PaymentManagement />}/>
     
      </Routes>
     {!isAdminRoute && (
        <>
          <Footer />
          <BackToTopButton />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;