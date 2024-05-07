import React from "react";
import { useLocation } from "react-router-dom";

const AvaDotBackground = ({ children }) => {
  const location = useLocation();

  const backgroundClass =
    location.pathname === "/login" || location.pathname === "/signup"
      ? "bg-transparent"
      : "dark:bg-gray-900 bg-white/90 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center";

  return (
    <div className={`${backgroundClass}`}>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mt-20">
        {children}
      </div>
    </div>
  );
};

export default AvaDotBackground;
