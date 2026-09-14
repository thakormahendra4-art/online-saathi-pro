import type { JSX } from "react";
import { ArrowRight, ClipboardCheck, FileText, Route } from "lucide-react";

interface ProcessStep {
  icon: React.ElementType;
  step: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Skill Assessment",
    description:
      "Saathis begin by conducting comprehensive skill assessments to gain insights into each worker's unique abilities and professional background. These assessments are crucial as they help determine the most suitable job opportunities that align with the worker's capabilities and career aspirations.",
  },
  {
    icon: Route,
    step: "02",
    title: "Job Matching",
    description:
      "Utilizing the gathered information, Online Saathi's platform employs advanced algorithms to match workers with relevant job openings across various sectors. This personalized approach ensures that each worker is connected with opportunities where they can thrive and contribute effectively.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Application Support",
    description:
      "In addition to job matching, Saathis provide hands-on support to workers throughout the application journey. This includes assisting them in completing job applications accurately, crafting compelling resumes that highlight their skills and experiences, and even conducting mock interviews to help them prepare confidently.",
  },
];

const JobPortalProcess = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            How our Job Portal Works
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            A simple, supported path from assessment to employment.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative">
                <article className="flex h-full flex-col rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-bold text-[#c7d4e0]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                    {item.description}
                  </p>
                </article>

                {item.step !== "03" && (
                  <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-[#0078aa] md:block">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobPortalProcess;