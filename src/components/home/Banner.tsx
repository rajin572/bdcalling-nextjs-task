import React from "react";
import backgorundImg from "@/assest/images/bannerBackground.jpeg";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import bannerImg1 from "@/assest/images/bannerImage1.png";
import bannerImg2 from "@/assest/images/bannerImage2.png";
import bannerImg3 from "@/assest/images/bannerImage3.png";
import bannerImg4 from "@/assest/images/bannerImage4.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const bannerFoodImages = [
  {
    image: bannerImg1.src,
  },
  {
    image: bannerImg2.src,
  },
  {
    image: bannerImg3.src,
  },
  {
    image: bannerImg4.src,
  },
];

const Banner = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${backgorundImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundOrigin: "contentBox",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-5 items-center justify-items-center min-h-[90vh] py-10">
          <div>
            <h2 className="text-4xl md:text-7xl text-zinc-950 font-bold mb-5">
              Keep track of
            </h2>
            <h2 className="text-4xl md:text-7xl text-secondary font-bold  mb-8">
              Fitness Goal
            </h2>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-950 mb-10">
              Order on Simply Good Food
            </h4>
            <Button className="bg-amber-500 hover:bg-amber-500 text-zinc-900 hover:text-zinc-900">
              <span>Explore Menu</span>
              <span className="ml-2">
                <GoArrowUpRight />
              </span>
            </Button>
          </div>
          <div>
            <div className="bg-gradient-to-b from-secondary to-green-400 w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full flex justify-center items-center">
              <Carousel className="w-[280px] md:w-[500px]">
                <div
                  className="w-[220px] h-[220px] md:w-[400px] md:h-[400px] mx-auto rounded-full flex justify-center items-center shadow-inner shadow-zinc-700 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${backgorundImg.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundOrigin: "contentBox",
                    backgroundSize: "cover",
                  }}
                >
                  <CarouselContent>
                    {bannerFoodImages.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <Image
                          src={image.image}
                          alt="food_image"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-cover mx-auto"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>
                <CarouselPrevious className="ml-12 text-sm md:ml-14" />
                <CarouselNext className="mr-12 text-sm md:mr-14" />
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
