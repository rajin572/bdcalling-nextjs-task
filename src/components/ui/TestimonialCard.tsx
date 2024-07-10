import Image from "next/image";
import React from "react";
import { IFeedback } from "../../../types";

const TestimonialCard = ({ feedback }: { feedback: IFeedback }) => {
  return (
    <div className="bg-zinc-100 shadow border border-blue-100 py-14 px-6 flex flex-col sm:flex-row text-center sm:text-left items-center">
      <Image
        src={feedback.image}
        alt="profile_img"
        width={0}
        height={0}
        sizes="100vw"
        className="w-32 h-32 rounded-full mb-4"
      />
      <div className="ml-5">
        <h3 className="text-lg font-semibold">{feedback.name}</h3>
        <p className="text-sm text-amber-500 mb-2">{feedback.role}</p>
        <p className="text-gray-700">{feedback.feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
