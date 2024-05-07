import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiCheckFill, RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import TrainerInfo from "../components/TrainerInfo";
import {
  LuCalendarCheck2,
  LuCalendarClock,
  LuCalendarHeart,
} from "react-icons/lu";
import AvaTechBadge from "../components/ui/AvaTechBadge";
import EditFormationModal from "../components/EditFormationModal";
import DeleteFormationModal from "../components/DeleteFormationModal";
import { toast } from "sonner";
import { getColorByTechName, tagNameOptions } from "../lib";
import { Tag } from "antd";
import AvaButton from "../components/ui/AvaButton";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import CompletedFormationModal from "../components/CompletedFormationModal";

const FormationPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCompletedF, setShowModalCompletedF] = useState(false);
  const endFormation = false;
  const inProgress = true;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  const handleEditOk = (formData) => {
    try {
      console.log("Données du formulaire :", formData);
      console.log("Ok clicked");
      toast.success("Action passée avec succès !");
      setShowModalEdit(false);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  const handleEditCancel = () => {
    console.log("Cancel clicked");
    setShowModalEdit(false);
  };

  const handleDeleteOk = (e) => {
    console.log("Ok clicked");
    try {
      toast.success("Action passée avec succès !");
      setShowModalDelete(false);
    } catch (error) {
      toast.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  const handleDeleteCancel = () => {
    console.log("Cancel clicked");
    setShowModalDelete(false);
  };

  const handleCompletedFOk = () => {
    toast.success("Action passée avec succès !");
    setShowModalCompletedF(false);
  };

  const handleCompletedFCancel = () => {
    console.log("Cancel clicked");
    setShowModalCompletedF(false);
  };

  return (
    <>
      <EditFormationModal
        visible={showModalEdit}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        options={tagNameOptions}
        tagRender={tagRender}
      />
      <DeleteFormationModal
        visible={showModalDelete}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
      <CompletedFormationModal
        visible={showModalCompletedF}
        onOk={handleCompletedFOk}
        onCancel={handleCompletedFCancel}
      />
      <div className="sm:grid-cols-1 grid-cols-3 mt-12">
        <section className="flex justify-center items-start h-full">
          <div className="relative dark:bg-slate-950/50 rounded-lg border border-sky-200 mx-auto max-w-screen-xl px-24 py-16 lg:flex lg:items-center mb-20 shadow-lg">
            <div className="mx-auto max-w-xl text-center text-slate-900 dark:text-white/90">
              <div className="mt-10">
                <h1 className="text-2xl font-extrabold sm:text-5xl text-sky-500">
                  Formation title
                </h1>
                <div className="mt-4 mb-10 flex flex-wrap gap-1 justify-center">
                  <AvaTechBadge techName="GraphQL" />
                  <AvaTechBadge techName="Apollo GraphQL" />
                  <AvaTechBadge techName="React" />
                  <AvaTechBadge techName="Node.js" />
                  <AvaTechBadge techName="MongoDB" />
                  <AvaTechBadge techName="Tailwind CSS" />
                  <AvaTechBadge techName="Ant Design" />
                </div>
                <p className="mt-4 sm:text-lg/relaxed overflow-auto max-h-[200px]">
                  Formation Description : Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quasi, dicta. Natus reiciendis, omnis
                  corrupti facere animi eum ex, nesciunt doloribus quod aut iste
                  repudiandae ducimus praesentium consequatur aspernatur. Magni,
                  aliquid.
                </p>
              </div>
              <div
                className="flex flex-wrap justify-center gap-4 absolute top-2 left-4 z-life
                0"
              >
                <Link
                  to="/"
                  className="sm:w-[150px] w-full z-20 rounded-lg bg-transparent px-2 py-3 text-sm font-medium transition ease-in-out hover:scale-110 text-sky-600 hover:text-sky-600 hover:bg-sky-700/25 focus:outline-none focus:ring active:text-sky-500 flex justify-center items-center "
                >
                  <IoIosArrowRoundBack size={25} className="mr-2" />
                  Retour
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4 absolute top-4 right-4">
                <button
                  className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:scale-110 hover:text-sky-600 hover:bg-sky-700/25"
                  onClick={() => setShowModalEdit(true)}
                >
                  <TiEdit size={17} />
                </button>
                <button
                  className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:scale-110 hover:text-red-600 hover:bg-red-700/25"
                  onClick={() => setShowModalDelete(true)}
                >
                  <RiDeleteBin5Line size={15} />
                </button>
              </div>
              <TrainerInfo />
              <div className="flex justify-between mt-10">
                <span className="flex justify-center gap-1.5 sm:justify-start">
                  <LuCalendarHeart size={20} />
                  Started on 10 Apr 2024
                </span>
                {inProgress && (
                  <span className="flex justify-center gap-1.5 sm:justify-start text-sky-600 font-semibold">
                    <LuCalendarClock size={20} />
                    In Progress ...
                  </span>
                )}
                {endFormation && (
                  <span className="flex justify-center gap-1.5 sm:justify-start text-lime-600 font-semibold">
                    <LuCalendarCheck2 size={20} />
                    End on 10 May 2024
                  </span>
                )}
              </div>
              <div className="flex justify-center mt-12">
                <AvaButton
                  icon={isHovered ? LiaCheckDoubleSolid : RiCheckFill}
                  iconSize={30}
                  text="Complete the formation"
                  textColor="text-lime-600"
                  className="uppercase tracking-widest md:w-2/3 font-semibold md:text-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  bgColor="bg-lime-700/25"
                  hoverTextColor="hover:text-white"
                  hoverBgColor="hover:bg-lime-600"
                  onClick={() => setShowModalCompletedF(true)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationPage;
