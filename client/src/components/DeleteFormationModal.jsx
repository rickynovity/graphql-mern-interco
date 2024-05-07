import React from "react";
import AvaModal from "./ui/AvaModal";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteFormationModal = ({ visible, onOk, onCancel }) => {
  return (
    <AvaModal
      visible={visible}
      icon={RiDeleteBin5Line}
      title={`Êtes-vous sûr de vouloir faire cela ?`}
      onOk={onOk}
      onCancel={onCancel}
      okText="Valider"
      cancelText="Annuler"
    >
      <div className="flex items-start gap-10">
        <p className="mt-2 text-sm">
          Cela aurait pu causer des problèmes ailleurs. Êtes-vous sûr à 100 %
          que cela ne pose pas de problème ?
        </p>
      </div>
    </AvaModal>
  );
};

export default DeleteFormationModal;
