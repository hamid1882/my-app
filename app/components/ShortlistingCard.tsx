import React from "react";
import { DockIcon, Plus, SearchCheckIcon, X } from "lucide-react";
import CustomCardWrapper from "./CustomCardWrapper";

type ShortlistingCardProps = {
  variant?: "default" | "gray";
  title: string;
  description: string;
  icons?: React.ReactNode[];
};

const ShortlistingCard: React.FC<ShortlistingCardProps> = ({
  variant = "default",
  title,
  description,
  icons = [],
}) => {
  return (
    <CustomCardWrapper variant={variant === "gray" ? "gray" : undefined}>
      <div className="space-y-[16px] w-full">
        <div className="flex items-center gap-[14px]">
          {icons.length > 0 ? (
            icons.map((icon, idx) => (
              <span
                key={idx}
                className="h-[25px] w-[25px] flex items-center justify-center"
              >
                {icon}
              </span>
            ))
          ) : (
            // Default icons if none passed
            <>
              <SearchCheckIcon className="h-[25px] w-[25px]" />
              <Plus className="h-[25px] w-[25px]" />
              <DockIcon className="h-[25px] w-[25px]" />
            </>
          )}
        </div>
        <p>{description}</p>
      </div>
    </CustomCardWrapper>
  );
};

export default ShortlistingCard;
