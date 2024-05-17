import React from "react";
import AvaSpinner from "./ui/AvaSpinner";
import NotFoundPage from "../pages/NotFoundPage";

const AvaQueryResult = ({ loading, error, data, children, className }) => {
  if (error) {
    return <NotFoundPage error={error} />;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <AvaSpinner />
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return <div className={className}>{children}</div>;
  }
};

export default AvaQueryResult;
