import express from "express";
import { categoryRoute } from "../modules/category/category.routes";
import { orderRoute } from "../modules/orders/order.routes";
import { productsRoute } from "../modules/Products/products.routes";

const router = express.Router();

const allRoutes = [
  {
    path: "/products",
    route: productsRoute,
  },
  {
    path: "/categories",
    route: categoryRoute,
  },
  {
    path: "/order",
    route: orderRoute,
  },

];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
