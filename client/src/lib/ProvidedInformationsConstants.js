import { RiCloseLine, RiCheckFill } from "react-icons/ri";

export const words = [
  {
    text: "Welcome",
  },
  {
    text: "to",
  },
  {
    text: "the",
  },
  {
    text: "InterCo",
    className: "text-sky-500 dark:text-sky-500",
  },
  {
    text: "application",
  },
];

export const buttonsModal = (handleCancel, handleOk) => [
  {
    icon: RiCloseLine,
    text: "Annuler",
    textColor: "text-slate-900",
    hoverTextColor: "hover:text-yellow-500",
    hoverBgColor: "hover:bg-yellow-500/25",
    onClick: handleCancel,
  },
  {
    icon: RiCheckFill,
    text: "Valider",
    bgColor: "bg-sky-100/50",
    hoverBgColor: "hover:bg-sky-500",
    hoverTextColor: "hover:text-white",
    onClick: handleOk,
  },
];

export const buttonsDeleteModal = (handleCancel, handleOk) => [
  {
    icon: RiCloseLine,
    text: "Annuler",
    textColor: "text-slate-900",
    hoverTextColor: "hover:text-yellow-500",
    hoverBgColor: "hover:bg-yellow-500/25",
    onClick: handleCancel,
  },
  {
    icon: RiCheckFill,
    text: "Supprimer",
    textColor: "text-red-600",
    bgColor: "bg-red-100",
    hoverBgColor: "hover:bg-red-500",
    hoverTextColor: "hover:text-white",
    onClick: handleOk,
  },
];

export const configProviderTheme = {
  token: {
    colorPrimary: "#0EA5E9",
    colorBgContainer: "dark:bg-slate-950",
    colorText: "rgba(255, 255, 255, 0.8)",
    colorTextPlaceholder: "rgba(255, 255, 255, 0.5)",
    colorIcon: "rgba(255, 255, 255, 0.3)",
  },
  components: {
    Select: {
      clearBg: "#0EA5E9",
      multipleItemBg: "#0EA5E9",
      optionSelectedBg: "rgba(14, 165, 233, 0.3)",
      optionActiveBg: "rgba(14, 165, 233, 0.3)",
      colorBgElevated: "#6E7D92",
    },
  },
};

export const getColorByTechName = (techName) => {
  switch (techName) {
    case "GraphQL":
      return "#E10098";
    case "Apollo GraphQL":
      return "#311C87";
    case "Node.js":
      return "#5FA04E";
    case "React":
      return "#0284C7";
    case "MongoDB":
      return "#47A248";
    case "Tailwind CSS":
      return "#06B6D4";
    case "Ant Design":
      return "#0170FE";
    default:
      return "";
  }
};

export const tagNameOptions = [
  { value: "graphql", label: "GraphQL" },
  { value: "apollo", label: "Apollo GraphQL" },
  { value: "nodejs", label: "Node.js" },
  { value: "react", label: "React" },
  { value: "mongo", label: "MongoDB" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "antd", label: "Ant Design" },
];
