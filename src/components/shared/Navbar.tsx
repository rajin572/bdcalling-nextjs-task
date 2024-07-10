"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../ui/Container";
import logo from "@/assest/logo/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";

const NavItems = [
  { name: "Home", route: "/" },
  { name: "Our menus", route: "/" },
  { name: "Meal Plans", route: "/" },
  { name: "Catering", route: "/" },
  { name: "How it work", route: "/" },
  { name: "Testimonial", route: "/" },
  { name: "FAQ", route: "/projects" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[#ECF5FF] z-[999] shadow py-1 text-slate-800">
      <Container>
        <header className=" mx-auto flex justify-between items-center z-50 ">
          {/* //* Menu Icons for mobile */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
          {/* //*Company logo */}
          <div>
            <Link href="/" className="cursor-pointer">
              <Image
                src={logo}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-14 h-14 "
              />
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? "w-full lg:w-fit lg:static absolute top-[60px] left-0 lg:bg-none bg-[#ECF5FF] transition-all duration-500 lg:z-0 -z-50"
                : "w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all duration-500 lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem, index) => (
                  <Link key={index} href={navItem.route}>
                    <li
                      className={`${
                        index === 6 ? "" : "border-e-2 border-zinc-400"
                      } lg:mb-0 mb-5 cursor-pointer text-sm group relative px-3 md:text-base`}
                    >
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10 bg-[#ECF5FF] border-b border-secondary">
                {NavItems.map((navItem, index) => (
                  <li
                    key={index}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full lg:w-fit text-center py-2 cursor-pointer group text-sm relative md:text-[18px] "
                  >
                    <Link href={navItem.route}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* //*More nav Links */}
          <div className="">
            <ul className="flex justify-end items-center gap-2 flex-row py-0">
              <li className="cursor-pointer text-sm group relative px-2 md:text-[18px] ">
                <Button className="px-4 hover:bg-secondary hover:text-white bg-slate-200 text-secondary border border-secondary rounded-lg duration-500">
                  Log in
                </Button>
              </li>
              <Link href="/signIn">
                <li className="cursor-pointer text-sm font-semibold group relative px-2 md:text-[18px] ">
                  <Button className="px-4 bg-secondary text-white hover:bg-secondary hover:text-white border border-secondary rounded-lg duration-500">
                    Sign up
                  </Button>
                </li>
              </Link>
            </ul>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
