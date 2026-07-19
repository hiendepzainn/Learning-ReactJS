import React from "react";
import ReactDOM from "react-dom/client";
import App3 from "./App3.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App3 />,
  },
  {
    path: "/users",
    element: <div>User page</div>,
  },
  {
    path: "/products",
    element: <div>Product page</div>,
  },
  {
    path: "/login",
    element: <div>LOGIN page</div>,
  },
  {
    path: "/register",
    element: <div>REGISTER page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
