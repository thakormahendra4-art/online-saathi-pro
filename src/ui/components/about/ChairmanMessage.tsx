import type { JSX } from "react";
import { Quote } from "lucide-react";
import chairmanPhoto from "../../../assets/about-assets/chairman.jpeg";

const stats = [
  {
    value: "2012",
    label: "Completed 12th grade and began the social sector journey",
  },
  {
    value: "₹5 Cr+",
    label: "Raised and donated through the NGO in five years",
  },
  {
    value: "₹4 Cr+",
    label: "Relief material donated during the pandemic",
  },
];

const ChairmanMessage = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Chairman&apos;s Message
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            A word from the man behind Online Saathi.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative bg-[#29354c] p-7 sm:p-9">
              <Quote size={40} className="text-[#0ca9e2]" />

              <div className="mt-6 h-16 w-16 overflow-hidden rounded-full border-4 border-[#3d4a66]">
                <img
                  src={chairmanPhoto}
                  alt="Naresh, Founder and Chairman"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-4 text-base font-bold text-white sm:text-lg">
                Naresh
              </p>

              <p className="mt-0.5 text-xs font-semibold text-[#8fd0ef] sm:text-[13px]">
                Founder &amp; Chairman
              </p>

              <div className="mt-7 space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-lg border border-white/15 px-4 py-3"
                  >
                    <p className="text-lg font-bold text-white">{stat.value}</p>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-300 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 p-7 sm:p-9">
              <p className="text-xs leading-6 text-[#334259] sm:text-[13px] sm:leading-6">
                I came from Nepal with my father as a migrant labour, with
                education only up to the 6th grade. I worked at a tea stall for
                many years, then gradually found work in a hotel to support my
                education and complete my 12th grade in 2012. I started college
                soon after and, alongside it, joined an NGO — Ajeevika Bureau
                — beginning my journey in the social sector.
              </p>

              <p className="text-xs leading-6 text-[#334259] sm:text-[13px] sm:leading-6">
                I want to create a one-stop information centre for migrants,
                especially the daily-wage labourers in the hotel industry. This
                centre would inform them of multiple government schemes and
                opportunities, support them in applying, and shield them from
                agents and touts. We also resolve disputes between migrant
                workers and their employers, and provide training to improve
                their skills so they can secure better jobs.
              </p>

              <p className="text-xs leading-6 text-[#334259] sm:text-[13px] sm:leading-6">
                This is my story — being a migrant labour, I realised the
                challenges that everyone like me faces, with no one there to
                support them. I wish I had someone supporting me back then. Now
                I can provide a support structure to the thousands of migrant
                labourers in my state, who often lack even information about
                remittances and the multiple sources of income available to
                them.
              </p>

              <p className="text-xs leading-6 text-[#334259] sm:text-[13px] sm:leading-6">
                Our team has led an NGO that raised and donated more than ₹5
                crore in the last five years, along with materials worth ₹4
                crore during the pandemic over the last two years. Now we want
                to create a single-window solution for them — because being
                migrants ourselves, we understand the pain of the people we
                work with.
              </p>

              <p className="text-xs leading-6 text-[#334259] sm:text-[13px] sm:leading-6">
                Our aim is to provide world-class financial and e-governance
                services throughout the company and through the organisations
                we work with. Our team and the people around us are
                self-motivated to carry out these transactions on behalf of the
                same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;