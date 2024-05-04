import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Pages/Homepage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> <Homepage />
      </>
    ),
    errorElement: (
      <>
        <Header /> <ErrorPage />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header /> <CartPage />
      </>
    ),
    errorElement: (
      <>
        <Header /> <ErrorPage />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
