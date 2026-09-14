import { Briefcase, Handshake, Landmark, type LucideIcon } from "lucide-react";
import PartnershipTypeCard from "./PartnershipTypeCard";

interface PartnerType {
  title: string;
  description: string;
  icon: LucideIcon;
}

const partnerTypes: PartnerType[] = [
  {
    title: "Strategic Partnerships",
    icon: Handshake,
    description:
      "Strategic Partnerships: We join forces with like-minded groups to expand services, boost efficiency, and develop solutions tailored to workers needs.",
  },
  {
    title: "Government Collaborations",
    icon: Landmark,
    description:
      "Collaboration with government agencies is key to Online Saathi mission of connecting informal workers to schemes and subsidies. By aligning with national policies, the platform promotes financial inclusion, skill development, and social welfare while ensuring seamless program implementation and systemic advocacy for the informal workforce.",
  },
  {
    title: "Private Sector Engagement",
    icon: Briefcase,
    description:
      "Partnering with private entities helps Online Saathi leverage expertise, technology, and funding to enhance infrastructure, expand services, and scale solutions. These collaborations drive innovation, foster entrepreneurship, and empower informal workers for sustainable economic growth.",
  },
];

const OurPartner = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#c9e4f6] bg-[#edf5ff] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d5c84]">
            Our partner
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Our <span className="text-[#087df5]">partner</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#475467]">
            Online Saathi teams up with governments, private enterprises, and
            like-minded groups to widen access to services and opportunities
            for India&apos;s informal workforce.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {partnerTypes.map((type, index) => (
            <PartnershipTypeCard
              key={type.title}
              title={type.title}
              description={type.description}
              icon={type.icon}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;