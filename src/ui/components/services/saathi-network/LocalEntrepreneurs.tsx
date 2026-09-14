import type { JSX } from "react";
import {
  CheckCircle,
  Megaphone,
  UserPlus,
  Wrench,
} from "lucide-react";
import LocalEntrepreneurCard from "./LocalEntrepreneurCard";

const activities = [
  {
    icon: Megaphone,
    title: "Outreach",
    description:
      "Sewa Saathis actively engage with local communities to identify and reach out to informal workers in need.",
  },
  {
    icon: UserPlus,
    title: "Onboarding",
    description:
      "They assist workers in registering on the Online Saathi Platform and understanding the available services.",
  },
  {
    icon: Wrench,
    title: "Service Facilitation",
    description:
      "Sewa Saathi is gudie worker through the process of accessing services, from job applications to financial services.",
  },
  {
    icon: CheckCircle,
    title: "Follow-up Support",
    description:
      "They provide ongoing support and follow-up to ensure successfull service delivery and address any concerns.",
  },
];

const LocalEntrepreneurs = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Our Local Entrepreneurs
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px]">
            Saathis are the backbone of our mission — here's how they make
            an impact every day.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((act) => (
            <LocalEntrepreneurCard
              key={act.title}
              icon={act.icon}
              title={act.title}
              description={act.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalEntrepreneurs;