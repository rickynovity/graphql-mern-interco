import React from "react";
import { Link } from "react-router-dom";

import { infoItems } from "../lib/ProvidedInformationsConstants";

const TrainerInfo = ({ trainer }) => {
  const { name, biography, contact } = trainer || {};
  const { email, phone } = contact || {};
  const items = infoItems(name, biography, email, phone);

  return (
    <>
      <div className="text-center sm:text-left border rounded-lg border-gray-200 hover:bg-white/50 transition ease-in-out duration-500 px-5 py-3 mt-10">
        <p className="text-gray-900 font-bold text-sm uppercase">
          Trainer Information
        </p>
        <ul className="mt-4 space-y-4 text-sm text-sky-700/50">
          {items.map(
            ({ icon: Icon, text, link }, index) =>
              text && (
                <li
                  key={index}
                  className="flex items-center justify-center gap-1.5 sm:justify-start"
                >
                  {Icon && <Icon size={20} />}
                  <Link to={link}>
                    <span className="flex-1 text-gray-700">{text}</span>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default TrainerInfo;
