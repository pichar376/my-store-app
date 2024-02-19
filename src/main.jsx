import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import ShoppingCart from "./pages/SoppingCart/ShoppingCart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const active = "active";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound>not found</NotFound>,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
    errorElement: <NotFound>not found elemets in cart</NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
