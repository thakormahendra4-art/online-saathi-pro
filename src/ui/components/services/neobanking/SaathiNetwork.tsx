import type { JSX } from "react";
import { Users } from "lucide-react";
import SaathiNetworkCard from "./SaathiNetworkCard";

const stats = [
  { value: "10,000+", label: "Active Agents" },
  { value: "500+", label: "Districts Covered" },
  { value: "50,000+", label: "Accounts Opened" },
  { value: "₹10 Cr+", label: "Monthly Transactions" },
];

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: "Bridging the Digital Divide",
    description:
      "The Saathi Network is the backbone of Online Saathi, featuring a team of dedicated on-the-ground agents known as Sewa Saathis. They provide personalized assistance to informal workers, ensuring seamless access to our tech platform and services.",
  },
  {
    title: "Personalized Support",
    description:
      "Sewa Saathis are highly trained to guide users through our platform, helping with everything from navigating the mobile app to accessing financial services and job opportunities. They ensure every user gets the support they need.",
  },
  {
    title: "Community Engagement",
    description:
      "Operating within local communities, Sewa Saathis build trust and foster engagement. Their consistent, reliable assistance bridges the gap between digital technology and real-world interactions, promoting inclusive growth.",
  },
  {
    title: "Empowering Informal Workers",
    description:
      "Our network empowers informal workers by equipping them with the tools and resources needed to improve their livelihoods. Join us in creating a more inclusive and sustainable future.",
  },
];

const SaathiNetwork = (): JSX.Element => {
  return (
    <section id="neobank-network" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            <Users size={12} className="mr-1" />
            Our Network
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            How our Saathi Network works
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4">
          {stats.map((stat) => (
            <SaathiNetworkCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
            >
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                {cap.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                {cap.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-[#334259] sm:text-[15px]">
          Explore our services and connect with a Sewa Saathi today!
        </p>
      </div>
    </section>
  );
};

export default SaathiNetwork;