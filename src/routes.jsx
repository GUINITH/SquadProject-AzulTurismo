import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Description from "./pages/Description";
import Home from "./pages/Home";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Description />,
      },
    ],
  },
]);
