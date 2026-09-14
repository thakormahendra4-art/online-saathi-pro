import type { JSX } from "react";
import {
  Footprints,
  HeartHandshake,
  Landmark,
  Sparkles,
} from "lucide-react";
import CompanyJourney from "../components/about/CompanyJourney";
import Footer from "../components/Footer";

const milestones = [
  {
    icon: Landmark,
    value: "2015",
    label: "Founded by Naresh",
  },
  {
    icon: HeartHandshake,
    value: "20,000+",
    label: "Migrants supported since 2018",
  },
  {
    icon: Sparkles,
    value: "12,500+",
    label: "Families served in crisis",
  },
  {
    icon: Footprints,
    value: "5,100 km",
    label: "Walked for migrant rights",
  },
];

const walkHighlights = [
  { value: "5,100 km", label: "Walked across India" },
  { value: "77", label: "Districts visited" },
  { value: "10", label: "States covered" },
  { value: "100+", label: "RTIs filed" },
  { value: "50+", label: "District collectors petitioned" },
];

const HistoryPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-[1250px] text-center">
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            ✦ Our History
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl lg:text-[45px]">
            One man&apos;s journey.
            <span className="block">Millions of lives transformed.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            This is the story of Naresh, who rose from working as a child
            labourer to building Online Saathi — a movement that has changed
            how India&apos;s migrant and informal workforce access jobs, rights,
            and government schemes.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {milestones.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#e0e5ee] bg-white p-4 shadow-[0_4px_12px_rgba(15,23,42,0.03)]"
                >
                  <Icon size={18} className="mx-auto text-[#0078aa]" />

                  <p className="mt-2 text-lg font-bold text-[#10182f] sm:text-xl">
                    {item.value}
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-[#667085] sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#148fc2] sm:text-[11px]">
              The Founder&apos;s Story
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              Rooted in empathy, driven by experience
            </h2>

            <div className="mt-6 rounded-xl bg-[#29354c] p-6 shadow-[0_14px_35px_rgba(15,23,42,0.15)]">
              <p className="text-lg font-semibold italic leading-7 text-white">
                &ldquo;I have lived the life of a migrant worker. I know what it
                means to struggle, to be invisible, and to hope for a better
                tomorrow.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                The Early Beginnings
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-[13px] sm:leading-6">
                Naresh had worked as a child labourer in a factory, a hotel,
                and a tea shop — yet he never gave up his formal education.
                He took a part-time job at a hotel and completed his graduation
                in commerce. He then joined Teach for India as an admin
                assistant, where he was exposed to the challenges faced by
                migrant workers across India.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                Taking Action
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-[13px] sm:leading-6">
                As Naresh learned more about the plight of migrant workers, he
                was moved to act. In 2015, he started Online Saathi to support
                migrant workers, with backing from a not-for-profit. With the
                help of a bank loan, he launched a digital mobile office that
                helped migrants find jobs, claim their rights, and access legal
                aid in cities.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                Scaling Through CSR Support
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-[13px] sm:leading-6">
                In 2018, Online Saathi received CSR funding and Naresh started
                the Labour Resource and Support Centre. The organisation has
                helped more than 20,000 migrants across the country, registered
                a union, and helped lakhs of migrant workers access government
                schemes, entitlements, wages, and legal aid.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                Standing With Migrants in Crisis
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-[13px] sm:leading-6">
                When the pandemic hit, Naresh stepped up at once, organising
                relief for migrant communities. Online Saathi helped more than
                12,500 migrant labourer families receive food, rations,
                transportation, flight tickets, livelihoods, and loans to start
                businesses — raising more than ₹2.25 crore for relief work
                over two years.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                The Work Continues Today
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-[13px] sm:leading-6">
                Today, Online Saathi is a thriving organisation that keeps
                supporting migrants across India. It has expanded into
                vocational training — carpentry, tailoring, and digital
                literacy — to improve employability and build brighter futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1250px] rounded-xl bg-[#29354c] px-6 py-12 text-center shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-14">
          <Footprints size={30} className="mx-auto text-[#0ca9e2]" />

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            #WalkForMigrant
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
            In 2022, Naresh walked 5,100 kilometres through 77 districts across
            10 states to learn about the lives of migrant workers. He conducted
            over 100 RTIs on migrant labour issues and wrote to more than 50
            district collectors and the PMO — discovering that no dedicated
            government schemes existed for migrant workers, and calling for
            change.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
            {walkHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/15 px-3 py-4"
              >
                <p className="text-base font-bold text-white sm:text-lg">
                  {item.value}
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-slate-300 sm:text-[11px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompanyJourney />

      <Footer />
    </div>
  );
};

export default HistoryPage;