import React, { useEffect, useState } from "react";
import AvaModal from "./ui/AvaModal";
import { BsFolderPlus } from "react-icons/bs";
import AvaInputText from "./ui/form/AvaInputText";
import AvaInputNumber from "./ui/form/AvaInputNumber";
import AvaSelect from "./ui/form/AvaSelect";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_FORMATION } from "../graphql/mutations/formation.mutation";
import AvaSpinner from "./ui/AvaSpinner";
import NotFoundPage from "../pages/NotFoundPage";
import useFetchData from "../hook/useFetchData";
import { getColorByTechName } from "../lib";
import { Tag } from "antd";

const AddFormationModal = ({ visible, onOk, onCancel }) => {
  const today = new Date().toISOString().slice(0, 10);
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
    title: "",
    objectives: "",
    source: "",
    progress: 0,
    categoryId: "",
    trainerId: "",
    tagNameIds: [],
    languageId: "",
    startDate: today,
    endDate: null,
    userId: authUser?.authUser?._id || "",
  });

  useEffect(() => {
    if (authUser?.authUser?._id) {
      setFormData((prevData) => ({
        ...prevData,
        userId: authUser.authUser._id,
      }));
    }
  }, [authUser]);

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    setFormData({
      ...formData,
      [name]: name === "progress" ? parseInt(value) : value,
    });
  };

  const [createFormation] = useMutation(CREATE_FORMATION, {
    refetchQueries: ["getFormations"],
  });

  const handleSubmit = async () => {
    try {
      const data = await createFormation({ variables: { input: formData } });
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
      title={`Mark your formation`}
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
              name="title"
              type="text"
              placeholder="Formation title here ..."
              value={formData.title}
              onChange={(e) => handleChange(e, "title")}
            />
          </div>
          <div className="">
            <p className=" text-[16px]">Formation objectives</p>
            <AvaInputText.TextArea
              name="objectives"
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
              name="source"
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
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="w-full sm:w-[170px]">
              <p className=" text-[16px]">Category</p>
              <AvaSelect
                className="w-full dark:bg-slate-950"
                name="category"
                allowClear
                options={categoryOptions}
                value={formData.categoryId}
                onChange={(value) => handleChange(value, "categoryId")}
              />
            </div>
            <div className="w-full sm:w-[170px]">
              <p className="text-[16px]">Trainer</p>
              <AvaSelect
                className="w-full dark:bg-slate-950"
                name="trainer"
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
                className="w-full dark:bg-slate-950"
                name="stack"
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
                className="w-full dark:bg-slate-950"
                name="language"
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

export default AddFormationModal;
