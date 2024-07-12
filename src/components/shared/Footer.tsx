import Image from "next/image";
import React from "react";
import logo from "@/assest/logo/logo.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Container from "../ui/Container";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-600">
      <div className="bg-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:justify-items-center lg:items-center py-10">
            {/* logo */}
            <div>
              <Image
                src={logo}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-28 h-28 "
              />
            </div>
            {/* menu link  */}
            <ul className="grid gap-5">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">Our menus</li>
              <li className="cursor-pointer hover:underline">Catering</li>
              <li className="cursor-pointer hover:underline">FAQ</li>
            </ul>
            {/* menu link  */}
            <ul className="self-start grid gap-5">
              <li className="cursor-pointer hover:underline">How it work</li>
              <li className="cursor-pointer hover:underline">Meal plans</li>
              <li className="cursor-pointer hover:underline">Testimonials</li>
            </ul>
            {/* newsletter and social links */}
            <div className="lg:col-span-3">
              <h2 className="mb-4 font-bold">Subscribe To Our Email Alerts</h2>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-5 border border-gray-300 rounded-md focus:outline-none text-sm lg:w-full"
                />
                <button className="bg-secondary text-white px-4 py-2 sm:w-fit rounded-md">
                  Subscribe
                </button>
              </div>
              <ul className="flex space-x-4 mt-4">
                <li className="cursor-pointer">
                  <FaFacebook className="h-7 w-7 text-blue-600" />
                </li>
                <li className="cursor-pointer">
                  <FaInstagramSquare className="h-7 w-7 text-rose-500" />
                </li>
                <li className="cursor-pointer">
                  <FaLinkedin className="h-7 w-7 text-blue-600" />
                </li>
                <li className="cursor-pointer">
                  <FaSquareXTwitter className="h-7 w-7 text-gray-800" />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-center text-sm bg-zinc-950 text-white py-3">
        &copy; All rights reserved by Simply Good Foods
      </div>
    </footer>
  );
};

export default Footer;
