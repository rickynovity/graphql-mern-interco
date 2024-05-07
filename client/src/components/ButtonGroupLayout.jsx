import React from "react";
import AvaButton from "./ui/AvaButton";

const ButtonGroupLayout = ({ title, buttons }) => {
  return (
    <div className="flex justify-between items-center">
      {title && (
        <h1 className="text-xl sm:text-3xl text-gray-900 font-extrabold bg-gradient-to-tl from-sky-700 via-sky-500 to-sky-600 bg-clip-text text-transparent">
          {title}
        </h1>
      )}
      <div className="flex">
        {buttons &&
          buttons.map((button, index) => (
            <AvaButton
              key={index}
              icon={button.icon}
              text={button.text}
              {...button}
            />
          ))}
      </div>
    </div>
  );
};

export default ButtonGroupLayout;
