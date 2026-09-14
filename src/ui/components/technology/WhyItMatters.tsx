import { HeartHandshake } from "lucide-react";

const WhyItMatters = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="rounded-2xl border border-[#dfe4ef] bg-[#f8f7ff] p-8 text-center shadow-[0_4px_12px_rgba(15,23,42,0.03)] sm:p-12">
          <span className="inline-flex rounded-full bg-[#e3f2ff] px-3 py-1 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            <HeartHandshake size={12} className="mr-1" />
            Why it matters?
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-[#10182f] sm:text-3xl">
            More than a platform — a lifeline for informal workforce
            communities
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#334259] sm:text-[15px]">
            The technology behind Online Saathi is more than just a platform;
            it&apos;s a lifeline for informal workforce communities, enabling
            access to critical resources that promote financial inclusion,
            improve quality of life, and foster economic empowerment.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#334259] sm:text-[15px]">
            By simplifying complex services and connecting users with trusted
            local Saathis, Online Saathi&apos;s technology platform is building
            a sustainable, inclusive digital infrastructure that empowers
            India&apos;s informal workforce and underserved communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;