import React from "react";
import { PhoneIcon } from "lucide-react";
import { CircleCheck, Ban } from "lucide-react";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";
import CountShape from "./CountShape";

type ExperienceCardProps = {
  number: number;
  title: string;
  description: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  title,
  description,
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
      <div className="whitespace-nowrap p-[18px] md:p-[28px] min-w-full md:min-w-[300px] space-y-[18px] shadow rounded-lg border">
        <div className="flex items-center gap-[10px]">
          <PhoneIcon className="h-[18px] md:h-[24px] w-[18px] md:w-[24px] text-blue-600" />
          <p className="text-normal md:text-lg font-600">30-Min consultation</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <CircleCheck className="h-[18px] md:h-[24px] w-[18px] md:w-[24px] text-green-600" />
          <p className="text-normal md:text-lg font-600">Zero Cost</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <Ban className="h-[18px] md:h-[24px] w-[18px] md:w-[24px] text-orange-600" />
          <p className="text-normal md:text-lg font-600">Zero Spam</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
