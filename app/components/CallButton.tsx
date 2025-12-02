import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type CallButtonProps = {
  label?: string;
};

const CallButton: React.FC<CallButtonProps> = ({
  label = "30-min Free Call",
}) => {
  return (
    <Button className="w-full space-x-1 cursor-pointer h-[40px]">
      <Phone />
      <span>{label}</span>
    </Button>
  );
};

export default CallButton;
