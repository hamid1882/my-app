import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import React from "react";

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
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border w-full">
      {icon && <div className="mb-4 text-blue-500">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-[28px] w-full space-y-2.5">
        <Button className="w-full space-x-1 cursor-pointer flex justify-between items-center h-[40px]">
          <span>Contact Now</span>
          <Phone />
        </Button>
        <Button
          variant="outline"
          className="w-full space-x-1 cursor-pointer flex justify-between items-center h-[40px] text-green-700"
        >
          <span className="">Chat with us on Whatsapp</span>
          <MessageCircle />
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
