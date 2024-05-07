import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";
import { Tooltip } from "antd";
import AvaInputText from "../components/ui/form/AvaInputText";
import { TiLockClosedOutline, TiUserOutline } from "react-icons/ti";

const SignUpPage = () => {
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
      <div className="bg-glass rounded-lg shadow md:mt-0 lg:max-w-2xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            action="#"
            className="grid grid-cols-2 gap-6 mb-0 mt-6 space-y-6 rounded-lg p-8 sm:p-6 lg:px-12"
          >
            <div className="col-span-6">
              <h1 className="text-xl font-bold  md:text-2xl text-center">
                Sign up to your account
              </h1>
            </div>
            <div className="col-span-6">
              <label htmlFor="lastName" className="sr-only">
                Full name
              </label>
              <AvaInputText
                type="text"
                placeholder="Full name"
                prefix={<TiUserOutline size={18} />}
                suffix={
                  <Tooltip title="Information du nom de l'utilisateur">
                    <IoMdInformationCircleOutline />
                  </Tooltip>
                }
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="email" className="sr-only">
                E-mail address
              </label>
              <AvaInputText
                type="email"
                placeholder="E-mail address"
                prefix={<MdAlternateEmail size={18} />}
                suffix={
                  <Tooltip title="Entrer votre adresse e-mail ici">
                    <IoMdInformationCircleOutline />
                  </Tooltip>
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <AvaInputText.Password
                type="password"
                placeholder="Password"
                prefix={<TiLockClosedOutline size={18} />}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="passwordConfirmation" className="sr-only">
                Confirm password
              </label>
              <AvaInputText.Password
                type="password"
                placeholder="Confirm password"
                prefix={<TiLockClosedOutline size={18} />}
              />
            </div>
            <div className="col-span-6">
              <p className="text-sm text-gray-300">
                By creating an account, you accept our{" "}
                <a
                  href="#"
                  className="text-gray-300 underline hover:text-sky-500"
                >
                  terms and conditions
                </a>{" "}
                and our{" "}
                <a
                  href="#"
                  className="text-gray-300 underline hover:text-sky-500"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
            <div className="col-span-6 mx-auto space-y-5">
              <button className="w-full rounded-lg bg-sky-100/10 hover:bg-sky-500 px-4 py-2 text-xs font-medium transition ease-in-out hover:scale-110 text-sky-600 hover:text-white flex justify-center items-center">
                <VscSignIn size={17} className="mr-2" />
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline text-sky-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
