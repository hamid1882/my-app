import React from "react";
import CustomCardWrapper from "./CustomCardWrapper";
import { DockIcon, Plus, SearchCheckIcon, X } from "lucide-react";

function Shortlisting() {
  return (
    <div className="bg-blue-50 py-[26px] overflow-hidden">
      <div className="container mx-auto space-y-[16px] px-(--padding-x) md:px-0 md:flex gap-[32px] py-[24px]">
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="font-semibold">Shortlistings</h2>
          <p className="hidden md:flex">
            Identifying a policy that best suits your financial & medical needs
          </p>
        </div>
        <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
          <CustomCardWrapper>
            <div className="space-y-[16px]">
              <div className="flex items-center gap-[14px]">
                <SearchCheckIcon className="h-[25px] w-[25px]" />
                <Plus className="h-[25px] w-[25px]" />
                <DockIcon className="h-[25px] w-[25px]" />
              </div>
              <p>
                Get 2-3 carefully selected policy recommendations, backed by
                clear explanations tailored to your needs
              </p>
            </div>
          </CustomCardWrapper>
          <CustomCardWrapper variant="gray">
            <div className="space-y-[16px]">
              <div className="flex items-center gap-[8px]">
                <X className="h-[25px] w-[25px] text-red-600" />
              </div>
              <p>
                Minimal or no human guidance, with policies recommended based on
                sales targets
              </p>
            </div>
          </CustomCardWrapper>
        </div>
      </div>
    </div>
  );
}

export default Shortlisting;
