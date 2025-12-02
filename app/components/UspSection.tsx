import { User } from "lucide-react";
import React from "react";

function UspSection() {
  return (
    <div className="shadow">
      <div className="py-[24px] space-y-[12px] w-[70%] md:w-full container mx-auto md:flex md:justify-between md:my-[32px]">
        <div className="hidden md:flex flex-col gap-[8px] md:w-1/3">
          <h2 className="text-[20px] font-semibold text-center md:text-left md:w-[40%]">
            Visa Application Experience
          </h2>
          <p>
            What customers experience throughout their insurance journey with
            Ditto versus other platforms
          </p>
        </div>
        <div className="flex justify-around md:w-2/3">
          <div className="flex flex-col items-center gap-[12px]">
            <p className="font-semibold">Our's</p>
            <div className="flex items-center ">
              <User className="border w-[50px] h-[50px] rounded-full" />
              <User className="border w-[50px] h-[50px] rounded-full relative -left-1" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[12px]">
            <p className="font-semibold">Our's</p>
            <div className="flex items-center ">
              <User className="border w-[50px] h-[50px] rounded-full" />
              <User className="border w-[50px] h-[50px] rounded-full relative -left-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UspSection;
