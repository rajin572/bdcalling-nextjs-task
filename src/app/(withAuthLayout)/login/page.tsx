/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex justify-center items-center bg-zinc-900">
        <Container>
          <section className="">
            <div className=" min-h-screen">
              <div className="flex h-full flex-wrap items-center justify-center lg:justify-between  min-h-screen">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                  <Image
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1719401459~exp=1719402059~hmac=d6f6cb246659dee219ccc4a82c388a5413f90bd0841c9a94a8e94ba2c736c6fe"
                    alt="Sign_In_Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[90%] h-[90%] object-cover"
                  />
                </div>

                <div className="p-8 bg-[#ffffffcc] backdrop-blur-md rounded-xl">
                  <h2 className="text-lg text-center font-semibold mb-4">
                    Sign in to your account
                  </h2>
                  <p className="text-xs mb-4 text-center">
                    Please enter your email and password to continue
                  </p>
                  <form className="space-y-4 w-[350px]">
                    <div>
                      <label className="block text-sm">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                        placeholder="asadujamman@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                          placeholder="********"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 px-4 py-2"
                        >
                          {showPassword ? <GrHide /> : <BiShow />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-1 w-5 h-5" />
                        <label className="text-sm">Remember Password</label>
                      </div>
                      <p className="text-sm text-red-500 cursor-pointer">
                        Forgot Password?
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className=" bg-secondary text-white py-2 px-8 rounded-lg hover:bg-green-700"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-sm text-center">
                    Don't have any account?{" "}
                    <a href="#" className="text-yellow-500">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
