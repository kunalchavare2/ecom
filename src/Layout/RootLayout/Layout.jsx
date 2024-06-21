// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../../components/Molecules/Header/Header";
// import { LayoutStyle, OutletStyle } from "./Layout.styled";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Outlet />
      </div>
      <ToastContainer position="bottom-center" theme="colored" />
    </div>
  );

  // return <h1 className="text-2xl text-blue-50">layout</h1>;
};

export default Layout;
