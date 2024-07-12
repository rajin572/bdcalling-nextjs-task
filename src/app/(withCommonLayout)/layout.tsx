import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TopNav from "@/components/shared/TopNav";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <TopNav />
      <div className="sticky top-0 z-50 w-full">
        <Navbar session={session} />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
