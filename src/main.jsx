import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ViewDetails from "./Details/ViewDetails";
import Layout from "./Layout/Layout";
import Inc from "./inc/Inc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
    {
      path: "/",
    element: <App />
    },
      {
        path: "details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          return fetch(
            `https://api.tvmaze.com/lookup/shows?thetvdb=${params.id}`
          );
        },
      },
      {
        path:'/inc',
        element:<Inc></Inc>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
