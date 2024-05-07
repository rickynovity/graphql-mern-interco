import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import { toast } from "sonner";

const categoryColorMap = {
  fullstack: "bg-pink-700/25 text-pink-600",
  backend: "bg-green-700/25 text-green-600",
  frontend: "bg-sky-700/25 text-sky-600",
};

const HistoryRow = ({ data }) => {
  const { categoryType, categoryName } = data;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const historyRowClass = categoryColorMap[categoryType];

  return (
    <>
      <tr className="odd:bg-sky-700/10">
        <td className="whitespace-normal min-w-40 w-5/12 px-4 py-2 font-medium break-all">
          Learn GraphQL by writing full-stack JavaScript applications with
          Node.js, Express, Apollo Server, React, Apollo Client.
        </td>
        <td className="whitespace-normal w-5/12 px-4 py-2 break-all">
          {"[GRAPHQL] - Développement de compétences en GraphQL"}
        </td>
        <td className="whitespace-normal w-10 px-4 py-2">
          <span
            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs ${historyRowClass}`}
          >
            {categoryName}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-2">12%</td>
        <td className="whitespace-nowrap px-4 py-2">11/21/2023</td>
        <td className="whitespace-nowrap px-4 py-2">2/19/2024</td>
        <td className="whitespace-nowrap px-2 py-2">
          <button
            className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:-translate-x-2 hover:scale-110 hover:text-pink-600 hover:bg-pink-100"
            onClick={() => toast.info("Comming soon")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? (
              <PiEyeBold size={17} />
            ) : (
              <PiEyeClosedBold size={17} />
            )}
          </button>
        </td>
        <td className="whitespace-nowrap pl-2 pr-4 py-2">
          <button
            className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:translate-x-2 hover:scale-110 hover:text-red-600 hover:bg-red-100"
            onClick={() => toast.info("Comming soon ...")}
          >
            <RiDeleteBin5Line size={15} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default HistoryRow;
