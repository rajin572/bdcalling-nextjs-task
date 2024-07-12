import foodImg1 from "@/assest/images/foodImg1.jpeg";
import foodImg2 from "@/assest/images/foodImg2.jpeg";
import foodImg3 from "@/assest/images/foodImg3.jpeg";
import foodImg4 from "@/assest/images/foodImg4.jpeg";
import ProductCard from "../ui/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ReactNode } from "react";

const feedbacks = [
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg1.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg2.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg3.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg4.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg1.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg2.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg3.src,
  },
  {
    name: "Healthy Food Name",
    rating: 4.5,
    price: 100,
    protein: 49,
    carbs: 23,
    fat: 23,
    image: foodImg4.src,
  },
];

const Products = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-20 ">
      {children}
      <div className="w-[70%] md:w-[85%] lg:w-[90%] mx-auto ">
        <Carousel>
          <CarouselContent>
            {feedbacks.map((feedback, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-[29%] gap-32 ml-2"
              >
                <ProductCard {...feedback} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
