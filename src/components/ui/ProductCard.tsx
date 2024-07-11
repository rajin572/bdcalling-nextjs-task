import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";

interface ProductCardProps {
  name: string;
  rating: number;
  price: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  rating,
  price,
  protein,
  carbs,
  fat,
  image,
}) => {
  return (
    <div className="bg-gray-100  rounded-lg p-2 flex flex-col">
      <Image
        src={image}
        alt="food_image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center mb-1">
        <IoStar className="text-amber-500" />
        <span className="ml-1 text-sm text-amber-500">{rating}/5</span>
      </div>
      <Link href="/productDetails">
        <h3 className="text-lg font-bold text-slate-600 mb-3">{name}</h3>
      </Link>
      <p className="text-sm text-gray-500 font-bold mb-4">${price}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4">
        Add to cart
      </button>
      <div className="text-xs text-gray-600 flex justify-evenly">
        <span className="text-red-900">Protein {protein}g</span> /{" "}
        <span className="text-red-900">Carbs {carbs}g</span> /{" "}
        <span className="text-red-900">Fat {fat}g</span>
      </div>
    </div>
  );
};

export default ProductCard;
