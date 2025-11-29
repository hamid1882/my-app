import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleIcon, Phone } from "lucide-react";

const WhatsappButton: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="w-full space-x-1 cursor-pointer h-[40px] text-green-700"
    >
      <MessageCircleIcon />
      <span>Chat with us on Whatsapp</span>
    </Button>
  );
};

export default WhatsappButton;
