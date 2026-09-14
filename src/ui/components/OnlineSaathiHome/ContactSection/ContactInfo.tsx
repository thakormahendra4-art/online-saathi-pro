import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactItems } from "../../../data/homePageData";

const contactIcons = [MapPin, Phone, Mail];

const ContactInfo = () => {
  return (
    <div className="rounded-2xl border border-[#e0e5ee] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-[#11182d] sm:text-3xl">
        Contact us
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#475467]">
        We&apos;re here to help. Reach out to us anytime for support or
        partnership enquiries.
      </p>

      <div className="mt-7 space-y-5">
        {contactItems.map((item, index) => {
          const Icon = contactIcons[index % contactIcons.length];

          const content = (
            <span className="flex items-start gap-4 transition-colors duration-200">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f2ff] text-[#006b9e]">
                <Icon size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#718096]">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-medium leading-6 text-[#11182d]">
                  {item.value}
                </span>
              </span>
            </span>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block hover:opacity-80"
              >
                {content}
              </a>
            );
          }

          return <div key={item.label}>{content}</div>;
        })}
      </div>

      <div className="mt-8 rounded-xl border border-[#e0e5ee] bg-[#f7f8ff] p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#006b9e]">
          <Send size={16} />
          Quick response
        </div>
        <p className="mt-2 text-xs leading-5 text-[#475467]">
          Our team responds to every enquiry within 24 hours on working days.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;