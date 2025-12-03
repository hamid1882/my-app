import React from "react";
import CustomCardWrapper from "./CustomCardWrapper";
import {
  Cloud,
  DockIcon,
  DollarSign,
  FastForward,
  Plus,
  SearchCheckIcon,
  ToolCase,
  UserCheck,
  X,
} from "lucide-react";
import ShortlistingCard from "./ShortlistingCard";

function Shortlisting() {
  return (
    <div className="bg-blue-50 py-[26px] overflow-hidden">
      <div className="container mx-auto space-y-[16px] px-(--padding-x) md:px-0  py-[24px]">
        <h3 className="text-[19px] md:text-[28px] font-bold">About Us</h3>
        <div className="md:flex gap-[32px]">
          <div className="text-center md:text-left w-full md:w-1/3">
            <h2 className="font-semibold">Who We Are</h2>
            <p className="hidden md:flex">
              Human + Digital model. Presence in 12 countries, 4 continents.
              Network of verified expert partners.
            </p>
          </div>
          <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
            <ShortlistingCard
              title="Curated Recommendations"
              description="Human + Digital model. Presence in 12 countries, 4 continents. Network of verified expert partners."
              icons={[<UserCheck className="h-[25px] w-[25px]" key="icon1" />]}
            />
          </div>
        </div>
        <hr />
        <div className="md:flex gap-[32px]">
          <div className="text-center md:text-left w-full md:w-1/3">
            <h2 className="font-semibold">Our Approach</h2>
            <p className="hidden md:flex">
              Personalized assessments, digital workflows, transparent
              communication.
            </p>
          </div>
          <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
            <ShortlistingCard
              title="Our Approach"
              description="Personalized assessments, digital workflows, transparent communication. We leverage technology and human expertise to understand your unique needs, simplify processes, and ensure clarity at every step."
              icons={[
                <FastForward className="h-[25px] w-[25px]" key="icon1" />,
              ]}
            />
          </div>
        </div>
        <hr />
        <div className="md:flex gap-[32px]">
          <div className="text-center md:text-left w-full md:w-1/3">
            <h2 className="font-semibold">Our Model</h2>
            <p className="hidden md:flex">
              Human Expertise, Digital Support & Turnkey Execution
            </p>
          </div>
          <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
            <ShortlistingCard
              title="Human Expertise"
              description="Visa specialists, immigration lawyers, mobility consultants.
Digital Support Document vault, profile evaluation engine, job‑apply automation, mobility status tracking. Turnkey Execution End‑to‑end coverage, legal translation, HR + compliance, financial tie‑ups."
              icons={[
                <ToolCase className="h-[25px] w-[25px]" key="icon1" />,
                <Cloud className="h-[25px] w-[25px]" key="icon2" />,
                <DollarSign className="h-[25px] w-[25px]" key="icon3" />,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortlisting;
