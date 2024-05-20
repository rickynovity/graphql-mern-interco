import React from "react";
import AvaModal from "./ui/AvaModal";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_FORMATION } from "../graphql/mutations/formation.mutation";
import { toast } from "sonner";
import { GET_FORMATION } from "../graphql/queries";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const CompletedFormationModal = ({ visible, onOk, onCancel, formationId }) => {
  const [updateFormation] = useMutation(UPDATE_FORMATION, {
    refetchQueries: [{ query: GET_FORMATION, variables: { formationId } }],
  });

  const { data } = useQuery(GET_FORMATION, {
    variables: { formationId },
  });

  const today = new Date().toISOString().slice(0, 10);
  const currentFormation = data?.formation;
  const handleCompletedFormation = async () => {
    try {
      const input = {
        formationId,
        title: currentFormation.title,
        objectives: currentFormation.objectives,
        progress: 100,
        categoryId: currentFormation.category?._id,
        languageId: currentFormation.language?._id,
        trainerId: currentFormation.trainer?._id,
        userId: currentFormation.user?._id,
        endDate: today,
      };
      const data = await updateFormation({ variables: { input } });
      onOk(data);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  return (
    <AvaModal
      visible={visible}
      icon={LiaCheckDoubleSolid}
      title={`Pas de retour en arrière pour cette action`}
      onOk={handleCompletedFormation}
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
