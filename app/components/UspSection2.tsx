import React from "react";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";

function UspSection2() {
  return (
    <div className="bg-white py-[26px]">
      <div className="container mx-auto px-(--padding-x) md:px-0 py-[26px] space-y-[38px] md:flex gap-[32px]">
        <h2 className="text-center md:text-left text-2xl font-bold md:w-1/3">
          Choose Ditto for a well-guided insurance purchase
        </h2>
        <div className="flex flex-col md:flex-row gap-[16px] w-full md:w-2/3">
          <div className="flex flex-col md:flex-row w-full md:w-[48%] gap-[26px] items-center">
            <CallButton />
            <WhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UspSection2;
