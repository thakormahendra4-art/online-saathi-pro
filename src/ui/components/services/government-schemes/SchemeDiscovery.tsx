import type { JSX } from "react";
import { schemeTabs } from "../../../data/governmentSchemesPageData";
import { useSchemeDiscovery } from "../../../../hooks/useSchemeDiscovery";

const SchemeDiscovery = (): JSX.Element => {
  const { activeTab, setActiveTab, filtered } = useSchemeDiscovery();

  return (
    <section
      id="scheme-discovery"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Scheme Discovery
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Browse by category to find schemes you may be eligible for.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex w-fit justify-center rounded-lg border border-[#e0e5ee] bg-[#f7f8ff] p-1">
          {schemeTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-md px-5 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeTab === tab.value
                  ? "bg-[#0075a8] text-white shadow"
                  : "text-[#667085] hover:text-[#10182f]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cat) => {
            const Icon = cat.icon;

            return (
              <article
                key={cat.title}
                className="group flex cursor-pointer items-start gap-4 rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa] transition-colors group-hover:bg-[#0078aa] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#10182f] sm:text-[15px]">
                    {cat.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium sm:text-[11px]">
                    <span
                      className={
                        cat.scope === "central"
                          ? "text-[#7c3aed]"
                          : "text-[#0f766e]"
                      }
                    >
                      {cat.scope === "central" ? "Central" : "State"} Scheme
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SchemeDiscovery;