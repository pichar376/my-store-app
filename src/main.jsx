import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import ShoppingCart from "./pages/SoppingCart/ShoppingCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not found</h1>,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
    errorElement: <h1>Not Found ShoppingCart</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
