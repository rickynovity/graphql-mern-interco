import React from "react";
import FormationCard from "../components/FormationCard";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsFolder } from "react-icons/bs";
import useIsHomePage from "../hook/useIsHomePage";
import AvaPagination from "./ui/AvaPagination";
import { useQuery } from "@apollo/client";
import AvaQueryResult from "../components/AvaQueryResult";
import FormationCardEmpty from "./FormationCardEmpty";
import {
  GET_AUTHENTICATED_USER,
  GET_FORMATIONS_BY_USER,
} from "../graphql/queries/user.query";

const FormationCards = () => {
  const isHomePage = useIsHomePage();

  const { data: authUser } = useQuery(GET_AUTHENTICATED_USER);
  const {
    loading,
    error,
    data: getFormationsByUser,
  } = useQuery(GET_FORMATIONS_BY_USER, {
    variables: {
      userId: authUser?.authUser?._id,
    },
  });

  const renderFormations = (formations) => {
    return formations.length > 0 ? (
      formations.map((formation) => (
        <FormationCard
          key={formation._id}
          formation={formation}
          authUser={authUser.authUser}
        />
      ))
    ) : (
      <FormationCardEmpty />
    );
  };

  const renderHomePageContent = (formations) => {
    const recentFormations = formations.slice(0, 4);
    return (
      <>
        {renderFormations(recentFormations)}
        <div className="sm:col-span-2 flex justify-center items-center p-5">
          <Link
            to="/formations"
            className="group mt-4 text-md font-bold sm:text-lg text-sky-600 hover:text-white hover:border-none hover:scale-110 bg-sky-700/25 hover:bg-sky-500 transition ease-in-out px-10 py-5 rounded-lg flex"
          >
            <span
              aria-hidden="true"
              className="mr-8 block text-3xl font-bold text-sky-600 group-hover:text-white transition ease-in-out group-hover:translate-x-2 hover:scale-110 group-hover:bg-sky-600/15 rounded-full"
            >
              <BsFolder size={25} />
            </span>
            Explore formations
            <span
              aria-hidden="true"
              className="ml-6 block text-3xl font-bold text-sky-600 group-hover:text-white transition ease-in-out group-hover:translate-x-2 hover:scale-110 group-hover:bg-sky-600/15 rounded-full"
            >
              <IoIosArrowRoundForward size={30} />
            </span>
          </Link>
        </div>
      </>
    );
  };

  const formations = getFormationsByUser?.user?.formations || [];

  return (
    <AvaQueryResult
      error={error}
      loading={loading}
      data={getFormationsByUser?.user}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
    >
      {isHomePage
        ? renderHomePageContent(formations)
        : renderFormations(formations)}
      {!isHomePage && <AvaPagination />}
    </AvaQueryResult>
  );
};

export default FormationCards;
