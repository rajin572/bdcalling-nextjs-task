import React from "react";
import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
