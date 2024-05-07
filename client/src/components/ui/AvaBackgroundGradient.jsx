import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const AvaBackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const motionProps = animate
    ? {
        variants: variants,
        initial: "initial",
        animate: "animate",
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }
    : {};

  const bgStyle = animate ? { backgroundSize: "400% 400%" } : {};

  const containerClasses = cn("relative p-[2px] group", containerClassName);
  const gradientClasses = cn(
    "absolute inset-0 rounded-xl z-[1] will-change-transform",
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
  );

  return (
    <div className={containerClasses}>
      <motion.div
        {...motionProps}
        style={bgStyle}
        className={`${gradientClasses} absolute inset-0 rounded-xl z-[1] opacity-20 group-hover:opacity-100 blur-xl transition duration-500`}
      />
      <motion.div
        {...motionProps}
        style={bgStyle}
        className={`${gradientClasses} absolute inset-0 rounded-xl z-[1]`}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default AvaBackgroundGradient;
