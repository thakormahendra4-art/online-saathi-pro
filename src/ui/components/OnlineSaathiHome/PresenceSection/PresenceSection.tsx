import { Compass, MapPin, Radar } from "lucide-react";

const PresenceSection = () => {
  return (
    <section className="w-full bg-[#0f172a] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#16224a] to-[#0f172a] p-8 sm:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ade7ff]">
                <Radar size={14} />
                Our Presence
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[40px]">
                Growing a connected network
                <span className="block text-[#ade7ff]">
                  across the last mile
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                Online Saathi&apos;s growing network of Saathis, partners, and
                service touchpoints brings jobs, welfare schemes, financial
                services, and community support to every district we serve.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="relative flex items-center justify-center">
              <div className="relative flex h-64 w-full max-w-[420px] items-center justify-center rounded-3xl border border-white/10 bg-[#0b1128]">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_45%,rgba(19,165,223,0.18),transparent_60%)]" />

                <div className="relative text-center">
                  <MapPin size={34} className="mx-auto text-[#13a5df]" />

                  <p className="mt-4 text-sm font-semibold text-white">
                    Pan-India Saathi Network
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <Compass size={14} className="text-[#ade7ff]" />
                    States • Districts • Communities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;