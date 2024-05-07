import React from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser, FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const TrainerInfo = () => {
  return (
    <>
      <div className="text-center sm:text-left border rounded-lg border-gray-200 hover:bg-white/50 transition ease-in-out duration-500 px-5 py-3 mt-10">
        <p className="text-gray-900 font-bold text-sm uppercase">
          Trainer Information
        </p>
        <ul className="mt-4 space-y-4 text-sm text-sky-700/50">
          <li className="flex items-center justify-center gap-1.5 sm:justify-start">
            <FaRegCircleUser size={20} />
            <Link to="#">
              <span className={`flex-1 text-gray-700`}>Ricky Bertrand</span>
            </Link>
          </li>

          <li className="flex items-center justify-center gap-1.5 sm:justify-start">
            <Link to="#">
              <span className={`flex-1 text-gray-700`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, alias, harum aspernatur quisquam incidunt dignissimos
                odio, doloribus explicabo fugit esse iure vitae? Voluptatum
                expedita, alias ab totam quod nam maxime?
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-center gap-1.5 sm:justify-start">
            <FaRegEnvelope size={20} />
            <Link to="#">
              <span className={`flex-1 text-gray-700`}>
                ricky.bertrand@novity.io
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-center gap-1.5 sm:justify-start">
            <FiPhone size={20} />
            <Link to="#">
              <span className={`flex-1 text-gray-700`}>+261 34 39 154 28</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrainerInfo;
