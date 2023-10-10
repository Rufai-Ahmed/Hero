import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Block/Layout";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
