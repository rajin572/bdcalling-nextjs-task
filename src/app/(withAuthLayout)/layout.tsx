import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      {/* <Toaster /> */}
    </div>
  );
};

export default AuthLayout;
