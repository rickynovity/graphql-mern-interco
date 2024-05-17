import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiCheckFill, RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
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
import { useQuery } from "@apollo/client";
import { GET_FORMATION } from "../graphql/queries/formation.query";
import AvaQueryResult from "../components/AvaQueryResult";
import { formatDate } from "../utils/formatDate";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const FormationPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCompletedF, setShowModalCompletedF] = useState(false);
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_FORMATION, {
    variables: { formationId: id },
  });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnterForLink = () => setIsLinkHovered(true);
  const handleMouseLeaveForLink = () => setIsLinkHovered(false);

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

  const startDate = data?.formation?.startDate;
  const endDate = data?.formation?.endDate;
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  return (
    <AvaQueryResult error={error} loading={loading} data={data}>
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
                <div className="flex items-center">
                  <Link
                    target="_blank"
                    to={data?.formation?.source}
                    onMouseEnter={handleMouseEnterForLink}
                    onMouseLeave={handleMouseLeaveForLink}
                    className="hover:scale-110 transition ease-in-out mr-4"
                  >
                    {isLinkHovered ? (
                      <GoLinkExternal size={35} className="text-sky-500" />
                    ) : (
                      <FaExternalLinkAlt
                        size={25}
                        className="text-yellow-700 mt-4"
                      />
                    )}
                  </Link>
                  <h1 className="text-3xl font-extrabold sm:text-4xl text-sky-500">
                    {data?.formation?.title}
                  </h1>
                </div>
                <div className="mt-4 mb-10 flex flex-wrap gap-1 justify-center">
                  {data?.formation?.tagNames?.map((tagName) => (
                    <AvaTechBadge key={tagName?._id} techName={tagName?.name} />
                  ))}
                </div>
                <p className="mt-4 sm:text-lg/relaxed overflow-auto max-h-[200px]">
                  {data?.formation?.objectives}
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
              <TrainerInfo trainer={data?.formation?.trainer} />
              <div className="flex justify-between mt-10">
                <span className="flex justify-center gap-1.5 sm:justify-start mr-4">
                  <LuCalendarHeart size={20} />
                  Started on {formattedStartDate}
                </span>
                {endDate ? (
                  <span className="flex justify-center gap-1.5 sm:justify-start text-lime-600 font-semibold">
                    <LuCalendarCheck2 size={20} />
                    End on {formattedEndDate}
                  </span>
                ) : (
                  <span className="flex justify-center gap-1.5 sm:justify-start text-sky-600 font-semibold">
                    <LuCalendarClock size={20} />
                    In Progress ...
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
    </AvaQueryResult>
  );
};

export default FormationPage;
