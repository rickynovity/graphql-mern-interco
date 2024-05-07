import React from "react";
import PropTypes from "prop-types";

const AvaBlur = ({
  className = "",
  blur = "blur-xl",
  gradientColors = "from-sky-600",
  zIndex = 50,
  ...restProps
}) => {
  const customClassName = `top-1/2 right-1/3 w-1/3 h-1/3 mx-auto max-w-lg absolute inset-2 rounded-lg bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] ${gradientColors} opacity-[10%] ${blur} -z-${zIndex} ${className}`;

  return <div className={customClassName} {...restProps} />;
};

AvaBlur.propTypes = {
  className: PropTypes.string,
  blur: PropTypes.string,
  gradientColors: PropTypes.string,
  zIndex: PropTypes.number,
};

export default AvaBlur;
