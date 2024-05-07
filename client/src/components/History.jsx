import React from "react";
import ButtonGroupLayout from "./ButtonGroupLayout";
import HistoryRow from "./HistoryRow";
import AvaBlur from "./ui/AvaBlur";

const History = () => {
  const data = [
    { categoryType: "fullstack", categoryName: "FullStack" },
    { categoryType: "backend", categoryName: "Backend" },
    { categoryType: "frontend", categoryName: "Frontend" },
    { categoryType: "fullstack", categoryName: "FullStack" },
    { categoryType: "backend", categoryName: "Backend" },
    { categoryType: "frontend", categoryName: "Frontend" },
    { categoryType: "backend", categoryName: "Backend" },
    { categoryType: "frontend", categoryName: "Frontend" },
    { categoryType: "frontend", categoryName: "Frontend" },
    { categoryType: "fullstack", categoryName: "FullStack" },
  ];
  return (
    <div className="space-y-5 mb-20">
      <>
        <ButtonGroupLayout title="History" />
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm table-fixed dark:text-slate-100 text-gray-900">
            <thead className="ltr:text-left rtl:text-right text-left">
              <tr>
                <th className="whitespace-nowrap w-10 px-4 py-2 font-medium">
                  Title
                </th>
                <th className="whitespace-nowrap w-6 px-4 py-2 font-medium">
                  Objectives
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Category
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Progress
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  Start date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium">
                  End date
                </th>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200">
              {data &&
                data.map((category, index) => {
                  return <HistoryRow key={index} data={category} />;
                })}
              {/* <HistoryRow data={data} historyRowCategory="fullstack" />
              <HistoryRow historyRowCategory="backend" />
              <HistoryRow historyRowCategory="frontend" />
              <HistoryRow historyRowCategory="fullstack" />
              <HistoryRow historyRowCategory="frontend" />
              <HistoryRow historyRowCategory="fullstack" /> */}
            </tbody>
          </table>
        </div>
      </>
      <AvaBlur />
    </div>
  );
};

export default History;
