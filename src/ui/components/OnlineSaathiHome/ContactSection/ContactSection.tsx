import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#f3f4fb] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: Map + Info */}
          <div className="space-y-6">
            <ContactMap />
            <ContactInfo />
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;