import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallButton: React.FC = () => {
  return (
    <Button className="w-full space-x-1 cursor-pointer h-[40px]">
      <Phone />
      <span>Contact Now</span>
    </Button>
  );
};

export default CallButton;
