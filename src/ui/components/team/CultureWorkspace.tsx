import type { JSX } from "react";
import { HeartHandshake, MapPin, Users } from "lucide-react";

interface CultureItem {
  icon: React.ElementType;
  title: string;
  text: string;
  gradient: string;
}

const cultureItems: CultureItem[] = [
  {
    icon: Users,
    title: "Collaborative Pods",
    text: "Small, autonomous teams shipping directly with merchants across our field hubs.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    icon: MapPin,
    title: "Field-First Office",
    text: "Jaipur & Bengaluru hubs with district offices in 22 states, not just city desks.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    icon: HeartHandshake,
    title: "Customer Obsession",
    text: "Every sprint ends with a merchant call — insights beat assumptions, always.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

const CultureWorkspace = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <h2 className="text-3xl font-bold text-[#11182f] sm:text-4xl">
          Our Culture & Workspace
        </h2>

        <p className="mt-1 text-xs text-[#667085] sm:text-sm">
          A glimpse into our collaborative, vibrant, and innovative daily
          environment.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cultureItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-[#e0e4ee] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={`flex h-[140px] items-center justify-center bg-gradient-to-br ${item.gradient}`}
                >
                  <Icon
                    size={42}
                    className="text-white/90"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm font-bold text-[#11182f] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CultureWorkspace;