import React from "react";
import AvaSpinner from "./ui/AvaSpinner";

const AvaQueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
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
    return children;
  }
};

export default AvaQueryResult;
