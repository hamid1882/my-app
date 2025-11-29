import React from "react";
import PersonChat from "@/public/images/person-chatting.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Ban,
  CircleCheck,
  MessageCircle,
  Phone,
  PhoneIcon,
} from "lucide-react";
import CountShape from "./CountShape";
import CallButton from "./CallButton";
import WhatsappButton from "./WhatsappButton";
import ExperienceCard from "./ExperienceCard";

function Experence() {
  return (
    <div className="bg-blue-50 md:bg-transparent py-[28px] md:py-0 h-full">
      <div className="flex flex-col md:flex-row relative min-h-[500px] mx-(--padding-x) md:mx-0">
        <div className="h-[100px] rounded-t-lg md:rounded-none md:min-h-full w-full absolute top-0 bg-transparent md:bg-[linear-gradient(90deg,rgba(162,207,247,.33)_40%,#fff_40%)]"></div>
        <div className="container mx-auto h-full w-full z-10 flex flex-col md:flex-row rounded-t-lg md:rounded-none  ">
          <div className="md:h-screen md:sticky top-0 p-[16px] md:pt-[68px] space-y-[12px] flex flex-row md:flex-col md:w-1/3 overflow-hidden md:items-center bg-gray-300 md:bg-transparent h-full rounded-t-lg">
            <h2 className="text-[22px] font-bold max-w-1/2 md:max-w-full">
              The Experience
            </h2>
            <div className="max-w-1/2 absolute md:relative -top-[40px] md:top-0 right-0">
              <Image
                src={PersonChat}
                alt="person chatting"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white md:w-2/3 md:px-[22px]">
            <ExperienceCard
              number={1}
              title="Get Expert Guidance"
              description="Talk to IRDAI certified experts instead of pushy salesmen, with a guaranteed no-spam policy."
              key={1}
            />
            <hr className="mx-auto text-center text-black bg-black" />
            <ExperienceCard
              number={2}
              title="End-to-End Assistance"
              description="Get complete handholding from Ditto – from the moment you book a call to the moment you receive your policy."
              key={2}
            />
            <hr className="mx-auto text-center text-black bg-black" />
            <ExperienceCard
              number={3}
              title="Lifetime Claim Support"
              description="With Ditto’s expert claims team at your disposal 24/7, you and your family will always receive the support you deserve."
              key={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experence;

// <div className="pt-[98px] py-[48px] md:py-0 px-(--padding-x) md:px-0">
//   <div className="md:flex h-full">
//     <div className="rounded-t-lg md:rounded-none py-[28px] px-[14px] flex justify-between relative md:min-h-full md:h-[300px] md:min-w-1/3">
//       <h2 className="text-[22px] font-bold">The Experience</h2>
//       <Image
//         src={PersonChat}
//         alt="person chatting"
//         className="absolute -top-[100px] right-0 max-w-1/2 md:hidden"
//       />
//     </div>
//   </div>
// </div>
