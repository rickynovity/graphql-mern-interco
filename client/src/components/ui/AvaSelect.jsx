import React from "react";
import { Select as AntdSelect } from "antd";
import PropTypes from "prop-types";

const AvaSelect = ({
  ref,
  value,
  onChange,
  placeholder,
  onSearch,
  notFoundContent,
  onSelect,
  allowClear,
  loading,
  autoComplete,
  disabled,
  filterOption,
  style,
  children,
  options,
  defaultValue,
  className = "dark:bg-slate-950",
  mode = "false",
  tagRender,
}) => {
  return (
    <AntdSelect
      value={value}
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      onSearch={onSearch}
      notFoundContent={notFoundContent}
      onSelect={onSelect}
      allowClear={allowClear}
      loading={loading}
      autoComplete={autoComplete}
      disabled={disabled}
      filterOption={filterOption}
      style={style}
      options={options}
      defaultValue={defaultValue}
      showSearch
      className={className}
      mode={mode}
      tagRender={tagRender}
    >
      {children}
    </AntdSelect>
  );
};

// Définition des propTypes
AvaSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]), // Valeur(s) sélectionnée(s)
  onChange: PropTypes.func, // Fonction de rappel lors du changement de la sélection
  placeholder: PropTypes.string, // Placeholder
  onSearch: PropTypes.func, // Fonction de recherche
  notFoundContent: PropTypes.node, // Contenu à afficher si aucun résultat n'est trouvé
  onSelect: PropTypes.func, // Fonction de rappel lors de la sélection d'un élément
  allowClear: PropTypes.bool, // Possibilité de vider la sélection
  loading: PropTypes.bool, // Chargement
  autoComplete: PropTypes.string, // Auto-complétion
  disabled: PropTypes.bool, // Désactivé ou non
  filterOption: PropTypes.bool, // Option de filtrage
  style: PropTypes.object, // Style personnalisé
  children: PropTypes.node, // Options de sélection (éléments enfants)
  options: PropTypes.arrayOf(PropTypes.object), // Options de sélection
  className: PropTypes.string, // Classe CSS supplémentaire
  tagRender: PropTypes.func, // Fonction de rendu des tags personnalisés
};

export default AvaSelect;
