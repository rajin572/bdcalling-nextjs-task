import productImage from "@/assest/images/foodImg1.jpeg";
import Container from "../ui/Container";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FiShoppingCart } from "react-icons/fi";

const ProductDetailSection = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="relative">
          <button className="text-fuchsia-800 mb-10 text-lg flex items-center">
            <span className="mr-5">
              <FaArrowLeftLong />
            </span>{" "}
            <span>Back</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start justify-items-start">
            <div className="w-full rounded-[40px] p-2 bg-slate-100 overflow-hidden mt-5">
              <Image
                src={productImage.src}
                alt="product_image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100%] h-[250px] md:h-[400px] object-cover rounded-[40px]"
              />
            </div>

            <div className="p-4">
              <h1 className="text-2xl text-zinc-700 font-bold mb-5">
                Heathy Food Name
              </h1>
              <div className="flex items-center text-yellow-500 mb-5">
                <span className="mr-2">
                  <IoStar />
                </span>
                <span>{4.5}/5</span>
              </div>
              <div className="text-xs font-semibold text-purple-700 mb-5">
                <span className="mr-4">Protein {21}g</span> /{" "}
                <span className="mx-4">Carbs {24}g</span> /{" "}
                <span className="ml-4">Fat {30}g</span>
              </div>
              <div className="text-2xl font-bold text-slate-500 mb-5">
                ${100}
              </div>
              <p className="mb-5 font-semibold text-slate-500">
                Crispy baked panko breaded chicken topped with a savory general
                tsos sauce, served on a bed of brown rice alongside a cup of
                broccoli.
              </p>
              <Button className="bg-secondary text-white hover:bg-secondary hover:text-white py-2 w-full rounded-lg">
                Add to cart
              </Button>
              <div className="mt-5 lg:w-[90%]">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    className=" rounded-md shadow-none px-4 mb-4 border-0"
                    value="item 1"
                  >
                    <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                      Ingredients
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-2 py-4">
                      Crispy baked panko breaded chicken topped with a savory
                      general tsos sauce, served on a bed of brown rice
                      alongside a cup of broccoli.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className=" rounded-md shadow-none px-4 mb-4 border-0"
                    value="item 2"
                  >
                    <AccordionTrigger className="px-2 list-none active:shadow-sm group-hover:list-none">
                      Instructions
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-2 py-4">
                      Crispy baked panko breaded chicken topped with a savory
                      general tsos sauce, served on a bed of brown rice
                      alongside a cup of broccoli.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-10px] right-0 bg-secondary text-white p-4 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-2xl">
              <FiShoppingCart />
            </span>
            <span className="-ml-3 -mt-4 bg-purple-800 text-xs w-4 h-4 text-center rounded-full">
              1
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailSection;
