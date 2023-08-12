import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ViewDetails from "./Details/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          return fetch(
            `https://api.tvmaze.com/lookup/shows?thetvdb=${params.id}`
          );
        },
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
