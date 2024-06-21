import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { isExpired } from "../../store/AuthSlice/AuthSlice";

const GuardedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isExpired());
  }, [dispatch]);

  if (!isAuth) return <Navigate to="/auth/login" replace={true} />;

  return children;
};

export default GuardedRoute;
