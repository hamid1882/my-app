import React from "react";
import CustomCardWrapper from "./CustomCardWrapper";
import {
  DockIcon,
  File,
  FileLineChartIcon,
  Inbox,
  Plus,
  SearchCheckIcon,
  User,
  X,
} from "lucide-react";

function PolicyIssuanse() {
  return (
    <div className="bg-blue-50 py-[26px] overflow-hidden">
      <div className="container mx-auto space-y-[16px] px-(--padding-x) md:px-0 md:flex gap-[32px] py-[24px]">
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="font-semibold">Policy Issuance</h2>
          <p className="hidden md:flex">
            Here, the insurer evaluates your application
          </p>
        </div>
        <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
          <CustomCardWrapper>
            <div className="space-y-[12px]">
              <div className="space-y-[16px]">
                <div className="flex items-center gap-[14px]">
                  <File className="h-[25px] w-[25px]" />
                </div>
                <p>Expert assistance with your application</p>
              </div>
              <br />
              <div className="space-y-[16px]">
                <div className="flex items-center gap-[14px]">
                  <File className="h-[25px] w-[25px]" />
                </div>
                <p>Expert assistance with your application</p>
              </div>
              <br />
              <div className="space-y-[16px]">
                <div className="flex items-center gap-[14px]">
                  <File className="h-[25px] w-[25px]" />
                </div>
                <p>Expert assistance with your application</p>
              </div>
            </div>
          </CustomCardWrapper>
          <CustomCardWrapper variant="gray">
            <div className="space-y-[16px]">
              <div className="flex items-center gap-[8px]">
                <Inbox className="h-[25px] w-[25px] text-red-600" />
              </div>
              <p>
                No assistance provided
                <br />
                <br />
                Rejections require extensive follow-up
                <br />
                <br />
                Re-application is slow and tedious
                <br />
                <br />
                No support for claims
              </p>
            </div>
          </CustomCardWrapper>
        </div>
      </div>
    </div>
  );
}

export default PolicyIssuanse;
