import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="grid h-full place-content-center bg-white px-4"
      style={{ height: `calc(100vh - 10rem)` }}
    >
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We cannot find this page.</p>

        <Link
          to="/"
          href="#"
          className="mt-6 inline-block rounded bg-sky-100 px-5 py-3 text-sm font-medium text-sky-600 hover:text-white hover:scale-110 hover:bg-sky-600 transition ease-in-out focus:outline-none focus:ring"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
