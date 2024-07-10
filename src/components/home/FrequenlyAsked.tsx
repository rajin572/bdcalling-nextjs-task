import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const frequenlyQuestions = [
  {
    question: "What are the foods like Steel Yat? How does the mail plan work?",
    answer:
      "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nation wide.Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?",
  },
  {
    question: "How Do I Eat Fresh and Lean?",
    answer:
      "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nation wide.Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?",
  },
  {
    question: "How long do my meals last?",
    answer:
      "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nation wide.Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?",
  },
  {
    question: "What if I don't eat them all at once?",
    answer:
      "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nation wide.Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?",
  },
  {
    question: "What s in the food? Is it organic? Is it gluten free?",
    answer:
      "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nation wide.Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?",
  },
];

const FrequenlyAsked = () => {
  return (
    <div className="my-20 w-[90%] sm:w-[80] lg:w-[70%] mx-auto">
      <div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-700 mb-10 text-center">
          Popular Frequently Asked Questions
        </h2>
        <p className="text-sm text-center mb-14">
          <span className="text-secondary">Simply Good Food</span> prepares and
          delivers organically sourced, fresh meals to your door nationwide.
          Unlike other meal kit delivery services that need preparation and
          cleaning, our meals are delivered ready to consume. Our mission is to
          make healthy eating easy and enjoyable while not sacrificing flavor.
          Do you have a question regarding our shipping service?
        </p>
      </div>
      <Accordion type="single" collapsible>
        {frequenlyQuestions.map((question, index) => (
          <AccordionItem
            key={index}
            className=" rounded-md shadow px-4 mb-4"
            value={`${index}`}
          >
            <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="bg-white px-2 py-4">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequenlyAsked;
