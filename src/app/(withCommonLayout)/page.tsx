import AboutSimpleFood from "@/components/home/AboutSimpleFood";
import FrequenlyAsked from "@/components/home/FrequenlyAsked";
import Testimonial from "@/components/home/Testimonial";
import Products from "@/components/shared/Products";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Button>Hi There!</Button>
      <AboutSimpleFood />
      <Products>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-700 mb-14 text-center">
          New & Trending Menu
        </h2>
      </Products>
      <FrequenlyAsked />
      <Testimonial />
    </div>
  );
};

export default HomePage;
