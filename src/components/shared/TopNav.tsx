import React from "react";
import Container from "../ui/Container";

const TopNav = () => {
  return (
    <div className="bg-amber-500 text-white text-center hidden md:block py-2">
      <Container>
        <p>%% Free shipping on all orders %%</p>
      </Container>
    </div>
  );
};

export default TopNav;
