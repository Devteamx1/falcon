import ScheduleSection from "../components/ScheduleSection.jsx";

const Schedule = () => {
  return (
    <div className="pt-32">
      <section className="max-w-4xl mx-auto px-6 text-center pb-10">
        <span className="text-primary font-bold text-sm section-label uppercase">Timetable</span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-darkNavy mt-3 mb-5">
          Weekly Class Schedule
        </h1>
        <p className="text-darkNavy/55 max-w-2xl mx-auto">
          Browse our full weekly timetable and find a session that fits
          your routine. All batches are limited-size for close coaching.
        </p>
      </section>

      <ScheduleSection />
    </div>
  );
};

export default Schedule;