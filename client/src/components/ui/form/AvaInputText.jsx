import React, { forwardRef } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

const AvaInputText = forwardRef(
  (
    {
      defaultValue,
      onChange,
      disabled,
      style,
      placeholder,
      size,
      value,
      prefix,
      type,
      className = "dark:bg-slate-950 bg-gray-700/10",
      ...props
    },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        style={style}
        placeholder={placeholder}
        size={size}
        value={value}
        prefix={prefix}
        type={type}
        className={className}
        {...props}
      />
    );
  }
);

const TextArea = (props) => <Input.TextArea {...props} />;

const Search = (props) => <Input.Search {...props} />;

const Password = (props) => <Input.Password {...props} />;

AvaInputText.TextArea = TextArea;

AvaInputText.Search = Search;

AvaInputText.Password = Password;

AvaInputText.displayName = "AvaInputText";

// Définition des propTypes
AvaInputText.propTypes = {
  defaultValue: PropTypes.string, // Valeur par défaut
  onChange: PropTypes.func, // Fonction de rappel lors du changement
  disabled: PropTypes.bool, // Désactivé ou non
  style: PropTypes.object, // Style personnalisé
  placeholder: PropTypes.string, // Placeholder
  size: PropTypes.oneOf(["small", "middle", "large"]), // Taille du champ
  value: PropTypes.string, // Valeur du champ
  prefix: PropTypes.node, // Préfixe
  type: PropTypes.string, // Type d'entrée (ex: 'text', 'password')
};

// Définition des propTypes pour TextArea
AvaInputText.TextArea.propTypes = {
  // Les mêmes propTypes que AvaInputText peuvent être utilisés ici
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

// Définition des propTypes pour Search
AvaInputText.Search.propTypes = {
  // Les mêmes propTypes que AvaInputText peuvent être utilisés ici
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

// Définition des propTypes pour Password
AvaInputText.Password.propTypes = {
  defaultValue: PropTypes.string, // Valeur par défaut
  onChange: PropTypes.func, // Fonction de rappel lors du changement
  disabled: PropTypes.bool, // Désactivé ou non
  style: PropTypes.object, // Style personnalisé
  placeholder: PropTypes.string, // Placeholder
  value: PropTypes.string, // Valeur du champ
};

export default AvaInputText;
