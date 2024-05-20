import React, { forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const AvaButton = forwardRef(
  (
    {
      icon: Icon,
      iconSize = 17,
      text,
      textColor = "text-sky-600",
      hoverTextColor,
      bgColor = "bg-transparent",
      borderColor = "border-transparent",
      borderRadius = "rounded",
      paddingX = "px-2",
      paddingY = "py-4",
      hoverScale = "hover:scale-110",
      hoverBgColor = "hover:bg-sky-100",
      justify = "justify-center",
      items = "items-center",
      isLast = false,
      className = "",
      ...restProps
    },
    ref
  ) => {
    const customClassName = clsx(
      "sm:w-[180px]",
      "w-full",
      borderRadius,
      bgColor,
      borderColor,
      textColor,
      hoverTextColor,
      paddingX,
      paddingY,
      "text-xs",
      "font-medium",
      "transition",
      "ease-in-out",
      hoverScale,
      hoverBgColor,
      "flex",
      justify,
      items,
      !isLast && "mr-5",
      className
    );

    return (
      <button ref={ref} className={customClassName} {...restProps}>
        {Icon && <Icon size={iconSize} className="mr-2 ml-3" />}
        {text}
      </button>
    );
  }
);

AvaButton.propTypes = {
  icon: PropTypes.elementType, // Type de l'icône
  iconSize: PropTypes.number, // Taille de l'icône
  text: PropTypes.string.isRequired, // Texte du bouton (obligatoire)
  textColor: PropTypes.string, // Couleur du texte
  hoverTextColor: PropTypes.string, // Couleur du texte au survol
  bgColor: PropTypes.string, // Couleur de fond
  borderColor: PropTypes.string, // Couleur de la bordure
  borderRadius: PropTypes.string, // Bordure arrondie
  paddingX: PropTypes.string, // Espacement horizontal
  paddingY: PropTypes.string, // Espacement vertical
  hoverScale: PropTypes.string, // Effet de mise à l'échelle au survol
  hoverBgColor: PropTypes.string, // Couleur de fond au survol
  justify: PropTypes.string, // Alignement horizontal
  items: PropTypes.string, // Alignement vertical
  isLast: PropTypes.bool, // Indicateur si c'est le dernier bouton dans une liste
  className: PropTypes.string, // Classe CSS supplémentaire
};

export default AvaButton;
