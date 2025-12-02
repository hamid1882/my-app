// app/components/CustomCardWrapper.tsx
import React from "react";

type CustomCardWrapperProps = {
  children: React.ReactNode;
  variant?: "gray" | "default";
};

const CustomCardWrapper: React.FC<CustomCardWrapperProps> = ({
  children,
  variant = "default",
}) => {
  const variantClass =
    variant === "gray" ? "bg-gray-100 text-gray-900" : "bg-white";

  return (
    <div
      className={`shadow rounded-xl p-2 md:p-4 ${variantClass} min-w-1/2 break-after-all text-[14px] sm:text-[16px] md:text-[20px] text-balance min`}
    >
      {children}
    </div>
  );
};

export default CustomCardWrapper;
