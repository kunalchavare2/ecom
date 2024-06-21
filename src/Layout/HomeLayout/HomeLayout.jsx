import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Molecules/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
