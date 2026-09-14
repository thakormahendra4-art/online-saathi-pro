import type { JSX } from "react";
import { useState } from "react";
import {
  Briefcase,
  Bus,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Landmark,
  Leaf,
  Mic,
  Palette,
  Plane,
  Scale,
  ShowerHead,
  Smartphone,
  Users,
} from "lucide-react";

type Scope = "all" | "central" | "state";

interface Category {
  icon: React.ElementType;
  title: string;
  scope: Scope;
}

const categories: Category[] = [
  { icon: Leaf, title: "Agriculture & Rural Environment", scope: "state" },
  { icon: Landmark, title: "Banking, Financial Services & Insurance", scope: "central" },
  { icon: Briefcase, title: "Business & Entrepreneur", scope: "central" },
  { icon: GraduationCap, title: "Education & Learning", scope: "state" },
  { icon: Heart, title: "Health & Wellness", scope: "state" },
  { icon: Home, title: "Housing & Shelter", scope: "central" },
  { icon: Scale, title: "Law & Justice", scope: "central" },
  { icon: Smartphone, title: "Science, IT & Communications", scope: "state" },
  { icon: Users, title: "Skills & Employment", scope: "state" },
  { icon: HandHeart, title: "Social Welfare & Empowerment", scope: "central" },
  { icon: Palette, title: "Sports & Culture", scope: "state" },
  { icon: Bus, title: "Transport & Infrastructure", scope: "state" },
  { icon: Plane, title: "Travel & Tourism", scope: "central" },
  { icon: ShowerHead, title: "Utility & Sanitation", scope: "state" },
  { icon: Mic, title: "Women & Child", scope: "central" },
];

const tabs: { label: string; value: Scope }[] = [
  { label: "All", value: "all" },
  { label: "Central", value: "central" },
  { label: "State", value: "state" },
];

const SchemeDiscovery = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Scope>("all");

  const filtered = categories.filter(
    (cat) => activeTab === "all" || cat.scope === activeTab,
  );

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
          {tabs.map((tab) => (
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