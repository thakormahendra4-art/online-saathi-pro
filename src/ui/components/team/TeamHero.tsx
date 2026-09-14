import type { JSX } from "react";

const TeamHero = (): JSX.Element => {
  return (
    <section className="bg-[#f8f7ff] px-5 pb-10 pt-10 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="mx-auto max-w-[1250px] text-center">
        <span className="inline-flex rounded-full bg-[#dfeaff] px-4 py-1.5 text-[10px] font-semibold text-[#3179ae] sm:text-[11px]">
          Leadership & Culture
        </span>

        <h1 className="mx-auto mt-5 max-w-[850px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#11182f] sm:text-5xl lg:text-[48px]">
          Building the Future of Digital Finance with
          <span className="block">
            Purpose
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[820px] text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
          We are a passionate team of engineers, financial experts, and
          designers committed to empowering millions across emerging markets
          with transparent, reliable tools.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;