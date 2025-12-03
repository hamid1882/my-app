import React from "react";
import { Check, PhoneIcon } from "lucide-react";
import { CircleCheck, Ban } from "lucide-react";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";
import CountShape from "./CountShape";

type ExperienceCardProps = {
  number: number;
  title: string;
  description: string;
  pointsArr?: string[];
};

let points = [
  "Tourist Visa",
  "Study Visa + Study‑to‑Work Migration",
  "Work Visa (Skilled Worker)",
  "WPR / Permanent Residency",
];

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  title,
  description,
  pointsArr = points,
}) => {
  return (
    <div className="bg-white md:p-[16px] md:pt-[68px] flex flex-col md:flex-row items-center gap-[24px] md:gap-[42px] my-[26px] px-[12px]">
      <div className="space-y-[12px] md:space-y-[16px]">
        <CountShape number={number} />
        <p className="text-[22px] md:text-[28px] font-semibold">{title}</p>
        <p className="text-[16px] md:text-[20px] tracking-wide">
          {description}
        </p>
        <div className="py-[28px] space-y-[16px]">
          <CallButton />
          <WhatsappButton />
        </div>
      </div>
      <div className="whitespace-nowrap p-[18px] md:p-[22px] min-w-full md:min-w-[340px] space-y-[18px] shadow rounded-lg border">
        {pointsArr.map((point) => (
          <div className="flex items-center gap-[10px]">
            <Check className="min-h-[18px] md:min-h-[24px] min-w-[18px] md:min-w-[24px] text-blue-600" />
            <p className="text-normal md:text-lg font-600 text-wrap">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
