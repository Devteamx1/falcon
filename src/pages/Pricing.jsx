import MembershipPlans from "../components/MembershipPlans.jsx";
import FAQSection from "../components/FAQSection.jsx";

const Pricing = () => {
  return (
    <div className="pt-32">
      <section className="max-w-4xl mx-auto px-6 text-center pb-10">
        <span className="text-primary font-bold text-sm section-label uppercase">Pricing</span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-darkNavy mt-3 mb-5">
          Membership Plans
        </h1>
        <p className="text-darkNavy/55 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Choose the plan that
          matches your swimmer's goals.
        </p>
      </section>

      <MembershipPlans />
      <FAQSection />
    </div>
  );
};

export default Pricing;