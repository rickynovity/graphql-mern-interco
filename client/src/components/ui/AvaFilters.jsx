import React from "react";

const AvaFilters = () => {
  return (
    <div className="pb-10 max-w-screen-xl mx-auto">
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-gray-100 text-stone-600">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-stone-600 text-sm font-medium">
            Formation name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Formation title"
            className="mt-2 block w-full rounded-md border dark:bg-slate-950 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="Ricky Bertrand"
            className="text-stone-600 text-sm font-medium"
          >
            Trainer
          </label>
          <input
            type="text"
            id="trainerName"
            placeholder="Ricky Bertrand"
            className="mt-2 block w-full rounded-md border dark:bg-slate-950 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="text-stone-600 text-sm font-medium"
          >
            Category
          </label>
          <select
            id="status"
            className="mt-2 block w-full rounded-md border dark:bg-slate-950 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option>Full Stack</option>
            <option>Backend</option>
            <option>Frontend</option>
            <option>Others</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="text-stone-600 text-sm font-medium"
          >
            Status
          </label>
          <select
            id="status"
            className="mt-2 block w-full rounded-md border dark:bg-slate-950 border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Done</option>
            <option>Stand By</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AvaFilters;
