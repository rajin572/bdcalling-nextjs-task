import AboutSimpleFood from "@/components/home/AboutSimpleFood";
import Banner from "@/components/home/Banner";
import FrequenlyAsked from "@/components/home/FrequenlyAsked";
import HighlightSection from "@/components/home/HighlightSection";
import Testimonial from "@/components/home/Testimonial";
import Products from "@/components/shared/Products";
import React from "react";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <AboutSimpleFood />
      <Products>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-700 mb-14 text-center">
          New & Trending Menu
        </h2>
      </Products>
      <HighlightSection />
      <FrequenlyAsked />
      <Testimonial />
    </div>
  );
};

export default HomePage;
