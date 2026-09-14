import type { JSX } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { contactLinks } from "../../data/contactPageData";

const ContactFooter = (): JSX.Element => {
  return (
    <footer className="bg-[#e0f5ff] pb-8 pt-14 sm:pb-10 sm:pt-16">
      <div className="mx-auto w-full max-w-[1250px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0075a8]">
                <span className="text-sm font-bold text-white">OS</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#10182f]">
                OnlineSaathi Support
              </span>
            </Link>

            <p className="mt-4 max-w-[320px] text-[13px] leading-5.5 text-gray-500">
              Help desks, regional hubs, and an always-on team ready for
              India's merchants and partners.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                <Phone size={14} />
                <span className="text-[13px]">1800-XXX-XXXX (Toll-Free)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Mail size={14} />
                <span className="text-[13px]">support@onlinesaathi.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin size={14} />
                <span className="text-[13px]">Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(contactLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#10182f]">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/contact"
                      className="text-[13px] text-gray-500 transition-colors hover:text-[#0075a8]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#cbe7f5] pt-6 text-center">
          <p className="text-[12px] text-gray-500">
            &copy; 2025 OnlineSaathi Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;