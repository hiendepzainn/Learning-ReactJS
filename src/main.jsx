import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/user.jsx";
import ProductPage from "./pages/product.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
