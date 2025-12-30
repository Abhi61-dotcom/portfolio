import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Api_First } from "./Api_First";
import { ProductDetailPage } from "./ProductDetailPage";
import { CartProvider } from "./CartContext";
import { CartPage } from "./CartPage";

export const RouteProvide = () => {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Api_First />,
    },
    {
      path: "/product/:id",
      element: <ProductDetailPage />,
    },
    {
        path:"/cart",
        element: <CartPage/>,
    }
  ]);
  return (
    <div>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </div>
  );
};
