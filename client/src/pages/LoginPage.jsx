import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";
import { Tooltip } from "antd";
import AvaInputText from "../components/ui/form/AvaInputText";

const LoginPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-with-image");
    return () => {
      document.body.classList.remove("bg-with-image");
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0"
      style={{ height: `calc(100vh - 15rem)` }}
    >
      <div className="bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            action="#"
            className=" mb-0 mt-6 space-y-6 rounded-lg p-8 sm:p-6 lg:px-16"
          >
            <h1 className="text-xl font-bold  md:text-2xl text-center">
              Login to your account
            </h1>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail address
              </label>
              <AvaInputText
                type="email"
                placeholder="E-mail address"
                prefix={<MdAlternateEmail size={18} />}
                suffix={
                  <Tooltip title="Enter your e-mail address here">
                    <IoMdInformationCircleOutline />
                  </Tooltip>
                }
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <AvaInputText.Password
                type="password"
                placeholder="Password"
                prefix={<TiLockClosedOutline size={18} />}
                className="dark:bg-slate-950 bg-gray-700/10"
              />
            </div>
            <button className="w-full rounded-lg bg-sky-100/10 hover:bg-sky-500 px-4 py-2 text-xs font-medium transition ease-in-out hover:scale-110 text-sky-600 hover:text-white flex justify-center items-center">
              <VscSignIn size={17} className="mr-2" />
              Sign in
            </button>
            <p className="text-sm font-light text-gray-200">
              {"Don't"} have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline text-sky-600"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
