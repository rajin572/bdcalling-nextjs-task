/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import backgroundImg from "@/assest/images/AuthBackground.jpeg";
import authImg from "@/assest/images/authImage.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { IoEyeOffOutline } from "react-icons/io5";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  contactNumber: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  address: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contactNumber: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Sign up your account....");

    try {
      if (values.password !== values.confirmPassword) {
        throw new Error("Password doesn't match");
      }

      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
          address: values.address,
          contactNumber: values.contactNumber,
        }),
      });

      console.log(response);

      if (response.status === 201) {
        toast.success("SignUp User Successfully", {
          id: toastId,
          duration: 1000,
        });
        router.push("/login");
      }
    } catch (error) {
      toast.error(String(error), {
        id: toastId,
        duration: 1500,
      });
    }
  }
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${backgroundImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundOrigin: "contentBox",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center py-10">
        <Container>
          <section className="">
            <div className=" min-h-screen">
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center min-h-screen">
                <div className="hidden lg:block">
                  <Image
                    src={authImg.src}
                    alt="Sign_In_Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-80 h-[500px]"
                  />
                </div>

                <div className="p-4 md:p-8 bg-[#ffffff] bg-opacity-60 rounded-xl w-[290px] md:w-[500px]">
                  <h2 className="text-lg text-center font-semibold mb-4">
                    Sign up
                  </h2>
                  <p className="text-xs mb-4 text-center">
                    Please Enter Your Personal Data
                  </p>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              User Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                placeholder="Asadujjaman"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                placeholder="asadujjaman@gmail.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Contact Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                placeholder="+8801647742754"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Permanent Address{" "}
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                placeholder="R no 1 , Block B, CITY X, USA"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Password
                            </FormLabel>
                            <div className="relative">
                              <FormControl className="">
                                <Input
                                  className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                  type={showPassword ? "text" : "password"}
                                  placeholder="*********"
                                  {...field}
                                />
                              </FormControl>
                              <Button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 text-black text-xl bg-transparent hover:bg-transparent"
                              >
                                {showPassword ? (
                                  <IoEyeOffOutline />
                                ) : (
                                  <BiShow />
                                )}
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Confirm Password
                            </FormLabel>
                            <div className="relative">
                              <FormControl className="">
                                <Input
                                  className="w-full px-4 py-2 border rounded-3xl focus:outline-none "
                                  type={showPassword ? "text" : "password"}
                                  placeholder="*********"
                                  {...field}
                                />
                              </FormControl>
                              <Button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 text-black text-xl bg-transparent hover:bg-transparent"
                              >
                                {showPassword ? (
                                  <IoEyeOffOutline />
                                ) : (
                                  <BiShow />
                                )}
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between items-center gap-2 md:gap-5 py-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                          >
                            Remember Password
                          </label>
                        </div>
                        <div>
                          <p className="text-red-600 text-xs md:text-sm cursor-pointer">
                            Forgot Password?
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <Button
                          className="bg-secondary hover:bg-secondary text-sm font-normal px-8"
                          type="submit"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </Form>
                  <p className="mt-4 text-sm text-center">
                    have any account?
                    <Link href="/login" className="text-yellow-500 ml-2">
                      Sign In
                    </Link>
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

export default SignUpPage;
