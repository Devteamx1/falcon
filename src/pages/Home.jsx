import HeroBanner from "../components/HeroBanner.jsx";
import StatsSection from "../components/StatsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ProgramsSection from "../components/ProgramsSection.jsx";
import CoachesSection from "../components/CoachesSection.jsx";
import FacilitiesSection from "../components/FacilitiesSection.jsx";
import GalleryPreview from "../components/GalleryPreview.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import MembershipPlans from "../components/MembershipPlans.jsx";
import ScheduleSection from "../components/ScheduleSection.jsx";
import EventsSection from "../components/EventsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroBanner />
      <StatsSection />
      <WhyChooseUs />
      <AboutSection />
      <ProgramsSection />
      <CoachesSection />
      <FacilitiesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <MembershipPlans />
      <ScheduleSection />
      <EventsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Home;