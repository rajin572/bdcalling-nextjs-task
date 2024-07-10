import Navbar from "@/components/shared/Navbar";
import TopNav from "@/components/shared/TopNav";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <TopNav />
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div>{children}</div>
      {/* <Footer />
      <Toaster /> */}
    </div>
  );
};

export default CommonLayout;
