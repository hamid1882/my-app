import Image from "next/image";
import React from "react";
import IpBg from "@/public/images/lp_bg.png";
import FormInputs from "./FormInputs";

function Form() {
  return (
    <div className="container mx-auto py-[26px] w-full h-full flex flex-col md:flex-row gap-[32px] my-[22px] md:my-[38px]">
      <div className=" flex-col gap-[8px] w-full md:w-1/3">
        <h2 className="text-center md:text-left text-2xl font-bold">
          Connect with us
        </h2>
        <p className="hidden md:flex">
          What customers experience throughout their insurance journey with
          Ditto versus other platforms
        </p>
      </div>
      <div className="relative h-full w-full md:w-2/3 md:px-[12px]">
        <div className="w-full h-[400px] md:h-[550px] flex justify-center items-center">
          <div className="absolute -top-5 md:-top-20 z-0 h-full w-full overflow-hidden">
            <Image
              src={IpBg}
              alt="bg"
              className="w-full h-full z-0 object-cover object-top"
            />
          </div>
          <div className="min-w-full min-h-full flex justify-center items-center z-10 px-(--padding-x) md:px-0 py-[26px]">
            <div className="relative top-0 md:top-8 min-h-[250px] w-full md:w-[550px] rounded-xl bg-white/70 backdrop-blur-lg">
              <FormInputs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
