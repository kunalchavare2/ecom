import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout/RootLayout/Layout";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import GuardedRoute from "./HOC/GuardedRoute/GuardedRoute";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./pages/Home/home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const routes = [
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Navigate to="/auth" />,
      },
      {
        path: "/home",
        element: (
          <GuardedRoute>
            <HomeLayout />
          </GuardedRoute>
        ),
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/home/:id",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes, { basename: "" });

export default router;
