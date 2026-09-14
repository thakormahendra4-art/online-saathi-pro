import type { JSX } from "react";
import NeoBankingServiceCard from "./NeoBankingServiceCard";
import { neoBankingServices } from "../../../data/neoBankingPageData";

const NeoBankingServices = (): JSX.Element => {
  return (
    <section
      id="neobank-services"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {neoBankingServices.map((svc) => (
            <NeoBankingServiceCard
              key={svc.title}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              highlight={svc.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeoBankingServices;