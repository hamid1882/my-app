import React from "react";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between min-h-fit border w-full md:basis-1/2">
      <div>
        {icon && <div className="mb-4 text-blue-500">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mt-[28px] w-full space-y-2.5">
        <CallButton />
        <WhatsappButton />
      </div>
    </div>
  );
};

export default FeatureCard;
