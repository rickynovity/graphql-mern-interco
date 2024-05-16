import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscSignIn } from "react-icons/vsc";
import { toast } from "sonner";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import useDarkMode from "../hook/useDarkMode";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.query";
import { LOGOUT } from "../graphql/mutations/user.mutation";

const NavBar = () => {
  const [theme, handleThemeSwitch] = useDarkMode();

  const { loading, error, data } = useQuery(GET_AUTHENTICATED_USER);
  console.log("Loading:", loading);
  console.log("Authenticated user:", data);
  console.log("Error:", error);

  const [logout, { loading: loadingLogout }] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleLogout = async () => {
    try {
      await logout();
      // Clear the Apollo Client cache FROM THE DOCS
      // https://www.apollographql.com/docs/react/caching/advanced-topics/#:~:text=Resetting%20the%20cache,any%20of%20your%20active%20queries.
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error(error.message);
    }
  };

  return (
    <header className="fixed top-2 z-50 w-full p-2 border border-sky-500/25 bg-glass rounded-full max-w-screen-md mx-auto">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link to="/" className="block text-sky-600" href="#">
            <span className="sr-only">Accueil</span>
            {theme === "dark" ? (
              <img
                src="/interco-logo-dark.png"
                alt="Novity logo"
                className="w-auto h-14 ml-2 cursor-pointer hover:grayscale"
              />
            ) : (
              <img
                src="/interco-logo.png"
                alt="Novity logo"
                className="w-auto h-14 ml-2 cursor-pointer hover:grayscale"
              />
            )}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 mr-4">
            <button
              className={`rounded-md px-4 py-2 text-xs font-medium transition ease-in-out hover:scale-110 ${
                theme === "dark"
                  ? " hover:bg-sky-500 text-white hover:text-white"
                  : " hover:bg-sky-500 text-sky-600 hover:text-white"
              } flex justify-center items-center`}
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <BsSun size={17} />
              ) : (
                <BsMoonStarsFill size={17} />
              )}
              {/* {theme === "dark" ? "Light" : "Dark"} Mode */}
            </button>
          </div>
          <div
            className="flex items-center cursor-pointer mr-2 text-slate-900 dark:text-gray-100"
            onClick={() => toast.info("Coming soon!")}
          >
            {data.authUser ? (
              <>
                <img
                  src={data.authUser.profilePicture}
                  className="w-11 h-11 rounded-full border mr-2"
                  alt="Avatar"
                />
                {data.authUser.fullName}
              </>
            ) : (
              <>
                <img
                  src="/novity.svg"
                  className="w-11 h-11 rounded-full border mr-2"
                  alt="Avatar"
                />
                Madava
              </>
            )}
          </div>
          <div className="sm:flex sm:gap-4 mr-4">
            <Link
              to="/login"
              className="rounded-md bg-sky-700/25 hover:bg-sky-500 px-4 py-2 text-xs font-medium transition ease-in-out hover:scale-110 text-sky-600 hover:text-white flex justify-center items-center"
              onClick={handleLogout}
            >
              <VscSignIn size={17} className="mr-2" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
