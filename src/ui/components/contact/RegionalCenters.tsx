import type { JSX } from "react";
import { Building2, MapPin, Phone } from "lucide-react";

type Center = {
  city: string;
  address: string;
  phone: string;
  hours: string;
};

const centers: Center[] = [
  {
    city: "Jaipur (Corporate HQ)",
    address: "Crystal IT Park, Malviya Nagar, Jaipur, Rajasthan 302017",
    phone: "+91 141-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "Bengaluru (Engineering)",
    address: "Tech Park, Outer Ring Road, Bengaluru, Karnataka 560103",
    phone: "+91 80-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "New Delhi (Regulatory)",
    address: "Bharat Square, Connaught Place, New Delhi 110001",
    phone: "+91 11-XXX-XXXX",
    hours: "Mon–Fri, 9:30 – 18:30",
  },
  {
    city: "Mumbai (Enterprise)",
    address: "Business Bay, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22-XXX-XXXX",
    hours: "Mon–Fri, 9:30 – 18:30",
  },
  {
    city: "Kolkata (East Zone)",
    address: "Merchant Tower, Sector V, Salt Lake, Kolkata 700091",
    phone: "+91 33-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "Patna (Bihar Field Hub)",
    address: "Market Yard, Boring Road, Patna 800013",
    phone: "+91 612-XXX-XXXX",
    hours: "Mon–Sun, 8:00 – 20:00",
  },
];

const RegionalCenters = (): JSX.Element => {
  return (
    <section className="bg-[#f5f9fc] px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#11182f] sm:text-4xl">
          Regional Support Centers
        </h2>

        <p className="mt-1 text-sm text-[#667085] sm:text-[15px]">
          Walk in, call, or write to the center nearest to you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => (
            <div
              key={center.city}
              className="group rounded-xl border border-[#e0e4ee] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e0f5ff] text-[#0075a8]">
                  <Building2 size={18} />
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                  {center.hours}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#11182f] sm:text-base">
                {center.city}
              </h3>

              <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-[#667085]">
                <MapPin size={12} className="mt-1 shrink-0 text-[#0075a8]" />
                {center.address}
              </p>

              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#0075a8]">
                <Phone size={12} />
                {center.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCenters;