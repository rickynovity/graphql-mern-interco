import React, { useState } from "react";
import ButtonGroupLayout from "../components/ButtonGroupLayout";
import { BsFolderPlus, BsFolder } from "react-icons/bs";
import { toast } from "sonner";
import { getColorByTechName, tagNameOptions } from "../lib";
import FormationCards from "./FormationCards";
import useIsHomePage from "../hook/useIsHomePage";
import AvaFilters from "./ui/AvaFilters";
import { Tag } from "antd";
import AddFormationModal from "./AddFormationModal";

const Formation = () => {
  const [showModal, setShowModal] = useState(false);
  const isHomePage = useIsHomePage();

  const buttons = [
    {
      icon: BsFolderPlus,
      text: "New formation",
      bgColor: "bg-sky-700/25",
      hoverBgColor: "hover:bg-sky-500",
      hoverTextColor: "hover:text-white",
      onClick: () => setShowModal(true),
    },
  ];

  const formationsButtons = [
    {
      icon: BsFolder,
      text: "New formation",
      hoverBgColor: "hover:bg-sky-700/25",
      onClick: () => setShowModal(true),
    },
  ];

  const tagRender = ({ label, value, closable, onClose }) => {
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={getColorByTechName(label)}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        {label}
      </Tag>
    );
  };

  const handleOk = (formData) => {
    try {
      console.log("Données du formulaire :", formData);
      console.log("Ok clicked");
      toast.success("Ok clicked");
      setShowModal(false);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    setShowModal(false);
  };

  return (
    <div className="space-y-5 mb-20">
      <>
        <AddFormationModal
          visible={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
          options={tagNameOptions}
          tagRender={tagRender}
        />
        {isHomePage ? (
          <ButtonGroupLayout title="Latest formations" buttons={buttons} />
        ) : (
          <>
            <ButtonGroupLayout
              title="Create your learning experience"
              buttons={formationsButtons}
            />
            <AvaFilters />
          </>
        )}
        <FormationCards buttons={buttons} />
      </>
    </div>
  );
};

export default Formation;
