import React from "react";
import AvaLine from "./ui/AvaLine";

const Header = () => {
  return (
    <div className="my-10">
      <img
        src="/interco-logo-dark.png"
        alt="Logo interCo"
        className="h-20 w-auto opacity-80 mx-auto md:h-24 lg:h-28"
      />
      <AvaLine />
    </div>
  );
};

export default Header;
