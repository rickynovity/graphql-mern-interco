import React, { useState } from "react";
import AvaModal from "./ui/AvaModal";
import { BsFolderPlus } from "react-icons/bs";
import AvaInputText from "./ui/form/AvaInputText";
import AvaSelect from "./ui/form/AvaSelect";

const AddFormationModal = ({ visible, onOk, onCancel, options, tagRender }) => {
  const today = new Date();
  const [formData, setFormData] = useState({
    title: "",
    objectives: "",
    source: "",
    progress: "",
    category: "fullstack",
    trainer: "Ricky Bertrand",
    stack: ["graphql"],
    language: "fr",
    startDate: today.toISOString().slice(0, 10),
    endDate: null,
  });

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e;
    console.log("Name:", name);
    console.log("Value:", value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onOk(formData);
  };

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
            <AvaInputText
              name="progress"
              type="number"
              placeholder="Progress here ..."
              value={formData.progress}
              onChange={(e) => handleChange(e, "progress")}
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="w-full sm:w-[170px]">
              <p className=" text-[16px]">Category</p>
              <AvaSelect
                className="w-full dark:bg-slate-950"
                name="category"
                defaultValue="fullstack"
                allowClear
                options={[
                  { value: "fullstack", label: "Full Stack" },
                  { value: "backend", label: "Backend" },
                  { value: "frontend", label: "FrontEnd" },
                ]}
                value={formData.category}
                onChange={(value) => handleChange(value, "category")}
              />
            </div>
            <div className="w-full sm:w-[170px]">
              <p className="text-[16px]">Trainer</p>
              <AvaSelect
                className="w-full dark:bg-slate-950"
                name="trainer"
                allowClear
                defaultValue="Ricky Bertrand"
                options={[
                  { value: "trainer1", label: "Ricky Bertrand" },
                  { value: "trainer2", label: "Ravoatabia" },
                  { value: "trainer3", label: "Ranavalona" },
                ]}
                value={formData.trainer}
                onChange={(value) => handleChange(value, "trainer")}
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
                defaultValue={["graphql"]}
                options={options}
                mode="multiple"
                tagRender={tagRender}
                value={formData.stack}
                onChange={(value) => handleChange(value, "stack")}
              />
            </div>
            <div className="w-full sm:w-[100px]">
              <p className=" text-[16px]">Language</p>
              <AvaSelect
                className="w-full dark:bg-slate-950"
                name="language"
                defaultValue="fr"
                allowClear
                options={[
                  { value: "fr", label: "FR" },
                  { value: "en", label: "EN" },
                  { value: "de", label: "DE" },
                ]}
                value={formData.language}
                onChange={(value) => handleChange(value, "language")}
              />
            </div>
          </div>
        </form>
      </div>
    </AvaModal>
  );
};

export default AddFormationModal;
