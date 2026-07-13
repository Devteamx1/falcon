import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="min-h-screen bg-bgLight">
      <LoadingScreen />
      <Navbar />
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
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;