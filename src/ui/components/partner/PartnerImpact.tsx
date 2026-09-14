const impactStats = [
  { value: "₹500Cr+", label: "Monthly processed value" },
  { value: "15,000+", label: "Active partner touchpoints" },
  { value: "4.9/5", label: "Partner satisfaction score" },
  { value: "24/7", label: "Operational support coverage" },
];

const PartnerImpact = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-[#0f172a] px-6 py-10 text-white sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#dfefff]">
                Impact at scale
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                A partner network designed to move India forward
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-bold text-[#ade7ff]">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerImpact;
