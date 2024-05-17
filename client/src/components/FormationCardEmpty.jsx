import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AvaBackgroundGradient from "./ui/AvaBackgroundGradient";

const FormationCardEmpty = () => {
  const percentage = 0;

  return (
    <AvaBackgroundGradient className="rounded-[10px] p-4 sm:p-10 bg-slate-100/90 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      <time dateTime="2022-10-10" className="block text-xs">
        {" "}
        2024-10-10
      </time>
      <div className="mt-4 flex flex-wrap gap-1 justify-between">
        <Link to="#">
          <h3 className="mt-0.5 text-lg font-medium">No formation title</h3>
        </Link>
        <Link to="#" className="flex justify-center items-center">
          <span
            aria-hidden="true"
            className="block text-3xl font-bold text-sky-600 transition ease-in-out group-hover:translate-x-2 hover:scale-110 group-hover:bg-sky-600/15 rounded-full"
          >
            <IoIosArrowRoundForward size={30} />
          </span>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-pink-700/25 px-2.5 py-1 text-xs text-pink-600">
            category_1
          </span>
        </div>
        <div className="mt-4 mr-2 w-10 h-10">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "30px",
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              // Colors
              pathColor: `rgba(2, 132, 199, ${percentage / 100})`,
              textColor: "#0284C7",
              trailColor: "transparent",
              backgroundColor: "#0284C7",
            })}
          />
        </div>
      </div>
    </AvaBackgroundGradient>
  );
};

export default FormationCardEmpty;
