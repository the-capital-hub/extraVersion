import ServicesSection from "../../components/Services/Services";
import Booking from "../../components/Booking/Booking";
import Ivy from "../../components/Ivy/Ivy";

const Services = () => {
  return (
    <main className="services-page">

      {/* Page Hero */}
      

      {/* Services */}
      <section className="services-page-list">
        <ServicesSection />
      </section>

      {/* Ivy */}
      <section className="services-page-ivy">
        <Ivy />
      </section>

      {/* Booking */}
      <section className="services-page-booking">
        <Booking />
      </section>

    </main>
  );
};

export default Services;