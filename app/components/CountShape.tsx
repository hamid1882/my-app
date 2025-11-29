import React from "react";
import Image from "next/image";
import CountShape1 from "@/public/images/count_container_shape_1.png";
import CountShape2 from "@/public/images/count_container_shape_2.png";
import CountShape3 from "@/public/images/count_container_shape_3.png";

type CountShapeProps = {
  number: number;
};

const shapeMap = {
  1: CountShape1,
  2: CountShape2,
  3: CountShape3,
} as const;

const CountShape: React.FC<CountShapeProps> = ({ number }) => {
  let countShapeImage = shapeMap[number as 1 | 2 | 3] ?? CountShape1;

  return (
    <div className={`relative w-fit`}>
      <Image
        src={countShapeImage}
        alt={`step-${number}`}
        className={`h-[45px] md:h-[50px] w-[45px] md:w-[50px]`}
      />
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <p className="font-bold text-[16px] md:text-lg">
          {typeof number === "number" && number < 10 ? `0${number}` : number}
        </p>
      </div>
    </div>
  );
};

export default CountShape;
