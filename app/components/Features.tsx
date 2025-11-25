import React from "react";
import FeatureCard from "./FeatureCard";
import { Phone } from "lucide-react";

function Features() {
  return (
    <div className="bg-gray-100 py-[4px] px-(--padding-x) md:px-0">
      <div className="container mx-auto my-8 md:flex gap-5">
        <div className="text-center md:text-left mr-[24px]">
          <p className="text-blue-500 font-semibold text-[18px]">
            Ditto Offers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
            Our Features
          </h2>
        </div>
        <div className="space-y-[18px] md:flex md:gap-[28px] w-full my-[12px] md:my-[22px]">
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            key="unique"
            icon={
              <div>
                <Phone />
              </div>
            }
          />
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            key="unique"
            icon={
              <div>
                <Phone />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
