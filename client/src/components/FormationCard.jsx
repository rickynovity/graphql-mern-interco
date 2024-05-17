import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AvaBackgroundGradient from "./ui/AvaBackgroundGradient";
import { getColorByCategory } from "../lib/ProvidedInformationsConstants";
import { formatDate } from "../utils/formatDate";

const FormationCard = ({ formation, authUser }) => {
  const percentage = formation?.progress;
  const formattedStartDate = formatDate(formation?.startDate);

  return (
    <AvaBackgroundGradient className="relative rounded-[10px] p-4 sm:p-5 bg-slate-100/90 dark:bg-slate-950 text-gray-900 dark:text-gray-100 min-h-[220px]">
      <Header authUser={authUser} formattedStartDate={formattedStartDate} />
      <Content title={formation?.title} formationId={formation?._id} />
      <Footer category={formation?.category?.name} percentage={percentage} />
    </AvaBackgroundGradient>
  );
};

const Header = ({ authUser, formattedStartDate }) => (
  <div className="flex justify-between items-center">
    <time dateTime={formattedStartDate} className="block text-xs">
      {formattedStartDate}
    </time>
    <img
      src={authUser?.profilePicture}
      className="h-8 w-8 border rounded-full"
      alt="User profile"
    />
  </div>
);

const Content = ({ title, formationId }) => (
  <div className="mt-4 flex flex-wrap gap-1 justify-between">
    <Link to={`/formation/${formationId}`}>
      <h3 className="mt-0.5 text-lg font-medium">
        {title?.length > 50 ? `${title.slice(0, 50)}...` : title}
      </h3>
    </Link>
    <Link
      to={`/formation/${formationId}`}
      className="flex justify-center items-center"
    >
      <span
        aria-hidden="true"
        className="block text-3xl font-bold text-sky-600 transition ease-in-out group-hover:translate-x-2 hover:scale-110 group-hover:bg-sky-600/15 rounded-full"
      >
        <IoIosArrowRoundForward size={30} />
      </span>
    </Link>
  </div>
);

const Footer = ({ category, percentage }) => (
  <div className="flex justify-between items-center absolute bottom-4 w-[88%]">
    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className={`whitespace-nowrap rounded-full text-xs px-2.5 py-1 ${getColorByCategory(
          category
        )}`}
      >
        {category}
      </span>
    </div>
    <div className="mt-4 w-10 h-10">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "30px",
          pathTransitionDuration: 0.5,
          pathColor: `rgba(2, 132, 199, ${percentage / 100})`,
          textColor: "#0284C7",
          trailColor: "transparent",
          backgroundColor: "#0284C7",
        })}
      />
    </div>
  </div>
);

export default FormationCard;
