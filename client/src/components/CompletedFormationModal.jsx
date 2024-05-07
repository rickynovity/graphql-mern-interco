import React from "react";
import AvaModal from "./ui/AvaModal";
import { RiDeleteBin5Line } from "react-icons/ri";

const CompletedFormationModal = ({ visible, onOk, onCancel }) => {
  return (
    <AvaModal
      visible={visible}
      icon={RiDeleteBin5Line}
      title={`Pas de retour en arrière pour cette action`}
      onOk={onOk}
      onCancel={onCancel}
      okText="Valider"
      cancelText="Annuler"
    >
      <div className="flex items-start gap-10">
        <p className="mt-2 text-sm">Êtes-vous sûr de vouloir faire cela ?</p>
      </div>
    </AvaModal>
  );
};

export default CompletedFormationModal;
