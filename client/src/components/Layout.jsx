import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-8 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
