import { MapPin, Navigation } from "lucide-react";
import { contactInfo } from "../../../data/homePageData";

const ContactMap = () => {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-[#e0e5ee] bg-[#dfe9f8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(19,165,223,0.18),transparent_55%)]" />

      {/* Decorative grid lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 256"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 64H400M0 128H400M0 192H400" stroke="#c4d6ea" strokeWidth="1" />
        <path d="M100 0V256M200 0V256M300 0V256" stroke="#c4d6ea" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#006b9e] text-white shadow-lg">
          <MapPin size={24} />
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#13a5df] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#13a5df]" />
          </span>
        </div>

        <p className="mt-3 max-w-[260px] text-xs font-semibold text-[#102a43] sm:text-sm">
          {contactInfo.addressShort}
        </p>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#006b9e] shadow-sm">
        <Navigation size={12} />
        Ahmedabad, Gujarat
      </div>
    </div>
  );
};

export default ContactMap;