import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto my-4 md:my-6 px-(--padding-x) md:px-0 text-center md:text-left space-y-[12px] md:flex md:items-center md:gap-8">
      <div className="min-w-1/2">
        <h1 className="text-[19px] md:text-[28px] font-bold">
          The Ultimate Visa Application Experience
        </h1>
        <p className="text-[18px]">We are glad to have you here.</p>
        <div className="p-[12px] my-[28px] md:p-0 w-full md:w-[200px]">
          <Button className="w-full space-x-1 cursor-pointer h-[45px]">
            <Phone />
            <span>Contact Now</span>
          </Button>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="min-w-full min-h-[350px] md:min-w-1/2 bg-gray-800 rounded-lg shadow"></div>
      </div>
    </div>
  );
};

export default HeroSection;
