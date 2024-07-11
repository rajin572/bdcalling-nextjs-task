import Image from "next/image";
import highlightImage from "@/assest/images/highlightImage.jpeg";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

const HighlightSection = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-200">
        <div className=" bg-white py-10 lg:rounded-br-[100px] lg:rounded-tr-[100px] lg:mr-20 pl-10 md:pl-40 pr-10">
          <h1 className="text-4xl font-bold mb-4">
            Make daily meals healthy and moderate
          </h1>
          <p className="text-lg mb-4">
            Ingredients are naturally rich and full of taste.
          </p>
          <Button className="bg-secondary hover:bg-secondary text-white hover:text-white">
            <span>Meal plans</span>
            <span className="ml-2">
              <GoArrowUpRight />
            </span>
          </Button>
        </div>
        <div className="">
          <Image
            src={highlightImage.src}
            alt="Healthy Meals"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
