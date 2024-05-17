import React from "react";
import { getColorByCategory } from "../lib/ProvidedInformationsConstants";
import { formatDate } from "../utils/formatDate";

const HistoryRow = ({ formation }) => {
  const {
    title,
    objectives,
    category: { name: categoryName },
    progress,
    startDate,
    endDate,
  } = formation;

  return (
    <tr className="odd:bg-sky-700/10">
      <td className="whitespace-normal min-w-40 w-5/12 px-4 py-2 font-medium break-all">
        {title}
      </td>
      <td className="whitespace-normal w-5/12 px-4 py-2 break-all">
        {objectives}
      </td>
      <td className="whitespace-normal w-10 px-4 py-2">
        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs ${getColorByCategory(
            categoryName
          )}`}
        >
          {categoryName}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-2">{progress}%</td>
      <td className="whitespace-nowrap px-4 py-2">{formatDate(startDate)}</td>
      <td className="whitespace-nowrap px-4 py-2">
        {endDate ? formatDate(endDate) : "In progress ..."}
      </td>
    </tr>
  );
};

export default HistoryRow;
