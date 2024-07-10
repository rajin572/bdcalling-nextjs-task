import React from "react";
import { IBenefit } from "../../../types";
import Image from "next/image";

const BenefitCard: React.FC<IBenefit> = ({
  image,
  title,
  description,
  color,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt="benifit_icons"
        width={0}
        height={0}
        sizes="100vw"
        className=" w-28 h-28 "
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;
