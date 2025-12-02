import React from "react";
import CustomCardWrapper from "./CustomCardWrapper";
import {
  DockIcon,
  File,
  FileLineChartIcon,
  Plus,
  SearchCheckIcon,
  User,
  X,
} from "lucide-react";

function ApplicationAndPayment() {
  return (
    <div className="bg-blue-50 py-[26px] overflow-hidden">
      <div className="container mx-auto space-y-[16px] px-(--padding-x) md:px-0 md:flex gap-[32px] py-[24px]">
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="font-semibold">Application & Payment </h2>
          <p className="hidden md:flex">
            Identifying a policy that best suits your financial & medical needs
          </p>
        </div>
        <div className="flex gap-[12px] overflow-hidden py-[6px] w-full md:w-2/3">
          <CustomCardWrapper>
            <div className="space-y-[12px]">
              <div className="space-y-[16px]">
                <div className="flex items-center gap-[14px]">
                  <User className="h-[25px] w-[25px]" />
                  <File className="h-[25px] w-[25px]" />
                </div>
                <p>Expert assistance with your application</p>
              </div>
              <hr />
              <div className="flex gap-[8px]">
                <FileLineChartIcon className="w-[50px] mt-[4px]" />
                <p>Clear do’s and don’ts for declarations</p>
              </div>
              <hr />
              <div className="flex gap-[8px]">
                <p>Clear do’s and don’ts for declarations</p>
                <FileLineChartIcon className="w-[50px] mt-[4px]" />
              </div>
            </div>
          </CustomCardWrapper>
          <CustomCardWrapper variant="gray">
            <div className="space-y-[16px]">
              <div className="flex items-center gap-[8px]">
                <X className="h-[25px] w-[25px] text-red-600" />
              </div>
              <p>
                No guidance provided Higher risk of rejection with your
                application Mistakes disrupt the claims process
              </p>
            </div>
          </CustomCardWrapper>
        </div>
      </div>
    </div>
  );
}

export default ApplicationAndPayment;
