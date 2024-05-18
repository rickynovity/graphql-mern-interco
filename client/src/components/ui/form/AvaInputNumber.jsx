import React, { forwardRef } from "react";
import { InputNumber } from "antd";
import PropTypes from "prop-types";

const AvaInputNumber = forwardRef(
  (
    {
      defaultValue,
      onChange,
      disabled,
      style,
      placeholder,
      size,
      value,
      min,
      max,
      step,
      formatter,
      parser,
      className = "dark:bg-slate-950 bg-gray-700/10 w-full",
      ...props
    },
    ref
  ) => {
    return (
      <InputNumber
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        style={style}
        placeholder={placeholder}
        size={size}
        value={value}
        min={min}
        max={max}
        step={step}
        formatter={formatter}
        parser={parser}
        className={className}
        {...props}
      />
    );
  }
);

AvaInputNumber.displayName = "AvaInputNumber";

// Définition des propTypes
AvaInputNumber.propTypes = {
  defaultValue: PropTypes.number, // Valeur par défaut
  onChange: PropTypes.func, // Fonction de rappel lors du changement
  disabled: PropTypes.bool, // Désactivé ou non
  style: PropTypes.object, // Style personnalisé
  placeholder: PropTypes.string, // Placeholder
  size: PropTypes.oneOf(["small", "middle", "large"]), // Taille du champ
  value: PropTypes.number, // Valeur du champ
  min: PropTypes.number, // Valeur minimale
  max: PropTypes.number, // Valeur maximale
  step: PropTypes.number, // Incrément
  formatter: PropTypes.func, // Fonction de formatage
  parser: PropTypes.func, // Fonction de parsing
};

export default AvaInputNumber;
