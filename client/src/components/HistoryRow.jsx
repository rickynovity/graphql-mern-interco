import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import { toast } from "sonner";

const HistoryRow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
          <span className="whitespace-nowrap rounded-full bg-pink-100 px-2.5 py-0.5 text-xs text-pink-600">
            GraphQL
          </span>
          <span className="whitespace-nowrap rounded-full bg-slate-200 px-2.5 py-0.5 text-xs text-slate-900">
            Apollo
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
