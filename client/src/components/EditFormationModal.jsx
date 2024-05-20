import React, { useEffect, useState } from "react";
import AvaModal from "./ui/AvaModal";
import { BsFolderPlus } from "react-icons/bs";
import AvaInputText from "./ui/form/AvaInputText";
import AvaSelect from "./ui/form/AvaSelect";
import useFetchData from "../hook/useFetchData";
import { UPDATE_FORMATION } from "../graphql/mutations/formation.mutation";
import { Tag } from "antd";
import AvaInputNumber from "./ui/form/AvaInputNumber";
import { getColorByTechName, limitValue } from "../lib";
import { useMutation } from "@apollo/client";
import AvaSpinner from "./ui/AvaSpinner";
import NotFoundPage from "../pages/NotFoundPage";
import { toast } from "sonner";
import { GET_FORMATIONS } from "../graphql/queries";

const EditFormationModal = ({
  visible,
  onOk,
  onCancel,
  formationId,
  initialData,
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const tagNames = initialData?.tagNames?.map((tagName) => tagName?._id);
  const {
    authUser,
    categoriesData,
    trainersData,
    tagNamesData,
    languagesData,
    loading,
    error,
  } = useFetchData();

  const [formData, setFormData] = useState({
    title: initialData?.title,
    objectives: initialData?.objectives,
    source: initialData?.source,
    progress: initialData?.progress,
    categoryId: initialData?.category?._id,
    trainerId: initialData?.trainer?._id,
    tagNameIds: tagNames,
    languageId: initialData?.language?._id,
    startDate: initialData?.startDate,
    endDate: initialData?.endDate || today,
    userId: authUser?.authUser?._id || "",
  });

  const handleChange = (e, name) => {
    const value = e && e.target ? e.target.value : e;
    setFormData({
      ...formData,
      [name]: name === "progress" ? parseInt(value) : value,
    });
  };

  const [updateFormation] = useMutation(UPDATE_FORMATION, {
    refetchQueries: [{ query: GET_FORMATIONS }],
  });

  const handleSubmit = async () => {
    const progress = parseInt(formData.progress);
    try {
      const data = await updateFormation({
        variables: {
          input: { ...formData, progress, formationId },
        },
      });
      onOk(data);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  const tagRender = ({ label, closable, onClose }) => {
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

  if (loading) return <AvaSpinner />;
  if (error) return <NotFoundPage />;

  const categoryOptions = categoriesData.categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));
  const trainerOptions = trainersData.trainers.map((trainer) => ({
    value: trainer._id,
    label: trainer.name,
  }));
  const tagNameOptions = tagNamesData.tagNames.map((tagName) => ({
    value: tagName._id,
    label: tagName.name,
  }));
  const languageOptions = languagesData.languages.map((language) => ({
    value: language._id,
    label: language.name,
  }));

  return (
    <AvaModal
      visible={visible}
      icon={BsFolderPlus}
      title={`Edit your formation`}
      onOk={handleSubmit}
      okText="Valider"
      cancelText="Annuler"
      onCancel={onCancel}
    >
      <div className="flex items-start gap-10">
        <form className="mt-10 flex-1 text-[16px] space-y-5">
          <div className="">
            <p className=" text-[16px]">Formation title</p>
            <AvaInputText
              type="text"
              placeholder="Formation title here ..."
              value={formData.title}
              onChange={(e) => handleChange(e, "title")}
            />
          </div>
          <div className="">
            <p className=" text-[16px]">Formation objectives</p>
            <AvaInputText.TextArea
              type="text"
              placeholder="Formation objectives here ..."
              value={formData.objectives}
              onChange={(e) => handleChange(e, "objectives")}
              className="dark:bg-slate-950 bg-gray-700/10"
            />
          </div>
          <div className="">
            <p className=" text-[16px]">Formation source</p>
            <AvaInputText
              type="text"
              placeholder="Formation source here ..."
              value={formData.source}
              onChange={(e) => handleChange(e, "source")}
            />
          </div>
          <div className="">
            <p className=" text-[16px]">Progress</p>
            <AvaInputNumber
              name="progress"
              placeholder="Progress here ..."
              value={formData.progress}
              onChange={(value) => handleChange(value, "progress")}
              min={0}
              max={100}
              step={1}
              formatter={limitValue}
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="w-full sm:w-[170px]">
              <p className=" text-[16px]">Category</p>
              <AvaSelect
                style={{ width: "100%" }}
                allowClear
                options={categoryOptions}
                value={formData.categoryId}
                onChange={(value) => handleChange(value, "categoryId")}
              />
            </div>
            <div className="w-full sm:w-[170px]">
              <p className="text-[16px]">Trainer</p>
              <AvaSelect
                style={{ width: "100%" }}
                allowClear
                options={trainerOptions}
                value={formData.trainerId}
                onChange={(value) => handleChange(value, "trainerId")}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="w-full sm:w-[260px]">
              <p className="text-[16px]">Stack name</p>
              <AvaSelect
                style={{ width: "100%" }}
                allowClear
                options={tagNameOptions}
                mode="multiple"
                tagRender={tagRender}
                value={formData.tagNameIds}
                onChange={(value) => handleChange(value, "tagNameIds")}
              />
            </div>
            <div className="w-full sm:w-[100px]">
              <p className=" text-[16px]">Language</p>
              <AvaSelect
                style={{ width: "100%" }}
                allowClear
                options={languageOptions}
                value={formData.languageId}
                onChange={(value) => handleChange(value, "languageId")}
              />
            </div>
          </div>
        </form>
      </div>
    </AvaModal>
  );
};

export default EditFormationModal;
