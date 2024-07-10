import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import profileImg1 from "@/assest/images/profileImg1.jpeg";
import profileImg2 from "@/assest/images/profileImg2.jpeg";
import TestimonialCard from "../ui/TestimonialCard";

const feedbacks = [
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg1.src,
  },
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg2.src,
  },
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg1.src,
  },
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg2.src,
  },
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg1.src,
  },
  {
    name: "Anjelina",
    role: "Student",
    feedback:
      "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services",
    image: profileImg2.src,
  },
];

const Testimonial = () => {
  return (
    <div className="my-20 overflow-hidden w-[90%] mx-auto lg:mx-0 lg:w-full">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-700 mb-14 text-center drop-shadow">
        Feedbacks
      </h2>
      <Carousel>
        <CarouselContent>
          {feedbacks.map((feedback, index) => (
            <CarouselItem key={index} className="md:basis-6/12 ml-5 lg:ml-14">
              <TestimonialCard feedback={feedback} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
