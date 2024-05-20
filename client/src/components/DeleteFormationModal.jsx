import React from "react";
import AvaModal from "./ui/AvaModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation } from "@apollo/client";
import { DELETE_FORMATION } from "../graphql/mutations/formation.mutation";
import { GET_FORMATIONS } from "../graphql/queries";
import { useNavigate } from "react-router-dom";

const DeleteFormationModal = ({ visible, onOk, onCancel, formationId }) => {
  const navigate = useNavigate();
  const [deleteFormation] = useMutation(DELETE_FORMATION, {
    refetchQueries: [{ query: GET_FORMATIONS }],
  });

  const handleDeleteFormation = async () => {
    try {
      const data = await deleteFormation({
        variables: { deleteFormationId: formationId },
        onCompleted: () => navigate("/formations"),
      });
      onOk(data);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  return (
    <AvaModal
      visible={visible}
      icon={RiDeleteBin5Line}
      title={`Êtes-vous sûr de vouloir faire cela ?`}
      onOk={handleDeleteFormation}
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
