// src/routes/Routes.tsx
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Loadable } from "./Loadable";

// const Landing = Loadable(lazy(() => import("../pages/Landing")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
// const Signup = Loadable(lazy(() => import("../pages/auth/Signup")));
// const ResetPassword = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const Dashboard = Loadable(lazy(() => import("../pages/dashboard/Dashboard")));
// const CanvasStudio = Loadable(lazy(() => import("../pages/CanvasStudio")));
const NotFound = Loadable(lazy(() => import("../pages/NotFound")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      // { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <Login /> },

      // { path: "/signup", element: <Signup /> },
      // { path: "/reset-password", element: <ResetPassword /> },
      { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      // { path: "/canvas", element: <CanvasStudio /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
