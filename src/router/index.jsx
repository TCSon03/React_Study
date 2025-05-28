import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../pages/Client/HomePage";
import ShopPage from "../pages/Client/ShopPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
