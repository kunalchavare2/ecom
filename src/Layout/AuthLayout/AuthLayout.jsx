import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import image from "../../assets/images/auth-background.jpg";

const AuthLayout = () => {
  return (
    <div
      style={{
        background: `url(${image})`,
      }}
      className="flex flex-col items-stretch justify-center px-6 py-8 mx-auto h-screen lg:py-0"
    >
      <Outlet />
      <ToastContainer position="bottom-center" theme="colored" />
    </div>
  );
};

export default AuthLayout;
